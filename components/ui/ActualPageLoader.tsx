"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CoderovoLogo } from "../branding/CoderovoLogo";

export function ActualPageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState<"metaballs" | "logo" | "exit">("metaballs");
  const [dotCount, setDotCount] = useState(1);
  const [isSlow, setIsSlow] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial client connectivity post-hydration to avoid SSR mismatch
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOffline(true);
    }

    // Cycle loading dots text
    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 450);

    // Online/Offline network monitoring
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    if (typeof window !== "undefined") {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    }

    // Slow connection indicator timer (> 3.8s)
    const slowTimer = setTimeout(() => {
      setIsSlow(true);
    }, 3800);

    let isMinTimeReached = false;
    let isAssetsReady = false;
    let transitionTriggered = false;

    const triggerTransition = () => {
      if (transitionTriggered) return;
      transitionTriggered = true;
      clearTimeout(slowTimer);

      // Stage 2: Logo convergence
      setStage("logo");

      // Stage 3: Smooth dissolve to homepage
      setTimeout(() => {
        setStage("exit");
      }, 900);

      // Final unmount
      setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    };

    // Gate A: Minimum aesthetic duration (1.8s for smooth visual flow)
    const minTimer = setTimeout(() => {
      isMinTimeReached = true;
      if (isAssetsReady) {
        triggerTransition();
      }
    }, 1800);

    // Gate B: Asset readiness check (Window load + Font rendering)
    const checkAssetsReady = () => {
      if (typeof document !== "undefined" && document.readyState === "complete") {
        if ("fonts" in document) {
          document.fonts.ready.then(() => {
            isAssetsReady = true;
            if (isMinTimeReached) {
              triggerTransition();
            }
          });
        } else {
          isAssetsReady = true;
          if (isMinTimeReached) {
            triggerTransition();
          }
        }
      } else if (typeof window !== "undefined") {
        const onLoad = () => {
          if ("fonts" in document) {
            document.fonts.ready.then(() => {
              isAssetsReady = true;
              if (isMinTimeReached) {
                triggerTransition();
              }
            });
          } else {
            isAssetsReady = true;
            if (isMinTimeReached) {
              triggerTransition();
            }
          }
          window.removeEventListener("load", onLoad);
        };
        window.addEventListener("load", onLoad);
      }
    };

    checkAssetsReady();

    // Safety Fallback Max Timer (6.5s) to prevent hanging if analytics/third-party script stalls
    const maxSafetyTimer = setTimeout(() => {
      isAssetsReady = true;
      isMinTimeReached = true;
      triggerTransition();
    }, 6500);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(minTimer);
      clearTimeout(slowTimer);
      clearTimeout(maxSafetyTimer);
      if (typeof window !== "undefined") {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="coderovo-preloader"
          initial={{ opacity: 1 }}
          animate={{
            opacity: stage === "exit" ? 0 : 1,
            scale: stage === "exit" ? 1.04 : 1,
            filter: stage === "exit" ? "blur(8px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07090E] select-none overflow-hidden p-4"
          style={{ pointerEvents: stage === "exit" ? "none" : "auto" }}
          aria-live="polite"
          aria-busy={isLoading}
        >
          {/* Ambient background aura glow */}
          <div className="absolute w-[clamp(280px,70vmin,520px)] h-[clamp(280px,70vmin,520px)] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-[80px] sm:blur-[100px] pointer-events-none" />

          {/* Main Visual Centerpiece with fluid vmin clamp */}
          <div className="relative flex flex-col items-center justify-center w-[clamp(180px,46vmin,280px)] h-[clamp(180px,46vmin,280px)] aspect-square">
            <AnimatePresence mode="wait">
              {stage === "metaballs" ? (
                <motion.div
                  key="metaballs-stage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.15, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      {/* SVG Gooey / Metaball Filter (merges & stretches overlapping nodes) */}
                      <filter id="preloader-goo" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  
                                  0 1 0 0 0  
                                  0 0 1 0 0  
                                  0 0 0 22 -9"
                          result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                      </filter>

                      {/* Fluid Linear Gradients */}
                      <linearGradient id="orb-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>

                      <linearGradient id="orb-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>

                      <linearGradient id="orb-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#00F5D4" />
                      </linearGradient>

                      {/* Floor Shadow Gradient */}
                      <radialGradient id="floor-shadow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Dynamic Floor Shadow Reflection (matching reference GIF) */}
                    <motion.ellipse
                      cx={200}
                      cy={295}
                      rx={75}
                      ry={20}
                      fill="url(#floor-shadow)"
                      animate={{
                        rx: [65, 85, 60, 80, 65],
                        ry: [16, 24, 15, 22, 16],
                        opacity: [0.6, 0.9, 0.5, 0.85, 0.6],
                      }}
                      transition={{
                        duration: 1.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Gooey Metaballs Container */}
                    <g filter="url(#preloader-goo)">
                      {/* Node 1: Electric Cyan/Blue Droplet */}
                      <motion.circle
                        r={32}
                        fill="url(#orb-grad-1)"
                        animate={{
                          cx: [200, 245, 200, 155, 200],
                          cy: [145, 205, 235, 205, 145],
                          scale: [1, 1.15, 0.95, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Node 2: Magenta/Violet Droplet */}
                      <motion.circle
                        r={30}
                        fill="url(#orb-grad-2)"
                        animate={{
                          cx: [155, 200, 245, 200, 155],
                          cy: [225, 145, 205, 235, 225],
                          scale: [1.1, 0.95, 1.12, 1, 1.1],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Node 3: Sky Blue/Aquamarine Droplet */}
                      <motion.circle
                        r={28}
                        fill="url(#orb-grad-3)"
                        animate={{
                          cx: [245, 155, 200, 245, 245],
                          cy: [225, 225, 155, 205, 225],
                          scale: [0.95, 1.08, 1.15, 0.95, 0.95],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Center connecting nucleus orb for viscous stretching bridges */}
                      <motion.circle
                        r={26}
                        fill="url(#orb-grad-1)"
                        animate={{
                          cx: [200, 210, 195, 205, 200],
                          cy: [195, 190, 210, 195, 195],
                          scale: [0.85, 1.18, 0.9, 1.15, 0.85],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </g>
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="logo-stage"
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <CoderovoLogo
                    size="clamp(160px, 40vmin, 240px)"
                    animated={true}
                    interactive={false}
                    glow={true}
                    className="w-full h-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Synchronized Loading Typography with dynamic network-aware messaging */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-3 sm:mt-5 flex flex-col items-center text-center px-4"
          >
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-slate-300 font-semibold uppercase flex items-center justify-center">
              {isOffline ? (
                <span className="text-amber-400">Waiting for connection...</span>
              ) : isSlow ? (
                <span>
                  Optimizing experience
                  <span className="inline-block w-5 text-left text-cyan-400 font-bold">
                    {".".repeat(dotCount)}
                  </span>
                </span>
              ) : (
                <span>
                  Loading
                  <span className="inline-block w-5 text-left text-cyan-400 font-bold">
                    {".".repeat(dotCount)}
                  </span>
                </span>
              )}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ActualPageLoader;
