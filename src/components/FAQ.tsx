import { faqItems } from "@/data/faq";
import { FaqJsonLd } from "@/components/JsonLd";
import { fullUrl } from "@/lib/site";

export function FAQ({ showSchema = true, pagePath = "/" }: { showSchema?: boolean; pagePath?: string } = {}) {
  return (
    <>
      {showSchema && <FaqJsonLd items={faqItems} pageUrl={fullUrl(pagePath)} />}
    <section
      className="px-4 py-20 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="faq-heading"
          className="text-center text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl"
        >
          Frequently Asked Questions About Logo Design
        </h2>
        <div className="mt-10 space-y-4" role="list">
          {faqItems.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-[20px] bg-[var(--foreground)]/10 transition-colors duration-200 open:bg-[var(--foreground)]/15"
              role="listitem"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-4 text-left font-medium text-[var(--foreground)] [&::-webkit-details-marker]:hidden">
                <span className="text-base sm:text-lg">{question}</span>
                <span className="ml-auto mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-lg font-normal text-[var(--foreground)]/60" aria-hidden>
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <div className="border-t border-[var(--foreground)]/10 px-5 pb-4 pt-2">
                <p className="text-sm text-[var(--foreground)]/80 sm:text-base">
                  {answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
