import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";

/** Configurable social platforms shown in footer. Only platforms with a URL are rendered. */
const FOOTER_SOCIAL_ORDER = ["instagram", "pinterest"] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const tagline = site.footerTagline ?? site.tagline;
  const socialLinks = FOOTER_SOCIAL_ORDER.filter((key) => site.social[key]).map((key) => ({
    key,
    url: site.social[key],
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  return (
    <footer className="relative bg-[var(--background)]" role="contentinfo">
      <div />
      <div className="relative mx-auto max-w-6xl border-t border-t-white/5 px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <Link
              href="/"
              className="flex items-center justify-center transition-opacity duration-150 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label={`${site.name} – Home`}
            >
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-[var(--foreground)]/70">{tagline}</p>
          </div>

          {socialLinks.length > 0 && (
            <div className="flex items-center justify-center gap-8" role="list">
              {socialLinks.map(({ key, url, label }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--foreground)]/70 underline underline-offset-2 transition-colors duration-150 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {site.contactEmail ? (
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-sm text-[var(--foreground)]/70 transition-colors duration-150 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              {site.contactEmail}
            </a>
          ) : (
            <Link
              href="/contact"
              className="text-sm text-[var(--foreground)]/70 transition-colors duration-150 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Contact
            </Link>
          )}

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-[var(--foreground)]/60" aria-label="Legal">
            <Link href="/privacy" className="hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded">
              Terms of Service
            </Link>
          </nav>

          <p className="text-xs text-[var(--foreground)]/50">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
