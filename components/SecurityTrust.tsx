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
    <section id="security" className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[320px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.07] via-[#0B0F19]/40 to-[#0B0F19]/30 backdrop-blur-3xl border border-white/15 p-5 sm:p-8 md:p-10 lg:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_40px_-15px_rgba(0,0,0,0.35)]">
        <div className="max-w-3xl mb-7 sm:mb-9 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
            Responsible delivery. Clear expectations.
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            We recognise the importance of protecting business information, application access, and operational data. Every engagement should begin with clear responsibilities and agreed procedures for accessing and handling client information.
          </p>
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-400 font-medium">
            Depending on the engagement, our working practices can include:
          </p>
        </div>

        {/* 5 Working Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 transition-all duration-300 flex flex-col justify-start group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)]"
            >
              <div className="mb-2.5 sm:mb-3">
                <span className="font-tight text-xs sm:text-[13px] font-bold text-cyan-300 uppercase tracking-wider">
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
