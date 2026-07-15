import type { MetadataRoute } from "next";

const baseUrl = "https://daninilans.daninihub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/vodici",
    "/voda-i-ritam",
    "/rutine",
    "/metoda",
    "/vodici/ai-u-svakodnevici",
    "/vodici/voda-tehnologija-i-ai",
    "/vodici/stanovanje-i-kvalitet-svakodnevice",
    "/recepti",
    "/stara-znanja",
    "/recenzije",
    "/kontakt",
    "/disclaimer",
    "/ai-disclosure",
    "/affiliate-disclosure",
    "/cookie-policy",
    "/terms",
    "/datenschutz",
    "/impressum",
    "/de",
    "/de/wasser-und-rhythmus",
    "/de/methode",
  ];

  return routes.map((route): MetadataRoute.Sitemap[number] => {
    const isHome = route === "" || route === "/de";

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.7,
    };
  });
}
