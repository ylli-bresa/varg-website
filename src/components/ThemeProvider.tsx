"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeColorSync({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const color = "#0c0c0c";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;
  }, []);
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
      disableTransitionOnChange
    >
      <ThemeColorSync>{children}</ThemeColorSync>
    </NextThemesProvider>
  );
}
