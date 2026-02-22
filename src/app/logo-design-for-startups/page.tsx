import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Design for Startups | Launch-Ready Branding",
  description:
    "Logo design for startups that move fast. Launch-ready in days, not months. Get a professional logo without the agency wait or price.",
  openGraph: {
    title: "Logo Design for Startups | Launch-Ready Branding",
    description:
      "Logo design for startups that move fast. Launch-ready in days, not months. Get a professional logo without the agency wait or price.",
    url: fullUrl("/logo-design-for-startups"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design for Startups | Launch-Ready Branding",
    description:
      "Logo design for startups that move fast. Launch-ready in days, not months. Get a professional logo without the agency wait or price.",
  },
  alternates: { canonical: fullUrl("/logo-design-for-startups") },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Logo Design for Startups", url: fullUrl("/logo-design-for-startups") },
];

export default function LogoDesignForStartupsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-6 text-sm text-[var(--foreground)]/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Logo Design for Startups</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Logo Design for Startups
          </h1>

          <section className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Speed and clarity</h2>
            <p className="text-[var(--foreground)]/80">
              Startups need a mark that works from day one. We deliver logo concepts on a clear timeline so you can ship without delay. No endless rounds. Decisions stay simple.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Launch assets included</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              You get high-resolution files, transparent backgrounds, and social-ready versions so the logo works across your site, social profiles, and pitch deck.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Packages that fit</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              Our <Link href="/pricing" className="underline hover:no-underline">logo design pricing</Link> offers Standard and Premium options with fixed deliverables and delivery times. See our <Link href="/work" className="underline hover:no-underline">logo design portfolio</Link> or <Link href="/contact?start=1&mode=guided" className="underline hover:no-underline">hire a logo designer</Link> to get started.
            </p>
          </section>

          <section className="mt-12">
            <div className="mt-4">
              <CTAButton href="/contact?start=1&mode=guided">Get your Logo</CTAButton>
            </div>
          </section>

          <p className="mt-12 text-sm text-[var(--foreground)]/60">
            <Link href="/logo-design" className="underline hover:no-underline">Logo design services</Link> and{" "}
            <Link href="/custom-logo-design" className="underline hover:no-underline">custom logo design</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
