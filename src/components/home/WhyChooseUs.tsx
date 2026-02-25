import Link from "next/link";

export function WhyChooseUs() {
  const bullets = [
    "Delivery you can plan around",
    "Concepts designed with intent",
    "Clean files, ready for launch",
    "Clear communication",
    "Results-focused from day one",
    "No surprises, clear process",
  ];

  return (
    <section className="bg-[var(--background)] px-4 py-20 sm:px-6" aria-labelledby="why-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h2 id="why-heading" className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Built for serious brands
        </h2>
        <ul className="stagger-children mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {bullets.map((item) => (
            <li key={item} className="stagger-item">
              <div className="why-card rounded-[20px] bg-[var(--foreground)]/10 px-4 py-3.5 text-left text-sm font-medium text-[var(--foreground)] transition-colors duration-200">
                {item}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-[var(--foreground)]/70">
          View our <Link href="/work" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">logo design portfolio</Link> or check our <Link href="/pricing" className="font-medium text-[var(--foreground)] underline-offset-2 hover:underline">logo design pricing</Link> to get started.
        </p>
      </div>
    </section>
  );
}
