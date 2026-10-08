"use client";

import React, { useState } from "react";

export function ProcessFlow() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: "01",
      name: "Discover",
      duration: "Days 1 - 3",
      tagline: "Scope & Objectives Alignment",
      description:
        "Comprehensive technical discovery, architecture audits, bottleneck identification, and defining success criteria with your key stakeholders.",
      deliverable: "Product Requirements Document (PRD) & Tech Architecture Brief",
    },
    {
      num: "02",
      name: "Plan",
      duration: "Days 3 - 5",
      tagline: "Sprint Roadmapping & Team Assembly",
      description:
        "Sprint cadence establishment, backlog grooming, matching senior engineer profiles to your domain, and setting up communication channels.",
      deliverable: "Milestone Schedule, Jira Board, & Team Alignment Charter",
    },
    {
      num: "03",
      name: "Design",
      duration: "Sprints 1 - 2",
      tagline: "UX/UI Architecture & Systems",
      description:
        "High-fidelity user journeys, component libraries, responsive prototypes, and validation in accordance with Apple design principles.",
      deliverable: "Interactive Design System, Screen Specs, & User Flows",
    },
    {
      num: "04",
      name: "Develop",
      duration: "Bi-Weekly Sprints",
      tagline: "Clean, Scalable Implementation",
      description:
        "Disciplined full-stack engineering, test-driven development (TDD), daily pull requests, and peer reviews adhering to strict linters and standards.",
      deliverable: "Production-Grade Code, Unit Tests, & Bi-Weekly Demos",
    },
    {
      num: "05",
      name: "Test",
      duration: "Continuous CI",
      tagline: "Rigorous QA & Security Validation",
      description:
        "Automated regression suites, load testing, cross-browser/device validation, vulnerability scans, and end-to-end integration verification.",
      deliverable: "Automated QA Reports & Security Audit Sign-off",
    },
    {
      num: "06",
      name: "Deploy",
      duration: "Release Day",
      tagline: "Zero-Downtime Production Cutover",
      description:
        "Containerized cloud orchestration, blue/green or canary rollout, DNS routing, and automated rollback safety nets.",
      deliverable: "Live Production Release & Deployment Verification",
    },
    {
      num: "07",
      name: "Support",
      duration: "Ongoing SLA",
      tagline: "Continuous Stewardship & Scale",
      description:
        "24/7 telemetry monitoring, performance optimization, security patch cadence, and proactive feature enhancements as user volume grows.",
      deliverable: "Uptime SLA Monitoring, Monthly Reports & Roadmap Sprints",
    },
  ];

  return (
    <section id="how-we-work" className="relative px-4 sm:px-6 py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="text-xs uppercase font-mono font-medium tracking-[0.2em] text-[#00F0FF]">
          HOW WE WORK
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          From idea to production.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          A transparent 7-stage engineering lifecycle engineered for zero friction, predictable velocity, and reliable outcomes.
        </p>
      </div>

      {/* Horizontal Stage Stepper Track */}
      <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-none">
        {/* Connecting hairline gradient track */}
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-25 z-0" />

        <div className="flex items-center justify-between min-w-[760px] relative z-10 gap-3">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none flex-1"
              >
                {/* Circle Indicator */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 border ${
                    isActive
                      ? "bg-white text-[#07090E] border-white shadow-[0_0_25px_rgba(0,240,255,0.6)] scale-110"
                      : "bg-[#0D111A] text-slate-400 border-white/10 group-hover:border-white/30 group-hover:text-white"
                  }`}
                >
                  {stage.num}
                </div>

                {/* Name */}
                <span
                  className={`mt-3 text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? "text-cyan-300" : "text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {stage.name}
                </span>

                {/* Micro Duration Pill */}
                <span className="mt-1 text-[10px] font-mono text-slate-500">
                  {stage.duration}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Spotlight Box */}
      <div className="relative rounded-2xl md:rounded-3xl bg-[#0D111A]/90 border border-white/10 p-8 sm:p-10 shadow-2xl overflow-hidden transition-all duration-300">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-cyan-400">
                STAGE {stages[activeStage].num}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {stages[activeStage].duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {stages[activeStage].name} — {stages[activeStage].tagline}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {stages[activeStage].description}
            </p>
          </div>

          <div className="lg:col-span-4 p-5 rounded-xl bg-[#131824] border border-white/8 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Primary Deliverable
            </div>
            <div className="text-sm font-semibold text-white flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">✓</span>
              <span>{stages[activeStage].deliverable}</span>
            </div>
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Next Milestone</span>
              <button
                onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                className="text-cyan-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                Proceed →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
