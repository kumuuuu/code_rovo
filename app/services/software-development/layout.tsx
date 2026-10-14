import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Build high-performance web applications, mobile platforms, APIs, and enterprise cloud solutions with Coderovo's specialized software engineering teams.",
  alternates: {
    canonical: "/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development Services | Coderovo",
    description:
      "Build high-performance web applications, mobile platforms, APIs, and enterprise cloud solutions with Coderovo's specialized software engineering teams.",
    url: "https://coderovo.com/services/software-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Coderovo",
    url: "https://coderovo.com",
  },
  serviceType: "Software Engineering & Architecture",
  description:
    "End-to-end software development services including web apps, mobile solutions, cloud infrastructure, and enterprise architectures.",
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
      name: "Software Development",
      item: "https://coderovo.com/services/software-development",
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
