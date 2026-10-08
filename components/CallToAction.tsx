"use client";

import React from "react";

interface CallToActionProps {
  onOpenContact: () => void;
}

export function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="relative px-4 sm:px-6 py-20 max-w-7xl mx-auto">
      <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-[#0F1422] to-[#080B12] border border-white/10 p-10 sm:p-16 md:p-20 text-center overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)]">
        {/* Concentric radial glow using brand violet & cyan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span>LET&apos;S CONNECT</span>
          </div> */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Let&apos;s build something<br />great together.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or need to extend your technology team? Let&apos;s talk about how Coderovo can help turn your vision into production-ready software.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] hover:shadow-[0_0_45px_rgba(59,130,246,0.65)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="pt-2 text-sm text-slate-400">
            or email us directly at{" "}
            <a
              href="mailto:hello@coderovo.com"
              className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors"
            >
              hello@coderovo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
