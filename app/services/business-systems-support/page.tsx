"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function BusinessSystemsSupportPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="pt-28 sm:pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-cyan-300">Business Systems Support</span>
            </div>

            <span className="text-xs uppercase font-mono font-medium tracking-[0.25em] text-[#00F0FF] px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
              COMMERCIAL CAPABILITY
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.14]">
              Business Systems & Back-Office Support
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
              Support day-to-day business processes using accounting, hospitality, booking, CRM, and other operational systems.
            </p>

            <p className="mt-3.5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Services are tailored to your company&apos;s established processes, access requirements, and team cadence. We combine technical understanding with practical operations experience to assist with data entry, transaction verification, platform audits, and routine administration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] cursor-pointer flex items-center gap-2"
              >
                <span>Discuss Operational Support</span>
                <span>↗</span>
              </button>

              <Link
                href="/#systems"
                className="px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                View Systems We Know
              </Link>
            </div>
          </div>
        </section>

        {/* Operational Areas Grid */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="border-b border-white/8 pb-4 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Areas of Operational Support
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Structured assistance across the core business platforms your organization depends on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accounting & Financial Workflows",
                description: "Assistance with cloud bookkeeping, receipt extraction, invoice matching, and approval routing.",
                items: ["Xero & MYOB processing", "Dext receipt capture", "ApprovalMax workflows", "Purchase+ purchase orders", "NetSuite entry"],
              },
              {
                title: "Hospitality & Property Operations",
                description: "Supporting reservations, property management systems, guest records, and rate plan verifications.",
                items: ["RMScloud front-office tasks", "BONOTEL tour bookings", "Zhars HS management", "Channel inventory checks"],
              },
              {
                title: "Travel Distribution & Extranets",
                description: "Managing partner extranets, rate parity audits, reservation reconciliations, and booking data flow.",
                items: ["Expedia Group & Booking.com extranets", "Agoda & Hotelbeds partner portals", "Findmyfare ticketing support", "TUI Destimo operations"],
              },
              {
                title: "Data Entry & Quality Validation",
                description: "Accurate, structured entry and regular audits of critical operational records to prevent system errors.",
                items: ["Customer record validation", "Product catalog updates", "Discrepancy resolution", "Standardized data formatting"],
              },
              {
                title: "Invoice & Transaction Checks",
                description: "Cross-referencing vendor bills, purchase receipts, and customer payments against bank and system statements.",
                items: ["Two-way & three-way matching", "Payment receipt verification", "Duplicate invoice detection", "Batch auditing"],
              },
              {
                title: "Routine Administration & Reporting",
                description: "Daily or weekly administrative runbooks executed reliably according to your defined standard operating procedures.",
                items: ["Daily operational checklists", "Weekly summary reports", "Exception escalations", "CRM contact management"],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0E131F]/80 border border-white/8 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mt-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">{card.description}</p>
                </div>
                <ul className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                  {card.items.map((it, iIdx) => (
                    <li key={iIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Governance & Confidentiality Protocols */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Security, Access & Operating Protocols
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Handling operational and financial records requires strict discipline. Every support engagement operates under documented security guidelines:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "Least-Privilege Role Access", desc: "Our personnel operate only with the specific user permissions required for their assigned tasks." },
                { title: "Signed Confidentiality & NDAs", desc: "Non-disclosure agreements and data protection terms signed prior to any system access." },
                { title: "Documented Standard SOPs", desc: "Step-by-step procedures documented with clear error handling and escalation paths." },
                { title: "Transparent Audit Logs", desc: "Daily activity logs, task completion reports, and clear handovers for total visibility." },
              ].map((proto, pIdx) => (
                <div key={pIdx} className="p-4 sm:p-5 rounded-xl bg-[#121828]/70 border border-white/6">
                  <h3 className="font-semibold text-sm text-white">{proto.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{proto.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-purple-950/30 border border-cyan-400/20 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Need reliable support for your business systems?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3">
              Whether you need part-time back-office assistance, daily transaction audits, or specialized platform help, let&apos;s shape a service model that works for your team.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                Discuss Systems & Support Needs ↗
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService="Business Systems & Back-Office Support"
      />
    </div>
  );
}
