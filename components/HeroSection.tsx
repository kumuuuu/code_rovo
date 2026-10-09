"use client";

import React from "react";
import { HeroCanvas } from "./HeroCanvas";
import { CoderovoLogo } from "./branding/CoderovoLogo";

interface HeroSectionProps {
  onOpenContact: (service?: string) => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Interactive Canvas Background with nodes and atmospheric glows */}
      <HeroCanvas />

      {/* Hero Content: Side-by-side grid container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, subtext, dual CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-6">
            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold text-white tracking-[-0.035em] leading-[1.12] max-w-2xl">
              Your Technology Team,{" "}
              <span className="block mt-1 sm:mt-2 pb-3 -mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#A855F7] drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
                Beyond Borders.
              </span>
            </h1>

            {/* Crisp supporting text */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
              Coderovo helps businesses build, scale, and maintain digital solutions through flexible software engineering teams and reliable IT expertise.
            </p>

            {/* Dual CTA Actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
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
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-[#131824]/80 hover:bg-[#1A2234] border border-white/12 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Animated Coderovo Logo */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
            <div className="relative flex items-center justify-center w-full max-w-[420px] sm:max-w-[460px] aspect-square">
              <CoderovoLogo
                size="clamp(280px, 32vw, 450px)"
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
      <div className="relative z-10 mt-4 sm:mt-6 flex flex-col items-center gap-2 select-none opacity-80 hover:opacity-100 transition-opacity">
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

export default HeroSection;
