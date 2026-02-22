"use client";

import { site } from "@/lib/site";

const subject = "Logo Design Request";

export function QuickEmailForm() {
  if (!site.contactEmail) return null;
  const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="space-y-6">
      <p className="text-sm text-[var(--foreground)]/80">
        Send a message directly. If you have references, attach them in your email client.
      </p>
      <p className="text-sm">
        <a
          href={mailto}
          className="font-medium text-[var(--foreground)] underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          {site.contactEmail}
        </a>
      </p>
      <a
        href={mailto}
        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Send Email
      </a>
    </div>
  );
}
