import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const files = execFileSync("git", ["ls-files", "app", "components", "public"], {
  encoding: "utf8",
})
  .split("\n")
  .filter(Boolean)
  .filter((file) => /\.(?:tsx?|jsx?|md|html|css|svg|txt)$/i.test(file));

const forbidden = [
  { label: "Lorem ipsum", pattern: /lorem\s+ipsum/i },
  { label: "placeholder", pattern: /\bplaceholder\b/i },
  { label: "coming soon", pattern: /\bcoming\s+soon\b/i },
  { label: "uskoro", pattern: /\buskoro\b/i },
  { label: "TODO/FIXME", pattern: /\b(?:TODO|FIXME|TBD)\b/ },
  { label: "demo/test copy", pattern: /\b(?:demo content|sample text|test content)\b/i },
  { label: "lažni domen", pattern: /(?:example\.com|test@test\.|your-email|name@example)/i },
  { label: "generički CTA", pattern: /\b(?:click here|learn more|read more)\b/i },
];

const findings = [];

for (const file of files) {
  const content = readFileSync(file, "utf8");
  for (const rule of forbidden) {
    if (rule.pattern.test(content)) findings.push(`${file}: ${rule.label}`);
  }
}

if (findings.length) {
  console.error("Zabranjen placeholder ili generički sadržaj:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`Content quality check prošao: ${files.length} verzionisanih javnih fajlova bez placeholdera i demo copy-ja.`);
