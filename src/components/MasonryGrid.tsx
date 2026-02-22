import Link from "next/link";
import type { WorkItem } from "@/data/work";
import { WorkGridImage } from "@/components/WorkGridImage";

type MasonryGridProps = { items: WorkItem[] };

export function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <div
      className="columns-2 gap-4 sm:columns-3 lg:columns-4"
      style={{ columnFill: "balance" }}
      role="list"
    >
      {items.map(({ slug, title, imagePath, imageWidth = 400, imageHeight = 400 }) => (
        <Link
          key={slug}
          href={`/work/${slug}`}
          className="group mb-4 block break-inside-avoid overflow-hidden rounded-[20px] text-left outline-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] hover:opacity-90"
          role="listitem"
        >
          <WorkGridImage
            src={imagePath}
            alt={`${title} – logo design portfolio`}
            width={imageWidth}
            height={imageHeight}
            className="w-full rounded-[20px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}
