"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ReactiveButton } from "./ui/ReactiveButton";

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Detect active section on scroll
      const sections = [
        { id: "home", name: "Home" },
        { id: "services", name: "Services" },
        { id: "tech", name: "Expertise" },
        // { id: "systems", name: "Systems We Know" },
        { id: "about", name: "About Us" },
        { id: "contact", name: "Contact" },
      ];

      const scrollPosition = window.scrollY + 180;
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
    { name: "Expertise", href: "#tech" },
    // { name: "Systems We Know", href: "#systems" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact", isContact: true },
  ];

  const handleNavClick = (name: string, isContact?: boolean) => {
    setActiveSection(name);
    setMobileMenuOpen(false);
    if (isContact) {
      onOpenContact();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 max-w-full z-50 pointer-events-none flex justify-center transition-all duration-300 ease-out ${scrolled ? "md:px-6" : "px-0"
          }`}
      >
        <nav
          className={`pointer-events-auto w-full max-w-full flex items-center justify-between border-solid transition-all duration-300 ease-out ${scrolled
            ? "h-16 md:h-auto md:max-w-4xl lg:max-w-5xl md:mt-3.5 rounded-none md:rounded-full px-4 sm:px-6 md:px-7 py-0 md:py-2.5 bg-transparent backdrop-blur-md border-b md:border border-white/10 shadow-none md:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "h-16 md:h-auto max-w-full mt-0 rounded-none px-4 sm:px-8 lg:px-16 py-0 md:py-4.5 bg-transparent border-b border-transparent shadow-none"
            }`}
        >
          {/* Left: Brand / Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="flex items-center group focus:outline-none cursor-pointer select-none"
            aria-label="Coderovo Home"
          >
            <Logo className="h-10 sm:h-11 md:h-12 w-auto" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.isContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                    handleNavClick(link.name, link.isContact);
                  }}
                  className={`text-sm font-tight font-medium transition-colors duration-200 cursor-pointer ${isActive
                    ? "text-white font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right: Desktop Action Cluster */}
          <div className="hidden md:flex items-center">
            <ReactiveButton
              onClick={() => onOpenContact()}
              className="px-5 py-2 text-sm rounded-full"
            >
              Discuss a Project
            </ReactiveButton>
          </div>

          {/* Mobile Right Controls: Clean Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-200 hover:text-white active:bg-white/10 border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Dropdown Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col">
          {/* Backdrop below the header */}
          <div
            className="fixed inset-0 bg-[#07090E]/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Integrated Header Dropdown Panel */}
          <div className="relative z-50 w-full mt-16 max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-[#07090E]/95 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-6 shadow-[0_25px_50px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.isContact) {
                        e.preventDefault();
                      }
                      handleNavClick(link.name, link.isContact);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${isActive
                      ? "text-white font-semibold bg-white/10 text-cyan-200 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-white/8 space-y-3">
              <ReactiveButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-sm rounded-xl"
              >
                Discuss a Project
              </ReactiveButton>
              <div className="text-center text-xs text-slate-400">
                Direct inquiry:{" "}
                <a
                  href="mailto:hello@coderovo.com"
                  className="font-mono text-cyan-400 hover:underline"
                >
                  hello@coderovo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
