import React from "react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative border-t border-white/8 bg-[#07090E] pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/6">
          {/* Col 1: Brand & Social (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo className="h-8 w-auto" />
            <div className="text-xs font-mono tracking-wider text-cyan-400 uppercase pt-1">
              Your Team Beyond Borders.
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Coderovo delivers high-order engineering excellence, dedicated development squads, and tailored technology solutions for enterprise innovators and scaling tech companies worldwide.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Dedicated Teams</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Team Extension</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">UI/UX Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Col 3: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-us" className="hover:text-white transition-colors">About Coderovo</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Teams</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Direct Contact
            </h4>
            <p className="text-sm text-slate-300">
              Ready to accelerate your product roadmap? Connect with our senior engineering team.
            </p>
            <div className="pt-1">
              <a
                href="mailto:hello@coderovo.com"
                className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                hello@coderovo.com
              </a>
              <div className="text-xs text-slate-500 mt-1">
                Serving clients worldwide across NA, EMEA & APAC.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} Coderovo. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
