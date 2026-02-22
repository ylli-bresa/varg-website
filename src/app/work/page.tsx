import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { workItems } from "@/data/work";
import { MasonryGrid } from "@/components/MasonryGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Design Portfolio | Our Best Work",
  description:
    "Explore our logo design portfolio. Real work for real brands. Find the direction that fits—then start your own project with VARG.",
  openGraph: {
    title: "Logo Design Portfolio | Our Best Work",
    description:
      "Explore our logo design portfolio. Real work for real brands. Find the direction that fits—then start your own project with VARG.",
    url: fullUrl("/work"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Portfolio | Our Best Work",
    description:
      "Explore our logo design portfolio. Real work for real brands. Find the direction that fits—then start your own project with VARG.",
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
              A curated selection of marks built for clarity, recognition, and impact. See our <Link href="/pricing" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">logo design pricing</Link> or <Link href="/contact" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">hire a logo designer</Link> to start your project.
            </p>
          </div>
          <div className="mt-12 text-left">
            <MasonryGrid items={workItems} />
          </div>
        </div>
      </div>
      <FinalCTA />
    </>
  );
}
