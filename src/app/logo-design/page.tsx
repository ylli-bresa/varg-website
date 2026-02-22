import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Design Services | Fast, Trusted Logo Design",
  description:
    "Professional logo design services built for speed and clarity. View work, choose a package, and start your brief today.",
  openGraph: {
    title: "Logo Design Services | Fast, Trusted Logo Design",
    description:
      "Professional logo design services built for speed and clarity. View work, choose a package, and start your brief today.",
    url: fullUrl("/logo-design"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services | Fast, Trusted Logo Design",
    description:
      "Professional logo design services built for speed and clarity. View work, choose a package, and start your brief today.",
  },
  alternates: { canonical: fullUrl("/logo-design") },
};

const breadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Logo Design Services", url: fullUrl("/logo-design") },
];

export default function LogoDesignPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <nav className="mb-6 text-sm text-[var(--foreground)]/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Logo Design Services</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Logo Design Services
          </h1>

          <section className="mt-10 space-y-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Built for clarity and recognition</h2>
            <p className="text-[var(--foreground)]/80">
              We create marks that fit your audience and your goals. No filler. Clear deliverables and a process you can plan around.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">What you get</h2>
            <ul className="mx-auto mt-4 w-fit space-y-2 text-left text-[var(--foreground)]/80" role="list">
              <li>Multiple concepts to choose from</li>
              <li>Revisions until the direction is right</li>
              <li>High-resolution and source files</li>
              <li>Files ready for print and digital</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Pricing that stays simple</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              <Link href="/pricing" className="underline hover:no-underline">See our Standard and Premium packages</Link> with clear deliverables and delivery times.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">See the work</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              <Link href="/work" className="underline hover:no-underline">Browse our portfolio</Link> of recent logo work.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Start your brief</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              Tell us what you need. We reply with next steps.
            </p>
            <div className="mt-4">
              <CTAButton href="/contact?start=1&mode=guided">Get your Logo</CTAButton>
            </div>
          </section>

          <p className="mt-12 text-center text-sm text-[var(--foreground)]/60">
            Also see <Link href="/custom-logo-design" className="underline hover:no-underline">custom logo design</Link> and{" "}
            <Link href="/logo-design-for-startups" className="underline hover:no-underline">logo design for startups</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
