"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const translatedRoutes: Record<string, string> = {
  "/": "/de",
  "/voda-i-ritam": "/de/wasser-und-rhythmus",
  "/metoda": "/de/methode",
};

const reverseRoutes = Object.fromEntries(
  Object.entries(translatedRoutes).map(([sr, de]) => [de, sr]),
);

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const alternateHref = isGerman
    ? reverseRoutes[pathname] ?? "/"
    : translatedRoutes[pathname] ?? "/de";

  return (
    <div className="languageSwitcher" aria-label={isGerman ? "Sprachauswahl" : "Izbor jezika"}>
      <Link
        href={isGerman ? alternateHref : pathname}
        hrefLang="sr"
        lang="sr"
        aria-current={!isGerman ? "page" : undefined}
      >
        SR
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={isGerman ? pathname : alternateHref}
        hrefLang="de"
        lang="de"
        aria-current={isGerman ? "page" : undefined}
      >
        DE
      </Link>
    </div>
  );
}
