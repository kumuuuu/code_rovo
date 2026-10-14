"use client";

import React, { useState } from "react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
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

  const categories = [
    { id: "all", label: "Full Spectrum" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "backend", label: "Backend Systems" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "database", label: "Databases & Cache" },
    { id: "devops", label: "Cloud & DevOps" },
  ];

  const technologies = [
    // Frontend
    { name: "React", category: "frontend", desc: "Interactive reactive client architectures", badge: "Library" },
    { name: "Next.js", category: "frontend", desc: "Server components, SSR & enterprise edge routing", badge: "Framework" },
    { name: "TypeScript", category: "frontend", desc: "Type-safe robust maintainable codebases", badge: "Language" },
    { name: "Tailwind CSS", category: "frontend", desc: "Utility-first design token orchestration", badge: "Styling" },

    // Backend
    { name: "Java", category: "backend", desc: "High-throughput mission critical architectures", badge: "Language" },
    { name: "Spring Boot", category: "backend", desc: "Enterprise microservice ecosystem", badge: "Framework" },
    { name: "Node.js", category: "backend", desc: "Event-driven asynchronous service backends", badge: "Runtime" },
    { name: "Go", category: "backend", desc: "Ultra-fast low-latency distributed concurrent systems", badge: "Language" },

    // Mobile
    { name: "Flutter", category: "mobile", desc: "High-performance cross-platform apps", badge: "Framework" },
    { name: "React Native", category: "mobile", desc: "Native iOS & Android unified execution", badge: "Framework" },
    { name: "Swift", category: "mobile", desc: "Bespoke iOS native hardware integrations", badge: "Native" },

    // Databases
    { name: "PostgreSQL", category: "database", desc: "ACID-compliant relational enterprise store", badge: "Relational" },
    { name: "MySQL", category: "database", desc: "High-availability relational data engines", badge: "Relational" },
    { name: "MongoDB", category: "database", desc: "Flexible document stores for dynamic schema", badge: "NoSQL" },
    { name: "Redis", category: "database", desc: "In-memory caching and real-time pub/sub streams", badge: "Cache" },

    // Cloud & DevOps
    { name: "Docker", category: "devops", desc: "Reproducible containerized environments", badge: "Container" },
    { name: "AWS & GCP", category: "devops", desc: "Multi-cloud architecture & serverless scaling", badge: "Cloud" },
    { name: "Kubernetes", category: "devops", desc: "Container orchestration & auto-healing clusters", badge: "Cluster" },
    { name: "CI/CD Pipelines", category: "devops", desc: "Automated test suites, security gates & zero-downtime releases", badge: "Automation" },
  ];

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="relative px-4 sm:px-6 py-24 sm:py-32 lg:py-36 w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto min-w-0 scroll-mt-20 overflow-hidden">
      <div className="text-center w-full max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto mb-10 sm:mb-16 lg:mb-20">
        <span className="text-xs 2xl:text-sm uppercase font-medium tracking-[0.25em] text-[#00F0FF] block mb-3">
          PROVEN ARCHITECTURES
        </span>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-white tracking-tight leading-tight">
          Built with modern technology.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base 2xl:text-lg text-slate-300 leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto">
          We leverage industry-proven languages, frameworks, and cloud services to engineer resilient, scalable software systems without technical debt.
        </p>
      </div>

      {/* Category Filter Pills - Horizontally scrollable on mobile */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto sm:overflow-visible scrollbar-none pb-2 sm:pb-0 mb-8 sm:mb-14">
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-2.5 2xl:gap-3.5 w-max sm:w-full min-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveIdx(0);
              }}
              className={`px-4 py-2 2xl:px-5 2xl:py-2.5 rounded-xl text-xs 2xl:text-sm font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                activeCategory === cat.id
                  ? "bg-white text-[#07090E] font-bold shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                  : "bg-[#131824] text-slate-400 hover:text-white border border-white/8 hover:border-white/20 active:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Cue with dynamic live counter */}
      <div className="flex sm:hidden items-center justify-between text-xs text-cyan-400/80 mb-3 px-1">
        <span className="font-medium tracking-wide">Swipe technologies</span>
        <span className="text-[11px] text-slate-400 tracking-wider font-semibold">
          {activeIdx + 1} / {filteredTech.length} &rarr;
        </span>
      </div>

      {/* Technology Badges Grid - Mobile Snap Track, Desktop Grid */}
      <div
        onScroll={handleScroll}
        className="w-full max-w-full min-w-0 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 sm:pb-0"
      >
        <div className="flex sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 2xl:gap-8 w-max sm:w-full min-w-full">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="w-[74vw] max-w-[280px] xs:w-[62vw] sm:w-auto md:max-w-none shrink-0 snap-center sm:shrink sm:snap-align-none group p-6 sm:p-7 2xl:p-8 rounded-2xl bg-[#0D111A]/80 border border-white/6 hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#131824] hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.12)] flex flex-col justify-between"
            >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-base 2xl:text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] 2xl:text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                  {tech.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 group-hover:text-slate-300 leading-relaxed">
                {tech.desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
              <span className="text-[11px] 2xl:text-xs font-medium text-slate-500 uppercase tracking-wider">
                Production Tested
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
