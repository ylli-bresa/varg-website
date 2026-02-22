import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Logo Design | Concepts Built for Your Brand",
  description:
    "Custom logo design with clear deliverables, fast turnaround, and professional source files available. Start your brief in minutes.",
  openGraph: {
    title: "Custom Logo Design | Concepts Built for Your Brand",
    description:
      "Custom logo design with clear deliverables, fast turnaround, and professional source files available. Start your brief in minutes.",
    url: fullUrl("/custom-logo-design"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Logo Design | Concepts Built for Your Brand",
    description:
      "Custom logo design with clear deliverables, fast turnaround, and professional source files available. Start your brief in minutes.",
  },
  alternates: { canonical: fullUrl("/custom-logo-design") },
};

const breadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Custom Logo Design", url: fullUrl("/custom-logo-design") },
];

export default function CustomLogoDesignPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-6 text-sm text-[var(--foreground)]/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Custom Logo Design</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Custom Logo Design
          </h1>

          <section className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Custom fit, not templates</h2>
            <p className="text-[var(--foreground)]/80">
              Every direction we propose is built around your brand, your audience, and your goals. We explore concepts that fit you, then refine the chosen direction until it is ready to ship.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Concept exploration</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              You get multiple concepts to choose from. We iterate on the one you prefer and deliver final files in the formats you need.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Refinement and delivery</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              Revisions are included so the mark lands where you want it. Source files and export formats are part of the package so you can use the logo everywhere.
            </p>
          </section>

          <section className="mt-12">
            <p className="text-[var(--foreground)]/80">
              <Link href="/pricing" className="underline hover:no-underline">View pricing</Link> and{" "}
              <Link href="/contact?start=1&mode=guided" className="underline hover:no-underline">start your brief</Link>.
            </p>
            <div className="mt-4">
              <CTAButton href="/contact?start=1&mode=guided">Get your Logo</CTAButton>
            </div>
          </section>

          <p className="mt-12 text-sm text-[var(--foreground)]/60">
            <Link href="/logo-design" className="underline hover:no-underline">Logo design services</Link> and{" "}
            <Link href="/logo-design-for-startups" className="underline hover:no-underline">logo design for startups</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
