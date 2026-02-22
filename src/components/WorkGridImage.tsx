"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMAGE = "/placeholders/logo-1.svg";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  /** When true, image fills the parent (parent must have position: relative and size). */
  fill?: boolean;
};

export function WorkGridImage({ src, alt, width, height, className, sizes, loading, fill = false }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  if (fill) {
    return (
      <Image
        src={currentSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        loading={loading}
        onError={() => setCurrentSrc(FALLBACK_IMAGE)}
      />
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      loading={loading}
      onError={() => setCurrentSrc(FALLBACK_IMAGE)}
    />
  );
}
