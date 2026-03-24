// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Permitir archivos técnicos y rutas internas sin redirección
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/logo.png" ||
    pathname === "/manifest.json" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/uploads") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|xml|txt|json|webmanifest)$/)
  ) {
    return NextResponse.next();
  }

  // Si ya viene con idioma, continuar normal
  if (pathname.startsWith("/es") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Redirige a /es por defecto
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};