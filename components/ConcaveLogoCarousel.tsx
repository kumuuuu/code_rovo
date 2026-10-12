"use client";

import React, { useState, useEffect } from "react";
import {
  CurvedWaveCarousel,
  CurvedWaveLogoItem,
} from "./ui/CurvedWaveCarousel";

// Helper to configure PM logo sizing and naming
function getPmLogoConfig(src: string, defaultName: string) {
  // Booking.com: Increase size significantly to compensate for square canvas padding
  if (src.includes("2.15.51 AM-Photoroom") || defaultName.toLowerCase().includes("booking")) {
    return { scale: 2.3, name: "Booking.com" };
  }
  // Expedia: Increase size
  if (src.includes("2.15.51 AM (1)-Photoroom") || defaultName.toLowerCase().includes("expedia")) {
    return { scale: 1.7, name: "Expedia" };
  }
  // Hotelbeds: Increase size
  if (src.includes("2.15.50 AM (1)-Photoroom") || defaultName.toLowerCase().includes("hotelbeds")) {
    return { scale: 1.85, name: "Hotelbeds" };
  }
  // Zhara HS: Increase size significantly to compensate for square canvas padding
  if (src.includes("2.15.50 AM (5)-Photoroom") || defaultName.toLowerCase().includes("zhara")) {
    return { scale: 2.2, name: "Zhara HS" };
  }
  // Dext: Decisively reduce size to prevent heavy solid block from overpowering row
  if (src.includes("2.15.51 AM (4)-Photoroom") || defaultName.toLowerCase().includes("dext")) {
    return { scale: 0.55, name: "Dext" };
  }
  // ApprovalMax: Increase size
  if (src.includes("2.15.51 AM (3)-Photoroom") || defaultName.toLowerCase().includes("approvalmax")) {
    return { scale: 1.6, name: "ApprovalMax" };
  }
  // MYOB: Maintain balanced scale
  if (src.includes("2.15.51 AM (8)-Photoroom") || defaultName.toLowerCase().includes("myob")) {
    return { scale: 1.65, name: "MYOB" };
  }

  return { scale: 1, name: defaultName };
}

// Helper to configure SE logo sizing, spacing, and styling
function getSeLogoConfig(src: string, defaultName: string) {
  const isNext =
    src.toLowerCase().includes("next js") || defaultName.toLowerCase().includes("next");

  // Keycloak: Generous 380px spacing
  if (src.toLowerCase().includes("keycloak") || defaultName.toLowerCase().includes("keycloak")) {
    return { scale: 1.15, spacing: 380, invert: false, name: "Keycloak" };
  }
  // MongoDB: Generous 420px spacing for wide wordmark
  if (src.toLowerCase().includes("mongodb") || defaultName.toLowerCase().includes("mongodb")) {
    return { scale: 1.15, spacing: 420, invert: false, name: "MongoDB" };
  }
  // MySQL: Generous 380px spacing
  if (src.toLowerCase().includes("mysql") || defaultName.toLowerCase().includes("mysql")) {
    return { scale: 1.2, spacing: 380, invert: false, name: "MySQL" };
  }

  return { scale: 1, spacing: 245, invert: isNext, name: defaultName };
}

// Fallback lists from public/Logos/PM
const PM_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "Hotelbeds", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (1)-Photoroom.png", alt: "Hotelbeds", scale: 1.85 },
  { name: "Platform 2", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (2)-Photoroom.png", alt: "Business Platform 2" },
  { name: "Platform 3", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (3)-Photoroom.png", alt: "Business Platform 3" },
  { name: "Platform 4", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (4)-Photoroom.png", alt: "Business Platform 4" },
  { name: "Zhara HS", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (5)-Photoroom.png", alt: "Zhara HS", scale: 2.2 },
  { name: "Platform 6", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (6)-Photoroom.png", alt: "Business Platform 6" },
  { name: "Platform 7", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (7)-Photoroom.png", alt: "Business Platform 7" },
  { name: "Platform 8", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM-Photoroom.png", alt: "Business Platform 8" },
  { name: "Expedia", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (1)-Photoroom.png", alt: "Expedia", scale: 1.7 },
  { name: "Platform 10", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (2)-Photoroom.png", alt: "Business Platform 10" },
  { name: "ApprovalMax", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (3)-Photoroom.png", alt: "ApprovalMax", scale: 1.6 },
  { name: "Dext", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (4)-Photoroom.png", alt: "Dext", scale: 0.55 },
  { name: "Platform 13", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (5)-Photoroom.png", alt: "Business Platform 13" },
  { name: "Platform 14", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (6)-Photoroom.png", alt: "Business Platform 14" },
  { name: "Platform 15", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (7)-Photoroom.png", alt: "Business Platform 15" },
  { name: "MYOB", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (8)-Photoroom.png", alt: "MYOB", scale: 1.65 },
  { name: "Platform 17", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM (9)-Photoroom.png", alt: "Business Platform 17" },
  { name: "Booking.com", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.51 AM-Photoroom.png", alt: "Booking.com", scale: 2.3 },
];

// Fallback lists from public/Logos/SE
const SE_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "React", src: "/Logos/SE/React.png", alt: "React", spacing: 245 },
  { name: "Next.js", src: "/Logos/SE/next js.png", alt: "Next.js", invert: true, spacing: 245 },
  { name: "Node.js", src: "/Logos/SE/node-js-icon.png", alt: "Node.js", spacing: 245 },
  { name: "Java", src: "/Logos/SE/java-programming-language-icon.png", alt: "Java", spacing: 245 },
  { name: "Spring Boot", src: "/Logos/SE/spring-boot-icon.png", alt: "Spring Boot", spacing: 245 },
  { name: "Docker", src: "/Logos/SE/docker-icon.png", alt: "Docker", spacing: 245 },
  { name: "MongoDB", src: "/Logos/SE/mongodb-seeklogo.png", alt: "MongoDB", scale: 1.15, spacing: 420 },
  { name: "MySQL", src: "/Logos/SE/mysql-icon.png", alt: "MySQL", scale: 1.2, spacing: 380 },
  { name: "Keycloak", src: "/Logos/SE/keycloak-seeklogo.png", alt: "Keycloak", scale: 1.15, spacing: 380 },
  { name: "JWT", src: "/Logos/SE/jwt-seeklogo.png", alt: "JWT", spacing: 245 },
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
                  const config = getPmLogoConfig(item.src, item.name);
                  return {
                    name: config.name,
                    src: item.src,
                    alt: config.name,
                    scale: config.scale,
                  };
                })
              );
            }
            if (data.se && Array.isArray(data.se) && data.se.length > 0) {
              setSeLogos(
                data.se.map((item: { name: string; src: string }) => {
                  const config = getSeLogoConfig(item.src, item.name);
                  return {
                    name: config.name,
                    src: item.src,
                    alt: config.name,
                    scale: config.scale,
                    spacing: config.spacing,
                    invert: config.invert,
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
          itemSpacing={245}
          pauseOnHover={false}
          draggable={true}
        />
      </div>
    </section>
  );
}

export default ConcaveLogoCarousel;
