import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { PricingToggle } from "@/components/PricingToggle";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Logo Design Pricing | Standard & Premium Packages",
  description:
    "Transparent logo design pricing: Standard and Premium packages. Clear deliverables, fast turnaround, and professional source files. Start your brief in minutes.",
  openGraph: {
    title: "Logo Design Pricing | Standard & Premium Packages",
    description:
      "Transparent logo design pricing: Standard and Premium packages. Clear deliverables, fast turnaround, and professional source files.",
    url: fullUrl("/pricing"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Pricing | Standard & Premium Packages",
    description:
      "Transparent logo design pricing. Clear deliverables and professional files.",
  },
  alternates: { canonical: fullUrl("/pricing") },
  robots: { index: true, follow: true },
};

const pricingBreadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Pricing", url: fullUrl("/pricing") },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pricingBreadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <AnimateOnScroll>
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-8 text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Pricing</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pricing
          </h1>
        <p className="mt-3 text-[var(--foreground)]/80">
          Two packages. Clear deliverables. Fast turnaround.
        </p>
        <div className="mt-12">
          <PricingToggle />
        </div>
        </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
