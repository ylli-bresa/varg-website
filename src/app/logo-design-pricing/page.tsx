import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Design Pricing | Compare Packages",
  description:
    "Compare logo design pricing side-by-side. Standard vs Premium packages, clear deliverables, no hidden fees. Choose yours and start today.",
  openGraph: {
    title: "Logo Design Pricing | Compare Packages",
    description:
      "Compare logo design pricing side-by-side. Standard vs Premium packages, clear deliverables, no hidden fees. Choose yours and start today.",
    url: fullUrl("/logo-design-pricing"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Pricing | Compare Packages",
    description:
      "Compare logo design pricing side-by-side. Standard vs Premium packages, clear deliverables, no hidden fees. Choose yours and start today.",
  },
  alternates: { canonical: fullUrl("/logo-design-pricing") },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Logo Design Pricing", url: fullUrl("/logo-design-pricing") },
];

export default function LogoDesignPricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-6 text-sm text-[var(--foreground)]/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Logo Design Pricing</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Logo Design Pricing
          </h1>

          <section className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Two packages</h2>
            <p className="text-[var(--foreground)]/80">
              Standard ($199) is built for startups and growing businesses that need a professional logo foundation: 2 custom logo concepts, unlimited revisions, high-resolution PNG and JPG, SVG, transparent and black-and-white versions, delivery in 3–5 days. Premium ($399) is for brands that want a complete identity ready for launch: 4 concepts, full source files (AI, SVG, PDF), color palette and typography guide, social media versions, priority delivery in 1–3 days, full commercial usage license.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Compare and choose</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              See our full <Link href="/pricing" className="underline hover:no-underline">logo design pricing</Link> for deliverables and timelines. Browse our <Link href="/work" className="underline hover:no-underline">logo design portfolio</Link> or <Link href="/contact" className="underline hover:no-underline">hire a logo designer</Link> to start your brief.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CTAButton href="/pricing">See Pricing</CTAButton>
              <CTAButton href="/contact" variant="secondary">Contact</CTAButton>
            </div>
          </section>

          <p className="mt-12 text-center text-sm text-[var(--foreground)]/60">
            <Link href="/logo-design" className="underline hover:no-underline">Logo design services</Link>,{" "}
            <Link href="/custom-logo-design" className="underline hover:no-underline">custom logo design</Link>, and{" "}
            <Link href="/logo-design-for-startups" className="underline hover:no-underline">logo design for startups</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
