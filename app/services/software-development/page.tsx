"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function SoftwareDevelopmentPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="pt-28 sm:pt-36 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-cyan-300">Software Development</span>
            </div>

            <span className="text-xs uppercase font-mono font-medium tracking-[0.25em] text-[#00F0FF] px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
              COMMERCIAL CAPABILITY
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.14]">
              Custom Software Development
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
              Build and improve digital solutions tailored to your business requirements, workflows, and customers.
            </p>

            <p className="mt-3.5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              CodeRovo engineers reliable web applications, internal operational tools, booking systems, and backend services. We focus on clean architecture, verifiable delivery milestones, and software that can adapt as your company scales.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_30px_-5px_rgba(0,240,255,0.45)] cursor-pointer flex items-center gap-2"
              >
                <span>Discuss a Software Project</span>
                <span>↗</span>
              </button>

              <Link
                href="/#services"
                className="px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>

        {/* What We Deliver Grid */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="border-b border-white/8 pb-4 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              What We Build & Deliver
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Targeted engineering solutions designed around your specific business logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Web Applications",
                description: "Full-stack client portals, customer-facing platforms, and SaaS products built with modern React, Next.js, and TypeScript.",
                items: ["Interactive user interfaces", "Secure user authentication", "Responsive mobile layouts", "Fast edge rendering"],
              },
              {
                title: "Admin Dashboards & Portals",
                description: "Centralized control panels giving leadership and operations teams clear visibility and control over internal business processes.",
                items: ["Role-based access controls", "Real-time metrics & charts", "Audit logs & export tools", "Data management interfaces"],
              },
              {
                title: "Booking & Management Systems",
                description: "Reservation flows, capacity trackers, and resource management solutions tailored to real-world operations.",
                items: ["Multi-step checkout flows", "Calendar scheduling & availability", "Payment gateway integration", "Automated email notifications"],
              },
              {
                title: "API Development & Microservices",
                description: "Robust REST and GraphQL APIs architected using Java Spring Boot, Node.js, and structured relational databases.",
                items: ["OpenAPI / Swagger specifications", "Rate limiting & JWT auth", "High-concurrency data models", "Microservice decoupling"],
              },
              {
                title: "Third-Party Platform Integrations",
                description: "Bridging your software with payment processors, CRMs, marketing platforms, and operational tools.",
                items: ["Webhook ingestion engines", "Payment gateway connectivity", "Sync with accounting platforms", "CRM contact synchronization"],
              },
              {
                title: "Database Design & Deployment",
                description: "Reliable data persistence, indexing, schema optimization, and containerized deployment infrastructure.",
                items: ["MySQL & PostgreSQL schemas", "MongoDB document storage", "Docker containerization", "Cloud server provisioning"],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0E131F]/80 border border-white/8 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mt-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">{card.description}</p>
                </div>
                <ul className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                  {card.items.map((it, iIdx) => (
                    <li key={iIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Standards */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Our Engineering Standards
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mb-8 leading-relaxed">
              We write clean, testable code that your current team or future developers can easily understand, maintain, and expand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "TypeScript & Static Types", desc: "Type-safety across frontend and backend to catch regressions before production." },
                { title: "Structured Git Workflows", desc: "Clear branch management, pull request reviews, and documented commit histories." },
                { title: "Automated Testing", desc: "Unit and integration test coverage for critical business logic and payment routines." },
                { title: "Dockerized Environments", desc: "Reproducible container environments ensuring software runs consistently anywhere." },
              ].map((std, sIdx) => (
                <div key={sIdx} className="p-4 sm:p-5 rounded-xl bg-[#121828]/70 border border-white/6">
                  <h3 className="font-semibold text-sm text-white">{std.title}</h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-purple-950/30 border border-cyan-400/20 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Ready to start your software project?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3">
              Share your project requirements, scope, or idea with our team. We will review your goals and outline a clear technical approach.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-[#07090E] bg-white hover:bg-slate-100 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                Discuss Your Project ↗
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService="Custom Software Development"
      />
    </div>
  );
}
