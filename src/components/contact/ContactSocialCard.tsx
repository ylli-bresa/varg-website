import { site } from "@/lib/site";

const socialConfig = [
  { key: "instagram", label: "Instagram", url: site.social.instagram },
  { key: "pinterest", label: "Pinterest", url: site.social.pinterest },
].filter((item) => item.url);

export function ContactSocialCard() {
  if (socialConfig.length === 0) return null;
  return (
    <div className="mt-6 rounded-[20px] bg-[var(--foreground)]/[0.06] p-6 dark:bg-[var(--foreground)]/10">
      <h2 className="text-center text-lg font-semibold text-[var(--foreground)] sm:text-xl">Follow us</h2>
      <p className="mt-1 text-center text-sm text-[var(--foreground)]/70">Find us on Instagram and Pinterest</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
        {socialConfig.map(({ key, label, url }) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--foreground)]/80 underline transition-colors hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/40 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            aria-label={label}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
