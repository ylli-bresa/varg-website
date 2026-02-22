"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Delay before animating (ms). Use for stagger. */
  delay?: number;
  /** Optional class when visible. */
  className?: string;
  /** Root margin for intersection (e.g. "0px 0px -60px 0px" to trigger slightly before in view). */
  rootMargin?: string;
  /** Only run once (default true). */
  once?: boolean;
};

export function AnimateOnScroll({ children, delay = 0, className = "", rootMargin = "0px 0px -40px 0px", once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [delayed, setDelayed] = useState(delay === 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        setVisible(true);
        if (once && el) observer.unobserve(el);
      },
      { threshold: 0.1, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  useEffect(() => {
    if (!visible || delay === 0) {
      setDelayed(true);
      return;
    }
    const t = setTimeout(() => setDelayed(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return (
    <div
      ref={ref}
      className={`animate-in-view ${visible && delayed ? "animate-in-view-visible" : ""} ${className}`}
      style={delay && visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
