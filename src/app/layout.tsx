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
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const baseUrl = site.baseUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Varg Design — Professional Logo Design Services",
    template: "%s | VARG",
  },
  description:
    "Varg Design is a professional logo design studio creating custom logos for startups, brands, and businesses worldwide.",
  keywords: [
    "logo design",
    "custom logo design",
    "professional logo designer",
    "branding services",
    "logo design studio",
  ],
  authors: [{ name: "Varg Design", url: baseUrl }],
  creator: "Varg Design",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Varg Design",
    title: "Varg Design — Professional Logo Design Services",
    description:
      "Varg Design is a professional logo design studio creating custom logos for startups, brands, and businesses worldwide.",
    url: baseUrl,
    images: [{ url: `${baseUrl}/logo.png`, width: 512, height: 512, alt: "Varg Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varg Design — Professional Logo Design Services",
    description:
      "Varg Design is a professional logo design studio creating custom logos for startups, brands, and businesses worldwide.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varg Design",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Varg Design is a logo design studio providing professional branding and logo design services worldwide.",
  founder: {
    "@type": "Person",
    name: "Ylli Bresa",
  },
  sameAs: [
    "https://www.instagram.com/vargdesign_/",
    "https://www.linkedin.com/in/yllibresa/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0c0c0c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)] text-[15px] leading-[1.6]`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-16 rounded bg-[var(--foreground)] px-3 py-2 text-sm text-[var(--background)] transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:ring-offset-2 focus:ring-offset-[var(--background)] focus-visible:translate-y-0"
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
