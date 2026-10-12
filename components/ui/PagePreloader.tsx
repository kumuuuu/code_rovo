"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const TARGET_DURATION = 6.0; // Play up to 0:00:06 per user specification

export function PagePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTriggeredRef = useRef(false);

  const triggerTransition = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsExiting(true);

    // Smooth exit dissolve before unmounting from DOM
    setTimeout(() => {
      setIsLoading(false);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.documentElement.style.overscrollBehavior = "";
        document.body.style.overflow = "";
        document.body.style.overscrollBehavior = "";
      }
    }, 900);
  }, []);

  useEffect(() => {
    // Lock scroll and completely remove scrollbar on both html and body during video screen
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    }

    // Safety fallback timer: Ensure transition triggers after ~6.2s even if video stalls
    const safetyTimer = setTimeout(() => {
      triggerTransition();
    }, 6200);

    return () => {
      clearTimeout(safetyTimer);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.documentElement.style.overscrollBehavior = "";
        document.body.style.overflow = "";
        document.body.style.overscrollBehavior = "";
      }
    };
  }, [triggerTransition]);

  // Monitor video playback time
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;

    // Transition as soon as video reaches 0:00:06
    if (current >= TARGET_DURATION) {
      triggerTransition();
    }
  };

  const handleEnded = () => {
    triggerTransition();
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="video-preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.03 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090E] overflow-hidden pointer-events-auto touch-none select-none overscroll-none"
      >
        {/* Full-screen Background Video */}
        <div className="relative w-full h-full flex items-center justify-center bg-[#07090E]">
          <video
            ref={videoRef}
            src="/Final%20Render%20%5BWide%5D.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* Vignette & Gradient Overlays for Cinematic Polish */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#07090E]/20 to-[#07090E]/60 pointer-events-none" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PagePreloader;
