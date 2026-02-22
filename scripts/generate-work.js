const fs = require("fs");
const path = require("path");

const workDir = path.join(__dirname, "..", "public", "work");
const files = fs
  .readdirSync(workDir)
  .filter((f) => f !== "README.md" && !f.endsWith(".md"))
  .sort();

const items = files.map((name, i) => {
  const base = path.basename(name, path.extname(name));
  return {
    id: String(i + 1),
    slug: base,
    title: base,
    imagePath: "/work/" + name,
    imageWidth: 400,
    imageHeight: 400,
  };
});

const lines = items.map(
  (o) =>
    `  { id: "${o.id}", slug: "${o.slug}", title: "${o.title}", imagePath: "${o.imagePath}", imageWidth: 400, imageHeight: 400 }`
);

const content = `export type WorkItem = {
  id: string;
  slug: string;
  title: string;
  imagePath: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const workItems: WorkItem[] = [
${lines.join(",\n")},
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((w) => w.slug === slug);
}

export function getWorkPreview(limit = 6): WorkItem[] {
  return workItems.slice(0, limit);
}
`;

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "work.ts"), content);
console.log("Written", items.length, "work items");
