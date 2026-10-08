"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CompanyStats } from "@/components/CompanyStats";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamModel } from "@/components/TeamModel";
import { WhyUs } from "@/components/WhyUs";
import { TechStack } from "@/components/TechStack";
import { ProcessFlow } from "@/components/ProcessFlow";
import { CaseStudies } from "@/components/CaseStudies";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Software Development");

  const handleOpenContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#E2E8F0] selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Floating Centered Dock Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main className="relative flex flex-col">
        {/* 02. Hero Section */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* 03. Company Stats & Credibility Bento */}
        <CompanyStats />

        {/* 04. Core Services Matrix */}
        <ServicesSection onSelectService={handleOpenContact} />

        {/* 05. Outsourcing / Team Capability Model */}
        <TeamModel />

        {/* 06. Why Coderovo (Trust & Craft) */}
        <WhyUs />

        {/* 07. Technology Stack */}
        <TechStack />

        {/* 08. How We Work (7-Stage Lifecycle) */}
        <ProcessFlow />

        {/* 09. Featured Work / Projects */}
        <CaseStudies onOpenContact={handleOpenContact} />

        {/* 10. Final Call to Action */}
        <CallToAction onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 11. Comprehensive Footer */}
      <Footer />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
