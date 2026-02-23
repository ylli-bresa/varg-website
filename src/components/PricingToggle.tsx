"use client";

import Link from "next/link";

const CheckIcon = ({ className = "text-[var(--foreground)]/70" }: { className?: string }) => (
  <svg className={`mt-0.5 h-4 w-4 shrink-0 ${className}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 8.5l3 3 7-7" />
  </svg>
);

const standardIncludes = [
  "2 custom logo concepts",
  "Unlimited revisions",
  "High-resolution PNG and JPG files",
  "SVG vector file",
  "Transparent background versions",
  "Black and white logo variations",
];

const premiumIncludes = [
  "4 custom logo concepts",
  "Unlimited revisions",
  "Full source files (AI, SVG, PDF)",
  "Color palette and typography guide",
  "Social media logo versions",
  "Full commercial usage license",
];

const enterpriseIncludes = [
  "Custom number of logo concepts",
  "Flexible revision rounds",
  "File formats based on your needs",
  "Optional brand add-ons",
  "Tailored delivery timeline",
  "Direct designer communication",
];

export function PricingToggle() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Standard: fill #222 (light), dark gray (dark) */}
        <div className="flex h-full flex-col rounded-[20px] bg-[#222222] p-6 text-left dark:bg-neutral-800">
          <h3 className="text-sm font-medium text-neutral-400 dark:text-neutral-400">Standard</h3>
          <p className="mt-1 text-2xl font-bold text-white dark:text-neutral-100">$199</p>
          <p className="mt-2 text-sm text-neutral-300 dark:text-neutral-300">Best for startups and growing businesses that need a professional logo foundation</p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-200 dark:text-neutral-300" role="list">
            {standardIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-neutral-400 dark:text-neutral-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-neutral-200 dark:text-neutral-200">Delivery: 3–5 days</p>
          <div className="mt-auto pt-6">
            <Link
              href="/contact?start=1&mode=guided&package=standard"
              className="inline-flex w-full items-center justify-center rounded-full !bg-black px-4 py-3 text-sm font-medium text-white hover:!bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-[#222222] dark:!bg-neutral-600 dark:text-neutral-100 dark:hover:!bg-neutral-500 dark:focus:ring-neutral-500 dark:focus:ring-offset-[var(--background)]"
            >
              Get your Logo
            </Link>
          </div>
        </div>

        {/* Premium: black card (light), white card (dark); white button */}
        <div className="relative flex h-full flex-col rounded-[20px] bg-black p-6 text-left shadow-lg dark:bg-white dark:shadow-neutral-500/20">
          <span className="absolute right-4 top-4 rounded-full bg-white/25 px-2 py-0.5 text-xs font-medium text-white dark:bg-neutral-900/10 dark:text-neutral-900">
            Popular
          </span>
          <h3 className="text-sm font-medium text-neutral-200 dark:text-neutral-500">Premium</h3>
          <p className="mt-1 text-2xl font-bold text-white dark:text-neutral-900">$399</p>
          <p className="mt-2 text-sm text-neutral-100 dark:text-neutral-600">
            Best for brands that want a complete identity ready for launch
          </p>
          <p className="mt-2 text-xs text-neutral-300 dark:text-neutral-500">Everything in Standard plus:</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-100 dark:text-neutral-700" role="list">
            {premiumIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-neutral-300 dark:text-neutral-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-white dark:text-neutral-900">Delivery: 1–3 days</p>
          <div className="mt-auto pt-6">
            <Link
              href="/contact?start=1&mode=guided&package=premium"
              className="inline-flex w-full items-center justify-center rounded-full !bg-white px-4 py-3 text-sm font-medium text-black hover:!bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black dark:!bg-neutral-900 dark:text-white dark:hover:!bg-neutral-800 dark:focus:ring-neutral-900 dark:focus:ring-offset-white"
            >
              Get your Logo
            </Link>
          </div>
        </div>

        {/* Enterprise: no fill; black stroke (light), white stroke (dark) */}
        <div className="flex h-full flex-col rounded-[20px] border border-black bg-transparent p-6 text-left dark:border-white dark:bg-transparent md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-medium text-stone-700 dark:text-stone-400">Enterprise</h3>
          <p className="mt-1 text-2xl font-bold text-stone-950 dark:text-stone-100">Custom</p>
          <p className="mt-2 text-sm text-stone-900 dark:text-stone-300">
            Best for large businesses and advanced brand needs
          </p>
          <p className="mt-4 text-xs text-stone-700 dark:text-stone-400">Includes:</p>
          <ul className="mt-2 space-y-2 text-sm text-stone-950 dark:text-stone-300" role="list">
            {enterpriseIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-stone-700 dark:text-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-stone-700 bg-transparent px-4 py-3 text-sm font-medium text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-[var(--background)] dark:border-stone-400 dark:text-stone-100 dark:hover:bg-stone-800/30 dark:focus:ring-stone-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-[var(--foreground)]/60">
        Clear steps. Fast delivery. Files ready to use.
      </p>
    </div>
  );
}
