"use client";

import React, { useRef } from "react";

interface ReactiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowRadius?: number;
}

export function ReactiveButton({
  children,
  className = "",
  glowRadius = 150,
  onMouseMove,
  ...props
}: ReactiveButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--mouse-x", `${x}px`);
    btnRef.current.style.setProperty("--mouse-y", `${y}px`);
    if (onMouseMove) onMouseMove(e);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group font-semibold text-white bg-gradient-to-r from-blue-600 via-[#2563EB] to-indigo-600 border border-white/20 hover:border-cyan-300/60 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-[0.98] cursor-pointer ${className}`}
      {...props}
    >
      {/* Mouse reactive radial brand gradient spotlight */}
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(${glowRadius}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 255, 0.6), rgba(59, 130, 246, 0.4) 45%, rgba(168, 85, 247, 0.35) 75%, transparent 100%)`,
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {children}
      </span>
    </button>
  );
}

export default ReactiveButton;
