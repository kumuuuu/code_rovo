"use client";

import React from "react";
import { HeroCanvas } from "./HeroCanvas";
import { CoderovoLogo } from "./branding/CoderovoLogo";

interface HeroSectionProps {
  onOpenContact: (service?: string) => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full max-w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-16 overflow-hidden">
      {/* Interactive Canvas Background with nodes and atmospheric glows */}
      <HeroCanvas />

      {/* Hero Content: Side-by-side grid container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-4 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-8 items-center w-full">
          {/* Text Column: Headline, subtext, dual CTAs (order-2 on mobile, left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left lg:pr-6">
            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-[-0.03em] sm:tracking-[-0.035em] leading-[1.14] sm:leading-[1.12] max-w-2xl">
              Your Technology Team,{" "}
              <span className="block mt-1 sm:mt-2 pb-2 sm:pb-3 -mb-2 sm:-mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#A855F7] drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                Beyond Borders.
              </span>
            </h1>

            {/* Core Value Proposition */}
            <p className="mt-4 sm:mt-5 text-base sm:text-xl font-medium text-slate-200 max-w-xl leading-snug">
              Flexible technology services and reliable outsourcing support to help your business build, operate, and grow.
            </p>

            {/* Crisp supporting text */}
            <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
              From custom software development and dedicated remote teams to business system support and back-office operations, CodeRovo brings technology expertise and practical business support together.
            </p>

            {/* Dual CTA Actions */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => onOpenContact()}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-[#07090E] bg-white hover:bg-slate-100 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center justify-center cursor-pointer"
              >
                Discuss Your Project
              </button>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-[#131824]/80 hover:bg-[#1A2234] active:scale-[0.98] border border-white/12 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                Explore Our Services
              </a>
            </div>

            {/* Subtitle Badges */}
            {/* <div className="mt-6 pt-5 border-t border-white/8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-tight tracking-wider uppercase">
              <span className="text-white font-medium">SOFTWARE DEVELOPMENT</span>
              <span className="text-slate-500 hidden xs:inline select-none">·</span>
              <span className="text-white font-medium">IT OUTSOURCING</span>
              <span className="text-slate-500 hidden sm:inline select-none">·</span>
              <span className="text-white font-medium">BUSINESS SYSTEMS SUPPORT</span>
            </div> */}
          </div>

          {/* Logo Column: Displayed first on mobile, right column on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center lg:justify-end w-full mb-2 sm:mb-6 lg:mb-0">
            <div className="relative flex items-center justify-center w-full max-w-[140px] xs:max-w-[170px] sm:max-w-[260px] lg:max-w-[450px] aspect-square overflow-hidden">
              <CoderovoLogo
                size="clamp(120px, 35vw, 450px)"
                animated={true}
                interactive={true}
                glow={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with micro-animated downward glow */}
      <div className="relative z-10 mt-3 sm:mt-6 flex flex-col items-center gap-1.5 sm:gap-2 select-none opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-7 sm:h-9 bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-transparent relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
