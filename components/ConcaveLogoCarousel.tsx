"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  // Hotelbeds: Balanced sizing
  if (src.includes("2.15.50 AM (1)-Photoroom") || defaultName.toLowerCase().includes("hotelbeds")) {
    return { scale: 1.28, name: "Hotelbeds" };
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

// Helper to configure SE logo sizing, width, and styling
function getSeLogoConfig(src: string, defaultName: string) {
  const isNext =
    src.toLowerCase().includes("next js") || defaultName.toLowerCase().includes("next");
  const isJwt =
    src.toLowerCase().includes("jwt") || defaultName.toLowerCase().includes("jwt");
  const isKeycloak =
    src.toLowerCase().includes("keycloak") || defaultName.toLowerCase().includes("keycloak");
  const isMongo =
    src.toLowerCase().includes("mongodb") || defaultName.toLowerCase().includes("mongodb");
  const isMysql =
    src.toLowerCase().includes("mysql") || defaultName.toLowerCase().includes("mysql");

  let width = 76;
  let scale = 1;
  let offsetX = 0;

  if (isJwt) {
    width = 200;
    scale = 1.05;
    offsetX = -80;
  } else if (isKeycloak) {
    width = 200;
    scale = 1.15;
  } else if (isMongo) {
    width = 200;
    scale = 1.15;
  } else if (isMysql) {
    width = 76;
    scale = 1.2;
    offsetX = 60;
  } else if (isNext) {
    width = 126;
  }

  const name = isJwt ? "JWT" : isKeycloak ? "Keycloak" : isMongo ? "MongoDB" : defaultName;

  return { width, scale, invert: isNext, name, offsetX };
}

// Calculate normalized center-to-center spacing so every edge-to-edge gap is perfectly uniform
function applyNormalizedSpacings(items: CurvedWaveLogoItem[], targetGap = 135): CurvedWaveLogoItem[] {
  const n = items.length;
  if (n === 0) return items;
  return items.map((item, idx) => {
    const nextItem = items[(idx + 1) % n];
    const wCurr = item.width || 76;
    const wNext = nextItem.width || 76;
    const computedSpacing = Math.round(wCurr / 2 + targetGap + wNext / 2);
    return {
      ...item,
      spacing: computedSpacing,
    };
  });
}

// Fallback lists from public/Logos/PM
const PM_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "Hotelbeds", src: "/Logos/PM/WhatsApp Image 2026-10-12 at 2.15.50 AM (1)-Photoroom.png", alt: "Hotelbeds", scale: 1.28 },
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
const RAW_SE_FALLBACK_ITEMS: CurvedWaveLogoItem[] = [
  { name: "React", src: "/Logos/SE/React.png", alt: "React", width: 76 },
  { name: "Next.js", src: "/Logos/SE/next js.png", alt: "Next.js", invert: true, width: 126 },
  { name: "Node.js", src: "/Logos/SE/node-js-icon.png", alt: "Node.js", width: 76 },
  { name: "Java", src: "/Logos/SE/java-programming-language-icon.png", alt: "Java", width: 76 },
  { name: "Spring Boot", src: "/Logos/SE/spring-boot-icon.png", alt: "Spring Boot", width: 76 },
  { name: "Docker", src: "/Logos/SE/docker-icon.png", alt: "Docker", width: 76 },
  { name: "MongoDB", src: "/Logos/SE/mongodb-seeklogo.png", alt: "MongoDB", scale: 1.15, width: 200 },
  { name: "MySQL", src: "/Logos/SE/mysql-icon.png", alt: "MySQL", scale: 1.2, width: 76, offsetX: 60 },
  { name: "Keycloak", src: "/Logos/SE/keycloak-seeklogo.png", alt: "Keycloak", scale: 1.15, width: 200 },
  { name: "JWT", src: "/Logos/SE/Colorful Starburst JWT Logo-Photoroom.png", alt: "JWT", scale: 1.05, width: 200, offsetX: -80 },
];

const SE_FALLBACK_ITEMS: CurvedWaveLogoItem[] = applyNormalizedSpacings(RAW_SE_FALLBACK_ITEMS, 135);

export function ConcaveLogoCarousel() {
  const [pmLogos, setPmLogos] = useState<CurvedWaveLogoItem[]>(PM_FALLBACK_ITEMS);
  const [seLogos, setSeLogos] = useState<CurvedWaveLogoItem[]>(RAW_SE_FALLBACK_ITEMS);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              const configured = data.se.map((item: { name: string; src: string }) => {
                const config = getSeLogoConfig(item.src, item.name);
                return {
                  name: config.name,
                  src: item.src,
                  alt: config.name,
                  scale: config.scale,
                  width: config.width,
                  invert: config.invert,
                  offsetX: config.offsetX,
                };
              });
              setSeLogos(configured);
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

  // Compute normalized responsive spacings for SE logos
  const effectiveSeLogos = useMemo(() => {
    const targetGap = isMobile ? 80 : 135;
    const n = seLogos.length;
    if (n === 0) return seLogos;
    return seLogos.map((item, idx) => {
      const nextItem = seLogos[(idx + 1) % n];
      const scaleFactor = isMobile ? 0.65 : 1;
      const wCurr = (item.width || 76) * scaleFactor;
      const wNext = ((nextItem && nextItem.width) || 76) * scaleFactor;
      const computedSpacing = Math.round(wCurr / 2 + targetGap + wNext / 2);
      return {
        ...item,
        spacing: computedSpacing,
        offsetX: item.offsetX ? Math.round(item.offsetX * scaleFactor) : 0,
      };
    });
  }, [seLogos, isMobile]);

  return (
    <section
      id="tech"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 w-full overflow-hidden scroll-mt-20"
    >

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-14 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
          The technology behind better business solutions.
        </h2>
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our team works across modern web technologies, backend frameworks, databases, APIs, and deployment tools to build, integrate, and maintain solutions that fit business requirements.
        </p>
      </div>

      {/* Dual Row Frameless Straight Linear Flow Carousels */}
      <div className="relative z-10 w-full space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Row 1: PM Logos (Straight Horizontal Conveyor Flow: Right-to-Left) */}
        <CurvedWaveCarousel
          items={pmLogos}
          speed={isMobile ? 36 : 52}
          height={isMobile ? 70 : 116}
          logoHeight={isMobile ? 54 : 96}
          logoMaxWidth={isMobile ? 140 : 240}
          amplitude={0}
          straight={true}
          itemSpacing={isMobile ? 165 : 260}
          pauseOnHover={false}
          draggable={true}
        />

        {/* Row 2: SE Logos (Straight Horizontal Conveyor Flow: Left-to-Right) */}
        <CurvedWaveCarousel
          items={effectiveSeLogos}
          speed={isMobile ? -36 : -52}
          height={isMobile ? 58 : 96}
          logoHeight={isMobile ? 44 : 76}
          logoMaxWidth={isMobile ? 120 : 200}
          amplitude={0}
          straight={true}
          itemSpacing={isMobile ? 150 : 245}
          pauseOnHover={false}
          draggable={true}
        />
      </div>
    </section>
  );
}

export default ConcaveLogoCarousel;
