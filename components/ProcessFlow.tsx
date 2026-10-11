"use client";

import React from "react";

export function ProcessFlow() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      tagline: "Scope & Discovery",
      description:
        "We discuss your business goals, project scope, existing systems, challenges, and expected outcomes.",
    },
    {
      num: "02",
      title: "Plan",
      tagline: "Alignment & Architecture",
      description:
        "We agree on deliverables, responsibilities, required skills, access arrangements, timelines, and the engagement model.",
    },
    {
      num: "03",
      title: "Onboard",
      tagline: "Tooling & Integration",
      description:
        "We establish the necessary communication channels, documentation, system access, workflows, and training.",
    },
    {
      num: "04",
      title: "Deliver",
      tagline: "Execution & Oversight",
      description:
        "Our team carries out the agreed development or operational work and provides progress updates at the agreed intervals.",
    },
    {
      num: "05",
      title: "Review & Improve",
      tagline: "Continuous Optimization",
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
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  {step.num}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Phase {idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {step.title}
              </h3>

              <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                {step.tagline}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-end">
              <span className="text-xs text-slate-500 group-hover:text-cyan-300 transition-colors">
                {idx < 4 ? "Next Step" : "Ongoing Support"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessFlow;
