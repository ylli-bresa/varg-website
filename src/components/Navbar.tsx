"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y <= 0 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      role="banner"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          aria-label={`${site.name} – Home`}
        >
          <Logo />
        </Link>

        {/* Desktop: links + CTA */}
        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact?start=1&mode=guided"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Get your Logo
          </Link>
        </div>

        {/* Mobile: burger button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            <span
              className={`h-0.5 w-5 shrink-0 bg-current transition-transform duration-200 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`h-0.5 w-5 shrink-0 bg-current transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 shrink-0 bg-current transition-transform duration-200 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu backdrop (blurred overlay) */}
      <div
        className={`fixed inset-0 top-16 z-30 bg-[var(--background)]/30 backdrop-blur-sm sm:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        } transition-[visibility,opacity] duration-200`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-40 bg-[var(--background)]/90 backdrop-blur-lg sm:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        } transition-[visibility,opacity] duration-200`}
        aria-hidden={!mobileOpen}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 rounded-b-2xl px-4 py-4 backdrop-blur-md bg-[var(--background)]/80">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="rounded-[20px] px-4 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--foreground)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact?start=1&mode=guided"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Get your Logo
          </Link>
        </div>
      </div>
    </header>
  );
}
