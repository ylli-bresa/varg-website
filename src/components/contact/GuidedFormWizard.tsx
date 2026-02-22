"use client";

import { useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import ReCAPTCHA from "react-google-recaptcha";

const STEPS = [
  { id: 1, title: "Brand basics", fields: ["email", "brandName", "package"] },
  { id: 2, title: "Industry", fields: ["industry"] },
  { id: 3, title: "Audience", fields: ["targetAudience"] },
  { id: 4, title: "Personality", fields: ["brandPersonality"] },
  { id: 5, title: "Visual direction", fields: ["colorPreferences", "styleReferences", "competitors"] },
  { id: 6, title: "Timing and scope", fields: ["deadline", "budget"] },
  { id: 7, title: "Attachments", fields: ["attachments"] },
  { id: 8, title: "Final note", fields: ["message"] },
] as const;

export type BriefData = {
  email: string;
  brandName: string;
  industry: string;
  targetAudience: string;
  brandPersonality: string;
  colorPreferences: string;
  styleReferences: string;
  competitors: string;
  deadline: string;
  budget: string;
  package: "standard" | "premium" | "enterprise";
  message: string;
  attachments?: FileList | null;
};

const initial: BriefData = {
  email: "",
  brandName: "",
  industry: "",
  targetAudience: "",
  brandPersonality: "",
  colorPreferences: "",
  styleReferences: "",
  competitors: "",
  deadline: "",
  budget: "",
  package: "standard",
  message: "",
};

const inputClass =
  "mt-1 w-full rounded-[10px] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30 focus:ring-offset-2 focus:ring-offset-[var(--background)]";
const selectClass = `${inputClass} pr-12 appearance-none pb-1.5`;
const labelClass = "block text-left";

const ChevronDown = () => (
  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-[var(--foreground)]/70" aria-hidden>
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
);

export function GuidedFormWizard() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const [formLoadedAt] = useState(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [step, setStep] = useState(1);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const { resolvedTheme } = useTheme();
  const [data, setData] = useState<BriefData>(() => ({
    ...initial,
    package: packageParam === "premium" ? "premium" : packageParam === "enterprise" ? "enterprise" : "standard",
  }));
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** When true, server asked for captcha (e.g. submit was too fast); show reCAPTCHA and require it on next submit. */
  const [verificationRequired, setVerificationRequired] = useState(false);

  const update = useCallback((key: keyof BriefData, value: string | FileList | null) => {
    setData((d) => ({ ...d, [key]: value }));
  }, []);

  const currentStep = STEPS[step - 1];
  const isLast = step === STEPS.length;

  const stepFieldsValid = currentStep.fields.every((f) => {
    const v = data[f as keyof BriefData];
    if (f === "attachments") return true;
    return typeof v === "string" && v.trim().length > 0;
  });
  const requiredForSend = ["email", "brandName", "message"] as const;
  const requiredFieldsValid = requiredForSend.every((key) => {
    const v = data[key];
    return typeof v === "string" && v.trim().length > 0;
  });
  const canProceed = isLast ? stepFieldsValid && requiredFieldsValid : stepFieldsValid;

  const goNext = () => {
    if (isLast) return;
    setStep((s) => Math.min(s + 1, STEPS.length));
  };

  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  const requiredForSubmit = ["email", "brandName", "package"] as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLast) {
      goNext();
      return;
    }
    const missing = requiredForSubmit.filter((key) => {
      const v = data[key];
      return typeof v !== "string" || !v.trim();
    });
    if (missing.length > 0) {
      setError("Please fill in your email, brand name, and package before sending.");
      return;
    }
    if (recaptchaSiteKey && verificationRequired) {
      const token = recaptchaRef.current?.getValue();
      if (!token) {
        setError("Please complete the verification and try again.");
        return;
      }
    }
    setSending(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("_loadedAt", String(formLoadedAt));
      formData.append("fax", honeypotRef.current?.value ?? "");
      if (recaptchaSiteKey && recaptchaRef.current) {
        formData.append("recaptchaToken", recaptchaRef.current.getValue() ?? "");
      }
      Object.entries(data).forEach(([k, v]) => {
        if (k === "attachments" && v && typeof v !== "string") {
          for (let i = 0; i < v.length; i++) formData.append("files", v[i]);
        } else if (typeof v === "string") {
          formData.append(k, v);
        }
      });
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        if (err.code === "VERIFICATION_REQUIRED") {
          setVerificationRequired(true);
        }
        throw new Error(err.message ?? "Something went wrong.");
      }
      setSuccess(true);
      setVerificationRequired(false);
      recaptchaRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Try again.");
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-[20px] bg-[var(--foreground)]/[0.06] p-6 dark:bg-[var(--foreground)]/10">
        <p className="font-medium text-[var(--foreground)]">Brief received. We will reply with next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="fax-hp">Fax</label>
        <input ref={honeypotRef} id="fax-hp" type="text" name="fax" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex gap-2" role="tablist" aria-label="Form progress">
        {STEPS.map((s) => (
          <span
            key={s.id}
            className={`h-1 flex-1 ${
              s.id <= step ? "bg-[var(--foreground)]/60" : "bg-[var(--foreground)]/20"
            }`}
            aria-hidden
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4 text-left">
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Your email <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="e.g. hello@company.com"
              className={inputClass}
              required
            />
          </label>
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Brand name <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.brandName}
              onChange={(e) => update("brandName", e.target.value)}
              placeholder="e.g. Acme Inc."
              className={inputClass}
              required
            />
          </label>
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Package <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <span className="relative block">
              <select
                value={data.package}
                onChange={(e) => update("package", e.target.value as "standard" | "premium" | "enterprise")}
                className={selectClass}
                required
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="enterprise">Enterprise (custom)</option>
              </select>
              <ChevronDown />
            </span>
          </label>
        </div>
      )}

      {step === 2 && (
        <label className={labelClass}>
          <span className="block text-sm font-medium text-[var(--foreground)]">Industry <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
          <input
            type="text"
            value={data.industry}
            onChange={(e) => update("industry", e.target.value)}
            placeholder="e.g. Tech, Fashion, Food & Beverage"
            className={inputClass}
            required
          />
        </label>
      )}

      {step === 3 && (
        <label className={labelClass}>
          <span className="block text-sm font-medium text-[var(--foreground)]">Target audience <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
          <input
            type="text"
            value={data.targetAudience}
            onChange={(e) => update("targetAudience", e.target.value)}
            placeholder="e.g. Small business owners, 25–45"
            className={inputClass}
            required
          />
        </label>
      )}

      {step === 4 && (
        <label className={labelClass}>
          <span className="block text-sm font-medium text-[var(--foreground)]">Brand personality <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
          <input
            type="text"
            value={data.brandPersonality}
            onChange={(e) => update("brandPersonality", e.target.value)}
            placeholder="e.g. Professional, friendly, innovative"
            className={inputClass}
            required
          />
        </label>
      )}

      {step === 5 && (
        <div className="space-y-4 text-left">
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Color preferences <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.colorPreferences}
              onChange={(e) => update("colorPreferences", e.target.value)}
              placeholder="e.g. Blue and white, minimal palette"
              className={inputClass}
              required
            />
          </label>
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Style references (links or notes) <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.styleReferences}
              onChange={(e) => update("styleReferences", e.target.value)}
              placeholder="e.g. Pinterest board link or brand you admire"
              className={inputClass}
              required
            />
          </label>
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Competitors (links or names) <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.competitors}
              onChange={(e) => update("competitors", e.target.value)}
              placeholder="e.g. Competitor A, Competitor B"
              className={inputClass}
              required
            />
          </label>
        </div>
      )}

      {step === 6 && (
        <div className="space-y-4 text-left">
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Deadline <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.deadline}
              onChange={(e) => update("deadline", e.target.value)}
              placeholder="e.g. 2 weeks"
              className={inputClass}
              required
            />
          </label>
          <label className={labelClass}>
            <span className="block text-sm font-medium text-[var(--foreground)]">Budget <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
            <input
              type="text"
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
              placeholder="e.g. Standard or Premium package"
              className={inputClass}
              required
            />
          </label>
        </div>
      )}

      {step === 7 && (
        <label className={labelClass}>
          <span className="block text-sm font-medium text-[var(--foreground)]">Attach files (optional)</span>
          <input
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={(e) => update("attachments", e.target.files)}
            className={`${inputClass} text-sm`}
          />
        </label>
      )}

      {step === 8 && (
        <label className={labelClass}>
          <span className="block text-sm font-medium text-[var(--foreground)]">Free message to the designer <span className="text-[var(--foreground)]/60" aria-hidden>*</span></span>
          <textarea
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            placeholder="e.g. We need a logo for our new product launch…"
            className={inputClass}
            required
          />
        </label>
      )}

      {isLast && recaptchaSiteKey && verificationRequired && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-[var(--foreground)]/80">Please verify you’re not a robot, then send again.</p>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            size="normal"
            aria-label="Verify you are not a robot"
          />
        </div>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}

      <div className="flex gap-4">
        {step > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full px-6 py-3 text-sm font-medium hover:bg-[var(--foreground)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={(!canProceed && !isLast) || sending}
          className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          {sending ? "Sending…" : isLast ? "Send Brief" : "Next"}
        </button>
      </div>
    </form>
  );
}
