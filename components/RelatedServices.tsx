import React from "react";
import Link from "next/link";

interface RelatedServicesProps {
  currentPath: string;
}

const allServices = [
  {
    title: "Custom Software Development",
    description: "Custom web applications, mobile platforms, APIs, and enterprise cloud solutions.",
    href: "/services/software-development",
  },
  {
    title: "Dedicated Remote Teams",
    description: "Flexible monthly outsourcing and senior engineers dedicated to your sprint cadence.",
    href: "/services/monthly-outsourcing",
  },
  {
    title: "Business Systems & Support",
    description: "Operational system management, ERP/CRM workflow automation, and 24/7 maintenance.",
    href: "/services/business-systems-support",
  },
  {
    title: "Project-Based Delivery",
    description: "Milestone-driven software development with fixed scope and guaranteed timelines.",
    href: "/services/project-based-services",
  },
];

export function RelatedServices({ currentPath }: RelatedServicesProps) {
  const related = allServices.filter((s) => s.href !== currentPath);

  return (
    <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
      <div className="border-t border-white/8 pt-12 sm:pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold block mb-2">
              EXPLORE MORE SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Other Ways to Partner With CodeRovo
            </h2>
          </div>
          <Link
            href="/#services"
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
          >
            View all services
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/6 flex items-center text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <span className="ml-1.5">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedServices;
