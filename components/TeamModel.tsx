import React from "react";

export function TeamModel() {
  const pillars = [
    {
      title: "Scalable",
      tagline: "Dynamic Capacity",
      description: "Scale your development team as your requirements change. Ramp up engineers in days, not months.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
      accent: "#00F0FF",
    },
    {
      title: "Dedicated",
      tagline: "Outcome-Aligned",
      description: "Get engineers 100% focused on your project, immersed in your product domain and committed to your goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accent: "#3B82F6",
    },
    {
      title: "Agile",
      tagline: "Transparent Sprints",
      description: "Work with an iterative development process that keeps you involved through clear demos, Jira boards, and continuous releases.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      accent: "#8B5CF6",
    },
    {
      title: "Managed",
      tagline: "Zero Friction Overhead",
      description: "Coderovo handles technical team leadership, architecture reviews, and delivery oversight while you focus on growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      accent: "#EC4899",
    },
  ];

  return (
    <section id="team" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#0A0D15]/90 border border-white/8 p-5 sm:p-10 md:p-16 overflow-hidden">
        {/* Ambient glow backdrop */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase font-mono font-medium tracking-[0.2em] text-[#A855F7]">
            OUR TEAM
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            The right team<br />for your business.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Build your development capacity with a flexible team that works around your business requirements. Start with the expertise you need and scale as your project grows.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative rounded-xl sm:rounded-2xl bg-[#111624]/60 border border-white/6 hover:border-white/16 p-5 sm:p-6 transition-all duration-300 group hover:bg-[#141B2D]"
            >
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ color: pillar.accent }}
              >
                {pillar.icon}
              </div>

              <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-1">
                {pillar.tagline}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                {pillar.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
