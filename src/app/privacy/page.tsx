import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";
import { site } from "@/lib/site";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}. How we collect, use, and protect your information when you use our logo design services and website.`,
  openGraph: {
    title: `Privacy Policy | ${site.name}`,
    description: `How we collect, use, and protect your information when you use our logo design services and website.`,
    url: fullUrl("/privacy"),
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${site.name}`,
    description: `How we collect, use, and protect your information.`,
  },
  alternates: { canonical: fullUrl("/privacy") },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = "2026-02-22";

  return (
    <div className="px-4 pt-24 pb-20 sm:px-6 sm:pt-32">
      <AnimateOnScroll>
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-[var(--foreground)]/70 transition-colors duration-200" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--foreground)]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--foreground)]">Privacy Policy</span>
        </nav>

        <article aria-label="Privacy Policy">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--foreground)]/60">Last updated: {lastUpdated}</p>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
          <p className="text-[var(--foreground)]/80">
            {site.name} (“we”, “us”, “our”) operates the website at {site.baseUrl} and provides logo design and brand identity services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">1. Information We Collect</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We may collect information you provide directly, such as when you fill out our contact or guided brief form, including: name, email address, brand name, industry, preferences, deadlines, budget, message content, and any files you attach (e.g. references). We may also collect technical data such as IP address, browser type, and pages visited when you use our site.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">2. How We Use Your Information</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We use your information to respond to your requests, deliver logo design services, send project-related emails, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">3. Email and Communications</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Form submissions are sent via our email service provider (Resend). We use your email only to communicate about your project and our services. You can contact us at {site.contactEmail} to request access, correction, or deletion of your data.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">4. Cookies and Tracking</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Our site may use essential cookies for operation (e.g. theme preference). We do not use third-party advertising or analytics cookies unless we explicitly state so and obtain consent where required by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">5. Data Retention and Security</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We retain your information as long as needed to provide services and fulfill legal or contractual requirements. We take reasonable measures to protect your data; transmission over the internet is not guaranteed to be completely secure.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">6. Your Rights</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Depending on your location, you may have rights to access, correct, delete, or port your personal data, or to object to or restrict processing. Contact us at {site.contactEmail} to exercise these rights.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">7. Third-Party Links</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            Our site may link to external sites (e.g. social media). We are not responsible for their privacy practices. We encourage you to read their privacy policies.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">8. Changes</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. Continued use of the site after changes constitutes acceptance.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">9. Contact</h2>
          <p className="mt-2 text-[var(--foreground)]/80">
            For privacy-related questions or requests, contact us at{" "}
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
