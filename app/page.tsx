"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PagePreloader } from "@/components/ui/PagePreloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ConcaveLogoCarousel } from "@/components/ConcaveLogoCarousel";
import { SystemsExperience } from "@/components/SystemsExperience";
import { WhyUs } from "@/components/WhyUs";
import { ProcessFlow } from "@/components/ProcessFlow";
import { EngagementModels } from "@/components/EngagementModels";
import { AboutCodeRovo } from "@/components/AboutCodeRovo";
import { SecurityTrust } from "@/components/SecurityTrust";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

// Lazy-load ContactModal so 24 KiB form bundle is deferred off the critical main thread
const ContactModal = dynamic(
  () => import("@/components/ContactModal").then((mod) => mod.ContactModal),
  { ssr: false }
);

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Custom Software Development");

  const handleOpenContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200 w-full max-w-full overflow-x-hidden">
      {/* Intro Liquid Metaball Loading Animation & Seamless Reveal */}
      <PagePreloader />

      {/* Floating Centered Dock Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main className="relative flex flex-col w-full max-w-full overflow-x-hidden">
        {/* 01. Hero Section */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* 02. What We Do / Services Matrix */}
        <ServicesSection onSelectService={handleOpenContact} />

        {/* 03. Technical Capabilities & Concave 3D Logo Carousel */}
        <ConcaveLogoCarousel />

        {/* 04. Systems and Platforms Experience (Differentiator Logo Wall) - HIDDEN / COMMENTED OUT */}
        {/* <SystemsExperience onOpenContact={handleOpenContact} /> */}

        {/* 05. Why CodeRovo (Partnership & Alignment) */}
        <WhyUs />

        {/* 06. How We Work (5-Stage Structured Process) */}
        <ProcessFlow />

        {/* 07. Engagement Models (Project-Based vs Monthly Outsourcing) */}
        <EngagementModels onOpenContact={handleOpenContact} />

        {/* 08. About CodeRovo (Technology Expertise & Practical Support) */}
        <AboutCodeRovo onOpenContact={handleOpenContact} />

        {/* 09. Trust, Security & Confidentiality */}
        <SecurityTrust />

        {/* 09. Final Call to Action */}
        <CallToAction onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer />

      {/* Interactive Contact & Inquiry Modal (Mounted on Demand) */}
      {isContactOpen && (
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          defaultService={selectedService}
        />
      )}
    </div>
  );
}
