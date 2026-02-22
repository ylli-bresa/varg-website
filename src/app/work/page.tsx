import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { workItems } from "@/data/work";
import { MasonryGrid } from "@/components/MasonryGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Logo Portfolio | Recent Work and Signature Styles",
  description:
    "Explore a curated logo portfolio. Click any project to view it and request a similar direction for your brand.",
  openGraph: {
    title: "Logo Portfolio | Recent Work and Signature Styles",
    description:
      "Explore a curated logo portfolio. Click any project to view it and request a similar direction for your brand.",
    url: fullUrl("/work"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Portfolio | Recent Work and Signature Styles",
    description:
      "Explore a curated logo portfolio. Click any project to view it and request a similar direction for your brand.",
  },
  alternates: { canonical: fullUrl("/work") },
  robots: { index: true, follow: true },
};

const workBreadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Work", url: fullUrl("/work") },
];

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={workBreadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <AnimateOnScroll>
        <div className="mx-auto max-w-6xl">
          <nav className="mb-8 text-center text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Work</span>
          </nav>
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Work
            </h1>
          <p className="mx-auto mt-3 max-w-xl text-[var(--foreground)]/80">
            A curated selection of marks built for clarity, recognition, and impact.
          </p>
          </div>
          <div className="mt-12 text-left">
            <MasonryGrid items={workItems} />
          </div>
        </div>
        </AnimateOnScroll>
      </div>
      <FinalCTA />
    </>
  );
}
