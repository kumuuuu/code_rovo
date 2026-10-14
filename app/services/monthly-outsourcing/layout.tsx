import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Outsourcing & Dedicated Engineering Teams",
  description:
    "Scale your product velocity with dedicated senior software engineers and technical specialists on a flexible monthly subscription model.",
  alternates: {
    canonical: "/services/monthly-outsourcing",
  },
  openGraph: {
    title: "Monthly Outsourcing & Dedicated Engineering Teams | Coderovo",
    description:
      "Scale your product velocity with dedicated senior software engineers and technical specialists on a flexible monthly subscription model.",
    url: "https://coderovo.com/services/monthly-outsourcing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Monthly Outsourcing & Dedicated Teams",
  provider: {
    "@type": "Organization",
    name: "Coderovo",
    url: "https://coderovo.com",
  },
  serviceType: "Dedicated Engineering Teams & Staff Augmentation",
  description:
    "Long-term engineering team integration with direct communication, consistent sprint cadence, and flexible monthly arrangements.",
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
      name: "Monthly Outsourcing",
      item: "https://coderovo.com/services/monthly-outsourcing",
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
