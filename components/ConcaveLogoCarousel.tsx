"use client";

import React, { useState, useEffect } from "react";
import {
  CurvedWaveCarousel,
  CurvedWaveLogoItem,
} from "./ui/CurvedWaveCarousel";

// Fallback lists from public/Logos/PM
const PM_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "Platform 1", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (1)-Photoroom.png", alt: "Business Platform 1" },
  { name: "Platform 2", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (2)-Photoroom.png", alt: "Business Platform 2" },
  { name: "Platform 3", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (3)-Photoroom.png", alt: "Business Platform 3" },
  { name: "Platform 4", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (4)-Photoroom.png", alt: "Business Platform 4" },
  { name: "Platform 5", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (5)-Photoroom.png", alt: "Business Platform 5" },
  { name: "Platform 6", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (6)-Photoroom.png", alt: "Business Platform 6" },
  { name: "Platform 7", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (7)-Photoroom.png", alt: "Business Platform 7" },
  { name: "Platform 8", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM-Photoroom.png", alt: "Business Platform 8" },
  { name: "Platform 9", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (1)-Photoroom.png", alt: "Business Platform 9" },
  { name: "Platform 10", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (2)-Photoroom.png", alt: "Business Platform 10" },
  { name: "Platform 11", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (3)-Photoroom.png", alt: "Business Platform 11" },
  { name: "Platform 12", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (4)-Photoroom.png", alt: "Business Platform 12" },
  { name: "Platform 13", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (5)-Photoroom.png", alt: "Business Platform 13" },
  { name: "Platform 14", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (6)-Photoroom.png", alt: "Business Platform 14" },
  { name: "Platform 15", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (7)-Photoroom.png", alt: "Business Platform 15" },
  { name: "Platform 16", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (8)-Photoroom.png", alt: "Business Platform 16", scale: 1.65 },
  { name: "Platform 17", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (9)-Photoroom.png", alt: "Business Platform 17" },
  { name: "Platform 18", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM-Photoroom.png", alt: "Business Platform 18" },
];

// Fallback lists from public/Logos/SE
const SE_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "React", src: "/Logos/SE/React.png", alt: "React" },
  { name: "Next.js", src: "/Logos/SE/next js.png", alt: "Next.js", invert: true },
  { name: "Node.js", src: "/Logos/SE/node-js-icon.png", alt: "Node.js" },
  { name: "Java", src: "/Logos/SE/java-programming-language-icon.png", alt: "Java" },
  { name: "Spring Boot", src: "/Logos/SE/spring-boot-icon.png", alt: "Spring Boot" },
  { name: "Docker", src: "/Logos/SE/docker-icon.png", alt: "Docker" },
  { name: "MongoDB", src: "/Logos/SE/mongodb-seeklogo.png", alt: "MongoDB" },
  { name: "MySQL", src: "/Logos/SE/mysql-icon.png", alt: "MySQL" },
  { name: "Keycloak", src: "/Logos/SE/keycloak-seeklogo.png", alt: "Keycloak" },
  { name: "JWT", src: "/Logos/SE/jwt-seeklogo.png", alt: "JWT" },
];

export function ConcaveLogoCarousel() {
  const [pmLogos, setPmLogos] = useState<CurvedWaveLogoItem[]>(PM_FALLBACK_ITEMS);
  const [seLogos, setSeLogos] = useState<CurvedWaveLogoItem[]>(SE_FALLBACK_ITEMS);

  // Dynamically load logos from public/Logos/PM and public/Logos/SE via API
  useEffect(() => {
    let isMounted = true;
    async function loadLogos() {
      try {
        const res = await fetch("/api/logos");
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            if (data.pm && Array.isArray(data.pm) && data.pm.length > 0) {
              setPmLogos(
                data.pm.map((item: { name: string; src: string }) => {
                  const isMyob =
                    item.src.includes("WhatsApp Image 2026-10-12 at 2.15.51 AM (8)-Photoroom") ||
                    item.name.toLowerCase().includes("myob");
                  return {
                    name: item.name,
                    src: item.src,
                    alt: item.name,
                    scale: isMyob ? 1.65 : 1,
                  };
                })
              );
            }
            if (data.se && Array.isArray(data.se) && data.se.length > 0) {
              setSeLogos(
                data.se.map((item: { name: string; src: string }) => {
                  const isNext =
                    item.src.toLowerCase().includes("next js") ||
                    item.name.toLowerCase().includes("next");
                  return {
                    name: item.name,
                    src: item.src,
                    alt: item.name,
                    invert: isNext,
                  };
                })
              );
            }
          }
        }
      } catch (err) {
        console.warn("Could not load dynamic logos from API, using fallback lists:", err);
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
      className="relative py-16 sm:py-24 w-full overflow-hidden scroll-mt-20"
    >

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 sm:mb-14 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          The technology behind better business solutions.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our team works across modern web technologies, backend frameworks, databases, APIs, and deployment tools to build, integrate, and maintain solutions that fit business requirements.
        </p>
      </div>

      {/* Dual Row Frameless Straight Linear Flow Carousels */}
      <div className="relative z-10 w-full space-y-6 sm:space-y-8">
        {/* Row 1: PM Logos (Straight Horizontal Conveyor Flow: Right-to-Left) */}
        <CurvedWaveCarousel
          items={pmLogos}
          speed={52}
          height={116}
          logoHeight={96}
          logoMaxWidth={240}
          amplitude={0}
          straight={true}
          itemSpacing={260}
          pauseOnHover={false}
          draggable={true}
        />

        {/* Row 2: SE Logos (Straight Horizontal Conveyor Flow: Left-to-Right) */}
        <CurvedWaveCarousel
          items={seLogos}
          speed={-52}
          height={96}
          logoHeight={76}
          logoMaxWidth={200}
          amplitude={0}
          straight={true}
          itemSpacing={220}
          pauseOnHover={false}
          draggable={true}
        />
      </div>
    </section>
  );
}

export default ConcaveLogoCarousel;
