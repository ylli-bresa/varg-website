import Link from "next/link";
import Image from "next/image";
import { getWorkPreview, workPreviewSlugs, workPreviewTags } from "@/data/work";

export function WorkPreview() {
  const items = getWorkPreview(workPreviewSlugs);

  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="work-preview-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="work-preview-heading" className="text-center text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Work that speaks first
        </h2>
        <p className="mt-3 text-center text-[var(--foreground)]/70">
          Scroll the direction. Click a mark. Start your own.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {items.map(({ slug, title, imagePath, imageWidth = 400, imageHeight = 400 }, index) => {
            const isLast = index === items.length - 1;
            const tag = workPreviewTags[index];
            return (
              <Link
                key={slug}
                href={`/work/${slug}`}
                className="group block overflow-hidden rounded-[20px] bg-[var(--foreground)]/[0.06] text-left transition-all duration-300 hover:bg-[var(--foreground)]/[0.1] dark:bg-[var(--foreground)]/10 dark:hover:bg-[var(--foreground)]/15"
              >
                <div
                  className={`relative aspect-square overflow-hidden rounded-[20px] bg-[var(--foreground)]/5 ${isLast ? "p-0" : "p-4"}`}
                >
                  <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className={`transition-all duration-300 group-hover:opacity-90 ${isLast ? "object-cover" : "object-contain"}`}
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  {tag && (
                    <span
                      className={`absolute bottom-2 left-2 w-max max-w-[calc(100%-1rem)] break-words rounded-2xl border px-3 py-2 text-center text-xs font-medium shadow-sm backdrop-blur-md ${
                        index === 0
                          ? "border-[var(--foreground)]/20 bg-[var(--foreground)]/80 text-[var(--background)]"
                          : "border-white/20 bg-[var(--foreground)]/5 text-[var(--foreground)] dark:border-white/10 dark:bg-[var(--foreground)]/10"
                      }`}
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)]/10 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-[var(--foreground)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}
