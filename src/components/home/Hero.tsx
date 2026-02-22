import { CTAButton } from "@/components/CTAButton";

export function Hero() {
  return (
    <section
      className="hero-section relative px-4 pt-44 pb-12 sm:px-6 sm:pt-48 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="animate-hero text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
        >
          Logos built for brands that expect results
        </h1>
        <p className="animate-hero-tagline mt-3 text-lg text-[var(--foreground)]/80 sm:text-xl">
          Trusted by 200+ clients worldwide.
        </p>
        <div className="animate-hero-badges mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="list">
          {["Fast delivery", "Clear process", "Real outcomes"].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--foreground)]/10 px-3 py-1 text-xs font-normal text-[var(--foreground)]/80 sm:text-sm transition-smooth hover:bg-[var(--foreground)]/15"
              role="listitem"
            >
              <svg className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {label}
            </span>
          ))}
        </div>
        <div className="animate-hero-cta mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="/contact?start=1&mode=guided">Get your Logo</CTAButton>
          <CTAButton href="/pricing" variant="secondary">
            Logo design pricing
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
