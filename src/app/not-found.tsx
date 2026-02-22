import type { Metadata } from "next";
import Link from "next/link";
import { fullUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page wasn't found. Return to Varg Design for premium logo design services, our portfolio, and transparent pricing.",
  alternates: { canonical: fullUrl("/") },
  openGraph: {
    title: "Page not found | Varg Design",
    description:
      "This page wasn't found. Return to Varg Design for premium logo design services, our portfolio, and transparent pricing.",
    url: fullUrl("/"),
    type: "website",
    siteName: "Varg Design",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page not found | Varg Design",
    description:
      "This page wasn't found. Return to Varg Design for premium logo design services, our portfolio, and transparent pricing.",
  },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Page not found</h1>
      <p className="mt-2 text-[var(--foreground)]/70">
        The page you’re looking for doesn’t exist or was moved. Browse our <Link href="/work" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">work</Link> or see our <Link href="/pricing" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">pricing</Link>.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Back to home
      </Link>
    </div>
  );
}
