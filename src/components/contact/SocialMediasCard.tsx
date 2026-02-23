import { site } from "@/lib/site";

const socialItems = [
  { label: "Instagram", url: site.social.instagram },
  { label: "Pinterest", url: site.social.pinterest },
];

export function SocialMediasCard() {
  return (
    <div className="rounded-[20px] bg-[var(--foreground)]/[0.06] p-6 py-10 text-center shadow-none dark:bg-[var(--foreground)]/10 sm:p-8 sm:py-12">
      <h3 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
        Social Medias
      </h3>
      <p className="mt-1 text-sm text-[var(--foreground)]/70">
        Follow us on Instagram and Pinterest
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-6">
        {socialItems.map(({ label, url }) =>
          url ? (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--foreground)]/80 underline underline-offset-2 transition-colors hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/40 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label={label}
            >
              {label}
            </a>
          ) : (
            <span
              key={label}
              className="text-sm font-medium text-[var(--foreground)]/80 underline underline-offset-2"
            >
              {label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
