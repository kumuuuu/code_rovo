"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

declare global {
  interface Window {
    __preloaderActive?: boolean;
  }
}

export function PagePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasTriggeredRef = useRef(false);
  const targetDurationRef = useRef(4.8); // Default fallback: ~4.8s (video is 5.248s)

  const triggerTransition = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    if (typeof window !== "undefined") {
      window.__preloaderActive = false;
      window.dispatchEvent(new CustomEvent("preloader:exit"));
    }

    setIsExiting(true);

    // Smooth exit dissolve before unmounting from DOM
    setTimeout(() => {
      setIsLoading(false);
      if (videoRef.current) {
        try {
          videoRef.current.pause();
        } catch {
          // ignore
        }
      }
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preloader:complete"));
      }
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.documentElement.style.overscrollBehavior = "";
        document.body.style.overflow = "";
        document.body.style.overscrollBehavior = "";
      }
    }, 700);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__preloaderActive = true;
      window.dispatchEvent(new CustomEvent("preloader:start"));
    }

    // Lock scroll on both html and body during video screen
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    }

    // Safety fallback timer: Ensure transition triggers after ~5.8s if video fails or stalls
    const safetyTimer = setTimeout(() => {
      triggerTransition();
    }, 5800);

    return () => {
      clearTimeout(safetyTimer);
      if (typeof window !== "undefined") {
        window.__preloaderActive = false;
      }
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.documentElement.style.overscrollBehavior = "";
        document.body.style.overflow = "";
        document.body.style.overscrollBehavior = "";
      }
    };
  }, [triggerTransition]);

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration;
    if (dur && !isNaN(dur) && isFinite(dur)) {
      // Begin cross-fade 0.45s before video ends so it smoothly dissolves in motion with zero freeze
      targetDurationRef.current = Math.max(1, dur - 0.45);
    }
  };

  // Monitor video playback time
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    if (current >= targetDurationRef.current) {
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
        animate={{ opacity: isExiting ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "opacity" }}
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
            onLoadedMetadata={handleLoadedMetadata}
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
