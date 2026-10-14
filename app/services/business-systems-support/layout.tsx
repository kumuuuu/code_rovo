import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Systems Support & IT Solutions",
  description:
    "Reliable enterprise IT operations, ERP/CRM workflow automation, database administration, and 24/7 system monitoring by Coderovo.",
  alternates: {
    canonical: "/services/business-systems-support",
  },
  openGraph: {
    title: "Business Systems Support & IT Solutions | Coderovo",
    description:
      "Reliable enterprise IT operations, ERP/CRM workflow automation, database administration, and 24/7 system monitoring by Coderovo.",
    url: "https://coderovo.com/services/business-systems-support",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Systems Support",
  provider: {
    "@type": "Organization",
    name: "Coderovo",
    url: "https://coderovo.com",
  },
  serviceType: "IT Operations & Business Systems Support",
  description:
    "Proactive monitoring, workflow automation, ERP/CRM integrations, and infrastructure support to keep your operations resilient.",
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
      name: "Business Systems Support",
      item: "https://coderovo.com/services/business-systems-support",
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
