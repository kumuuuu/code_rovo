"use client";

import React, { useId, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { LOGO_PATHS, LOGO_CENTERS } from "./logoPaths";

export interface CoderovoLogoProps {
  /** Size in pixels (or CSS unit). Defaults to 320 */
  size?: number | string;
  /** Whether the organic liquid aurora animations are active */
  animated?: boolean;
  /** Whether pointer hover influences the liquid gradient position */
  interactive?: boolean;
  /** Whether the soft atmospheric backdrop glow is enabled */
  glow?: boolean;
  /** Additional CSS class names for styling/layout */
  className?: string;
  /** Accessibility title */
  title?: string;
}

export function CoderovoLogo({
  size = 320,
  animated = true,
  interactive = true,
  glow = true,
  className = "",
  title = "Coderovo Logo",
}: CoderovoLogoProps) {
  const idPrefix = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const isAnimated = animated && !shouldReduceMotion;
  const isInteractive = interactive && !shouldReduceMotion;

  // Pointer tracking for organic liquid fluid shift
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Viscous fluid spring physics: gentle damping, authentic liquid momentum
  const springConfig = { stiffness: 90, damping: 18, mass: 1.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Differential parallax transforms for distinct liquid color streams:
  // Cyan surges fastest toward cursor (+1.35x offset)
  const cyanX = useTransform(smoothX, (v) => v * 1.35);
  const cyanY = useTransform(smoothY, (v) => v * 1.35);

  // Magenta flows with differential drift (+0.85x)
  const magentaX = useTransform(smoothX, (v) => v * 0.85);
  const magentaY = useTransform(smoothY, (v) => v * 0.85);

  // Electric Blue anchors the central core (+1.05x)
  const blueX = useTransform(smoothX, (v) => v * 1.05);
  const blueY = useTransform(smoothY, (v) => v * 1.05);

  // Violet lower streams (+0.70x)
  const violetX = useTransform(smoothX, (v) => v * 0.7);
  const violetY = useTransform(smoothY, (v) => v * 0.7);

  // Aquamarine diagonal streams (+1.2x)
  const aquaX = useTransform(smoothX, (v) => v * 1.2);
  const aquaY = useTransform(smoothY, (v) => v * 1.2);

  // Localized fluid tilts for the 3 isolated dots
  const dotTopRightX = useTransform(smoothX, (v) => v * 0.75);
  const dotTopRightY = useTransform(smoothY, (v) => v * 0.75);

  const dotBottomCenterX = useTransform(smoothX, (v) => v * 0.6);
  const dotBottomCenterY = useTransform(smoothY, (v) => v * 0.85);

  const dotMiddleLeftX = useTransform(smoothX, (v) => v * 0.85);
  const dotMiddleLeftY = useTransform(smoothY, (v) => v * 0.6);

  // 3D Glass specular highlights subtle counter-parallax (creates true optical refraction depth)
  const specularX = useTransform(smoothX, (v) => -v * 0.15);
  const specularY = useTransform(smoothY, (v) => -v * 0.15);

  const handlePointerEnter = () => {
    if (!isInteractive) return;
    setIsHovered(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !isInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    // Generous ±135px SVG coordinate displacement for clearly visible fluid sloshing
    mouseX.set(x * 135);
    mouseY.set(y * 135);
    if (!isHovered) setIsHovered(true);
  };

  const handlePointerLeave = () => {
    if (!isInteractive) return;
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Unique element IDs
  const clipAllId = `${idPrefix}-clip-all`;
  const clipConnectedId = `${idPrefix}-clip-connected`;
  const clipTopRightId = `${idPrefix}-clip-top-right`;
  const clipBottomCenterId = `${idPrefix}-clip-bottom-center`;
  const clipMiddleLeftId = `${idPrefix}-clip-middle-left`;
  
  const liquidFilterId = `${idPrefix}-liquid-filter`;
  const blurFilterId = `${idPrefix}-blur-filter`;
  const glowFilterId = `${idPrefix}-glow-filter`;
  const ambientGradId = `${idPrefix}-ambient-grad`;
  const alphaToMatteId = `${idPrefix}-alpha-to-matte`;
  const exactAlphaMaskId = `${idPrefix}-exact-alpha-mask`;

  // Unified compound path containing all 5 traced shapes (exact outer silhouette)
  const unifiedSilhouettePath = `${LOGO_PATHS.mainConnectedShape} ${LOGO_PATHS.topCenterShape} ${LOGO_PATHS.topRightDot} ${LOGO_PATHS.bottomCenterDot} ${LOGO_PATHS.middleLeftDot}`;

  const parsedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer ${className}`}
      style={{
        width: parsedSize,
        height: parsedSize,
        maxWidth: "100%",
        aspectRatio: "1 / 1",
      }}
      role="img"
      aria-label={title}
    >
      <svg
        viewBox="0 0 1536 1536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-full overflow-hidden"
      >
        <defs>
          {/* Unified silhouette clip path */}
          <clipPath id={clipAllId} clipPathUnits="userSpaceOnUse">
            <path d={unifiedSilhouettePath} />
          </clipPath>

          {/* Connected shape clip path */}
          <clipPath id={clipConnectedId} clipPathUnits="userSpaceOnUse">
            <path d={LOGO_PATHS.mainConnectedShape} />
            <path d={LOGO_PATHS.topCenterShape} />
          </clipPath>

          {/* Individual dot clip paths */}
          <clipPath id={clipTopRightId} clipPathUnits="userSpaceOnUse">
            <path d={LOGO_PATHS.topRightDot} />
          </clipPath>
          <clipPath id={clipBottomCenterId} clipPathUnits="userSpaceOnUse">
            <path d={LOGO_PATHS.bottomCenterDot} />
          </clipPath>
          <clipPath id={clipMiddleLeftId} clipPathUnits="userSpaceOnUse">
            <path d={LOGO_PATHS.middleLeftDot} />
          </clipPath>

          {/* Organic liquid turbulence & displacement filter:
              Broad, low-frequency turbulence (0.005-0.006) creates smooth, viscous fluid eddies
              without high-frequency micro-spikes or jagged fringes.
              Scale increases dynamically from 10 to 16 when hovered to simulate liquid stirring! */}
          <filter
            id={liquidFilterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="userSpaceOnUse"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.005 0.006"
              numOctaves={2}
              result="noise"
              seed={7}
            >
              {isAnimated && (
                <animate
                  attributeName="baseFrequency"
                  dur={isHovered ? "8s" : "14s"}
                  values="0.004 0.005; 0.006 0.007; 0.005 0.006; 0.004 0.005"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isAnimated ? (isHovered ? 16 : 10) : 0}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>

          {/* Moderate Gaussian blur for fluid nodes so color boundaries remain distinct and defined */}
          <filter id={blurFilterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="38" result="blur" />
          </filter>

          {/* Soft atmospheric glow filter */}
          <filter id={glowFilterId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="55" result="blur" />
          </filter>

          {/* Atmospheric glow backdrop gradient */}
          <radialGradient id={ambientGradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.75" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.25" />
            <stop offset="82%" stopColor="#A855F7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          {/* Filter to turn PNG alpha into pure white luminance matte */}
          <filter id={alphaToMatteId}>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 1 0"
            />
          </filter>

          {/* Master smooth silhouette mask derived from 1536x1536 master artwork */}
          <mask id={exactAlphaMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1536">
            <image
              href="/images/coderovo-logo-exact.png"
              xlinkHref="/images/coderovo-logo-exact.png"
              x={0}
              y={0}
              width={1536}
              height={1536}
              filter={`url(#${alphaToMatteId})`}
            />
          </mask>
        </defs>

        {/* =========================================================================
            LAYER 1: Atmospheric Aurora Glow (Behind the Logo)
            Soft breathing between opacity 0.18 and 0.32 on an 8.5s cycle.
            ========================================================================= */}
        {glow && (
          <g filter={`url(#${glowFilterId})`} className="pointer-events-none">
            {isAnimated ? (
              <motion.circle
                cx={768}
                cy={768}
                r={520}
                fill={`url(#${ambientGradId})`}
                animate={{
                  opacity: [0.18, 0.32, 0.22, 0.28, 0.18],
                  scale: [0.97, 1.04, 0.98, 1.03, 0.97],
                }}
                transition={{
                  duration: 8.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "768px 768px",
                }}
              />
            ) : (
              <circle
                cx={768}
                cy={768}
                r={520}
                fill={`url(#${ambientGradId})`}
                opacity={0.22}
              />
            )}
          </g>
        )}

        {/* =========================================================================
            LAYER 2: Deep 3D Shading & Volume Base
            Subtle underlay providing the original 3D volume, rounded bulb shadows,
            and ambient occlusion so the logo maintains physical form.
            ========================================================================= */}
        <image
          href="/images/coderovo-logo-exact.png"
          xlinkHref="/images/coderovo-logo-exact.png"
          x={0}
          y={0}
          width={1536}
          height={1536}
          opacity={0.35}
          className="pointer-events-none"
        />

        {/* =========================================================================
            LAYER 3 & 4: Living Liquid Aurora Streams (Contained by Master Silhouette Mask)
            Both the connected network and isolated dots are held strictly within
            the master anti-aliased alpha boundary, ensuring ZERO spikes or edge bleed.
            ========================================================================= */}
        <g mask={`url(#${exactAlphaMaskId})`} className="pointer-events-none">
          {/* LAYER 3: Travelling Liquid Aurora Streams (Connected Symbol) */}
          <g clipPath={`url(#${clipConnectedId})`}>
          <motion.g
            filter={isAnimated ? `url(#${liquidFilterId})` : undefined}
            style={{
              x: isInteractive ? smoothX : 0,
              y: isInteractive ? smoothY : 0,
            }}
          >
            {/* Base liquid field: Deep rich indigo-violet foundation */}
            <rect
              x={0}
              y={0}
              width={1536}
              height={1536}
              fill="#1E1B4B"
              opacity={0.9}
            />

            {/* Blurred liquid nodes container with differential fluid stream parallax */}
            <g filter={`url(#${blurFilterId})`}>
              {/* NODE 1: Electric Cyan Stream (#00F0FF)
                  Physically journeys: Top-Left (240, 240) -> Central Hub (760, 780) -> Bottom-Left (240, 1280) */}
              <motion.g
                style={{
                  x: isInteractive ? cyanX : 0,
                  y: isInteractive ? cyanY : 0,
                }}
              >
                <motion.circle
                  r={360}
                  fill="#00F0FF"
                  opacity={0.95}
                  animate={isAnimated ? {
                    cx: [240, 500, 760, 500, 240],
                    cy: [240, 500, 780, 1050, 1280],
                  } : { cx: 450, cy: 500 }}
                  transition={{
                    duration: 8.0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* NODE 2: Vivid Magenta / Pink Stream (#EC4899 / #F43F5E)
                  Physically journeys: Bottom-Right (1280, 1280) -> Middle-Right (1280, 780) -> Top-Center (750, 240) */}
              <motion.g
                style={{
                  x: isInteractive ? magentaX : 0,
                  y: isInteractive ? magentaY : 0,
                }}
              >
                <motion.circle
                  r={340}
                  fill="#EC4899"
                  opacity={0.92}
                  animate={isAnimated ? {
                    cx: [1280, 1280, 1020, 750],
                    cy: [1280, 780, 480, 240],
                  } : { cx: 1100, cy: 900 }}
                  transition={{
                    duration: 9.2,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* NODE 3: Royal Electric Blue Stream (#2563EB / #3B82F6)
                  Journeys through Central Hub (760, 780) <-> Top-Center (750, 240) <-> Top-Left (240, 240) */}
              <motion.g
                style={{
                  x: isInteractive ? blueX : 0,
                  y: isInteractive ? blueY : 0,
                }}
              >
                <motion.circle
                  r={320}
                  fill="#3B82F6"
                  opacity={0.95}
                  animate={isAnimated ? {
                    cx: [760, 750, 450, 240, 550, 760],
                    cy: [780, 240, 320, 780, 1000, 780],
                  } : { cx: 760, cy: 780 }}
                  transition={{
                    duration: 10.5,
                    delay: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* NODE 4: Rich Violet / Purple Stream (#8B5CF6 / #A855F7)
                  Surges across the lower lobes and into Central Hub */}
              <motion.g
                style={{
                  x: isInteractive ? violetX : 0,
                  y: isInteractive ? violetY : 0,
                }}
              >
                <motion.circle
                  r={330}
                  fill="#A855F7"
                  opacity={0.92}
                  animate={isAnimated ? {
                    cx: [1280, 850, 760, 1050, 1280],
                    cy: [780, 1150, 780, 600, 780],
                  } : { cx: 950, cy: 800 }}
                  transition={{
                    duration: 8.6,
                    delay: 2.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>

              {/* NODE 5: Aquamarine Accent Highlight (#00F5D4)
                  Pulses and weaves through the diagonal channel */}
              <motion.g
                style={{
                  x: isInteractive ? aquaX : 0,
                  y: isInteractive ? aquaY : 0,
                }}
              >
                <motion.ellipse
                  rx={280}
                  ry={160}
                  fill="#00F5D4"
                  opacity={0.85}
                  animate={isAnimated ? {
                    cx: [350, 760, 1150, 760, 350],
                    cy: [350, 780, 1150, 780, 350],
                    rotate: [0, 45, 90, 45, 0],
                  } : { cx: 760, cy: 780, rotate: 45 }}
                  transition={{
                    duration: 11.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>
            </g>
          </motion.g>
        </g>

        {/* =========================================================================
            LAYER 4: Independent Liquid Motion for the 3 Isolated Dots
            Each dot has two distinct contrasting color pools moving across its interior,
            giving each dot an independent, living fluid surface responsive to cursor tilt.
            ========================================================================= */}

        {/* --- DOT 1: Top-Right Dot (cx: 1282, cy: 234, r: 215) --- */}
        <g clipPath={`url(#${clipTopRightId})`} className="pointer-events-none">
          <motion.g
            animate={isAnimated ? {
              scale: [1.0, 1.036, 1.002, 1.03, 1.0],
            } : undefined}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transformOrigin: `${LOGO_CENTERS.topRightDot.cx}px ${LOGO_CENTERS.topRightDot.cy}px`,
            }}
          >
            {/* Deep Violet backdrop */}
            <rect
              x={LOGO_CENTERS.topRightDot.cx - 250}
              y={LOGO_CENTERS.topRightDot.cy - 250}
              width={500}
              height={500}
              fill="#4C1D95"
            />
            {/* Filtered fluid orbs inside Top-Right Dot with interactive tilt */}
            <motion.g
              filter={`url(#${blurFilterId})`}
              style={{
                x: isInteractive ? dotTopRightX : 0,
                y: isInteractive ? dotTopRightY : 0,
              }}
            >
              {/* Orb A: Vivid Magenta sweeping diagonally */}
              <motion.circle
                r={160}
                fill="#EC4899"
                opacity={0.95}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.topRightDot.cx - 100, LOGO_CENTERS.topRightDot.cx + 90, LOGO_CENTERS.topRightDot.cx - 100],
                  cy: [LOGO_CENTERS.topRightDot.cy - 90, LOGO_CENTERS.topRightDot.cy + 100, LOGO_CENTERS.topRightDot.cy - 90],
                } : { cx: LOGO_CENTERS.topRightDot.cx, cy: LOGO_CENTERS.topRightDot.cy }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orb B: Electric Blue counter-sweeping */}
              <motion.circle
                r={140}
                fill="#3B82F6"
                opacity={0.9}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.topRightDot.cx + 80, LOGO_CENTERS.topRightDot.cx - 90, LOGO_CENTERS.topRightDot.cx + 80],
                  cy: [LOGO_CENTERS.topRightDot.cy + 90, LOGO_CENTERS.topRightDot.cy - 80, LOGO_CENTERS.topRightDot.cy + 90],
                } : { cx: LOGO_CENTERS.topRightDot.cx + 40, cy: LOGO_CENTERS.topRightDot.cy - 40 }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          </motion.g>
        </g>

        {/* --- DOT 2: Bottom-Center Dot (cx: 749, cy: 1292, r: 185) --- */}
        <g clipPath={`url(#${clipBottomCenterId})`} className="pointer-events-none">
          <motion.g
            animate={isAnimated ? {
              scale: [1.0, 1.038, 1.005, 1.032, 1.0],
            } : undefined}
            transition={{ duration: 5.2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transformOrigin: `${LOGO_CENTERS.bottomCenterDot.cx}px ${LOGO_CENTERS.bottomCenterDot.cy}px`,
            }}
          >
            {/* Deep Indigo backdrop */}
            <rect
              x={LOGO_CENTERS.bottomCenterDot.cx - 240}
              y={LOGO_CENTERS.bottomCenterDot.cy - 240}
              width={480}
              height={480}
              fill="#1E1B4B"
            />
            <motion.g
              filter={`url(#${blurFilterId})`}
              style={{
                x: isInteractive ? dotBottomCenterX : 0,
                y: isInteractive ? dotBottomCenterY : 0,
              }}
            >
              {/* Orb A: Cyan pool sweeping vertically */}
              <motion.circle
                r={150}
                fill="#00F0FF"
                opacity={0.95}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.bottomCenterDot.cx - 80, LOGO_CENTERS.bottomCenterDot.cx + 70, LOGO_CENTERS.bottomCenterDot.cx - 80],
                  cy: [LOGO_CENTERS.bottomCenterDot.cy + 90, LOGO_CENTERS.bottomCenterDot.cy - 90, LOGO_CENTERS.bottomCenterDot.cy + 90],
                } : { cx: LOGO_CENTERS.bottomCenterDot.cx, cy: LOGO_CENTERS.bottomCenterDot.cy }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orb B: Deep Violet / Purple pool */}
              <motion.circle
                r={140}
                fill="#8B5CF6"
                opacity={0.92}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.bottomCenterDot.cx + 80, LOGO_CENTERS.bottomCenterDot.cx - 70, LOGO_CENTERS.bottomCenterDot.cx + 80],
                  cy: [LOGO_CENTERS.bottomCenterDot.cy - 70, LOGO_CENTERS.bottomCenterDot.cy + 80, LOGO_CENTERS.bottomCenterDot.cy - 70],
                } : { cx: LOGO_CENTERS.bottomCenterDot.cx + 30, cy: LOGO_CENTERS.bottomCenterDot.cy - 30 }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          </motion.g>
        </g>

        {/* --- DOT 3: Middle-Left Dot (cx: 238, cy: 781, r: 185) --- */}
        <g clipPath={`url(#${clipMiddleLeftId})`} className="pointer-events-none">
          <motion.g
            animate={isAnimated ? {
              scale: [1.0, 1.032, 1.003, 1.026, 1.0],
            } : undefined}
            transition={{ duration: 4.0, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              transformOrigin: `${LOGO_CENTERS.middleLeftDot.cx}px ${LOGO_CENTERS.middleLeftDot.cy}px`,
            }}
          >
            {/* Deep Blue backdrop */}
            <rect
              x={LOGO_CENTERS.middleLeftDot.cx - 240}
              y={LOGO_CENTERS.middleLeftDot.cy - 240}
              width={480}
              height={480}
              fill="#0F172A"
            />
            <motion.g
              filter={`url(#${blurFilterId})`}
              style={{
                x: isInteractive ? dotMiddleLeftX : 0,
                y: isInteractive ? dotMiddleLeftY : 0,
              }}
            >
              {/* Orb A: Electric Blue sweeping horizontally */}
              <motion.circle
                r={150}
                fill="#3B82F6"
                opacity={0.95}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.middleLeftDot.cx - 90, LOGO_CENTERS.middleLeftDot.cx + 90, LOGO_CENTERS.middleLeftDot.cx - 90],
                  cy: [LOGO_CENTERS.middleLeftDot.cy, LOGO_CENTERS.middleLeftDot.cy + 40, LOGO_CENTERS.middleLeftDot.cy],
                } : { cx: LOGO_CENTERS.middleLeftDot.cx, cy: LOGO_CENTERS.middleLeftDot.cy }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orb B: Hot Pink / Magenta pool */}
              <motion.circle
                r={130}
                fill="#F43F5E"
                opacity={0.92}
                animate={isAnimated ? {
                  cx: [LOGO_CENTERS.middleLeftDot.cx + 90, LOGO_CENTERS.middleLeftDot.cx - 90, LOGO_CENTERS.middleLeftDot.cx + 90],
                  cy: [LOGO_CENTERS.middleLeftDot.cy - 30, LOGO_CENTERS.middleLeftDot.cy + 30, LOGO_CENTERS.middleLeftDot.cy - 30],
                } : { cx: LOGO_CENTERS.middleLeftDot.cx + 40, cy: LOGO_CENTERS.middleLeftDot.cy }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          </motion.g>
        </g>
        </g>

        {/* =========================================================================
            LAYER 5: Clean Silhouette Boundary Overlay & 3D Shading
            Restores buttery-smooth outer boundaries and subtle volume
            ========================================================================= */}
        <image
          href="/images/coderovo-logo-exact.png"
          xlinkHref="/images/coderovo-logo-exact.png"
          x={0}
          y={0}
          width={1536}
          height={1536}
          opacity={0.20}
          className="pointer-events-none"
        />

        {/* =========================================================================
            LAYER 6: Glossy Specular 3D Glass Highlights & Surface Rim Light
            Composited over the liquid with mix-blend-mode: screen so that
            all specular reflections, glossy bevels, rim lighting, and glass textures
            from the original 1536x1536 artwork float crisp, sharp, and pristine
            OVER the living, surging liquid underneath!
            Subtle counter-parallax simulates true refractive glass perspective.
            ========================================================================= */}
        <motion.g
          style={{
            x: isInteractive ? specularX : 0,
            y: isInteractive ? specularY : 0,
          }}
          className="pointer-events-none"
        >
          <image
            href="/images/coderovo-logo-exact.png"
            xlinkHref="/images/coderovo-logo-exact.png"
            x={0}
            y={0}
            width={1536}
            height={1536}
            style={{ mixBlendMode: "screen" }}
            opacity={0.72}
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default CoderovoLogo;
