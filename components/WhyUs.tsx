import React from "react";

export function WhyUs() {
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
    <section id="why-us" className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
          A technology partner that understands your business.
        </h2>
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
          Successful outsourcing requires more than technical skills. It requires clear communication, an understanding of business processes, dependable execution, and the flexibility to adapt as your requirements change.
        </p>
      </div>

      {/* 2x2 Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl md:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-5 sm:p-7 md:p-8 transition-all duration-300 overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] flex flex-col justify-start"
          >
            <div className="relative z-10 space-y-2.5 sm:space-y-3.5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
