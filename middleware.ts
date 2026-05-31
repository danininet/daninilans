import { NextRequest, NextResponse } from "next/server";

const locales = ["sr", "de", "en"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }
  if (locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
    return NextResponse.next();
  }
  if (pathname !== "/") return NextResponse.next();

  const accept = request.headers.get("accept-language") || "";
  const lang = accept.toLowerCase().startsWith("de") ? "de" : accept.toLowerCase().startsWith("en") ? "en" : "sr";
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
