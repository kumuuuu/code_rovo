"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export interface CurvedWaveLogoItem {
  id?: string;
  name: string;
  svg?: React.ReactNode;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string;
  scale?: number;
  invert?: boolean;
}

// Built-in exact 8 SVG vector brand logos from the user's snippet
export const SNIPPET_BRAND_LOGOS: CurvedWaveLogoItem[] = [
  {
    id: "northstar",
    name: "Northstar",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="119"
        height="26"
        viewBox="0 0 119 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <circle cx="13" cy="13" r="8.5" fill="none" stroke="#F2F2F2" strokeWidth="3.6" />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#F2F2F2"
          textLength="78"
          lengthAdjust="spacing"
        >
          Northstar
        </text>
      </svg>
    ),
  },
  {
    id: "helix",
    name: "Helix",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="26"
        viewBox="0 0 82 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <path
          d="M3.5 15c3-6.8 6.2-6.8 9.3 0s6.3 6.8 9.3 0"
          fill="none"
          stroke="#FF74CE"
          strokeWidth="3.4"
          strokeLinecap="butt"
        />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#D8D8D8"
          textLength="41"
          lengthAdjust="spacing"
        >
          Helix
        </text>
      </svg>
    ),
  },
  {
    id: "kosmos",
    name: "Kosmos",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="108"
        height="26"
        viewBox="0 0 108 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <path
          d="M13 3.4 21.3 8.2v9.6L13 22.6 4.7 17.8V8.2z"
          fill="#F2F2F2"
        />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#F2F2F2"
          textLength="67"
          lengthAdjust="spacing"
        >
          Kosmos
        </text>
      </svg>
    ),
  },
  {
    id: "vireo",
    name: "Vireo",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83"
        height="26"
        viewBox="0 0 83 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <path
          d="M22 3.5C11 3.5 4 9 4 15.8c0 2.8 1.7 5.3 4.4 5.3 7.6 0 13.6-6.8 13.6-17.6z"
          fill="#E9FF00"
        />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#D8D8D8"
          textLength="42"
          lengthAdjust="spacing"
        >
          Vireo
        </text>
      </svg>
    ),
  },
  {
    id: "atlas-bio",
    name: "Atlas Bio",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="114"
        height="26"
        viewBox="0 0 114 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <rect x="3.5" y="14" width="4.4" height="8" fill="#FF74CE" />
        <rect x="10.8" y="8.5" width="4.4" height="13.5" fill="#FF74CE" />
        <rect x="18.1" y="3.5" width="4.4" height="18.5" fill="#FF74CE" />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#D8D8D8"
          textLength="73"
          lengthAdjust="spacing"
        >
          Atlas Bio
        </text>
      </svg>
    ),
  },
  {
    id: "lumen",
    name: "Lumen",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="97"
        height="26"
        viewBox="0 0 97 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <circle cx="13" cy="13" r="9" fill="#F2F2F2" />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#F2F2F2"
          textLength="56"
          lengthAdjust="spacing"
        >
          Lumen
        </text>
      </svg>
    ),
  },
  {
    id: "parallel",
    name: "Parallel",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="26"
        viewBox="0 0 102 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <rect
          x="3.6"
          y="3.6"
          width="18.8"
          height="18.8"
          fill="none"
          stroke="#E9FF00"
          strokeWidth="3.4"
        />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#D8D8D8"
          textLength="61"
          lengthAdjust="spacing"
        >
          Parallel
        </text>
      </svg>
    ),
  },
  {
    id: "meridian",
    name: "Meridian",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="112"
        height="26"
        viewBox="0 0 112 26"
        className="h-[21px] w-auto block object-contain pointer-events-none"
      >
        <path d="M13 4 22.5 21.5H3.5z" fill="#FF74CE" />
        <text
          x="31"
          y="19.5"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="17"
          fontWeight="700"
          fill="#D8D8D8"
          textLength="71"
          lengthAdjust="spacing"
        >
          Meridian
        </text>
      </svg>
    ),
  },
];

export interface CurvedWaveCarouselProps {
  items?: CurvedWaveLogoItem[];
  /** Scrolling speed in pixels per second (default: 48) */
  speed?: number;
  /** Vertical wave amplitude in px (default: 20) */
  amplitude?: number;
  /** Spatial wavelength in px (default: 1050) */
  wavelength?: number;
  /** Spacing between items in px (default: 280) */
  itemSpacing?: number;
  /** Focus width for scale & color highlight in px (default: 340) */
  focusRadius?: number;
  /** Height of the carousel container in px (default: 220) */
  height?: number;
  /** Height of each logo image in px (default: 76) */
  logoHeight?: number;
  /** Max width of each logo image in px (default: 220) */
  logoMaxWidth?: number;
  /** Pause animation when cursor hovers over the track */
  pauseOnHover?: boolean;
  /** Allow mouse/touch drag navigation */
  draggable?: boolean;
  /** Container className */
  className?: string;
  /** Straight horizontal linear flow without sine curve or tilt skew (default: false) */
  straight?: boolean;
}

export function CurvedWaveCarousel({
  items = SNIPPET_BRAND_LOGOS,
  speed = 48,
  amplitude = 20,
  wavelength = 1050,
  itemSpacing = 280,
  focusRadius = 340,
  height = 220,
  logoHeight = 76,
  logoMaxWidth = 220,
  pauseOnHover = true,
  draggable = true,
  className = "",
  straight = false,
}: CurvedWaveCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Position offset (pixels)
  const offsetRef = useRef(0);

  // Slot element references for 60fps direct DOM manipulation
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag interaction refs
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const dragVelocityRef = useRef(0);

  const totalItemCount = items.length;
  const buffer = Math.max(400, logoMaxWidth + 160);

  // Track container width via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth || 1200);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Compute chain repetitions so total chain width spans well past viewport + buffers
  const repeatCount = useMemo(() => {
    if (totalItemCount === 0 || itemSpacing <= 0) return 2;
    const singleWidth = totalItemCount * itemSpacing;
    const neededWidth = containerWidth + buffer * 2;
    return Math.max(2, Math.ceil(neededWidth / singleWidth) + 1);
  }, [totalItemCount, itemSpacing, containerWidth, buffer]);

  const totalLinks = totalItemCount * repeatCount;
  const totalChainWidth = totalLinks * itemSpacing;

  // Direct 60fps DOM updater function for true conveyor chain
  const updateSlotPositions = useCallback(
    (currentOffset: number) => {
      if (totalChainWidth <= 0 || totalLinks === 0) return;
      const focalCenterX = containerWidth / 2;

      for (let i = 0; i < totalLinks; i++) {
        const el = slotRefs.current[i];
        if (!el) continue;

        // Modular position on the closed conveyor chain
        const nominalPos = i * itemSpacing;
        const rawX =
          ((((nominalPos - currentOffset + buffer) % totalChainWidth) + totalChainWidth) %
            totalChainWidth) -
          buffer;

        const isOutside = rawX < -buffer || rawX > containerWidth + buffer;
        if (isOutside) {
          el.style.visibility = "hidden";
          continue;
        }

        if (straight || amplitude === 0) {
          el.style.transform = `translate3d(${rawX.toFixed(1)}px, -50%, 0px)`;
          el.style.opacity = "1";
          el.style.filter = "none";
          el.style.visibility = "visible";
          continue;
        }

        // Sine wave kinematics
        const angle = (2 * Math.PI * rawX) / wavelength;
        const y = amplitude * Math.sin(angle);

        // Tangent tilt angle (degrees)
        const slope = amplitude * ((2 * Math.PI) / wavelength) * Math.cos(angle);
        const rot = Math.atan(slope) * (180 / Math.PI);

        // Center focal attenuation (scale highlights the active center logo)
        const distFromCenter = Math.abs(rawX - focalCenterX);
        const focusFactor = Math.max(0, 1 - distFromCenter / focusRadius);
        const smoothFocus = 0.5 * (1 - Math.cos(Math.PI * focusFactor));

        const scale = 0.95 + 0.15 * smoothFocus;

        el.style.transform = `translate3d(${rawX.toFixed(1)}px, calc(-50% + ${y.toFixed(1)}px), 0px) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        el.style.opacity = "1";
        el.style.filter = "none";
        el.style.visibility = "visible";
      }
    },
    [
      totalLinks,
      totalChainWidth,
      itemSpacing,
      buffer,
      containerWidth,
      wavelength,
      amplitude,
      focusRadius,
      straight,
    ]
  );

  // Animation frame loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = Math.min(0.1, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      if (!isDragging) {
        // Inertia after drag release
        if (Math.abs(dragVelocityRef.current) > 0.5) {
          offsetRef.current += dragVelocityRef.current * delta;
          dragVelocityRef.current *= Math.exp(-delta * 5); // Friction
        } else {
          dragVelocityRef.current = 0;
          const currentSpeed = isHovered && pauseOnHover ? 0 : speed;
          offsetRef.current += currentSpeed * delta;
        }

        if (totalChainWidth > 0) {
          offsetRef.current = ((offsetRef.current % totalChainWidth) + totalChainWidth) % totalChainWidth;
        }
      }

      updateSlotPositions(offsetRef.current);
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [
    isDragging,
    isHovered,
    pauseOnHover,
    speed,
    totalChainWidth,
    updateSlotPositions,
  ]);

  // Immediately lay out on mount and dimensions change
  useEffect(() => {
    updateSlotPositions(offsetRef.current);
  }, [updateSlotPositions]);

  // Pointer drag event handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!draggable) return;
      setIsDragging(true);
      dragStartXRef.current = e.clientX;
      dragStartOffsetRef.current = offsetRef.current;
      lastDragTimeRef.current = performance.now();
      dragVelocityRef.current = 0;
      if (containerRef.current) {
        containerRef.current.setPointerCapture(e.pointerId);
      }
    },
    [draggable]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const now = performance.now();
      const dt = Math.max(0.001, (now - lastDragTimeRef.current) / 1000);
      const dx = e.clientX - dragStartXRef.current;

      const newOffset = dragStartOffsetRef.current - dx;
      dragVelocityRef.current = (-dx / dt) * 0.15;
      lastDragTimeRef.current = now;
      dragStartXRef.current = e.clientX;
      dragStartOffsetRef.current = newOffset;

      if (totalChainWidth > 0) {
        offsetRef.current = ((newOffset % totalChainWidth) + totalChainWidth) % totalChainWidth;
      } else {
        offsetRef.current = newOffset;
      }
      updateSlotPositions(offsetRef.current);
    },
    [isDragging, totalChainWidth, updateSlotPositions]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      try {
        if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
          containerRef.current.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore edge release
      }
    },
    [isDragging]
  );

  // Render chain link DOM nodes
  const slotElements = useMemo(() => {
    if (totalItemCount === 0) return null;

    return Array.from({ length: totalLinks }).map((_, index) => {
      const itemIndex = index % totalItemCount;
      const item = items[itemIndex];
      const linkKey = `link-${index}-${itemIndex}-${item.name || index}`;

      return (
        <div
          key={linkKey}
          ref={(el) => {
            slotRefs.current[index] = el;
          }}
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transformOrigin: "50% 50%",
            willChange: "transform",
            color: "rgb(242, 242, 242)",
            left: 0,
            top: "50%",
            transform: "translate3d(-400px, -50%, 0px)",
            opacity: 1,
            filter: "none",
            visibility: "hidden",
            userSelect: "none",
            pointerEvents: isDragging ? "none" : "auto",
            cursor: item.href ? "pointer" : "grab",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 0,
            }}
          >
            {item.svg ? (
              item.svg
            ) : item.src ? (
              (() => {
                const isNext =
                  item.invert ||
                  item.src.toLowerCase().includes("next js") ||
                  item.name.toLowerCase().includes("next");
                const scaleVal =
                  item.scale ||
                  (item.src.includes("2.15.51 AM (8)-Photoroom") ||
                  item.name.toLowerCase().includes("myob")
                    ? 1.65
                    : 1);

                return (
                  <div
                    style={{
                      height: `${logoHeight}px`,
                      maxWidth: `${logoMaxWidth}px`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt || item.name}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      style={{
                        maxHeight: `${logoHeight}px`,
                        maxWidth: `${logoMaxWidth}px`,
                        width: "auto",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                        pointerEvents: "none",
                        filter: isNext ? "invert(1) brightness(1.15)" : "none",
                        transform: scaleVal !== 1 ? `scale(${scaleVal})` : undefined,
                      }}
                    />
                  </div>
                );
              })()
            ) : (
              <span className="text-sm font-bold tracking-tight text-white/90">
                {item.name}
              </span>
            )}
          </span>
        </div>
      );
    });
  }, [totalLinks, totalItemCount, items, isDragging, logoHeight, logoMaxWidth]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-pan-y ${className}`}
      style={{ height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="region"
      aria-label="Curved Wave Logo Carousel"
    >
      <div
        style={{
          position: "absolute",
          inset: "0px",
          pointerEvents: isDragging ? "none" : "auto",
        }}
      >
        {slotElements}
      </div>
    </div>
  );
}

export default CurvedWaveCarousel;
