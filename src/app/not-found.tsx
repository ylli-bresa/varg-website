import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page wasn't found. Return to VARG for premium logo design services, our portfolio, and transparent pricing.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Page not found</h1>
      <p className="mt-2 text-[var(--foreground)]/70">The page you’re looking for doesn’t exist or was moved.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Back to home
      </Link>
    </div>
  );
}
