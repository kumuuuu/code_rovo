"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team Model", href: "#team" },
    { name: "Why Us", href: "#why-us" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none flex justify-center">
      {/* Floating Centered Dock */}
      <nav
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? "glass-dock shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(59,130,246,0.15)] border-white/12"
            : "bg-[#0D111A]/85 backdrop-blur-md border-white/8 shadow-lg"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center group cursor-pointer focus:outline-none">
          <Logo className="h-7 w-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live Availability Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono uppercase tracking-wider text-slate-300 select-none">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span>Available for sprints</span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => onOpenContact()}
            className="px-4 py-2 rounded-full text-xs font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all duration-200 shadow-[0_0_20px_-2px_rgba(59,130,246,0.4)] hover:shadow-[0_0_24px_rgba(0,240,255,0.6)] cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact()}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#07090E] bg-white hover:bg-slate-100"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed top-20 inset-x-4 max-w-md mx-auto bg-[#0D111A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
              <span>Available for engineering sprints</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-[#07090E] bg-white hover:bg-slate-100 text-center"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
