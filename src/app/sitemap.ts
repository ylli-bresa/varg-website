import type { MetadataRoute } from "next";
import { fullUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = fullUrl("");

  const staticPages: { path: string; priority: number; changeFrequency?: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/logo-design", priority: 0.8, changeFrequency: "monthly" },
    { path: "/custom-logo-design", priority: 0.8, changeFrequency: "monthly" },
    { path: "/logo-design-for-startups", priority: 0.8, changeFrequency: "monthly" },
    { path: "/logo-design-pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.7, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.7, changeFrequency: "yearly" },
  ];

  return staticPages.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? base : fullUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
