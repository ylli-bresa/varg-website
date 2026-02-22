import Link from "next/link";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const defaultHref = "/contact?start=1&mode=guided";

export function CTAButton({
  href = defaultHref,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-[var(--foreground)] border-opacity-20 hover:border-opacity-40 hover:bg-[var(--foreground)]/5 ${className}`}
    >
      {children}
    </Link>
  );
}
