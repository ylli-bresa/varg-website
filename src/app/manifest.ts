import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Varg Design — Professional Logo Design Services",
    short_name: "VARG",
    description:
      "Professional logo design studio. Custom logos for startups, brands, and businesses worldwide.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0c0c0c",
    theme_color: "#0c0c0c",
    categories: ["business", "design"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}
