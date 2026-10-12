"use client";

import React from "react";

export function ProcessFlow() {
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
    <section id="how-we-work" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          A straightforward process from day one.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our structured methodology ensures clarity, accountability, and predictable execution across both software engineering and back-office outsourcing engagements.
        </p>
      </div>

      {/* 5-Step Progressive Horizontal/Vertical Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-[#0E131F]/80 hover:bg-[#131A29]/95 border border-white/8 hover:border-cyan-400/40 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_-10px_rgba(0,240,255,0.15)]"
          >
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {step.title}
              </h3>

              {/* Tag with distinct font and accent color */}
              <div className="mt-2.5 mb-3.5">
                <span className="inline-flex items-center text-[11px] font-mono font-medium tracking-wide text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-1 rounded-md">
                  {step.tagline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom Row: Phase Name */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">
                {step.phase}
              </span>
              <svg
                className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all"
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
    </section>
  );
}

export default ProcessFlow;
