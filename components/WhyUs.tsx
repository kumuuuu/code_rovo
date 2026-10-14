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
    <section id="why-us" className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      <div className="max-w-3xl mb-14 sm:mb-18 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.14] text-balance">
          A technology partner that understands your business.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-pretty max-w-2xl">
          Successful outsourcing requires more than technical skills. It requires clear communication, an understanding of business processes, dependable execution, and the flexibility to adapt as your requirements change.
        </p>
      </div>

      {/* 2x2 Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-7 sm:p-9 md:p-10 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] overflow-hidden"
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
    </section>
  );
}

export default WhyUs;
