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
      {/* Same 3-column layout on all viewports: horizontal scroll on narrow screens */}
      <div className="-mx-4 overflow-x-auto overflow-y-hidden px-4 scroll-smooth sm:mx-0 sm:px-0 sm:overflow-visible" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="grid min-w-[840px] grid-cols-3 gap-8 sm:min-w-0 md:min-w-0">
          {/* Standard: dark gray card */}
          <div className="flex h-full min-w-[260px] flex-col rounded-[20px] bg-neutral-800 p-6 text-left sm:min-w-0">
          <h3 className="text-sm font-medium text-neutral-400">Standard</h3>
          <p className="mt-1 text-2xl font-bold text-neutral-100">$199</p>
          <p className="mt-2 text-sm text-neutral-300">Best for startups and growing businesses that need a professional logo foundation</p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300" role="list">
            {standardIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-neutral-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-neutral-200">Delivery: 3–5 days</p>
          <div className="mt-auto pt-6">
            <Link
              href="/contact?start=1&mode=guided&package=standard"
              className="inline-flex w-full items-center justify-center rounded-full !bg-neutral-600 px-4 py-3 text-sm font-medium text-neutral-100 hover:!bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Get your Logo
            </Link>
          </div>
        </div>

        {/* Premium: white card */}
        <div className="relative flex h-full min-w-[260px] flex-col rounded-[20px] bg-white p-6 text-left shadow-lg shadow-neutral-500/20 sm:min-w-0">
          <span className="absolute right-4 top-4 rounded-full bg-neutral-900/10 px-2 py-0.5 text-xs font-medium text-neutral-900">
            Popular
          </span>
          <h3 className="text-sm font-medium text-neutral-500">Premium</h3>
          <p className="mt-1 text-2xl font-bold text-neutral-900">$399</p>
          <p className="mt-2 text-sm text-neutral-600">
            Best for brands that want a complete identity ready for launch
          </p>
          <p className="mt-2 text-xs text-neutral-500">Everything in Standard plus:</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700" role="list">
            {premiumIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-neutral-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-neutral-900">Delivery: 1–3 days</p>
          <div className="mt-auto pt-6">
            <Link
              href="/contact?start=1&mode=guided&package=premium"
              className="inline-flex w-full items-center justify-center rounded-full !bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:!bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 focus:ring-offset-white"
            >
              Get your Logo
            </Link>
          </div>
        </div>

        {/* Enterprise: transparent with white stroke */}
        <div className="flex h-full min-w-[260px] flex-col rounded-[20px] border border-white bg-transparent p-6 text-left sm:min-w-0">
          <h3 className="text-sm font-medium text-stone-400">Enterprise</h3>
          <p className="mt-1 text-2xl font-bold text-stone-100">Custom</p>
          <p className="mt-2 text-sm text-stone-300">
            Best for large businesses and advanced brand needs
          </p>
          <p className="mt-4 text-xs text-stone-400">Includes:</p>
          <ul className="mt-2 space-y-2 text-sm text-stone-300" role="list">
            {enterpriseIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="text-stone-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-stone-400 bg-transparent px-4 py-3 text-sm font-medium text-stone-100 hover:bg-stone-800/30 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
        </div>
      </div>

      <p className="text-center text-sm text-[var(--foreground)]/60">
        Clear steps. Fast delivery. Files ready to use.
      </p>
    </div>
  );
}
