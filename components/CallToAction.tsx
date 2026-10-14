"use client";

import React from "react";

interface CallToActionProps {
  onOpenContact: () => void;
}

export function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 scroll-mt-20">
      <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl border border-white/15 p-8 sm:p-12 md:p-16 lg:p-20 text-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_50px_-15px_rgba(0,0,0,0.5)]">
        {/* Concentric radial glow using brand violet & cyan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-7">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.15] sm:leading-[1.12] text-balance">
            Let&apos;s build a better way forward.
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed font-normal text-pretty">
            Tell us what your business needs. Whether it&apos;s a software project, a dedicated remote team, or support for your existing systems, let&apos;s explore how CodeRovo can help.
          </p>

          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold text-[#07090E] bg-white hover:bg-slate-100 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] hover:shadow-[0_0_45px_rgba(59,130,246,0.65)] flex items-center justify-center cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-300">
            <span>
              Email:{" "}
              <a
                href="mailto:hello@coderovo.com"
                className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors"
              >
                hello@coderovo.com
              </a>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>
              Phone:{" "}
              <a
                href="tel:+94705286873"
                className="text-slate-200 hover:text-white font-medium transition-colors"
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
