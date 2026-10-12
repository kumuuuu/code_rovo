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
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.38),0_25px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,240,255,0.12)]">
          <div>
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
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center cursor-pointer"
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
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-cyan-400/35 hover:border-cyan-400/65 p-6 sm:p-8 md:p-10 transition-all duration-300 flex flex-col justify-between shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.38),0_25px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,240,255,0.2)]">
          <div>
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
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_25px_rgba(124,58,237,0.55)] flex items-center justify-center cursor-pointer"
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

      {/* Supporting Copy */}
      <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          We work with you to define the right engagement based on the work involved, the skills required, the expected workload, and the level of ongoing support needed.
        </p>
      </div>
    </section>
  );
}

export default EngagementModels;
