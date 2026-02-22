import type { Metadata } from "next";
import { fullUrl } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { WorkPreview } from "@/components/home/WorkPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeJsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Logo Design Services | Premium Quality, Fast Delivery",
  description:
    "Premium logo design services with clear packages and fast turnaround. View our portfolio, pick a package, and start your brief in minutes.",
  openGraph: {
    title: "Logo Design Services | Premium Quality, Fast Delivery",
    description:
      "Premium logo design services with clear packages and fast turnaround. View our portfolio, pick a package, and start your brief in minutes.",
    url: fullUrl("/"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services | Premium Quality, Fast Delivery",
    description:
      "Premium logo design services with clear packages and fast turnaround. View our portfolio, pick a package, and start your brief in minutes.",
  },
  alternates: { canonical: fullUrl("/") },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <AnimateOnScroll>
        <ClientLogos />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkPreview />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProcessSteps />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FAQ pagePath="/" />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FinalCTA />
      </AnimateOnScroll>
    </>
  );
}
