import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Design Pricing | Standard vs Premium",
  description:
    "Compare Standard and Premium logo design packages. Clear deliverables, fast turnaround, and professional files.",
  openGraph: {
    title: "Logo Design Pricing | Standard vs Premium",
    description:
      "Compare Standard and Premium logo design packages. Clear deliverables, fast turnaround, and professional files.",
    url: fullUrl("/logo-design-pricing"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Pricing | Standard vs Premium",
    description:
      "Compare Standard and Premium logo design packages. Clear deliverables, fast turnaround, and professional files.",
  },
  alternates: { canonical: fullUrl("/logo-design-pricing") },
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
              Standard (€139) is built for startups and small businesses: 2 concepts, 2 revision rounds, and delivery in 3 to 5 days. Premium (€279) adds more concepts, unlimited revisions, source files, color and typography guidance, social versions, and priority delivery in 1 to 3 days.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Compare and choose</h2>
            <p className="mt-2 text-[var(--foreground)]/80">
              <Link href="/pricing" className="underline hover:no-underline">See the full pricing page</Link> for deliverables and timelines. Then start your brief and we will take it from there.
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
