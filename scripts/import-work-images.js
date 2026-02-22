const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const workTsPath = path.join(projectRoot, "src", "data", "work.ts");
const workDir = path.join(projectRoot, "public", "work");
const placeholders = [
  "logo-1.svg",
  "logo-2.svg",
  "logo-3.svg",
  "logo-4.svg",
  "logo-5.svg",
  "logo-6.svg",
  "logo-7.svg",
  "logo-8.svg",
  "logo-9.svg",
];

// Extract slugs from work.ts (from imagePath: "/work/SLUG.jpg" or ".webp")
const workTsContent = fs.readFileSync(workTsPath, "utf8");
const slugMatches = workTsContent.matchAll(/imagePath: "\/work\/([a-f0-9]+)\.(jpg|webp)"/g);
const slugs = [...new Set([...slugMatches].map((m) => m[1]))];

if (!slugs.length) {
  console.log("No work slugs found in work.ts");
  process.exit(0);
}

// Ensure public/work exists
if (!fs.existsSync(workDir)) fs.mkdirSync(workDir, { recursive: true });

// Copy placeholder SVGs into public/work/{slug}.svg (rotate through placeholders for variety)
let copied = 0;
slugs.forEach((slug, i) => {
  const placeholder = placeholders[i % placeholders.length];
  const src = path.join(projectRoot, "public", "placeholders", placeholder);
  const dest = path.join(workDir, `${slug}.svg`);
  fs.copyFileSync(src, dest);
  copied++;
});

console.log(`Copied ${copied} placeholder images to public/work/`);

// Update work.ts: change .jpg and .webp to .svg
const newWorkTsContent = workTsContent.replace(
  /imagePath: "(\/work\/[a-f0-9]+)\.(jpg|webp)"/g,
  'imagePath: "$1.svg"'
);
fs.writeFileSync(workTsPath, newWorkTsContent);
console.log("Updated src/data/work.ts to use .svg paths");
console.log("Done.");