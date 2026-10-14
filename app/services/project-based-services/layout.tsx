import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project-Based Software Services",
  description:
    "Fixed-scope, milestone-driven software engineering with guaranteed delivery dates, transparent pricing, and comprehensive quality assurance.",
  alternates: {
    canonical: "/services/project-based-services",
  },
  openGraph: {
    title: "Project-Based Software Services | Coderovo",
    description:
      "Fixed-scope, milestone-driven software engineering with guaranteed delivery dates, transparent pricing, and comprehensive quality assurance.",
    url: "https://coderovo.com/services/project-based-services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Project-Based Software Services",
  provider: {
    "@type": "Organization",
    name: "Coderovo",
    url: "https://coderovo.com",
  },
  serviceType: "Milestone-Based Project Delivery",
  description:
    "End-to-end custom project delivery with structured sprints, defined milestones, and turnkey execution from design to deployment.",
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://coderovo.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://coderovo.com/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Project-Based Services",
      item: "https://coderovo.com/services/project-based-services",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
