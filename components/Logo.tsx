import React from "react";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = "h-8 w-auto", showWordmark = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Coderovo Interconnected Network Symbol */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square flex-shrink-0"
      >
        <defs>
          <linearGradient id="coderovo-brand-spectrum" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="35%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <linearGradient id="coderovo-glow-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>

          <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background aura */}
        <circle cx="22" cy="22" r="18" fill="url(#coderovo-brand-spectrum)" opacity="0.08" />

        {/* Dynamic interconnected circuit paths */}
        <path
          d="M10 22 C10 14, 18 10, 26 10 C32 10, 36 14, 36 20 C36 28, 28 34, 18 34 C13 34, 10 30, 10 24"
          stroke="url(#coderovo-brand-spectrum)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        <path
          d="M14 15 L28 29"
          stroke="url(#coderovo-brand-spectrum)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        <path
          d="M20 12 C24 16, 24 28, 30 32"
          stroke="url(#coderovo-brand-spectrum)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Glowing Network Nodes */}
        {/* Node 1: Cyan Leading Edge */}
        <circle cx="10" cy="22" r="3" fill="#00F0FF" filter="url(#node-glow)" />
        <circle cx="10" cy="22" r="1.5" fill="#FFFFFF" />

        {/* Node 2: Electric Blue */}
        <circle cx="26" cy="10" r="2.5" fill="#3B82F6" filter="url(#node-glow)" />
        <circle cx="26" cy="10" r="1" fill="#FFFFFF" />

        {/* Node 3: Violet / Purple */}
        <circle cx="36" cy="20" r="3.2" fill="#8B5CF6" filter="url(#node-glow)" />
        <circle cx="36" cy="20" r="1.5" fill="#FFFFFF" />

        {/* Node 4: Magenta Anchor */}
        <circle cx="18" cy="34" r="2.5" fill="#EC4899" filter="url(#node-glow)" />
        <circle cx="18" cy="34" r="1" fill="#FFFFFF" />

        {/* Central Core Satellite */}
        <circle cx="23" cy="21" r="2" fill="#00F0FF" opacity="0.9" />
      </svg>

      {/* Modern refined sans-serif wordmark 'Coderovo' */}
      {showWordmark && (
        <span className="font-sans font-bold text-xl tracking-tight text-white flex items-center">
          Coderovo
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F0FF] ml-1 mb-2 shadow-[0_0_8px_#00F0FF]"></span>
        </span>
      )}
    </div>
  );
}
