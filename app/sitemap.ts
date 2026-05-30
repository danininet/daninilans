import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://daninilans.daninihub.com";
  return [
    "",
    "/voda-i-ritam",
    "/rutine",
    "/vodici",
    "/vodici/ai-u-svakodnevici",
    "/vodici/voda-tehnologija-i-ai",
    "/vodici/stanovanje-i-kvalitet-svakodnevice",
    "/recepti",
    "/stara-znanja",
    "/recenzije",
    "/metoda",
    "/kontakt",
    "/disclaimer",
    "/ai-disclosure",
    "/affiliate-disclosure",
    "/cookie-policy",
    "/terms",
    "/datenschutz",
    "/impressum"
  ].map((url) => ({ url: `${base}${url}`, lastModified: new Date() }));
}
