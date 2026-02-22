import { site, fullUrl } from "@/lib/site";

const base = site.baseUrl.replace(/\/$/, "");
const orgId = `${base}/#organization`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: site.name,
  url: site.baseUrl,
  description: site.tagline,
  email: site.contactEmail,
  logo: fullUrl("/logos/black-logo.svg"),
  sameAs: [site.social.instagram, site.social.pinterest].filter(Boolean),
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.baseUrl,
  description: site.tagline,
  publisher: { "@id": orgId },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.baseUrl,
  description: site.tagline,
  areaServed: ["US", "GB", "EU"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logo Design",
  description:
    "Professional logo design for startups and brands. Custom logos, brand identity, fast delivery, and premium quality.",
  provider: { "@id": orgId },
  areaServed: ["US", "GB", "EU"],
  serviceType: "Logo Design",
};

export function HomeJsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function fullUrlForSchema(path: string): string {
  return fullUrl(path);
}

export function FaqJsonLd({
  items,
  pageUrl,
}: {
  items: readonly { question: string; answer: string }[];
  pageUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: pageUrl,
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
