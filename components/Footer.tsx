import React from "react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative border-t border-white/8 bg-[#07090E] pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 text-slate-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-white/6">
          {/* Col 1: Brand & Social (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <Logo variant="footer" className="h-10 sm:h-11 md:h-12 w-auto" />
            <div className="text-xs font-mono tracking-wider text-cyan-400 uppercase pt-1 font-semibold">
              Your Team Beyond Borders.
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              CodeRovo delivers international technology outsourcing, dedicated remote development squads, and practical business systems support for scaling companies worldwide.
            </p>

            {/* Social Links - LinkedIn & Instagram */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors inline-block cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors inline-block cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="/services/software-development" className="py-1 inline-block hover:text-cyan-300 transition-colors">Custom Software Development</a></li>
              <li><a href="/services/monthly-outsourcing" className="py-1 inline-block hover:text-cyan-300 transition-colors">Dedicated Remote Teams</a></li>
              <li><a href="/services/business-systems-support" className="py-1 inline-block hover:text-cyan-300 transition-colors">Business Systems & Operations</a></li>
              <li><a href="/services/project-based-services" className="py-1 inline-block hover:text-cyan-300 transition-colors">Project-Based Delivery</a></li>
              <li><a href="/services/software-development#capabilities" className="py-1 inline-block hover:text-cyan-300 transition-colors">API & System Integration</a></li>
              <li><a href="/services/business-systems-support#support" className="py-1 inline-block hover:text-cyan-300 transition-colors">IT Support & Maintenance</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Approach (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Company
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><a href="#home" className="py-1 inline-block hover:text-white transition-colors">Overview</a></li>
              <li><a href="#about" className="py-1 inline-block hover:text-white transition-colors">About CodeRovo</a></li>
              <li><a href="#how-we-work" className="py-1 inline-block hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#systems" className="py-1 inline-block hover:text-white transition-colors">Systems We Know</a></li>
              <li><a href="#security" className="py-1 inline-block hover:text-white transition-colors">Trust & Security</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Direct Contact
            </h4>
            <p className="text-sm text-slate-300">
              Ready to explore software development or back-office operational outsourcing? Connect with our team.
            </p>
            <div className="pt-1 space-y-1">
              <div>
                <a
                  href="mailto:hello@coderovo.com"
                  className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors py-0.5 inline-block"
                >
                  hello@coderovo.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+94705286873"
                  className="text-sm font-mono text-slate-300 hover:text-white transition-colors py-0.5 inline-block"
                >
                  +94 705286873
                </a>
              </div>
              {/* <div className="text-xs text-slate-500 pt-1 font-mono">
                www.coderovo.com
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {currentYear} CodeRovo. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a href="#" className="py-1 hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="py-1 hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#security" className="py-1 hover:text-slate-400 transition-colors">Security Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
