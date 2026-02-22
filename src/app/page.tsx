import type { Metadata } from "next";
import { fullUrl } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { WorkPreview } from "@/components/home/WorkPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeJsonLd } from "@/components/JsonLd";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Professional Logo Design Services | Fast & Trusted",
  description:
    "High-performance logo design for brands that need clarity, speed, and trust. Explore our portfolio, choose a package, and start your brief in minutes.",
  openGraph: {
    title: "Professional Logo Design Services | Fast & Trusted",
    description:
      "High-performance logo design for brands that need clarity, speed, and trust. Explore our portfolio, choose a package, and start your brief in minutes.",
    url: fullUrl("/"),
    type: "website",
    siteName: "VARG",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Logo Design Services | Fast & Trusted",
    description:
      "High-performance logo design for brands that need clarity, speed, and trust. Explore our portfolio, choose a package, and start your brief in minutes.",
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
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FinalCTA />
      </AnimateOnScroll>
    </>
  );
}
