"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function ThemeColorSync({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    if (resolvedTheme === undefined) return;
    const color = "#0c0c0c";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;
  }, [resolvedTheme]);
  return <>{children}</>;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      storageKey="varg-theme"
    >
      <ThemeColorSync>{children}</ThemeColorSync>
    </NextThemesProvider>
  );
}
