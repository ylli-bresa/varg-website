import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Email is not configured. Add RESEND_API_KEY to .env.local (replace re_xxxxxxxxx with your real API key from resend.com), then restart the dev server.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "yllibresa@gmail.com",
    subject: "Hello World",
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error("[Send email] Resend error:", error);
    return NextResponse.json(
      { message: `Email failed: ${error.message ?? "Send failed."}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
