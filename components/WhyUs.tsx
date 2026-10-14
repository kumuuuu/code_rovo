"use client";

import React, { useState } from "react";

export function WhyUs() {
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

  const cards = [
    {
      title: "Built Around Your Needs",
      description:
        "Engagements tailored to your objectives, workload, existing systems, and business priorities.",
    },
    {
      title: "Clear Communication",
      description:
        "Agreed responsibilities, progress updates, clear handovers, and a transparent working relationship.",
    },
    {
      title: "Technical and Operational Experience",
      description:
        "Support spanning software development, integrations, business applications, and operational workflows.",
    },
    {
      title: "Flexible Engagement",
      description:
        "Start with a defined project or an agreed scope of ongoing support, with the option to expand as needs evolve.",
    },
  ];

  return (
    <section id="why-us" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto min-w-0 scroll-mt-20 overflow-hidden">
      <div className="w-full max-w-3xl mb-8 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.14] text-balance">
          A technology partner that understands your business.
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-pretty max-w-2xl">
          Successful outsourcing requires more than technical skills. It requires clear communication, an understanding of business processes, dependable execution, and the flexibility to adapt as your requirements change.
        </p>
      </div>

      {/* Mobile Swipe Cue with dynamic live counter */}
      <div className="flex md:hidden items-center justify-between text-xs text-cyan-400/80 mb-3 px-1">
        <span className="font-medium tracking-wide">Swipe advantages</span>
        <span className="text-[11px] text-slate-400 tracking-wider font-semibold">
          {activeIdx + 1} / {cards.length} &rarr;
        </span>
      </div>

      {/* Responsive Cards: Horizontal Snap Slider on Mobile, 2x2 Grid on Tablet/Desktop/2K/4K */}
      <div
        onScroll={handleScroll}
        className="w-full max-w-full min-w-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0"
      >
        <div className="flex md:grid gap-4 sm:gap-6 md:grid-cols-2 w-max md:w-full min-w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[340px] sm:w-[68vw] md:w-auto md:max-w-none shrink-0 snap-center md:shrink md:snap-align-none group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-6 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] overflow-hidden"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors text-balance">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-pretty">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dynamic Indicator Dots */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
        {cards.map((_, i) => (
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

export default WhyUs;
