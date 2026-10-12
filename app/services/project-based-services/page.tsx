"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function ProjectBasedServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pillars = [
    {
      title: "Agreed Scope & Deliverables",
      description: "Detailed specification mapping out features, APIs, architecture boundaries, and concrete acceptance criteria before work begins.",
      items: ["Documented functional specs", "Clear acceptance criteria", "Fixed boundary protection", "Predictable budget alignment"],
    },
    {
      title: "Defined Milestones",
      description: "Structured project phases with measurable checkpoints, regular sprint demos, and transparent delivery dates.",
      items: ["Staged sprint releases", "Bi-weekly progress demos", "Pre-scheduled checkpoints", "Milestone sign-off reviews"],
    },
    {
      title: "Project-Specific Team Allocation",
      description: "Direct assignment of verified developers, systems architects, and QA engineers dedicated specifically to your codebase.",
      items: ["Selected technology stack experts", "Direct team communication", "Dedicated engineering lead", "No shared distraction risk"],
    },
    {
      title: "Review & Handover Process",
      description: "Thorough testing, documentation of codebases and deployment procedures, followed by a structured knowledge transfer.",
      items: ["Comprehensive test coverage", "Deployment pipeline setup", "Codebase documentation", "Post-launch transition support"],
    },
  ];

  const suitableCases = [
    {
      label: "Custom MVP or Application Build",
      detail: "Building a new digital product or custom web platform from specification to launch.",
    },
    {
      label: "System or API Integration",
      detail: "Connecting existing ERP, CRM, or accounting systems through secure, modern APIs and webhooks.",
    },
    {
      label: "Application Modernization",
      detail: "Refactoring legacy code, upgrading backend frameworks, or redesigning user interfaces.",
    },
    {
      label: "Feature Sprint Delivery",
      detail: "Executing a concrete batch of high-priority features or urgent performance optimizations.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="pt-28 sm:pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#engagement" className="hover:text-cyan-400 transition-colors">Engagement Models</Link>
              <span>/</span>
              <span className="text-cyan-300">Project-Based Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.14]">
              Project-Based Services
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
              Best for businesses with a defined project, integration, application improvement, or specific technical requirement.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              When you have a clear objective and a defined scope of work, our project-based model gives you predictable deliverables, transparent milestones, and a dedicated team focused solely on delivering your outcome.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] cursor-pointer"
              >
                Discuss a Project Scope
              </button>

              <Link
                href="/#engagement"
                className="px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Compare Models
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Deliverables of the Project Model
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Clear commitments and structured milestones from kick-off through production handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/20 hover:border-white/35 transition-all duration-300 hover:-translate-y-1 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">{pillar.description}</p>
                </div>
                <ul className="mt-6 pt-5 border-t border-white/5 space-y-2">
                  {pillar.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* When to Choose This Model */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/20 p-6 sm:p-10 md:p-12 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_20px_50px_-10px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              When to Choose Project-Based Engagement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {suitableCases.map((c, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 hover:border-white/35 transition-all duration-300 hover:-translate-y-0.5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_15px_35px_-10px_rgba(0,0,0,0.5)] space-y-2"
                >
                  <div className="text-sm sm:text-base font-semibold text-white">{c.label}</div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/20 p-8 sm:p-14 text-center overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.28),0_30px_100px_-20px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to define your project scope?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3">
              Share your project requirements, target milestones, or idea with our team. We will review the details and provide a clear, structured proposal.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                Discuss a Project Scope
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService="Project-Based Services"
      />
    </div>
  );
}
