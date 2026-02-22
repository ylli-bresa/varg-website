import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function ClientLogos() {
  return (
    <section className="bg-[var(--background)] px-4 pt-0 pb-16 sm:px-6 sm:pt-16" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="clients-heading" className="text-center text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Chosen by brands that move fast
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--foreground)]/70">
          A small snapshot of work delivered across industries.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          {clientLogos.map(({ name, logoPath }) => (
            <div key={name} className="flex h-14 w-32 items-center justify-center opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
              <Image src={logoPath} alt={name} width={128} height={56} className="object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
