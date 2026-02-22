const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://example.com";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "yllibresa@gmail.com";

/** Social links. Footer shows only instagram and pinterest when URLs are set. */
export const site = {
  name: "Varg",
  tagline: "Logos built for brands that expect results.",
  /** Tagline under logo in footer. Defaults to "Built for brands that expect results." */
  footerTagline: "Built for brands that expect results.",
  baseUrl,
  contactEmail,
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/vargdesign_/",
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL ?? "https://www.pinterest.com/vargdesign_/",
  } as Record<string, string>,
} as const;

export function fullUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${p}`;
}

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
