import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const STATS = [
  { value: "200+", label: "Projects" },
  { value: "8+", label: "Years" },
  { value: "Europe", label: "Based" },
] as const;

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      {/*
        Layout proportions derived from mockup (2112×1126):
        content column ≈ 1406px; nav + hero share the same horizontal edges.
      */}
      <div className="mx-auto flex min-h-dvh w-full max-w-[1406px] flex-col px-4 pb-8 pt-6 sm:px-6 md:px-8 lg:pb-12 lg:pt-8">
        <header className="mb-5 flex items-center justify-between md:mb-6">
          <a
            href="/"
            className="relative block size-11 shrink-0 sm:size-12 lg:size-[52px]"
          >
            <Image
              src="/varg-mark.svg"
              alt="Varg"
              fill
              sizes="52px"
              className="object-contain"
              priority
              unoptimized
            />
          </a>

          <nav aria-label="Primary" className="flex items-center gap-2.5">
            <a
              href="#work"
              className="rounded-full bg-varg-pill px-5 py-2.5 text-sm font-medium text-white"
            >
              Work
            </a>
            <a
              href="#about"
              className="rounded-full bg-varg-pill px-5 py-2.5 text-sm font-medium text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-full bg-varg-neon px-5 py-2.5 text-sm font-semibold text-black"
            >
              Let&apos;s Work
            </a>
          </nav>
        </header>

        <section className="relative flex min-h-0 flex-1 flex-col">
          <div className="relative flex min-h-[min(52rem,calc(100dvh-8rem))] flex-1 flex-col overflow-hidden rounded-[32px] bg-varg-hero md:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-16">
              <ImagePlaceholder className="h-28 w-36 opacity-100 sm:h-32 sm:w-40 lg:h-36 lg:w-44" />
            </div>

            <div
              className="absolute top-1/2 right-5 flex -translate-y-1/2 flex-col items-center gap-3 md:right-6"
              aria-hidden="true"
            >
              <span className="size-2.5 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
            </div>

            <div className="relative z-10 mt-auto px-6 pb-36 pt-28 sm:px-8 sm:pb-40 lg:px-10 lg:pb-44">
              <h1 className="text-[clamp(3.25rem,10vw,6.85rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-white">
                Branding
              </h1>
              <p className="mt-3 text-[clamp(1rem,2.2vw,1.375rem)] leading-snug tracking-[-0.01em]">
                <span className="font-medium text-varg-muted">For </span>
                <span className="font-bold text-varg-neon">
                  Businesses &amp; Individuals
                </span>
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-2 left-6 z-20 flex items-stretch gap-3 sm:left-8 sm:gap-3.5 lg:bottom-3 lg:left-10 lg:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[6.5rem] rounded-[14px] bg-varg-chip px-5 py-5 sm:min-w-[7.75rem] sm:rounded-2xl sm:px-6 sm:py-6 lg:min-w-[9rem]"
              >
                <div className="text-[1.35rem] leading-none font-bold tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.85rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-varg-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
