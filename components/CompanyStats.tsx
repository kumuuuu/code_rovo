import React from "react";

export function CompanyStats() {
  const metrics = [
    {
      value: "10+",
      label: "Projects Delivered",
      subtext: "Enterprise and high-growth scale-ups",
      accent: "#00F0FF",
    },
    {
      value: "5+",
      label: "Core Senior Engineers",
      subtext: "Top-tier architects and technical leads",
      accent: "#3B82F6",
    },
    {
      value: "5+",
      label: "Specialized Tech Areas",
      subtext: "Web, Cloud, Mobile, DevOps, AI Integrations",
      accent: "#8B5CF6",
    },
    {
      value: "Global",
      label: "Borderless Delivery Model",
      subtext: "Synchronized cross-timezone collaboration",
      accent: "#EC4899",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 py-12 max-w-7xl mx-auto z-10">
      {/* Premium dark container with hairline border & backdrop blur */}
      <div className="relative rounded-3xl border border-white/10 bg-[#0C101A]/85 backdrop-blur-xl p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Ambient subtle back-glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle dot matrix watermark */}
        <div className="absolute inset-0 bg-dot-matrix-subtle opacity-40 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>CRAFTSMANSHIP & RIGOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
              Building technology.
              <span className="block text-slate-400 font-normal">Delivering results.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We help businesses build, extend, and maintain reliable software through flexible engineering teams and IT solutions. From individual development needs to complete projects, Coderovo works alongside your business to turn requirements into working technology.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Agile Sprints
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Transparent CI/CD
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Senior Talent
              </span>
            </div>
          </div>

          {/* Right Column: 4-Metric Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#131824]/60 border border-white/8 hover:border-white/16 transition-all duration-300 group hover:bg-[#161C2C]/80"
              >
                {/* Hairline color indicator */}
                <div
                  className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: metric.accent }}
                />

                <div className="text-4xl sm:text-5xl font-light text-white tracking-tight font-sans">
                  {metric.value}
                </div>

                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  {metric.label}
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
