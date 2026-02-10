// middleware.ts
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = new URL(req.url);
  const { pathname } = url;

  // si ya viene /es o /en, ok
  if (pathname.startsWith("/es") || pathname.startsWith("/en")) return NextResponse.next();

  // redirige a /es por defecto
  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|logo.png).*)"],
};