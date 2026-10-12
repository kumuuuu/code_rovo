"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function MonthlyOutsourcingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pillars = [
    {
      title: "Agreed Monthly Scope",
      description: "Predictable monthly hours or dedicated full-time engineering and back-office seats aligned with your ongoing operational workload.",
      items: ["Fixed monthly capacity tiers", "Defined work categories", "Transparent time accounting", "No surprise overages"],
    },
    {
      title: "Defined Responsibilities",
      description: "Clearly agreed day-to-day procedures, documented workflows, system access permissions, and accountable task ownership.",
      items: ["Standard operating procedures (SOPs)", "Dedicated task ownership", "Established communication cadence", "Clear handover protocols"],
    },
    {
      title: "Recurring Support & Reporting",
      description: "Ongoing maintenance, continuous feature rollouts, bug resolution, regular sprint syncs, and comprehensive status reports.",
      items: ["Weekly sprint summaries", "Continuous code updates", "Routine system health checks", "Prompt operational support"],
    },
    {
      title: "Capacity Tailored to Requirements",
      description: "Flexibility to adapt, ramp up, or reconfigure skill sets as your operational needs, platform demands, or seasons change.",
      items: ["Flexible headcount adjustment", "Skillset mix adjustments", "Smooth knowledge transfer", "Long-term partnership stability"],
    },
  ];

  const suitableCases = [
    {
      label: "Dedicated Development Capacity",
      detail: "Continuing roadmap execution, backend maintenance, frontend feature additions, and ongoing code reviews.",
    },
    {
      label: "Business Systems & Operations",
      detail: "Routine accounting entries (Xero, MYOB), invoice verification, reconciliation audits, and ERP maintenance.",
    },
    {
      label: "Hospitality & Extranet Management",
      detail: "Ongoing PMS operations (RMScloud, BONOTEL), channel manager rates, distribution audits, and booking reconciliations.",
    },
    {
      label: "Technical Application Support",
      detail: "Regular bug triage, uptime monitoring, third-party webhook maintenance, and minor feature iterations.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
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
              <span className="text-cyan-300">Monthly Outsourcing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.14]">
              Monthly Outsourcing
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
              Best for businesses that need continuing development capacity, operational support, or recurring back-office assistance.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Eliminate recruitment friction and retain skilled remote engineers and trained operational staff dedicated to your day-to-day operations under a reliable, predictable monthly model.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] cursor-pointer"
              >
                Explore Monthly Retainers
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
              What Monthly Outsourcing Includes
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Reliable, accountable support with established workflows and transparent communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0E131F]/80 border border-white/8 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
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

        {/* Use Cases */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Common Monthly Outsourcing Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {suitableCases.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="text-sm font-semibold text-white">{c.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-[#0B0F19] border border-purple-500/20 p-8 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to extend your team with monthly support?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3">
              Tell us about your ongoing requirements, expected workload, or systems. We will discuss a flexible monthly service model that fits.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-all shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-pointer"
              >
                Explore Monthly Retainers
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService="Monthly Outsourcing"
      />
    </div>
  );
}
