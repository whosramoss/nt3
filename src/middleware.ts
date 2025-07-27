import AppI18nConfig from "src/shared/utils/app-i18n-config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const STATIC_ROUTE_PREFIXES = ["/_next", "/server/", "/api/", "/geometry"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (AppI18nConfig.isUrlLocalized(pathname)) return;

  const isRequestForStaticFiles =
    PUBLIC_FILE.test(pathname) ||
    STATIC_ROUTE_PREFIXES.some(
      (prefix) => pathname.startsWith(prefix) || pathname.includes(prefix),
    );

  if (isRequestForStaticFiles) return;

  const url = AppI18nConfig.setUrlByDefaultLocale(pathname);

  return NextResponse.redirect(new URL(url, request.url));
}
