"use client";

import React from "react";

interface ServicesSectionProps {
  onSelectService: (service: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Build and improve digital solutions tailored to your business requirements, workflows, and customers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Dedicated Remote Teams & Team Extension",
      description:
        "Add skilled team members to your existing operations or engage a dedicated team to support a defined project or ongoing development roadmap.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Business Systems & Back-Office Support",
      description:
        "Support day-to-day business processes using accounting, hospitality, booking, CRM, and other operational systems. Services can be tailored to the client's processes and access requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: "API Development & System Integration",
      description:
        "Connect business applications, automate data flows, and help systems exchange information more efficiently.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "AI & Business Process Automation",
      description:
        "Identify repetitive tasks and explore practical automation opportunities that can reduce manual effort and improve workflow consistency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "IT Support, Maintenance & Deployment",
      description:
        "Help keep existing applications and digital systems maintained, updated, tested, and deployed according to agreed requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Technology and outsourcing solutions built around your business.
        </h2>
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Every business has different technology needs. CodeRovo offers flexible services that help companies develop digital products, extend their teams, maintain existing systems, and manage essential technology and operational tasks.
        </p>
      </div>

      {/* 6-Card Grid (3x2 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-white/35 p-5 sm:p-7 md:p-8 transition-all duration-300 flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(0,240,255,0.08)] overflow-hidden"
          >
            {/* Top Row: Line Icon */}
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
              {item.title}
            </h3>

            <p className="mt-2.5 sm:mt-3 text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer CTA Banner in section */}
      <div className="mt-10 sm:mt-14 text-center">
        <button
          onClick={() => onSelectService("Custom Software Development")}
          className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
        >
          Have specific service requirements? Let&apos;s talk
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
