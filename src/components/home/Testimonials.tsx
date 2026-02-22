"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const AUTO_ADVANCE_MS = 4000;

const ChevronLeft = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = testimonials.length;

  const goPrev = () => setIndex((i) => (i - 1 + len) % len);
  const goNext = () => setIndex((i) => (i + 1) % len);

  useEffect(() => {
    const id = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[var(--background)] px-4 py-20 sm:px-6" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-heading" className="text-center text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          What clients say after delivery
        </h2>
        <div className="mt-12" aria-live="polite" aria-atomic="true">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:h-10 sm:w-10"
            >
              <ChevronLeft />
            </button>
            <div className="relative min-h-[180px] w-full max-w-md">
              {testimonials.map(({ quote, name, company, logoLabel, logoPath }, i) => (
                <div
                  key={name}
                  className={`flex justify-center px-1 ${
                    i === index
                      ? "relative z-10 opacity-100 testimonial-slide"
                      : "pointer-events-none absolute inset-0 opacity-0 testimonial-slide"
                  }`}
                  aria-hidden={i !== index}
                >
                  <blockquote className="flex min-h-[180px] w-full flex-col justify-between rounded-[20px] bg-[var(--foreground)]/[0.06] p-4 sm:p-5 dark:bg-[var(--foreground)]/10">
                    <p className="text-sm leading-relaxed text-[var(--foreground)]/90 sm:text-base">&ldquo;{quote}&rdquo;</p>
                    <footer className="mt-3 flex items-center gap-3 text-xs text-[var(--foreground)]/70 sm:text-sm">
                      {(logoLabel || logoPath) && (
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-[var(--foreground)]/10 text-[10px] font-semibold uppercase tracking-wide text-[var(--foreground)]/80">
                          {logoPath ? <Image src={logoPath} alt="" width={32} height={32} className="object-contain p-0.5" /> : logoLabel}
                        </span>
                      )}
                      <span>
                        <cite className="not-italic font-medium text-[var(--foreground)]">{name}</cite>, {company}
                      </span>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:h-10 sm:w-10"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 shrink-0 rounded-full transition-colors ${
                  i === index ? "w-6 bg-[var(--foreground)]" : "w-2 bg-[var(--foreground)]/30 hover:bg-[var(--foreground)]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
