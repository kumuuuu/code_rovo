"use client";

import React from "react";
import Link from "next/link";

interface ServicesSectionProps {
  onSelectService: (service: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      num: "01",
      title: "Custom Software Development",
      href: "/services/software-development",
      description:
        "Build and improve digital solutions tailored to your business requirements, workflows, and customers.",
      tags: [
        "Custom web applications",
        "Admin dashboards",
        "Booking and management systems",
        "API development",
        "Third-party integrations",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Dedicated Remote Teams & Team Extension",
      description:
        "Add skilled team members to your existing operations or engage a dedicated team to support a defined project or ongoing development roadmap.",
      tags: [
        "Developer support",
        "Remote team extension",
        "Ongoing development",
        "Flexible engagement models",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Business Systems & Back-Office Support",
      href: "/services/business-systems-support",
      description:
        "Support day-to-day business processes using accounting, hospitality, booking, CRM, and other operational systems. Services can be tailored to the client's processes and access requirements.",
      tags: [
        "Data entry & validation",
        "System checks",
        "Invoice & transaction checks",
        "Reconciliation assistance",
        "Operational administration",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "API Development & System Integration",
      description:
        "Connect business applications, automate data flows, and help systems exchange information more efficiently.",
      tags: [
        "REST APIs",
        "Platform integrations",
        "Webhooks",
        "Authentication",
        "Notifications",
        "Data exchange",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "AI & Business Process Automation",
      description:
        "Identify repetitive tasks and explore practical automation opportunities that can reduce manual effort and improve workflow consistency.",
      tags: [
        "Workflow automation",
        "AI-enabled features",
        "Process improvement",
        "Automated notifications & data handling",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "IT Support, Maintenance & Deployment",
      description:
        "Help keep existing applications and digital systems maintained, updated, tested, and deployed according to agreed requirements.",
      tags: [
        "Bug fixing & troubleshooting",
        "Application updates",
        "Server & domain configuration",
        "Docker & deployment",
        "QA & testing",
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
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
            key={item.num}
            className="group relative rounded-2xl bg-[#0E131F]/80 hover:bg-[#131A29]/95 border border-white/8 hover:border-cyan-500/40 p-5 sm:p-7 md:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.15)] overflow-hidden"
          >
            {/* Top Row: Numeric Badge + Line Icon */}
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {item.num}
                </span>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-cyan-300 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2.5 sm:mt-3 text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Tags bullet points */}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row: CTA link */}
            <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
              {item.href ? (
                <Link
                  href={item.href}
                  className="py-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore service details</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ) : (
                <button
                  onClick={() => onSelectService(item.title)}
                  className="py-1 text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Discuss this service</span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </button>
              )}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA Banner in section */}
      <div className="mt-10 sm:mt-14 text-center">
        <button
          onClick={() => onSelectService("Custom Software Development")}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
        >
          <span>Have specific service requirements? Let&apos;s talk</span>
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
