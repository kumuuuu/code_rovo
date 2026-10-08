"use client";

import React from "react";
import { HeroCanvas } from "./HeroCanvas";

interface HeroSectionProps {
  onOpenContact: (service?: string) => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      {/* Interactive Canvas Background with nodes and atmospheric glows */}
      <HeroCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Minimal Pill Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono tracking-wider text-slate-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.12)]"> */}
        {/* <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] animate-pulse" /> */}
        {/* <span className="uppercase tracking-widest text-[11px] font-semibold text-cyan-200">
            IT SOLUTIONS & DEDICATED ENGINEERING
          </span> */}
        {/* </div> */}

        {/* Display Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-[-0.035em] leading-[1.08] max-w-4xl">
          Your Technology Team,{" "}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#A855F7] drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            Beyond Borders.
          </span>
        </h1>

        {/* Crisp supporting text */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
          Coderovo helps businesses build, scale, and maintain digital solutions through flexible software engineering teams and reliable IT expertise.
        </p>

        {/* Dual CTA Actions */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={() => onOpenContact()}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            Start a Project
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-[#131824]/80 hover:bg-[#1A2234] border border-white/12 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator with micro-animated downward glow */}
      <div className="relative z-10 mt-16 sm:mt-24 flex flex-col items-center gap-2 select-none opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-transparent relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
