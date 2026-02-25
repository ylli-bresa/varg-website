import Link from "next/link";
import { site } from "@/lib/site";
import { CTAButton } from "@/components/CTAButton";
import { SocialMediasCard } from "@/components/contact/SocialMediasCard";

export function FinalCTA() {
  return (
    <section className="mb-8 px-4 pb-[30px] pt-0 shadow-none sm:px-6 sm:pt-0" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-2xl space-y-6 shadow-none">
        <div className="relative overflow-hidden rounded-[20px] bg-[var(--foreground)]/10 px-6 py-12 text-center shadow-none sm:px-12 sm:py-16">
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
              Logo design pricing
            </Link>
          </div>
          <p className="mt-6 text-xs text-[var(--foreground)]/50">
            No commitment until you send your brief.
          </p>
        </div>
        <SocialMediasCard />
      </div>
    </section>
  );
}
