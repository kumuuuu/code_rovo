"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = [
        { id: "home", name: "Home" },
        { id: "services", name: "Services" },
        { id: "how-we-work", name: "How We Work" },
        { id: "about", name: "About" },
      ];

      const scrollPosition = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "px-4 sm:px-6" : "px-0"
      }`}
    >
      {/* 
        Single continuous morphing nav bar:
        - Full-width edge-to-edge with bottom border when at the top.
        - Smoothly animates into a centered floating frosted island dock when scrolling down.
        - No disconnected wrapper borders to prevent any white line artifacts.
      */}
      <nav
        className={`pointer-events-auto w-full flex items-center justify-between border border-solid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "max-w-4xl lg:max-w-5xl mt-3 sm:mt-4 rounded-full px-5 sm:px-7 py-2.5 bg-[#0D111A]/85 backdrop-blur-2xl border-white/12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(59,130,246,0.22)]"
            : "max-w-full mt-0 rounded-none px-6 sm:px-10 lg:px-16 py-4 sm:py-4.5 bg-[#07090E]/85 backdrop-blur-xl border-t-transparent border-x-transparent border-b-white/[0.08] shadow-none"
        }`}
      >
        {/* Left: Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none cursor-pointer select-none"
        >
          <Logo className="h-7.5 w-auto" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={() => onOpenContact()}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_-3px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] cursor-pointer"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact()}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB]"
          >
            Let&apos;s Talk
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
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

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed top-20 inset-x-4 max-w-md mx-auto bg-[#07090E]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === link.name
                    ? "text-white font-semibold bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] text-center"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
