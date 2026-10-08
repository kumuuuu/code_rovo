import React from "react";

export function WhyUs() {
  const cards = [
    {
      title: "Clear Communication",
      subtext: "Radical Transparency",
      description:
        "Stay informed with transparent communication throughout the project. Real-time Slack channels, recorded demos, and structured weekly status reviews with direct engineer access.",
      stat: "Daily Syncs & Weekly Demos",
    },
    {
      title: "Dedicated Teams",
      subtext: "Domain Ownership",
      description:
        "Get engineers focused on your project and aligned with your goals. Our engineers don't context-switch across five clients—they immerse themselves entirely in your product domain.",
      stat: "100% Dedicated Allocation",
    },
    {
      title: "Reliable Delivery",
      subtext: "Structured Milestones",
      description:
        "Structured development processes that keep your project moving forward. Predictable sprint cadences, automated test coverage, and continuous deployment ensure deterministic delivery.",
      stat: "Predictable Sprint Velocity",
    },
    {
      title: "Long-Term Partnership",
      subtext: "Beyond Day 1 Launch",
      description:
        "We stay involved beyond delivery to help your technology evolve. As your user base grows and features scale, we assist with architectural refactoring, performance tuning, and 24/7 support.",
      stat: "Full Lifecycle Stewardship",
    },
  ];

  return (
    <section id="why-us" className="relative px-4 sm:px-6 py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="text-xs uppercase font-mono font-medium tracking-[0.2em] text-[#00F0FF]">
          WHY CODEROVO
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Built around your success.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          We believe great software comes from strong collaboration, clear communication, and a team that takes ownership of the work. Coderovo works closely with your business to deliver reliable technology that can grow with you.
        </p>
      </div>

      {/* 2x2 Architectural Grid with SVG Network Watermarks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl md:rounded-3xl bg-[#131824]/70 border border-white/8 hover:border-blue-500/30 p-8 sm:p-10 transition-all duration-500 overflow-hidden group hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] flex flex-col justify-between"
          >
            {/* Subtle SVG Network Circuit Watermark */}
            <svg
              className="absolute -right-6 -bottom-6 w-56 h-56 opacity-[0.035] group-hover:opacity-[0.07] transition-opacity pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
              stroke="white"
            >
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M40 100 H160 M100 40 V160" strokeWidth="1" />
              <circle cx="100" cy="40" r="4" fill="white" />
              <circle cx="160" cy="100" r="4" fill="white" />
              <circle cx="100" cy="160" r="4" fill="white" />
              <circle cx="40" cy="100" r="4" fill="white" />
            </svg>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                {card.subtext}
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {card.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 group-hover:text-slate-300">
                {card.stat}
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_8px_#00F0FF] transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
