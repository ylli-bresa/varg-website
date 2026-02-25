"use client";

import Image from "next/image";
import { site } from "@/lib/site";

type LogoProps = {
  /** Height in Tailwind units (e.g. "h-7", "h-8"). Default h-7. */
  className?: string;
};

export function Logo({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <Image
      src="/logos/white-logo.svg"
      alt={site.name}
      width={120}
      height={28}
      className={className}
      priority
    />
  );
}
