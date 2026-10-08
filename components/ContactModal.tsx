"use client";

import React, { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService = "Software Development" }: ContactModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelectedService(defaultService);
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    "Software Development",
    "Dedicated Teams",
    "Team Extension",
    "UI/UX Engineering",
    "Cloud & DevOps",
    "Maintenance & SLA",
  ];

  const budgetTiers = [
    "< $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07090E]/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0D111A] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 overflow-hidden my-8">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-gradient-to-tr from-purple-500/15 via-blue-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none"
          aria-label="Close dialog"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Inquiry Received</h3>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for reaching out to Coderovo. Our principal engineering lead will review your project requirements and connect with you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                INITIATE ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">
                Start a Conversation
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Tell us about your technical goals. We assemble dedicated senior talent customized to your specifications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Area of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-3 py-2 text-xs rounded-lg text-left transition-all border ${
                        selectedService === service
                          ? "bg-blue-600/20 border-cyan-400 text-cyan-200 font-medium shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                          : "bg-[#131824] border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#131824] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#131824] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#131824] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#131824] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  >
                    {budgetTiers.map((tier) => (
                      <option key={tier} value={tier} className="bg-[#0D111A] text-white">
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Project Scope or Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your technical stack requirements, timeline, or current bottlenecks..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#131824] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Direct inquiry: <a href="mailto:hello@coderovo.com" className="text-cyan-400 hover:underline">hello@coderovo.com</a>
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full font-medium text-sm text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2 group"
                >
                  Send Inquiry
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
