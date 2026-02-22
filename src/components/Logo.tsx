"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { site } from "@/lib/site";

type LogoProps = {
  /** Height in Tailwind units (e.g. "h-7", "h-8"). Default h-7. */
  className?: string;
};

export function Logo({ className = "h-7 w-auto" }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="inline-block min-h-[28px] min-w-[120px] text-lg font-semibold tracking-tight text-[var(--foreground)]" aria-hidden>
        {site.name}
      </span>
    );
  }

  return (
    <Image
      src={resolvedTheme === "dark" ? "/logos/white-logo.svg" : "/logos/black-logo.svg"}
      alt={site.name}
      width={120}
      height={28}
      className={className}
      priority
    />
  );
}
