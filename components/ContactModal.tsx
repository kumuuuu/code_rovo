"use client";

import React, { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICES = [
  "Custom Software Development",
  "Dedicated Remote Teams",
  "Business Systems & Back-Office Support",
  "API Development & Integration",
  "AI & Process Automation",
  "IT Support & Maintenance",
] as const;

const ENGAGEMENT_TYPES = [
  "Project-based",
  "Monthly outsourcing",
  "Not sure",
] as const;

const START_TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "Flexible",
] as const;

export function ContactModal({
  isOpen,
  onClose,
  defaultService = "Custom Software Development",
}: ContactModalProps) {
  // Normalize default service
  const normalizeService = (svc: string) => {
    if (svc === "Software Development") return "Custom Software Development";
    if (svc === "Project-Based Services") return "Custom Software Development";
    if (svc === "Monthly Outsourcing") return "Dedicated Remote Teams";
    if (SERVICES.includes(svc as (typeof SERVICES)[number])) return svc;
    return "Custom Software Development";
  };

  const [selectedServices, setSelectedServices] = useState<string[]>([
    normalizeService(defaultService),
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    requirements: "",
    engagementType: "",
    expectedStart: "",
    systemUrl: "",
  });

  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);

  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setSelectedServices([normalizeService(defaultService)]);
  }

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

  const toggleService = (service: string) => {
    setValidationError(null);
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        // Keep at least one if preferred, or allow unchecking
        if (prev.length === 1) return prev; // keep at least 1 selected
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setValidationError("Please select at least one area of interest.");
      return;
    }
    if (!formData.name.trim() || !formData.email.trim() || !formData.requirements.trim()) {
      setValidationError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setValidationError(null);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07090E]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog with strict Viewport Containment and zero horizontal overflow */}
      <div className="relative w-full max-w-2xl bg-[#0D111A] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-10 max-h-[92vh] flex flex-col overflow-hidden box-border">
        {/* Glow ambient background contained safely inside bounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl md:rounded-3xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-gradient-to-tr from-purple-500/15 via-blue-500/10 to-transparent blur-3xl rounded-full" />
        </div>

        {/* Modal Header & Close Button */}
        <div className="relative flex items-start justify-between p-5 sm:p-7 md:p-8 pb-3 sm:pb-4 border-b border-white/5 z-10 shrink-0">
          <div className="pr-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Start a Conversation
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-xl">
              Tell us what your business needs. Whether you&apos;re planning a software project, expanding your team, or looking for business systems support, we&apos;ll help you explore the right solution.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body with subtle thin custom scrollbar */}
        <div className="relative p-5 sm:p-6 md:p-7 pt-3 pr-3.5 sm:pr-4 md:pr-5 overflow-y-auto overflow-x-hidden scrollbar-thin z-10 flex-1 box-border">
          {submitted ? (
            <div className="py-8 sm:py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_24px_rgba(0,240,255,0.25)]">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Project Enquiry Received
                </h3>
                <p className="text-slate-300 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                  Thank you for reaching out to <span className="text-white font-medium">CodeRovo</span>. Our team will review your requirements and respond within 24 hours with next steps.
                </p>
              </div>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full bg-white text-[#07090E] hover:bg-slate-100 text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {validationError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{validationError}</span>
                </div>
              )}

              {/* 02 — What can we help you with? */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Area of Interest <span className="text-rose-400 font-semibold ml-0.5">*</span>
                  </label>
                  <span className="text-[10px] sm:text-[11px] text-slate-500">
                    Select one or more
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-3 py-2.5 text-xs rounded-xl text-left transition-all border flex items-center justify-between gap-2 cursor-pointer ${isSelected
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-200 font-medium shadow-[0_0_12px_rgba(0,240,255,0.18)]"
                            : "bg-[#131824] border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200 active:bg-white/10"
                          }`}
                        role="checkbox"
                        aria-checked={isSelected}
                      >
                        <span className="leading-snug">{service}</span>
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border transition-all ${isSelected
                              ? "bg-cyan-400 border-cyan-400 text-[#07090E]"
                              : "border-white/20 bg-white/5"
                            }`}
                        >
                          {isSelected && (
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 03 — Your contact details */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Your Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Full name <span className="text-rose-400 font-semibold ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#131824] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all box-border"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Work email <span className="text-rose-400 font-semibold ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#131824] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all box-border"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Company / organization <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#131824] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all box-border"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Company website <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-[#131824] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all box-border"
                    />
                  </div>
                </div>
              </div>

              {/* 04 — Tell us about your requirements */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Project Scope or Requirements <span className="text-rose-400 font-semibold ml-0.5">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="What are you looking to build, improve, or outsource? Share your goals, current challenges, or expected requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full bg-[#131824] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none leading-relaxed box-border scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                />
              </div>

              {/* 05 — Additional Project Details (optional Collapsible) */}
              <div className="border border-white/5 rounded-2xl bg-[#131824]/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                  aria-expanded={showAdditionalDetails}
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-base">
                      {showAdditionalDetails ? "−" : "＋"}
                    </span>
                    <span>Additional Project Details</span>
                    <span className="text-slate-500 font-normal text-xs">(optional)</span>
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showAdditionalDetails ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showAdditionalDetails && (
                  <div className="p-3.5 sm:p-4 pt-1 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                    {/* Engagement Type */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Engagement Type
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {ENGAGEMENT_TYPES.map((type) => {
                          const isSelected = formData.engagementType === type;
                          return (
                            <button
                              type="button"
                              key={type}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  engagementType: isSelected ? "" : type,
                                })
                              }
                              className={`px-2.5 py-1.5 rounded-lg text-xs text-center border transition-all cursor-pointer ${isSelected
                                  ? "bg-cyan-500/15 border-cyan-400 text-cyan-200 font-medium"
                                  : "bg-[#0D111A] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                                }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Expected Start */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Expected Start
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {START_TIMELINES.map((timeline) => {
                          const isSelected = formData.expectedStart === timeline;
                          return (
                            <button
                              type="button"
                              key={timeline}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  expectedStart: isSelected ? "" : timeline,
                                })
                              }
                              className={`px-2.5 py-1.5 rounded-lg text-xs text-center border transition-all cursor-pointer ${isSelected
                                  ? "bg-cyan-500/15 border-cyan-400 text-cyan-200 font-medium"
                                  : "bg-[#0D111A] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                                }`}
                            >
                              {timeline}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Existing website or system URL */}
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Existing website or system URL <span className="text-slate-500">(optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://app.yourcompany.com or current system link"
                        value={formData.systemUrl}
                        onChange={(e) => setFormData({ ...formData, systemUrl: e.target.value })}
                        className="w-full bg-[#0D111A] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 rounded-xl px-3 py-2 text-base sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-all box-border"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 06 — Submission, direct contact and privacy */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    <span>Prefer email? </span>
                    <a
                      href="mailto:hello@coderovo.com"
                      className="text-cyan-400 hover:underline font-mono ml-1 font-medium"
                    >
                      hello@coderovo.com
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-sm text-[#07090E] bg-white hover:bg-slate-100 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#07090E]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Enquiry
                        {/* <span className="text-xs font-mono font-bold">↗</span> */}
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center sm:text-left">
                  Your information will be handled according to our{" "}
                  <a href="#" className="text-slate-400 hover:text-cyan-400 underline transition-colors">
                    Privacy Policy
                  </a>
                  . We respect your confidentiality.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
