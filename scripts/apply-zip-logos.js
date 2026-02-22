const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const sourceDir = path.join(projectRoot, "temp-zip-extract", "varg-work-logos");
const workDir = path.join(projectRoot, "public", "work");
const workTsPath = path.join(projectRoot, "src", "data", "work.ts");

if (!fs.existsSync(sourceDir)) {
  console.error("Extract the zip first: run scripts/extract-zip.ps1");
  process.exit(1);
}

const imageExts = [".jpg", ".jpeg", ".png", ".webp", ".svg"];
const files = fs.readdirSync(sourceDir).filter((name) => {
  const ext = path.extname(name).toLowerCase();
  return imageExts.includes(ext) && path.basename(name, ext).length > 0;
});

// slug -> extension (e.g. "03ea47aa..." -> "jpg")
const slugToExt = {};
files.forEach((name) => {
  const ext = path.extname(name).toLowerCase();
  const slug = path.basename(name, ext);
  slugToExt[slug] = ext.slice(1); // ".jpg" -> "jpg"
});

// Copy to public/work
if (!fs.existsSync(workDir)) fs.mkdirSync(workDir, { recursive: true });
let copied = 0;
files.forEach((name) => {
  const src = path.join(sourceDir, name);
  const dest = path.join(workDir, name);
  fs.copyFileSync(src, dest);
  copied++;
});
console.log("Copied", copied, "images to public/work/");

// Update work.ts: replace imagePath for each slug with correct extension
let workTsContent = fs.readFileSync(workTsPath, "utf8");
workTsContent = workTsContent.replace(
  /imagePath: "(\/work\/)([a-f0-9]+)\.(svg|jpg|webp)"/g,
  (_, prefix, slug, _oldExt) => {
    const ext = slugToExt[slug] || "svg";
    return `imagePath: "${prefix}${slug}.${ext}"`;
  }
);
fs.writeFileSync(workTsPath, workTsContent);
console.log("Updated src/data/work.ts with correct image extensions");
console.log("Done. You can delete the temp folder: temp-zip-extract");