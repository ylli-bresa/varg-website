"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QuickEmailForm } from "./QuickEmailForm";
import { GuidedFormWizard } from "./GuidedFormWizard";

export function ContactToggle() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const startParam = searchParams.get("start");
  const [useGuided, setUseGuided] = useState(
    () => modeParam === "guided" || startParam === "1"
  );

  useEffect(() => {
    if (modeParam === "guided" || startParam === "1") setUseGuided(true);
    else if (modeParam === "quick") setUseGuided(false);
  }, [modeParam, startParam]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4" role="group" aria-label="Contact method">
        <button
          type="button"
          onClick={() => setUseGuided(false)}
          className={`text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${
            !useGuided ? "text-[var(--foreground)]" : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
          }`}
        >
          Quick Email
        </button>
        <button
          type="button"
          role="switch"
          aria-checked={useGuided}
          aria-label="Toggle between Quick Email and Guided Form"
          onClick={() => setUseGuided((g) => !g)}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${
            useGuided ? "bg-[var(--foreground)]/20" : "bg-[var(--foreground)]/10"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-[var(--foreground)] transition-transform ${
              useGuided ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <button
          type="button"
          onClick={() => setUseGuided(true)}
          className={`text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${
            useGuided ? "text-[var(--foreground)]" : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
          }`}
        >
          Guided Form
        </button>
      </div>

      {useGuided ? <GuidedFormWizard /> : <QuickEmailForm />}
    </div>
  );
}
