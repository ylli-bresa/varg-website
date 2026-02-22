import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const baseUrl = site.baseUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Logo Design Services | Premium Quality, Fast Delivery",
    template: "%s | VARG",
  },
  description:
    "Professional logo design for startups and brands. Custom logos, fast delivery, premium files. See our work and get a quote today.",
  keywords: [
    "logo design",
    "logo designer",
    "professional logo design",
    "branding services",
    "custom logo design",
  ],
  authors: [{ name: site.name, url: baseUrl }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Logo Design Services | Premium Quality, Fast Delivery",
    description:
      "Professional logo design for startups and brands. Custom logos, fast delivery, premium files. See our work and get a quote today.",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services | Premium Quality, Fast Delivery",
    description:
      "Professional logo design for startups and brands. Custom logos, fast delivery, premium files. See our work and get a quote today.",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] text-[15px] leading-[1.6]`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-16 rounded bg-[var(--foreground)] px-3 py-2 text-sm text-[var(--background)] transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-screen" role="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
