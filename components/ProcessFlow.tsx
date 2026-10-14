"use client";

import React, { useState } from "react";

export function ProcessFlow() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const containerLeft = el.getBoundingClientRect().left;
    const children = el.firstElementChild?.children;
    if (!children || children.length === 0) return;

    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < children.length; i++) {
      const childRect = children[i].getBoundingClientRect();
      const diff = Math.abs(childRect.left - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    if (closestIdx !== activeIdx) {
      setActiveIdx(closestIdx);
    }
  };

  const steps = [
    {
      title: "Understand",
      tagline: "Scope & Discovery",
      phase: "Phase 01",
      description:
        "We discuss your business goals, project scope, existing systems, challenges, and expected outcomes.",
    },
    {
      title: "Plan",
      tagline: "Alignment & Architecture",
      phase: "Phase 02",
      description:
        "We agree on deliverables, responsibilities, required skills, access arrangements, timelines, and the engagement model.",
    },
    {
      title: "Onboard",
      tagline: "Tooling & Integration",
      phase: "Phase 03",
      description:
        "We establish the necessary communication channels, documentation, system access, workflows, and training.",
    },
    {
      title: "Deliver",
      tagline: "Execution & Oversight",
      phase: "Phase 04",
      description:
        "Our team carries out the agreed development or operational work and provides progress updates at the agreed intervals.",
    },
    {
      title: "Review & Improve",
      tagline: "Continuous Optimization",
      phase: "Phase 05",
      description:
        "We review the work, address feedback, document relevant changes, and identify opportunities for ongoing improvement.",
    },
  ];

  return (
    <section id="how-we-work" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto min-w-0 scroll-mt-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center w-full max-w-3xl mx-auto mb-8 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.14] text-balance">
          A straightforward process from day one.
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal text-pretty">
          Our structured methodology ensures clarity, accountability, and predictable execution across both software engineering and back-office outsourcing engagements.
        </p>
      </div>

      {/* Mobile Swipe Cue with dynamic live counter */}
      <div className="flex md:hidden items-center justify-between text-xs text-cyan-400/80 mb-3 px-1">
        <span className="font-medium tracking-wide">Swipe phases</span>
        <span className="text-[11px] text-slate-400 tracking-wider font-semibold">
          {activeIdx + 1} / {steps.length} &rarr;
        </span>
      </div>

      {/* 5-Step Progressive Horizontal Snap Track on Mobile, 5-col Grid on Desktop/2K/4K */}
      <div
        onScroll={handleScroll}
        className="w-full max-w-full min-w-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0"
      >
        <div className="flex md:grid gap-4 sm:gap-5 md:grid-cols-5 w-max md:w-full min-w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[320px] sm:w-[50vw] md:w-auto md:max-w-none shrink-0 snap-center md:shrink md:snap-align-none group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] overflow-hidden"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors text-balance">
                  {step.title}
                </h3>

                {/* Tagline without pill badge or mono font */}
                <p className="mt-2 mb-4 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                  {step.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-normal text-pretty">
                  {step.description}
                </p>
              </div>

              {/* Bottom Row: Phase Name */}
              <div className="mt-7 sm:mt-8 pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 group-hover:text-cyan-300 transition-colors">
                  {step.phase}
                </span>
                <svg
                  className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dynamic Indicator Dots */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProcessFlow;
