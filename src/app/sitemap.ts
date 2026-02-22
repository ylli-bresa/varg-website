import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { workItems } from "@/data/work";

const staticPaths = [
  "",
  "/work",
  "/pricing",
  "/contact",
  "/privacy",
  "/terms",
  "/logo-design",
  "/custom-logo-design",
  "/logo-design-for-startups",
  "/logo-design-pricing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl.replace(/\/$/, "");
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const workEntries: MetadataRoute.Sitemap = workItems.map((item) => ({
    url: `${base}/work/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...workEntries];
}
