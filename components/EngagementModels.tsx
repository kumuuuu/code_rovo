"use client";

import React, { useState } from "react";
import Link from "next/link";

interface EngagementModelsProps {
  onOpenContact: (model?: string) => void;
}

export function EngagementModels({ onOpenContact }: EngagementModelsProps) {
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

  return (
    <section id="engagement" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto min-w-0 scroll-mt-20 overflow-hidden">
      <div className="text-center w-full max-w-3xl mx-auto mb-8 sm:mb-18 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.14] text-balance">
          Flexible ways to work with CodeRovo.
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal text-pretty">
          We work with you to define the right engagement based on the work involved, the skills required, the expected workload, and the level of ongoing support needed.
        </p>
      </div>

      {/* Mobile Swipe Cue with dynamic live counter */}
      <div className="flex md:hidden items-center justify-between text-xs text-cyan-400/80 mb-3 px-1">
        <span className="font-medium tracking-wide">Swipe engagement models</span>
        <span className="text-[11px] text-slate-400 tracking-wider font-semibold">
          {activeIdx + 1} / 2 &rarr;
        </span>
      </div>

      {/* Dual Model Comparison Cards - Mobile Snap Slider, Desktop 2-Col Grid */}
      <div
        onScroll={handleScroll}
        className="w-full max-w-full min-w-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0"
      >
        <div className="flex md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto w-max md:w-full min-w-full">
          <div className="w-[84vw] max-w-[360px] sm:w-[75vw] md:w-auto md:max-w-none shrink-0 snap-center md:shrink md:snap-align-none rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-7 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.12)] overflow-hidden">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug text-balance">
                Project-Based Services
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal text-pretty">
                Best for businesses with a defined project, integration, application improvement, or specific technical requirement.
              </p>

              <ul className="mt-6 sm:mt-7 space-y-3.5 border-t border-white/8 pt-6 sm:pt-7">
                {[
                  "Agreed scope and deliverables",
                  "Defined milestones and transparent progress",
                  "Project-specific team allocation",
                  "Structured review and handover process",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-normal">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 sm:mt-10 pt-6 border-t border-white/8 space-y-3">
              <button
                onClick={() => onOpenContact("Project-Based Services")}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center cursor-pointer"
              >
                Discuss a Project Scope
              </button>
              <Link
                href="/services/project-based-services"
                aria-label="Explore project-based services model details"
                className="block text-center text-xs font-medium text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
              >
                Explore model details &rarr;
              </Link>
            </div>
          </div>

          <div className="w-[84vw] max-w-[360px] sm:w-[75vw] md:w-auto md:max-w-none shrink-0 snap-center md:shrink md:snap-align-none rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-cyan-400/35 hover:border-cyan-400/65 p-7 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.12)] overflow-hidden">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug text-balance">
                Monthly Outsourcing
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal text-pretty">
                Best for businesses that need continuing development capacity, operational support, or recurring back-office assistance.
              </p>

              <ul className="mt-6 sm:mt-7 space-y-3.5 border-t border-white/8 pt-6 sm:pt-7">
                {[
                  "Agreed monthly scope and dedicated bandwidth",
                  "Defined responsibilities and account management",
                  "Recurring support, status updates, and reporting",
                  "Flexible capacity tailored to requirements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-normal">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 sm:mt-10 pt-6 border-t border-white/8 space-y-3">
              <button
                onClick={() => onOpenContact("Monthly Outsourcing")}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_25px_rgba(124,58,237,0.55)] flex items-center justify-center cursor-pointer"
              >
                Explore Monthly Retainers
              </button>
              <Link
                href="/services/monthly-outsourcing"
                aria-label="Explore monthly outsourcing model details"
                className="block text-center text-xs font-medium text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
              >
                Explore model details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dynamic Indicator Dots */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
        {[0, 1].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Supporting Copy */}
      <div className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto">
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal text-pretty">
          Every engagement includes agreed communications, clear task accountability, and the flexibility to adapt as your workload changes.
        </p>
      </div>
    </section>
  );
}

export default EngagementModels;
