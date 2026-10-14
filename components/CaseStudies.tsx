"use client";

import React, { useState } from "react";

interface CaseStudiesProps {
  onOpenContact: (subject?: string) => void;
}

export function CaseStudies({ onOpenContact }: CaseStudiesProps) {
  const [activeModalStudy, setActiveModalStudy] = useState<number | null>(null);

  const projects = [
    {
      industry: "Financial Technology & SaaS",
      title: "OmniPay Core Gateway",
      description:
        "High-throughput transaction routing engine handling cross-border multi-currency settlement with sub-50ms latency and 99.999% ledger uptime.",
      impact: "Processed $140M+ in quarterly transactional volume with zero downtime.",
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "Redis"],
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
      architectureHighlights: [
        "Distributed microservices partitioned across dual AWS regions",
        "Deterministic double-entry bookkeeping with row-level pessimistic locking",
        "Real-time WebSocket telemetry for merchant merchant fraud scoring",
      ],
    },
    {
      industry: "Healthcare & Compliance",
      title: "PulseSync Telehealth Cloud",
      description:
        "HIPAA-compliant real-time patient biometric telemetry platform with end-to-end enterprise encryption, secure video consults, and HL7 FHIR integrations.",
      impact: "Connected 85,000+ active patients to clinical monitoring dashboards.",
      tech: ["React", "Node.js", "AWS", "Redis", "WebRTC"],
      gradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-950/30",
      architectureHighlights: [
        "End-to-end encrypted WebRTC audio/video consultation pipelines",
        "Automated HIPAA compliance auditing and zero-knowledge storage",
        "Sub-second alert dispatching to on-call clinical response teams",
      ],
    },
    {
      industry: "Logistics & Supply Chain",
      title: "TrackVanguard Fleet Matrix",
      description:
        "Automated routing engine and real-time geospatial dispatch dashboard for multi-modal shipping fleets operating across 12 countries.",
      impact: "Reduced fuel routing variance by 18% across 4,200 tracked transport vehicles.",
      tech: ["Flutter", "TypeScript", "Go", "MongoDB", "Kafka"],
      gradient: "from-purple-500/20 via-pink-600/10 to-transparent",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-950/30",
      architectureHighlights: [
        "High-concurrency Go ingestion pipeline handling 50k telemetry pings/sec",
        "Geospatial polygon indexing with dynamic route re-optimization",
        "Offline-first Flutter tablet app for freight drivers with auto-sync",
      ],
    },
  ];

  return (
    <section id="work" className="relative px-4 sm:px-6 py-24 sm:py-32 lg:py-36 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-medium tracking-[0.25em] text-[#00F0FF] block mb-3">
            FEATURED WORK
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Built for real-world challenges.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Representative engineering solutions engineered for resilience, high concurrency, and measurable business impact.
          </p>
        </div>
        <div className="text-xs font-medium text-slate-400 border border-white/10 px-4 py-2 rounded-xl bg-white/[0.02] self-start md:self-auto">
          Representative Client Solutions
        </div>
      </div>

      {/* 3 Large Editorial Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl md:rounded-3xl bg-[#111624]/80 border border-white/8 hover:border-cyan-500/30 p-7 sm:p-8 md:p-9 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_25px_60px_-15px_rgba(0,240,255,0.12)]"
          >
            {/* Top glowing ambient gradient */}
            <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

            <div className="relative z-10">
              {/* Industry Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-lg text-[11px] font-medium tracking-wider border ${item.badgeColor}`}>
                  {item.industry}
                </span>
                <span className="text-xs font-semibold text-slate-400">0{idx + 1}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5 sm:mt-2 group-hover:text-cyan-200 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Impact Statement */}
              <div className="mt-5 p-4 rounded-xl bg-[#0D111A]/90 border border-white/6 text-xs text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Key Metric</span>
                {item.impact}
              </div>

              {/* Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-400 bg-white/[0.03] border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="relative z-10 pt-6 mt-8 border-t border-white/6">
              <button
                onClick={() => setActiveModalStudy(idx)}
                className="w-full py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 transition-all flex items-center justify-center group-hover:border-cyan-500/40 cursor-pointer"
              >
                View Architecture Specs
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Details Modal */}
      {activeModalStudy !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#07090E]/85 backdrop-blur-xl"
            onClick={() => setActiveModalStudy(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#0D111A] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 z-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {projects[activeModalStudy].industry}
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white mt-1.5 sm:mt-2 pr-8">
              {projects[activeModalStudy].title}
            </h3>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {projects[activeModalStudy].description}
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Architectural Highlights
              </h4>
              <ul className="space-y-2">
                {projects[activeModalStudy].architectureHighlights.map((hl, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-0.5">▸</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {projects[activeModalStudy].tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-400 bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  const subject = projects[activeModalStudy].title;
                  setActiveModalStudy(null);
                  onOpenContact(subject);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#07090E] bg-white hover:bg-slate-100 active:scale-95 transition-all cursor-pointer text-center"
              >
                Inquire Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
