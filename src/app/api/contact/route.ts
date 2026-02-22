import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site";

const briefSchema = z.object({
  email: z.string().email("Valid email is required").max(200).trim(),
  brandName: z.string().min(1, "Brand name is required").max(200).trim(),
  industry: z.string().min(1, "Industry is required").max(200).trim(),
  targetAudience: z.string().min(1, "Target audience is required").max(500).trim(),
  brandPersonality: z.string().min(1, "Brand personality is required").max(500).trim(),
  colorPreferences: z.string().min(1, "Color preferences are required").max(300).trim(),
  styleReferences: z.string().min(1, "Style references are required").max(1000).trim(),
  competitors: z.string().min(1, "Competitors are required").max(500).trim(),
  deadline: z.string().min(1, "Deadline is required").max(100).trim(),
  budget: z.string().min(1, "Budget is required").max(100).trim(),
  package: z.enum(["standard", "premium", "enterprise"]),
  message: z.string().min(1, "Message is required").max(5000).trim(),
});

/** Honeypot: if filled, treat as bot. Use a name browsers won't autofill. */
const HONEYPOT_FIELD = "fax";
/** Min time from form load to submit (ms). Faster = likely bot. */
const MIN_SUBMIT_MS = 2000;

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    let body: Record<string, string>;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      body = Object.fromEntries(
        Array.from(formData.entries())
          .filter(([, v]) => typeof v === "string")
          .map(([k, v]) => [k, v as string])
      ) as Record<string, string>;
    } else if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      return NextResponse.json({ message: "Unsupported content type." }, { status: 400 });
    }

    if (body[HONEYPOT_FIELD]?.trim()) {
      return NextResponse.json({ message: "Something went wrong." }, { status: 400 });
    }
    const loadedAt = body._loadedAt ? Number(body._loadedAt) : 0;
    if (loadedAt && Date.now() - loadedAt < MIN_SUBMIT_MS) {
      return NextResponse.json({ message: "Please wait a moment and try again." }, { status: 400 });
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const token = body.recaptchaToken?.trim();
      if (!token) {
        return NextResponse.json({ message: "Verification failed. Please complete the reCAPTCHA." }, { status: 400 });
      }
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: recaptchaSecret, response: token }),
      });
      const verify = (await verifyRes.json()) as { success?: boolean };
      if (!verify.success) {
        return NextResponse.json({ message: "Verification failed. Please try again." }, { status: 400 });
      }
    }

    const parsed = briefSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const msg = Object.values(first)[0]?.[0] ?? "Validation failed.";
      return NextResponse.json({ message: msg }, { status: 400 });
    }

    const brief = parsed.data;
    const toEmail = site.contactEmail?.trim() || process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || !toEmail) {
      return NextResponse.json({ message: "Service temporarily unavailable. Please try again later." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const packageLabel = { standard: "Standard", premium: "Premium", enterprise: "Enterprise" }[brief.package];
    const text = [
      "New logo design brief",
      "",
      `From: ${brief.email}`,
      `Brand name: ${brief.brandName}`,
      `Package: ${packageLabel}`,
      `Industry: ${brief.industry}`,
      `Target audience: ${brief.targetAudience}`,
      `Brand personality: ${brief.brandPersonality}`,
      `Color preferences: ${brief.colorPreferences}`,
      `Style references: ${brief.styleReferences}`,
      `Competitors: ${brief.competitors}`,
      `Deadline: ${brief.deadline}`,
      `Budget: ${brief.budget}`,
      "",
      "Message:",
      brief.message,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "Varg Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Logo brief from ${brief.brandName} (${brief.email})`,
      text,
    });

    if (error) {
      return NextResponse.json({ message: "Something went wrong. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}
