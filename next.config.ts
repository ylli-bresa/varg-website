import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security and deployment
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Image optimization: enabled by default; use modern formats (AVIF/WebP)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 400],
  },
  async headers() {
    return [
      // Long-term cache for static assets (hashed filenames) — match first
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Favicon: short cache so updates are visible quickly
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=300, s-maxage=300" },
        ],
      },
      // Cache static media in public (images, logos)
      {
        source: "/(work|logos|placeholders)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // All other routes: security headers + HTML cache with revalidation
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
