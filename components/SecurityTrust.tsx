"use client";

import React from "react";

export function SecurityTrust() {
  const practices = [
    {
      title: "Role-Based Access",
      text: "Role-based access and least-privilege permissions.",
    },
    {
      title: "Confidentiality Requirements",
      text: "Agreed confidentiality and data-handling requirements.",
    },
    {
      title: "Sensitive Information",
      text: "Secure handling of credentials and sensitive information.",
    },
    {
      title: "Documented Workflows",
      text: "Documented workflows, approvals, and handovers.",
    },
    {
      title: "Quality & Governance",
      text: "Testing, review, and change-management procedures appropriate to the work.",
    },
  ];

  return (
    <section id="security" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Responsible delivery. Clear expectations.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            We recognise the importance of protecting business information, application access, and operational data. Every engagement should begin with clear responsibilities and agreed procedures for accessing and handling client information.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-medium">
            Depending on the engagement, our working practices can include:
          </p>
        </div>

        {/* 5 Working Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121828]/70 border border-white/8 hover:border-cyan-400/30 transition-all flex flex-col justify-start group"
            >
              <div className="mb-2.5 sm:mb-3">
                <span className="text-xs font-mono font-medium text-cyan-300 uppercase tracking-wider">
                  {item.title}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityTrust;
