import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { ContactSocialCard } from "@/components/contact/ContactSocialCard";

export function FinalCTA() {
  return (
    <section className="px-4 py-24 shadow-none sm:px-6 sm:py-32" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-2xl shadow-none">
        <div className="relative overflow-hidden rounded-[20px] bg-[var(--foreground)]/[0.06] px-6 py-12 text-center shadow-none sm:px-12 sm:py-16 dark:bg-[var(--foreground)]/10">
          <h2 id="final-cta-heading" className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Ready for a logo that feels certain
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--foreground)]/80">
            Start the brief. Pick a package. Get delivery you can trust.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact?start=1&mode=guided">Get your Logo</CTAButton>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[var(--foreground)]/70 underline-offset-2 transition-colors duration-200 hover:text-[var(--foreground)] hover:underline"
            >
              See Pricing
            </Link>
          </div>
          <p className="mt-6 text-xs text-[var(--foreground)]/50">
            No commitment until you send your brief.
          </p>
        </div>
        <ContactSocialCard />
      </div>
    </section>
  );
}
