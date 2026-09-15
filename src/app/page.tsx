import ImagePlaceholder from "@/components/ImagePlaceholder";
import VargLogo from "@/components/VargLogo";

const STATS = [
  { value: "200+", label: "Projects" },
  { value: "8+", label: "Years" },
  { value: "Europe", label: "Based" },
] as const;

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      {/*
        Proportions from mockup 2112×1126:
        content ≈ 1406px wide; nav + hero share left/right edges.
      */}
      <div className="mx-auto flex min-h-dvh w-full max-w-[1406px] flex-col px-4 pb-6 pt-5 sm:px-6 md:px-8 lg:pb-8 lg:pt-7">
        <header className="mb-4 flex items-center justify-between sm:mb-5 lg:mb-6">
          <a href="/" className="block shrink-0" aria-label="Varg home">
            <VargLogo className="size-11 sm:size-12 lg:size-[52px]" />
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
          <div className="relative flex min-h-[min(58rem,calc(100dvh-7.25rem))] flex-1 flex-col overflow-hidden rounded-[32px] bg-varg-hero md:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <ImagePlaceholder className="h-32 w-40 sm:h-36 sm:w-44 lg:h-40 lg:w-52" />
            </div>

            <div
              className="absolute top-1/2 right-5 flex -translate-y-1/2 flex-col items-center gap-3 md:right-7"
              aria-hidden="true"
            >
              <span className="size-2.5 rounded-full bg-white" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
              <span className="size-2 rounded-full bg-[#6a6a6a]" />
            </div>

            <div className="relative z-10 mt-auto px-6 pb-40 pt-28 sm:px-8 sm:pb-44 lg:px-10 lg:pb-48">
              <h1 className="text-[clamp(3.5rem,11vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-white">
                Branding
              </h1>
              <p className="mt-3 text-[clamp(1rem,2.2vw,1.4rem)] leading-snug tracking-[-0.01em]">
                <span className="font-medium text-varg-muted">For </span>
                <span className="font-bold text-varg-neon">
                  Businesses &amp; Individuals
                </span>
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-6 z-20 flex -translate-y-3 items-stretch gap-3 sm:left-8 sm:gap-3.5 lg:left-10 lg:-translate-y-4 lg:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-[6.75rem] rounded-[14px] bg-varg-chip px-5 py-5 sm:min-w-[8rem] sm:rounded-2xl sm:px-6 sm:py-6 lg:min-w-[9.5rem]"
              >
                <div className="text-[1.4rem] leading-none font-bold tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.9rem]">
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
