"use client";

import React from "react";
import Link from "next/link";

interface EngagementModelsProps {
  onOpenContact: (model?: string) => void;
}

export function EngagementModels({ onOpenContact }: EngagementModelsProps) {
  return (
    <section id="engagement" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Flexible ways to work with CodeRovo.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          We work with you to define the right engagement based on the work involved, the skills required, the expected workload, and the level of ongoing support needed.
        </p>
      </div>

      {/* Dual Model Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Model 1: Project-Based Services */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0E131F]/80 hover:bg-[#131A29]/95 border border-white/8 hover:border-cyan-400/40 p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.15)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Defined Scope
              </span>
              <span className="text-xs font-mono text-slate-500">Model 01</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Project-Based Services
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Best for businesses with a defined project, integration, application improvement, or specific technical requirement.
            </p>

            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6">
              {[
                "Agreed scope and deliverables",
                "Defined milestones",
                "Project-specific team allocation",
                "Review and handover process",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 space-y-2.5">
            <button
              onClick={() => onOpenContact("Project-Based Services")}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center cursor-pointer"
            >
              Discuss a Project Scope
            </button>
            <Link
              href="/services/project-based-services"
              className="block text-center text-xs font-medium text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
            >
              Explore model details
            </Link>
          </div>
        </div>

        {/* Model 2: Monthly Outsourcing */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#131B2E]/90 to-[#0C101A]/95 border border-cyan-400/30 hover:border-cyan-400/60 p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/25">
                Ongoing Capacity
              </span>
              <span className="text-xs font-mono text-cyan-400">Popular</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Monthly Outsourcing
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Best for businesses that need continuing development capacity, operational support, or recurring back-office assistance.
            </p>

            <ul className="mt-6 space-y-3 border-t border-white/8 pt-6">
              {[
                "Agreed monthly scope",
                "Defined responsibilities",
                "Recurring support and reporting",
                "Capacity tailored to requirements",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 space-y-2.5">
            <button
              onClick={() => onOpenContact("Monthly Outsourcing")}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center cursor-pointer"
            >
              Explore Monthly Retainers
            </button>
            <Link
              href="/services/monthly-outsourcing"
              className="block text-center text-xs font-medium text-cyan-400 hover:text-cyan-300 py-1 transition-colors"
            >
              Explore model details
            </Link>
          </div>
        </div>
      </div>

      {/* Supporting Copy & Unified CTA */}
      <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto space-y-5">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We work with you to define the right engagement based on the work involved, the skills required, the expected workload, and the level of ongoing support needed.
        </p>
        <button
          onClick={() => onOpenContact("Engagement Model Assessment")}
          className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(59,130,246,0.45)] cursor-pointer inline-flex items-center justify-center"
        >
          Find the Right Engagement Model
        </button>
      </div>
    </section>
  );
}

export default EngagementModels;
