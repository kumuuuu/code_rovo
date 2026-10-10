"use client";

import React from "react";

interface ServicesSectionProps {
  onSelectService: (service: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      title: "Software Development",
      description:
        "Custom enterprise web & cloud applications built for scale, resilience, and speed. Architected with clean code principles and future-proof design.",
      gradient: "from-cyan-400 to-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Dedicated Development Teams",
      description:
        "Autonomous squads aligned with your engineering culture, ready to accelerate roadmaps. Full ownership, senior leads, and daily standup integration.",
      gradient: "from-blue-400 to-indigo-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Team Extension",
      description:
        "On-demand senior talent seamlessly embedded into your existing sprints and ceremonies. Rapid onboarding with immediate velocity impact.",
      gradient: "from-indigo-400 to-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "UI/UX Engineering",
      description:
        "High-precision digital product design, design systems, and frontend architectural craft. Pixel-perfect implementations adhering to Apple design rigor.",
      gradient: "from-purple-400 to-pink-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Cloud & DevOps",
      description:
        "Containerized infrastructure, automated CI/CD pipelines, and high-availability cloud deployments across AWS and Google Cloud Platform.",
      gradient: "from-cyan-400 to-teal-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Maintenance & Support",
      description:
        "Proactive monitoring, performance optimization, and SLA-backed ongoing tech maintenance to ensure 99.99% system availability.",
      gradient: "from-blue-400 to-cyan-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <span className="text-xs uppercase font-mono font-medium tracking-[0.2em] text-[#00F0FF]">
          WHAT WE DO
        </span>
        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Technology solutions<br className="hidden sm:inline" /> for your business.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          From software development to dedicated engineering teams, Coderovo provides the technical expertise businesses need to build and grow.
        </p>
      </div>

      {/* 6-Card Grid (3x2 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((item) => (
          <div
            key={item.num}
            className="group relative rounded-2xl bg-[#0E131F]/70 hover:bg-[#131A29]/90 border border-white/8 hover:border-cyan-500/40 p-5 sm:p-7 md:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.15)] overflow-hidden"
          >
            {/* Top Row: Numeric Badge + Line Icon */}
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {item.num}
                </span>
                <div className={`p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all duration-300`}>
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2.5 sm:mt-3 text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Row: CTA link */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onSelectService(item.title)}
                className="py-1 text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer link in section */}
      <div className="mt-10 sm:mt-14 text-center">
        <button
          onClick={() => onSelectService("Software Development")}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer px-4 py-2 rounded-full hover:bg-white/5"
        >
          <span>Explore All Engineering Capabilities</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}
