"use client";

import React from "react";
import { ReactiveButton } from "./ui/ReactiveButton";

interface AboutCodeRovoProps {
  onOpenContact: (subject?: string) => void;
}

export function AboutCodeRovo({ onOpenContact }: AboutCodeRovoProps) {
  const pillars = [
    {
      title: "Collaborative Team Extension",
      description:
        "Seamlessly integrate dedicated software engineers and operational specialists into your daily cadence, eliminating recruitment friction and overhead.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      accent: "cyan",
    },
    {
      title: "End-to-End Engineering",
      description:
        "From modern React & Next.js web applications to Java Spring Boot backends and resilient APIs, we build software engineered to scale cleanly.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      accent: "blue",
    },
    {
      title: "Systems & Operations Support",
      description:
        "Dependable assistance for your day-to-day business operations, including cloud accounting, reservations, CRM maintenance, and transaction audits.",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      accent: "purple",
    },
    {
      title: "Adaptive Process Alignment",
      description:
        "Every company works differently. We adapt to your established workflows, communication channels, security policies, and management tools.",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: "emerald",
    },
  ];

  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Editorial Headline & Brand Commitment */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div>
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#00F0FF] block mb-3">
              ABOUT CODEROVO
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.14] text-balance">
              Technology expertise. Practical business support.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-pretty">
              CodeRovo is an IT solutions and outsourcing partner focused on helping modern businesses build digital products, scale their engineering capabilities, and manage the essential systems that keep their operations running smoothly.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-normal text-pretty">
              Whether you need to deliver an urgent software release, extend your core engineering capacity, or ensure reliable day-to-day back-office execution, CodeRovo functions as an aligned, collaborative extension of your business.
            </p>
          </div>

          {/* Brand Promise Card & Primary Action */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 space-y-5">
            <div>
              <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                CodeRovo — Your Team Beyond Borders.
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                Collaborative, scalable technology and operations support.
              </p>
            </div>

            <div>
              <ReactiveButton
                onClick={() => onOpenContact("About CodeRovo Partnership")}
                className="px-8 py-3.5 text-sm font-semibold rounded-full"
              >
                Discuss Your Project
              </ReactiveButton>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Glassmorphic Capability Pillars Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] overflow-hidden"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/[0.10] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  {pillar.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors text-balance">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal text-pretty">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span className="font-medium">Core Capability</span>
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCodeRovo;
