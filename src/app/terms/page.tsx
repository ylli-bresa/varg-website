import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { site } from "@/lib/site";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for VARG. Rules and conditions for using our logo design services and website. Read before ordering.",
  openGraph: {
    title: `Terms of Service | ${site.name}`,
    description:
      "Terms of Service for VARG. Rules and conditions for using our logo design services and website. Read before ordering.",
    url: fullUrl("/terms"),
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms of Service | ${site.name}`,
    description:
      "Terms of Service for VARG. Rules and conditions for using our logo design services and website. Read before ordering.",
  },
  alternates: { canonical: fullUrl("/terms") },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = "2026-02-22";

  return (
    <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
      <AnimateOnScroll>
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">Terms of Service</span>
        </nav>

        <article aria-label="Terms of Service">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[var(--foreground)]/60">Last updated: {lastUpdated}</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
          <p className="text-[var(--foreground)]/80">
            These Terms of Service (“Terms”) govern your use of the website and services operated by {site.name} (“we”, “us”, “our”). By using our site or engaging our logo design and brand identity services, you agree to these Terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">1. Services</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We provide logo design, brand identity, and related creative services as described on our site. Specific deliverables, timelines, and fees will be agreed (e.g. via brief, quote, or order) before work begins. Our portfolio and marketing materials are for illustration; final work will be tailored to your project.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">2. Your Obligations</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            You agree to provide accurate information when contacting us or submitting a brief, to respond in a timely manner during the project, and to use delivered work only in accordance with the license we grant. You must not use our site or services for any unlawful purpose or in a way that infringes others’ rights.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">3. Intellectual Property</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Until full payment and any agreed milestones are completed, we retain ownership of concepts and deliverables. Upon completion of payment and delivery, you receive the license we specify (e.g. for your brand use). We may use completed work in our portfolio and marketing unless we agree otherwise in writing.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">4. Payment and Cancellation</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Payment terms (deposit, milestones, final payment) will be communicated per project. Failure to pay may result in suspension of delivery or revocation of license. Cancellation and refund policies will be stated in your quote or order; absent that, we will handle cancellations fairly and in line with work already performed.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">5. Disclaimer</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Our site and services are provided “as is.” We do not guarantee uninterrupted or error-free operation. We are not liable for indirect, incidental, or consequential damages arising from your use of the site or our services, to the maximum extent permitted by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">6. Limitation of Liability</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Our total liability for any claim related to our site or services shall not exceed the amount you paid us for the relevant project in the twelve (12) months before the claim arose, or one hundred dollars (100 USD), whichever is greater, unless otherwise required by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">7. Indemnity</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            You agree to indemnify and hold us harmless from any claims, damages, or expenses (including reasonable legal fees) arising from your use of the site or services, your breach of these Terms, or your violation of any third-party rights.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">8. Changes</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We may update these Terms at any time. The “Last updated” date reflects the latest version. Continued use of the site or services after changes constitutes acceptance. For active projects, the terms in effect at the time of agreement apply unless we agree to updated terms in writing.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">9. Governing Law and Disputes</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            These Terms are governed by the laws of the jurisdiction in which we operate, without regard to conflict of law principles. Any dispute will be resolved in the courts of that jurisdiction, unless we agree to another method in writing.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">10. Contact</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            For questions about these Terms, contact us at{" "}
            <a href={`mailto:${site.contactEmail}`} className="text-[var(--foreground)] underline hover:no-underline">
              {site.contactEmail}
            </a>.
          </p>
          </div>

          <p className="mt-12 text-sm text-[var(--foreground)]/60">
            <Link href="/" className="transition-colors duration-200 hover:text-[var(--foreground)]">← Back to home</Link>
          </p>
        </article>
      </div>
      </AnimateOnScroll>
    </div>
  );
}
