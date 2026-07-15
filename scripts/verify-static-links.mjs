import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const ignoredPrefixes = ["mailto:", "tel:", "javascript:", "#", "data:"];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

function normalizeInternalUrl(rawValue) {
  const value = rawValue.trim();
  if (!value || ignoredPrefixes.some((prefix) => value.startsWith(prefix))) return null;
  if (/^https?:\/\//i.test(value)) return null;
  const pathname = value.split("#")[0].split("?")[0];
  if (!pathname.startsWith("/")) return null;
  return decodeURIComponent(pathname);
}

async function targetExists(urlPath) {
  const clean = urlPath === "/" ? "" : urlPath.replace(/^\//, "").replace(/\/$/, "");
  const candidates = clean
    ? [path.join(outDir, clean, "index.html"), path.join(outDir, `${clean}.html`), path.join(outDir, clean)]
    : [path.join(outDir, "index.html")];

  for (const candidate of candidates) {
    try {
      const result = await stat(candidate);
      if (result.isFile()) return true;
    } catch {
      // Try the next valid static-export shape.
    }
  }
  return false;
}

const htmlFiles = await walk(outDir);
const failures = [];
const attributePattern = /(?:href|src)=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(attributePattern)) {
    const internalUrl = normalizeInternalUrl(match[1]);
    if (!internalUrl) continue;
    if (!(await targetExists(internalUrl))) {
      failures.push(`${path.relative(outDir, file)} -> ${internalUrl}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Pronađeni su neispravni interni linkovi ili asset putanje:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Provereno ${htmlFiles.length} HTML fajlova: svi interni linkovi i asset putanje postoje.`);
