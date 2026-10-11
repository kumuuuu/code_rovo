import React from "react";

export function WhyUs() {
  const cards = [
    {
      title: "Built Around Your Needs",
      subtext: "Tailored Engagements",
      description:
        "Engagements tailored to your objectives, workload, existing systems, and business priorities.",
      stat: "Customized Delivery Model",
    },
    {
      title: "Clear Communication",
      subtext: "Transparent Reporting",
      description:
        "Agreed responsibilities, progress updates, clear handovers, and a transparent working relationship.",
      stat: "Direct Access & Regular Reviews",
    },
    {
      title: "Technical and Operational Experience",
      subtext: "Code + Systems Savvy",
      description:
        "Support spanning software development, integrations, business applications, and operational workflows.",
      stat: "Engineering & Back-Office Synergy",
    },
    {
      title: "Flexible Engagement",
      subtext: "Adaptive Partnerships",
      description:
        "Start with a defined project or an agreed scope of ongoing support, with the option to expand as needs evolve.",
      stat: "Project & Ongoing Retainers",
    },
  ];

  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="max-w-3xl mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          A technology partner that understands your business.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
          Successful outsourcing requires more than technical skills. It requires clear communication, an understanding of business processes, dependable execution, and the flexibility to adapt as your requirements change.
        </p>
      </div>

      {/* 2x2 Architectural Grid with SVG Network Watermarks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl md:rounded-3xl bg-[#0E131F]/80 hover:bg-[#131A29]/95 border border-white/8 hover:border-cyan-500/30 p-5 sm:p-8 md:p-10 transition-all duration-300 overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.12)] flex flex-col justify-between"
          >
            {/* Subtle SVG Network Circuit Watermark */}
            <svg
              className="absolute -right-6 -bottom-6 w-44 sm:w-56 h-44 sm:h-56 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
              <path d="M20 100h160M100 20v160" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
                  {card.subtext}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom metric tag */}
            <div className="relative z-10 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/6 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">
                {card.stat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
