import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { fullUrl } from "@/lib/site";
import { ContactToggle } from "@/components/contact/ContactToggle";
import { SocialMediasCard } from "@/components/contact/SocialMediasCard";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Hire a Logo Designer | Get Your Custom Logo",
  description:
    "Hire a logo designer who delivers. Share your brief, choose your package, get a fast response. Your brand deserves a pro—start now.",
  openGraph: {
    title: "Hire a Logo Designer | Get Your Custom Logo",
    description:
      "Hire a logo designer who delivers. Share your brief, choose your package, get a fast response. Your brand deserves a pro—start now.",
    url: fullUrl("/contact"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Logo Designer | Get Your Custom Logo",
    description:
      "Hire a logo designer who delivers. Share your brief, choose your package, get a fast response. Your brand deserves a pro—start now.",
  },
  alternates: { canonical: fullUrl("/contact") },
  robots: { index: true, follow: true },
};

const contactBreadcrumbs = [
  { name: "Home", url: fullUrl("/") },
  { name: "Contact", url: fullUrl("/contact") },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={contactBreadcrumbs} />
      <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
        <AnimateOnScroll>
          <div className="mx-auto max-w-xl text-center">
            <nav className="mb-8 text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--foreground)]">Contact</span>
            </nav>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Contact
            </h1>
            <p className="mt-3 text-[var(--foreground)]/80">
              Start your request the way you prefer. Quick email or guided form. Check our <Link href="/pricing" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">logo design pricing</Link> or browse our <Link href="/work" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">logo design portfolio</Link> first if you like.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mx-auto max-w-xl text-center mt-10 space-y-6">
          <div className="rounded-[20px] bg-[var(--foreground)]/10 p-6">
            <Suspense fallback={<div className="text-[var(--foreground)]/60">Loading…</div>}>
              <ContactToggle />
            </Suspense>
          </div>
          <SocialMediasCard />
        </div>
      </div>
    </>
  );
}
