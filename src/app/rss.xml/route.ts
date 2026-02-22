import { workItems } from "@/data/work";
import { fullUrl, site } from "@/lib/site";

type ProjectFeedItem = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageMimeType: string;
  publishedAt: Date;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function inferMimeType(path: string): string {
  if (path.endsWith(".webp")) return "image/webp";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

function getFeedProjects(): ProjectFeedItem[] {
  const now = Date.now();
  return workItems.map((item, index) => ({
    title: item.title,
    slug: item.slug,
    description: `${item.title} from the Varg logo design portfolio.`,
    imageUrl: fullUrl(item.imagePath),
    imageMimeType: inferMimeType(item.imagePath),
    // Deterministic fallback dates until real publish dates exist in data.
    publishedAt: new Date(now - index * 24 * 60 * 60 * 1000),
  }));
}

function projectToRssItem(project: ProjectFeedItem): string {
  const itemUrl = fullUrl(`/work/${project.slug}`);
  return [
    "<item>",
    `<title>${escapeXml(project.title)}</title>`,
    `<link>${escapeXml(itemUrl)}</link>`,
    `<guid isPermaLink="true">${escapeXml(itemUrl)}</guid>`,
    `<description>${escapeXml(project.description)}</description>`,
    `<pubDate>${project.publishedAt.toUTCString()}</pubDate>`,
    `<enclosure url="${escapeXml(project.imageUrl)}" length="0" type="${escapeXml(project.imageMimeType)}" />`,
    `<media:content url="${escapeXml(project.imageUrl)}" medium="image" type="${escapeXml(project.imageMimeType)}" />`,
    "</item>",
  ].join("");
}

export async function GET(): Promise<Response> {
  const rssUrl = fullUrl("/rss.xml");
  const itemsXml = getFeedProjects().map(projectToRssItem).join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">',
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
