"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface ConcaveCarouselItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  href?: string;
}

export interface ConcaveCarouselRef {
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
}

export interface ConcaveCarouselProps {
  items: ConcaveCarouselItem[];
  startIndex?: number;
  aspect?: number;
  size?: number;
  curvature?: number;
  distance?: number;
  tilt?: number;
  gap?: number;
  radius?: number;
  reflection?: number;
  dim?: number;
  autoplay?: "drift" | "step" | "off";
  speed?: number;
  interval?: number;
  snap?: boolean;
  inertia?: number;
  pauseOnHover?: boolean;
  draggable?: boolean;
  wheel?: boolean;
  captions?: boolean;
  controls?: boolean;
  backgroundColor?: string;
  paused?: boolean;
  dpr?: number;
  ariaLabel?: string;
  onIndexChange?: (index: number) => void;
  onSelect?: (item: ConcaveCarouselItem, index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ConcaveCarousel = forwardRef<ConcaveCarouselRef, ConcaveCarouselProps>(
  (
    {
      items = [],
      startIndex = 0,
      aspect = 1.25,
      size = 0.46,
      curvature = 0.72,
      distance = 4,
      tilt = 0,
      gap = 16,
      radius = 14,
      reflection = 0.06,
      dim = 0.35,
      autoplay = "drift",
      speed = 0.16,
      interval = 4,
      snap = true,
      inertia = 0.5,
      pauseOnHover = true,
      draggable = true,
      wheel = true,
      captions = true,
      controls = true,
      backgroundColor = "transparent",
      paused = false,
      ariaLabel = "Concave carousel gallery wall",
      onIndexChange,
      onSelect,
      className = "",
      style = {},
    },
    ref
  ) => {
    const total = items.length;
    // Current continuous rotational position in panel index units (float)
    const [position, setPosition] = useState<number>(startIndex);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isDraggingState, setIsDraggingState] = useState<boolean>(false);
    const [containerWidth, setContainerWidth] = useState<number>(1000);

    const positionRef = useRef<number>(startIndex);
    const velocityRef = useRef<number>(0);
    const isDraggingRef = useRef<boolean>(false);
    const dragStartXRef = useRef<number>(0);
    const dragLastXRef = useRef<number>(0);
    const lastTimestampRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastNotifiedIndex = useRef<number>(startIndex);
    const stepTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Keep positionRef in sync
    useEffect(() => {
      positionRef.current = position;
    }, [position]);

    // Measure container width
    useEffect(() => {
      const updateWidth = () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.clientWidth);
        }
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Calculate normalized active integer index for captions/controls
    const normalizedIndex =
      total > 0
        ? ((Math.round(position) % total) + total) % total
        : 0;

    // Trigger onIndexChange when centered index settles or changes
    useEffect(() => {
      if (onIndexChange && total > 0 && normalizedIndex !== lastNotifiedIndex.current) {
        lastNotifiedIndex.current = normalizedIndex;
        onIndexChange(normalizedIndex);
      }
    }, [normalizedIndex, total, onIndexChange]);

    // Imperative API methods
    const goTo = useCallback(
      (idx: number) => {
        if (total === 0) return;
        const currentInt = Math.round(positionRef.current);
        const currentNorm = ((currentInt % total) + total) % total;
        let delta = idx - currentNorm;
        if (delta > total / 2) delta -= total;
        if (delta < -total / 2) delta += total;
        velocityRef.current = 0;
        setPosition(currentInt + delta);
      },
      [total]
    );

    const next = useCallback(() => {
      velocityRef.current = 0;
      setPosition((prev) => Math.round(prev) + 1);
    }, []);

    const previous = useCallback(() => {
      velocityRef.current = 0;
      setPosition((prev) => Math.round(prev) - 1);
    }, []);

    useImperativeHandle(ref, () => ({
      next,
      previous,
      goTo,
    }));

    // Autoplay: "step" mode timer
    useEffect(() => {
      if (autoplay !== "step" || paused || (pauseOnHover && isHovered) || isDraggingState || total === 0) {
        if (stepTimerRef.current) clearInterval(stepTimerRef.current);
        return;
      }

      stepTimerRef.current = setInterval(() => {
        setPosition((prev) => Math.round(prev) + (speed >= 0 ? 1 : -1));
      }, Math.max(1000, interval * 1000));

      return () => {
        if (stepTimerRef.current) clearInterval(stepTimerRef.current);
      };
    }, [autoplay, paused, isHovered, pauseOnHover, isDraggingState, total, interval, speed]);

    // Continuous physics & "drift" autoplay loop
    useEffect(() => {
      let animId: number;

      const tick = (timestamp: number) => {
        if (lastTimestampRef.current === null) {
          lastTimestampRef.current = timestamp;
        }
        const deltaMs = Math.min(64, timestamp - lastTimestampRef.current);
        const dt = deltaMs / 1000;
        lastTimestampRef.current = timestamp;

        if (total > 0 && !isDraggingRef.current) {
          // 1. If autoplay is "drift", add continuous drift velocity unless paused
          const isDrifting = autoplay === "drift" && !paused && !(pauseOnHover && isHovered);
          if (isDrifting && Math.abs(velocityRef.current) < 0.05) {
            velocityRef.current = speed; // drift speed in panels/sec
          }

          // 2. Apply drag inertia with dampening
          if (Math.abs(velocityRef.current) > 0.001) {
            positionRef.current += velocityRef.current * dt;

            // Dampen fling velocity towards drift or zero
            if (isDrifting) {
              const targetV = speed;
              velocityRef.current += (targetV - velocityRef.current) * (1 - Math.pow(1 - inertia * 0.1, dt * 60));
            } else {
              velocityRef.current *= Math.pow(0.88, dt * 60);
              if (Math.abs(velocityRef.current) < 0.005) {
                velocityRef.current = 0;
              }
            }
            setPosition(positionRef.current);
          } else if (snap && !isDrifting && Math.abs(velocityRef.current) <= 0.001) {
            // Spring snap to nearest integer panel
            const target = Math.round(positionRef.current);
            const diff = target - positionRef.current;
            if (Math.abs(diff) > 0.001) {
              positionRef.current += diff * (1 - Math.pow(0.82, dt * 60));
              setPosition(positionRef.current);
            } else {
              positionRef.current = target;
              setPosition(target);
            }
          }
        }

        animId = requestAnimationFrame(tick);
      };

      animId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animId);
    }, [autoplay, paused, isHovered, pauseOnHover, snap, inertia, speed, total]);

    // Pointer Drag Handlers
    const onPointerDown = (e: React.PointerEvent) => {
      if (!draggable || total === 0) return;
      isDraggingRef.current = true;
      setIsDraggingState(true);
      dragStartXRef.current = e.clientX;
      dragLastXRef.current = e.clientX;
      velocityRef.current = 0;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
      if (!isDraggingRef.current || total === 0) return;
      const dx = e.clientX - dragLastXRef.current;
      dragLastXRef.current = e.clientX;

      // Sensitivity mapping: dragging across panelWidth moves 1 panel
      const panelWidth = Math.max(120, containerWidth * 0.28);
      const posDelta = -dx / panelWidth;
      positionRef.current += posDelta;
      velocityRef.current = posDelta * 35; // instant drag velocity for inertia
      setPosition(positionRef.current);
    };

    const onPointerUp = (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDraggingState(false);
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    };

    // Wheel turn handler
    const onWheel = useCallback(
      (e: React.WheelEvent) => {
        if (!wheel || total === 0) return;
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (Math.abs(delta) > 8) {
          velocityRef.current += (delta > 0 ? 0.35 : -0.35) * 4;
        }
      },
      [wheel, total]
    );

    // Keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        previous();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === " " && autoplay !== "off") {
        e.preventDefault();
      }
    };

    // Responsive panel sizing
    const panelHeight = Math.max(170, Math.min(280, containerWidth * size));
    const panelWidth = panelHeight * aspect;
    const perspectivePx = panelHeight * distance * 220;

    // Calculate concave 3D geometry for an item
    const getPanelTransform = (idx: number) => {
      if (total === 0) return { transform: "", opacity: 0, zIndex: 0, isCentered: false, absOffset: 999 };

      // Circular offset from continuous position
      let offset = idx - position;
      // Wrap around cleanly so panels loop infinitely
      offset = ((offset % total) + total) % total;
      if (offset > total / 2) offset -= total;

      const isCentered = Math.abs(offset) < 0.5;
      const absOffset = Math.abs(offset);

      // Curvature angle in degrees
      // Concave: panels to the left turn right toward the viewer (+rotateY), panels to right turn left (-rotateY)
      const angularStepDeg = Math.min(32, (curvature * 40));
      const rotateY = -offset * angularStepDeg;

      // Arc radius & coordinates
      const arcSpread = (panelWidth + gap) * (1 - curvature * 0.18);
      const translateX = offset * arcSpread;

      // Inward concave curve: center panel is deepest, edges curve FORWARD towards viewer
      // Giving the exact wrap-around amphitheater / IMAX effect seen in the screenshot
      const curveDepth = Math.pow(absOffset, 1.4) * 55 * curvature;
      const translateZ = curveDepth - 35;

      // Edge dimming
      const opacity = Math.max(0.12, 1 - absOffset * (dim * 0.85));
      const zIndex = Math.round(50 - absOffset * 10);

      return {
        transform: `translate3d(${translateX}px, 0px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${tilt}deg)`,
        opacity,
        zIndex,
        isCentered,
        absOffset,
      };
    };

    const currentItem = items[normalizedIndex] || null;

    return (
      <div
        ref={containerRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (isDraggingRef.current) {
            isDraggingRef.current = false;
            setIsDraggingState(false);
          }
        }}
        className={`relative w-full flex flex-col items-center justify-center select-none overflow-hidden outline-none ${className}`}
        style={{
          backgroundColor,
          minHeight: "440px",
          ...style,
        }}
      >
        {/* 3D Viewport with Perspective */}
        <div
          className="relative w-full flex items-center justify-center pt-6 pb-2"
          style={{
            perspective: `${perspectivePx}px`,
            perspectiveOrigin: "50% 50%",
            height: `${panelHeight * 1.55}px`,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Concave Stage */}
          <div
            className={`relative flex items-center justify-center w-full h-full cursor-grab active:cursor-grabbing ${
              isDraggingState ? "cursor-grabbing" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((item, idx) => {
              const geom = getPanelTransform(idx);
              if (geom.absOffset > 4.2) return null; // cull panels outside visible 9-panel arc

              return (
                <div
                  key={`${item.alt}-${idx}`}
                  onClick={() => {
                    if (geom.isCentered && onSelect) {
                      onSelect(item, idx);
                    } else {
                      goTo(idx);
                    }
                  }}
                  className="absolute top-1/2 left-1/2 will-change-transform transition-opacity duration-150"
                  style={{
                    width: `${panelWidth}px`,
                    height: `${panelHeight}px`,
                    marginLeft: `-${panelWidth / 2}px`,
                    marginTop: `-${panelHeight / 2}px`,
                    transform: geom.transform,
                    opacity: geom.opacity,
                    zIndex: geom.zIndex,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Primary Wall Panel */}
                  <div
                    className="relative w-full h-full overflow-hidden border border-white/12 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                    style={{
                      borderRadius: `${radius}px`,
                      background:
                        "linear-gradient(145deg, #121828 0%, #0A0D16 100%)",
                    }}
                  >
                    {/* Panel Inner Graphic / Logo with subtle depth sheen */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/10">
                      {/* Logo Image */}
                      {item.src && (
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={96}
                            height={96}
                            loading="lazy"
                            decoding="async"
                            className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-300"
                            draggable={false}
                          />
                        </div>
                      )}
                    </div>

                    {/* Gloss border highlights */}
                    <div className="absolute inset-0 rounded-[inherit] border border-white/8 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
                  </div>

                  {/* Floor Reflection beneath panel */}
                  {reflection > 0 && (
                    <div
                      className="absolute top-full left-0 right-0 pointer-events-none mt-2 overflow-hidden"
                      style={{
                        height: `${panelHeight * 0.65}px`,
                        transform: "scaleY(-1)",
                        opacity: reflection * (geom.isCentered ? 1.4 : 0.8),
                        filter: "blur(1px)",
                        maskImage:
                          "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 75%)",
                        WebkitMaskImage:
                          "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 75%)",
                      }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/10"
                        style={{
                          borderRadius: `${radius}px`,
                          background: "#0A0D16",
                        }}
                      >
                        {item.src && (
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center opacity-70">
                            <img
                              src={item.src}
                              alt=""
                              width={96}
                              height={96}
                              loading="lazy"
                              decoding="async"
                              className="max-w-full max-h-full object-contain"
                              draggable={false}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Vignette Edge Dimming Gradients */}
          <div
            className="absolute inset-y-0 left-0 w-24 sm:w-40 pointer-events-none z-40"
            style={{
              background:
                "linear-gradient(to right, #07090E 15%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-24 sm:w-40 pointer-events-none z-40"
            style={{
              background:
                "linear-gradient(to left, #07090E 15%, transparent 100%)",
            }}
          />
        </div>

        {/* Captions for Centered Image */}
        {captions && currentItem && (
          <div className="relative z-20 mt-3 sm:mt-5 text-center flex flex-col items-center justify-center px-4 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {currentItem.title || currentItem.alt}
            </h3>
            {currentItem.subtitle && (
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 max-w-md">
                {currentItem.subtitle}
              </p>
            )}
          </div>
        )}

        {/* Controls: Previous Button, formatted index counter, Next Button */}
        {controls && total > 0 && (
          <div className="relative z-20 mt-4 sm:mt-6 mb-2 flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous Circular Button */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous panel"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#101422] border border-white/12 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Counter formatted as 01 / 10 */}
            <div className="font-mono text-xs sm:text-sm tracking-widest text-slate-400 font-semibold select-none">
              <span className="text-white">
                {String(normalizedIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600 mx-1.5">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>

            {/* Next Circular Button */}
            <button
              type="button"
              onClick={next}
              aria-label="Next panel"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#101422] border border-white/12 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

ConcaveCarousel.displayName = "ConcaveCarousel";
export default ConcaveCarousel;
