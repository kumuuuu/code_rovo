"use client";

import React, { useState } from "react";
import { CoderovoLogo } from "@/components/branding/CoderovoLogo";

export default function LogoPreviewPage() {
  const [animated, setAnimated] = useState(true);
  const [interactive, setInteractive] = useState(true);
  const [glow, setGlow] = useState(true);
  const [size, setSize] = useState(300);

  return (
    <div className="min-h-screen bg-[#07090E] text-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          Coderovo Logo Component Inspection
        </h1>
        <p className="text-sm text-slate-400">
          Standalone verification for liquid animation, dot breathing, and subtle glow.
        </p>
      </div>

      <div className="p-12 rounded-3xl bg-[#0D111A]/80 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col items-center justify-center">
        <CoderovoLogo
          size={size}
          animated={animated}
          interactive={interactive}
          glow={glow}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-4 items-center justify-center bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs font-mono">
        <button
          onClick={() => setAnimated(!animated)}
          className={`px-3 py-1.5 rounded-full transition-colors ${
            animated ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-white/10 text-slate-400"
          }`}
        >
          Animated: {animated ? "ON" : "OFF"}
        </button>

        <button
          onClick={() => setInteractive(!interactive)}
          className={`px-3 py-1.5 rounded-full transition-colors ${
            interactive ? "bg-blue-500/20 text-blue-300 border border-blue-500/40" : "bg-white/10 text-slate-400"
          }`}
        >
          Interactive: {interactive ? "ON" : "OFF"}
        </button>

        <button
          onClick={() => setGlow(!glow)}
          className={`px-3 py-1.5 rounded-full transition-colors ${
            glow ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "bg-white/10 text-slate-400"
          }`}
        >
          Glow: {glow ? "ON" : "OFF"}
        </button>

        <div className="flex items-center gap-2 text-slate-400 pl-4 border-l border-white/10">
          <span>Size:</span>
          <button
            onClick={() => setSize(180)}
            className={`px-2 py-1 rounded ${size === 180 ? "text-cyan-300 font-bold" : ""}`}
          >
            180px
          </button>
          <button
            onClick={() => setSize(300)}
            className={`px-2 py-1 rounded ${size === 300 ? "text-cyan-300 font-bold" : ""}`}
          >
            300px
          </button>
          <button
            onClick={() => setSize(420)}
            className={`px-2 py-1 rounded ${size === 420 ? "text-cyan-300 font-bold" : ""}`}
          >
            420px
          </button>
        </div>
      </div>
    </div>
  );
}
