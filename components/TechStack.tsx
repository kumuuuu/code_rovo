"use client";

import React, { useState } from "react";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
    <section id="tech-stack" className="relative px-4 sm:px-6 py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-mono font-medium tracking-[0.2em] text-[#00F0FF]">
          PROVEN ARCHITECTURES
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Built with modern technology.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          We leverage industry-proven languages, frameworks, and cloud services to engineer resilient, scalable software systems without technical debt.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-white text-[#07090E] font-semibold shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                : "bg-[#131824] text-slate-400 hover:text-white border border-white/8 hover:border-white/20"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Technology Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredTech.map((tech, idx) => (
          <div
            key={idx}
            className="group p-5 rounded-xl bg-[#0D111A]/80 border border-white/6 hover:border-cyan-500/30 transition-all duration-300 hover:bg-[#131824] hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.12)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                  {tech.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed">
                {tech.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Production Tested
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
