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
    <section className="relative px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto z-10">
      {/* Premium dark container with hairline border & backdrop blur */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0C101A]/85 backdrop-blur-xl p-5 sm:p-10 md:p-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_50px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Ambient subtle back-glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle dot matrix watermark */}
        <div className="absolute inset-0 bg-dot-matrix-subtle opacity-40 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
              Building technology.
              <span className="block text-slate-400 font-normal">Delivering results.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We help businesses build, extend, and maintain reliable software through flexible engineering teams and IT solutions. From individual development needs to complete projects, Coderovo works alongside your business to turn requirements into working technology.
            </p>
          </div>

          {/* Right Column: 4-Metric Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#131824]/60 border border-white/8 hover:border-white/16 transition-all duration-300 group hover:bg-[#161C2C]/80"
              >
                {/* Hairline color indicator */}
                <div
                  className="w-8 h-1 rounded-full mb-3 sm:mb-4 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: metric.accent }}
                />

                <div className="text-3xl sm:text-5xl font-light text-white tracking-tight font-sans">
                  {metric.value}
                </div>

                <div className="mt-1.5 sm:mt-2 text-sm sm:text-base font-semibold text-slate-200">
                  {metric.label}
                </div>

                <div className="mt-0.5 sm:mt-1 text-xs text-slate-400">
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
