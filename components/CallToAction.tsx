"use client";

import React from "react";

interface CallToActionProps {
  onOpenContact: () => void;
}

export function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section id="contact" className="relative px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-[#0F1422] to-[#080B12] border border-white/10 p-6 sm:p-12 md:p-20 text-center overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)]">
        {/* Concentric radial glow using brand violet & cyan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Let&apos;s build a better way forward.
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us what your business needs. Whether it&apos;s a software project, a dedicated remote team, or support for your existing systems, let&apos;s explore how CodeRovo can help.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-[#07090E] bg-white hover:bg-slate-100 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] hover:shadow-[0_0_45px_rgba(59,130,246,0.65)] flex items-center justify-center cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <span>
              Email:{" "}
              <a
                href="mailto:hello@coderovo.com"
                className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors font-mono"
              >
                hello@coderovo.com
              </a>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>
              Phone:{" "}
              <a
                href="tel:+94705286873"
                className="text-slate-300 hover:text-white transition-colors font-mono"
              >
                +94 705286873
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
