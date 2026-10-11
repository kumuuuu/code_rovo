"use client";

import React from "react";

interface AboutCodeRovoProps {
  onOpenContact: (subject?: string) => void;
}

export function AboutCodeRovo({ onOpenContact }: AboutCodeRovoProps) {
  return (
    <section id="about" className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl bg-[#0E131F]/90 border border-white/10 p-6 sm:p-12 md:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] space-y-8">
          {/* Main Headline */}
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Technology expertise. Practical business support.
            </h2>
          </div>

          {/* Narrative Body Copy */}
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            <p>
              CodeRovo is an IT solutions and outsourcing company focused on helping businesses build digital products, extend their technology capabilities, and support the systems and processes that keep their operations running.
            </p>

            <p>
              Our services span custom software development, remote team extension, API integrations, application maintenance, and business systems and back-office support.
            </p>

            <p>
              We understand that every organisation works differently. That&apos;s why we take the time to understand each client&apos;s requirements, existing systems, and operational processes before shaping a suitable service approach.
            </p>

            <p>
              Whether you need support with a software project, additional development capacity, or assistance with established business applications, CodeRovo aims to provide a flexible and collaborative extension of your team.
            </p>
          </div>

          {/* Brand Promise & CTA Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                CodeRovo — Your Team Beyond Borders.
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Collaborative, scalable technology and operations support.
              </p>
            </div>

            <button
              onClick={() => onOpenContact("About CodeRovo Partnership")}
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer shrink-0"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCodeRovo;
