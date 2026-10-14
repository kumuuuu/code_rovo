"use client";

import React from "react";

interface SystemsExperienceProps {
  onOpenContact: (subject?: string) => void;
}

export function SystemsExperience({ onOpenContact }: SystemsExperienceProps) {
  const categories = [
    {
      title: "Accounting, Finance & Business Operations",
      description:
        "Accounting workflows, invoice processing, reconciliation, approvals and business operations.",
      systems: [
        { name: "Xero", category: "Cloud Accounting" },
        { name: "MYOB", category: "Business Management" },
        { name: "Dext", category: "Document Extraction" },
        { name: "ApprovalMax", category: "Approval Workflows" },
        { name: "Purchase+", category: "Procurement & Invoicing" },
        { name: "NetSuite", category: "Cloud ERP" },
      ],
    },
    {
      title: "Hospitality, Hotel & Property Systems",
      description:
        "Hotel operations, property systems, reservations, guest-related workflows and integrations.",
      systems: [
        { name: "RMScloud", category: "Property Management" },
        { name: "BONOTEL", category: "Inbound Tour Operator" },
        { name: "Zhars HS", category: "Hospitality Solutions" },
      ],
    },
    {
      title: "Travel, Reservations & Distribution",
      description:
        "Travel booking platforms, partner portals, distribution and reservation-related workflows.",
      systems: [
        { name: "Expedia Group", category: "Travel & Lodging API" },
        { name: "Booking.com", category: "Extranet Management" },
        { name: "Agoda", category: "YCS & Booking Integration" },
        { name: "Findmyfare", category: "Online Travel Agency" },
        { name: "TUI Destimo", category: "Destination Management" },
        { name: "Hotelbeds", category: "B2B Bedbank API" },
        { name: "AmericanTours", category: "Tour Operator Network" },
      ],
    },
    {
      title: "Payments, CRM & Other Business Platforms",
      description:
        "Payment services, customer management and operational business applications.",
      systems: [
        { name: "Windcave", category: "Payment Gateway" },
        { name: "Salesforce", category: "Enterprise CRM" },
        { name: "Origin Energy", category: "Utility & Billing Portals" },
        { name: "PCMS", category: "Commerce & POS" },
      ],
    },
  ];

  return (
    <section id="systems" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[380px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          We understand the systems your business runs on.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our team has experience working with a range of accounting, hospitality, travel, booking, payment, and business management platforms. This familiarity helps us understand existing workflows and adapt to the systems our clients use.
        </p>
      </div>

      {/* Systems Carousel Coming Soon Container */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-8 sm:p-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_40px_-12px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Ambient subtle backdrop glow */}
        <div className="absolute inset-0 bg-radial from-cyan-500/10 via-blue-600/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Animated Carousel Wireframe / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#00F0FF] text-xs font-mono font-medium tracking-wide mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>CAROUSEL COMING SOON</span>
          </div>

          {/* Carousel Preview Wireframe Graphic */}
          <div className="w-full max-w-md my-4 py-6 px-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center gap-3 sm:gap-4 overflow-hidden">
            <div className="w-20 sm:w-28 h-16 sm:h-20 rounded-lg bg-white/[0.04] border border-white/5 opacity-40 scale-90 flex items-center justify-center text-[10px] font-mono text-slate-500">
              Accounting
            </div>
            <div className="w-28 sm:w-36 h-20 sm:h-24 rounded-xl bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center gap-1">
              <svg className="w-6 h-6 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span className="text-[11px] font-mono font-semibold text-cyan-300">Interactive Wall</span>
            </div>
            <div className="w-20 sm:w-28 h-16 sm:h-20 rounded-lg bg-white/[0.04] border border-white/5 opacity-40 scale-90 flex items-center justify-center text-[10px] font-mono text-slate-500">
              Hospitality
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
            Interactive Systems Carousel Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5 max-w-lg">
            We are preparing an interactive visual carousel showcasing verified platforms across Accounting, Hospitality, Travel Distribution, and Enterprise CRM.
          </p>

          {/* Sector preview tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {cat.title} ({cat.systems.slice(0, 3).map((s) => s.name).join(" · ")}...)
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Beneath the Logo Wall & Adaptability Banner */}
      <div className="relative z-10 mt-8 rounded-2xl sm:rounded-3xl bg-[#0E131F]/90 border border-white/10 p-6 sm:p-10 md:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_40px_-12px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <h4 className="text-lg sm:text-xl font-bold text-white">
            Already using a different system? We can adapt.
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every business has its own tools, workflows, and operating procedures. Our approach is to understand your existing environment, learn your processes, and work within your established systems wherever appropriate.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Whether you need technical integration, application support, routine system checks, invoice-related assistance, or trained personnel for back-office operations, we can discuss a service model that fits your requirements.
          </p>
        </div>

        <button
          onClick={() => onOpenContact("Business Systems & Operational Support")}
          className="shrink-0 px-6 sm:px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.98] transition-all shadow-[0_0_20px_-3px_rgba(59,130,246,0.5)] cursor-pointer"
        >
          Discuss Your Systems & Support Needs
        </button>
      </div>

      {/* Trademark & Legal Experience Disclaimer */}
      <p className="relative z-10 text-[11px] font-mono text-slate-500 text-center pt-6 max-w-3xl mx-auto">
        All trademarks and logos belong to their respective owners. Their inclusion indicates relevant team experience only and does not imply endorsement or partnership.
      </p>
    </section>
  );
}

export default SystemsExperience;
