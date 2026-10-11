"use client";

import React from "react";

export function SecurityTrust() {
  const practices = [
    {
      title: "Least-Privilege Access",
      description: "Role-based access controls and least-privilege permissioning for all client systems and repositories.",
    },
    {
      title: "Confidentiality & NDA",
      description: "Strict confidentiality and documented data-handling protocols signed before project onboarding.",
    },
    {
      title: "Credential Governance",
      description: "Secure, encrypted secret managers for credential exchange without storing credentials in plain text.",
    },
    {
      title: "Documented Workflows",
      description: "Structured operational runbooks, peer approvals, change logs, and formal handover procedures.",
    },
    {
      title: "Change Management & QA",
      description: "Testing, staging reviews, and structured deployment pipelines appropriate to your technical stack.",
    },
  ];

  return (
    <section id="security" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Responsible delivery. Clear expectations.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            We recognise the importance of protecting business information, application access, and operational data. Every engagement begins with clear responsibilities and agreed procedures for accessing and handling client information.
          </p>
        </div>

        {/* 5 Practices Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121828]/70 border border-white/8 hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <h3 className="font-semibold text-sm sm:text-base text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Verification Assurance Card */}
          <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              Transparent Standards
            </span>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              We adhere to realistic, substantiated security protocols tailored to your technical requirements and compliance needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurityTrust;
