"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname === "/de" || pathname.startsWith("/de/") ? "de" : "sr";
  }, [pathname]);

  return null;
}
