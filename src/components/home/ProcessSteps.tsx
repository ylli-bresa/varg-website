const steps = [
  {
    title: "Brief",
    body: "Tell us what the brand needs and what it must avoid.",
  },
  {
    title: "Concepts",
    body: "We design directions that fit your audience and your goals.",
  },
  {
    title: "Refinement",
    body: "We sharpen the chosen concept and deliver final files ready to use.",
  },
];

export function ProcessSteps() {
  return (
    <section className="px-4 py-20 sm:px-6" aria-labelledby="process-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="process-heading" className="text-center text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
          A simple process, built for speed
        </h2>
        <ol className="stagger-children mt-10 grid gap-4 sm:grid-cols-3" role="list">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="stagger-item">
              <div className="why-card h-full rounded-[20px] bg-[var(--foreground)]/10 p-5 text-left transition-colors duration-200">
                <span className="text-2xl font-semibold text-[var(--foreground)]/40" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--foreground)]/80">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
