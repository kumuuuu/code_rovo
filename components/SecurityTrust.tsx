"use client";

import React, { useState } from "react";

export function SecurityTrust() {
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

  const practices = [
    {
      title: "Role-Based Access",
      text: "Role-based access and least-privilege permissions.",
    },
    {
      title: "Confidentiality Requirements",
      text: "Agreed confidentiality and data-handling requirements.",
    },
    {
      title: "Sensitive Information",
      text: "Secure handling of credentials and sensitive information.",
    },
    {
      title: "Documented Workflows",
      text: "Documented workflows, approvals, and handovers.",
    },
    {
      title: "Quality & Governance",
      text: "Testing, review, and change-management procedures appropriate to the work.",
    },
  ];

  return (
    <section id="security" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto min-w-0 scroll-mt-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] 2xl:max-w-[900px] h-[320px] 2xl:h-[450px] bg-cyan-600/5 rounded-full blur-[120px] 2xl:blur-[160px] pointer-events-none" />

      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.07] via-[#0B0F19]/40 to-[#0B0F19]/30 backdrop-blur-3xl border border-white/15 p-6 sm:p-10 md:p-12 lg:p-14 2xl:p-18 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_40px_-15px_rgba(0,0,0,0.35)] w-full min-w-0">
        <div className="w-full max-w-3xl 2xl:max-w-4xl mb-8 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-white tracking-[-0.025em] leading-[1.14] text-balance">
            Responsible delivery. Clear expectations.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg 2xl:text-xl text-slate-300 leading-relaxed font-normal text-pretty">
            We recognise the importance of protecting business information, application access, and operational data. Every engagement begins with clear responsibilities and agreed procedures for accessing and handling client information.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base 2xl:text-lg text-slate-400 font-medium">
            Depending on the engagement, our working practices can include:
          </p>
        </div>

        {/* Mobile Swipe Cue with dynamic live counter */}
        <div className="flex md:hidden items-center justify-between text-xs text-cyan-400/80 mb-3 px-1">
          <span className="font-medium tracking-wide">Swipe practices</span>
          <span className="text-[11px] text-slate-400 tracking-wider font-semibold">
            {activeIdx + 1} / {practices.length} &rarr;
          </span>
        </div>

        {/* 5 Working Practices: Mobile Snap-Peek Slider, Desktop 3-Col Grid */}
        <div
          onScroll={handleScroll}
          className="w-full max-w-full min-w-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0"
        >
          <div className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 2xl:gap-8 w-max md:w-full min-w-full">
            {practices.map((item, idx) => (
              <div
                key={idx}
                className="w-[82vw] max-w-[340px] sm:w-[65vw] md:w-auto md:max-w-none shrink-0 snap-center md:shrink md:snap-align-none p-6 sm:p-7 2xl:p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 transition-all duration-300 flex flex-col justify-start group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)]"
              >
                <div className="mb-3">
                  <span className="text-xs sm:text-[13px] 2xl:text-sm font-bold text-cyan-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm sm:text-base 2xl:text-lg text-slate-200 leading-relaxed font-normal text-pretty">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dynamic Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
          {practices.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityTrust;
