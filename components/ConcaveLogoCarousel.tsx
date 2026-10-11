"use client";

import React, { useState, useEffect } from "react";
import { ConcaveCarousel, ConcaveCarouselItem } from "./ui/ConcaveCarousel";

const TECH_SUBTITLES: Record<string, string> = {
  "React": "Modern Component-Driven Frontend Architecture",
  "Next.js": "Server-Rendered React & Edge Web Applications",
  "Node.js": "High-Concurrency Asynchronous Backend Runtime",
  "Java": "Enterprise Core Computing & High-Reliability Systems",
  "Spring Boot": "Production-Grade Microservices & Cloud-Native APIs",
  "Docker": "Containerized Workflows & Deterministic Deployments",
  "MongoDB": "Scalable Document-Store NoSQL Database",
  "MySQL": "ACID-Compliant Relational Database Engine",
  "Keycloak": "Open-Source Identity & Access Management",
  "JWT": "Stateless Authentication & Secure Token Exchange",
};

// Initial fallback list matching files in public/Logos
const INITIAL_LOGOS: ConcaveCarouselItem[] = [
  { src: "/Logos/React.png", alt: "React", title: "React", subtitle: TECH_SUBTITLES["React"] },
  { src: "/Logos/next js.png", alt: "Next.js", title: "Next.js", subtitle: TECH_SUBTITLES["Next.js"] },
  { src: "/Logos/node-js-icon.png", alt: "Node.js", title: "Node.js", subtitle: TECH_SUBTITLES["Node.js"] },
  { src: "/Logos/java-programming-language-icon.png", alt: "Java", title: "Java", subtitle: TECH_SUBTITLES["Java"] },
  { src: "/Logos/spring-boot-icon.png", alt: "Spring Boot", title: "Spring Boot", subtitle: TECH_SUBTITLES["Spring Boot"] },
  { src: "/Logos/docker-icon.png", alt: "Docker", title: "Docker", subtitle: TECH_SUBTITLES["Docker"] },
  { src: "/Logos/mongodb-seeklogo.png", alt: "MongoDB", title: "MongoDB", subtitle: TECH_SUBTITLES["MongoDB"] },
  { src: "/Logos/mysql-icon.png", alt: "MySQL", title: "MySQL", subtitle: TECH_SUBTITLES["MySQL"] },
  { src: "/Logos/keycloak-seeklogo.png", alt: "Keycloak", title: "Keycloak", subtitle: TECH_SUBTITLES["Keycloak"] },
  { src: "/Logos/jwt-seeklogo.png", alt: "JWT", title: "JWT", subtitle: TECH_SUBTITLES["JWT"] },
];

// 5 Categorized Production Technology Groups from blueprint
const TECH_CATEGORIES = [
  {
    category: "Frontend & Web",
    badge: "Client Architecture",
    technologies: ["React", "Next.js", "TypeScript", "HTML / CSS"],
  },
  {
    category: "Backend & APIs",
    badge: "Server & Microservices",
    technologies: ["Java", "Spring Boot", "Node.js", "REST APIs", "Swagger / OpenAPI"],
  },
  {
    category: "Databases & Authentication",
    badge: "Data & Security",
    technologies: ["MySQL", "SQL", "MongoDB", "JWT", "Keycloak"],
  },
  {
    category: "Integrations & Platforms",
    badge: "Ecosystem Connectivity",
    technologies: ["Shopify APIs", "Shopify Extensions", "Meta Graph API", "Webhooks"],
  },
  {
    category: "Deployment & Quality",
    badge: "DevOps & QA",
    technologies: ["Docker / Compose", "Nginx", "VPS", "Vercel", "Postman"],
  },
];

export function ConcaveLogoCarousel() {
  const [items, setItems] = useState<ConcaveCarouselItem[]>(INITIAL_LOGOS);

  // Dynamically load logos from public/Logos via API
  useEffect(() => {
    let isMounted = true;
    async function loadLogos() {
      try {
        const res = await fetch("/api/logos");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.logos && Array.isArray(data.logos) && data.logos.length > 0) {
            const formatted: ConcaveCarouselItem[] = data.logos.map(
              (item: { src: string; name: string }) => ({
                src: item.src,
                alt: item.name,
                title: item.name,
                subtitle: TECH_SUBTITLES[item.name] || "Verified Production Engineering Tool",
              })
            );
            setItems(formatted);
          }
        }
      } catch (err) {
        console.warn("Could not load dynamic logos from API, using fallback list:", err);
      }
    }

    loadLogos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="tech"
      className="relative px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto scroll-mt-20 overflow-hidden"
    >
      {/* Background ambient radial glow matching website theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/12 to-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          The technology behind better business solutions.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our team works across modern web technologies, backend frameworks, databases, APIs, and deployment tools to build, integrate, and maintain solutions that fit business requirements.
        </p>
      </div>

      {/* React Bits "Concave Carousel" Component */}
      <div className="relative z-10 w-full mb-12 sm:mb-16">
        <ConcaveCarousel
          items={items}
          startIndex={0}
          aspect={1.25}
          size={0.46}
          curvature={0.72}
          distance={4}
          tilt={0}
          gap={16}
          radius={14}
          reflection={0.06}
          dim={0.35}
          autoplay="drift"
          speed={0.16}
          interval={4}
          snap={true}
          inertia={0.5}
          pauseOnHover={true}
          draggable={true}
          wheel={true}
          captions={true}
          controls={true}
          backgroundColor="transparent"
          ariaLabel="Technology stack concave carousel"
        />
      </div>

      {/* Categorized Compact Technology Grid - HIDDEN / COMMENTED OUT
      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0B0F19]/90 border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        <div className="border-b border-white/8 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Categorized Technology Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Organized by layer of the production software architecture.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 self-start sm:self-auto">
            Production Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#121828]/70 border border-white/8 hover:border-cyan-400/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  {cat.badge}
                </span>
                <h4 className="font-bold text-sm text-white mt-1 mb-3">
                  {cat.category}
                </h4>

                <ul className="space-y-2">
                  {cat.technologies.map((tech, tIdx) => (
                    <li
                      key={tIdx}
                      className="text-xs text-slate-300 flex items-center gap-2 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs font-mono text-slate-500">
          <span>
            We only display technologies our team can genuinely support in production environments.
          </span>
          <span className="text-cyan-400/80">
            Zero Unverified Claims
          </span>
        </div>
      </div>
      */}
    </section>
  );
}

export default ConcaveLogoCarousel;
