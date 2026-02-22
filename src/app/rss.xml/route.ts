import { fullUrl, site } from "@/lib/site";

type ProjectFeedItem = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
};

const PROJECTS: ProjectFeedItem[] = [
  {
    title: "Nord Peak Coffee Rebrand",
    slug: "nord-peak-coffee-rebrand",
    description: "Logo and visual identity refresh for a specialty coffee brand.",
    publishedAt: "2026-01-15T09:00:00.000Z",
  },
  {
    title: "Axion Fitness Launch Identity",
    slug: "axion-fitness-launch-identity",
    description: "Complete launch-ready identity system for a premium fitness startup.",
    publishedAt: "2025-12-04T14:30:00.000Z",
  },
  {
    title: "Hearth & Stone Packaging Mark",
    slug: "hearth-stone-packaging-mark",
    description: "Custom packaging logomark and brand assets for a home goods label.",
    publishedAt: "2025-10-22T11:15:00.000Z",
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function projectToRssItem(project: ProjectFeedItem): string {
  const itemUrl = fullUrl(`/work/${project.slug}`);
  return [
    "<item>",
    `<title>${escapeXml(project.title)}</title>`,
    `<link>${escapeXml(itemUrl)}</link>`,
    `<guid isPermaLink="true">${escapeXml(itemUrl)}</guid>`,
    `<description>${escapeXml(project.description)}</description>`,
    `<pubDate>${new Date(project.publishedAt).toUTCString()}</pubDate>`,
    "</item>",
  ].join("");
}

export async function GET(): Promise<Response> {
  const rssUrl = fullUrl("/rss.xml");
  const itemsXml = PROJECTS.map(projectToRssItem).join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escapeXml(site.name)} Projects</title>`,
    `<link>${escapeXml(site.baseUrl)}</link>`,
    `<description>${escapeXml(site.tagline)}</description>`,
    `<atom:link href="${escapeXml(rssUrl)}" rel="self" type="application/rss+xml" />`,
    ...[itemsXml],
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
