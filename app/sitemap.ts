import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://daninilans.daninihub.com";
  return [
    "",
    "/voda-i-ritam",
    "/rutine",
    "/recepti",
    "/stara-znanja",
    "/recenzije",
    "/metoda",
    "/kontakt",
    "/disclaimer",
    "/impressum",
    "/affiliate-disclosure"
  ].map((url) => ({ url: `${base}${url}`, lastModified: new Date() }));
}
