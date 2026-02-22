import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";

const INSTAGRAM_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PINTEREST_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="9" r="4" />
    <path d="M12 13v8M9 21h6" />
  </svg>
);

/** Configurable social platforms shown in footer. Only platforms with a URL are rendered. */
const FOOTER_SOCIAL_ORDER = ["instagram", "pinterest"] as const;

const socialIcons: Record<string, React.ReactNode> = {
  instagram: INSTAGRAM_ICON,
  pinterest: PINTEREST_ICON,
};

export function Footer() {
  const year = new Date().getFullYear();
  const tagline = site.footerTagline ?? site.tagline;
  const socialLinks = FOOTER_SOCIAL_ORDER.filter((key) => site.social[key]).map((key) => ({
    key,
    url: site.social[key],
    label: key.charAt(0).toUpperCase() + key.slice(1),
    icon: socialIcons[key],
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
              {socialLinks.map(({ key, url, label, icon }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)]/60 transition-opacity duration-150 hover:text-[var(--foreground)] hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          )}

          <a
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-[var(--foreground)]/70 transition-colors duration-150 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            {site.contactEmail}
          </a>

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
