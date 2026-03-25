// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function detectLang(pathname: string) {
  if (!pathname) return "es";
  const seg = pathname.split("/")[1];
  return seg === "en" ? "en" : "es";
}

function stripLeadingLang(pathname: string) {
  // "/es/psychics/frida" -> "/psychics/frida"
  // "/en" -> "/"
  const parts = (pathname || "/").split("/");
  const first = parts[1];
  if (first === "en" || first === "es") {
    const rest = parts.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export default function Header() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const safeLang = detectLang(pathname); // "es" | "en"
  const base = `/${safeLang}`;

  const toggleLang = safeLang === "en" ? "es" : "en";

  const handleToggleLanguage = () => {
    const rest = stripLeadingLang(pathname);
    const nextPath = `/${toggleLang}${rest === "/" ? "" : rest}`;
    setMobileMenuOpen(false);
    router.push(nextPath);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: "rgba(49,27,146,0.10)",
        background: "rgba(237,231,246,0.72)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href={base}
          className="flex min-w-0 items-center gap-3"
          onClick={closeMobileMenu}
        >
          <div
            className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl"
            style={{
              border: "1px solid var(--lp-border)",
              background: "rgba(255,255,255,0.55)",
              boxShadow: "0 6px 18px rgba(49,27,146,0.10)",
            }}
          >
            <Image
              src="/logo.png"
              alt="Luz Psíquica"
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="min-w-0 leading-tight">
            <div
              className="truncate font-semibold text-sm sm:text-base"
              style={{ color: "var(--lp-primary)" }}
            >
              Luz Psíquica
            </div>

            <div
              className="truncate text-[11px] sm:text-xs"
              style={{ color: "rgba(31,27,36,0.65)" }}
            >
              {safeLang === "en"
                ? "Clarity, connection, and guidance for your path"
                : "Claridad, conexión y guía para tu camino"}
            </div>
          </div>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <Link
            href={`${base}/psychics`}
            className="hover:opacity-100"
            style={{ color: "rgba(31,27,36,0.75)" }}
          >
            {safeLang === "en" ? "Psychics" : "Psíquicos"}
          </Link>

          <Link
            href={`${base}/how-it-works`}
            className="hover:opacity-100"
            style={{ color: "rgba(31,27,36,0.75)" }}
          >
            {safeLang === "en" ? "How it works" : "Cómo funciona"}
          </Link>

          <Link
            href={`${base}/legal`}
            className="opacity-90 hover:opacity-100"
            style={{ color: "rgba(31,27,36,0.75)" }}
          >
            Legal
          </Link>

          <Link
            href={`${base}/legal/account-deletion`}
            className="hover:opacity-100"
            style={{ color: "rgba(31,27,36,0.75)" }}
          >
            {safeLang === "en" ? "Account deletion" : "Eliminar cuenta"}
          </Link>

          <button
            type="button"
            onClick={handleToggleLanguage}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-medium transition hover:bg-white/10"
            aria-label="Cambiar idioma"
            title={safeLang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          >
            {safeLang === "en" ? "ES" : "EN"}
          </button>

          <Link
            href={`${base}/download`}
            className="rounded-full px-4 py-2 font-medium transition hover:opacity-90"
            style={{
              border: "1px solid var(--lp-border)",
              background: "rgba(255,255,255,0.55)",
              color: "var(--lp-primary-2)",
            }}
          >
            {safeLang === "en" ? "Download app" : "Descargar app"}
          </Link>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl md:hidden"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          style={{
            border: "1px solid var(--lp-border)",
            background: "rgba(255,255,255,0.55)",
            color: "var(--lp-primary-2)",
            boxShadow: "0 6px 18px rgba(49,27,146,0.10)",
          }}
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-[2px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[8px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t md:hidden"
          style={{
            borderColor: "rgba(49,27,146,0.10)",
            background: "rgba(237,231,246,0.96)",
          }}
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4">
            <Link
              href={`${base}/psychics`}
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "rgba(31,27,36,0.85)",
                border: "1px solid var(--lp-border)",
              }}
            >
              {safeLang === "en" ? "Psychics" : "Psíquicos"}
            </Link>

            <Link
              href={`${base}/how-it-works`}
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "rgba(31,27,36,0.85)",
                border: "1px solid var(--lp-border)",
              }}
            >
              {safeLang === "en" ? "How it works" : "Cómo funciona"}
            </Link>

            <Link
              href={`${base}/legal`}
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "rgba(31,27,36,0.85)",
                border: "1px solid var(--lp-border)",
              }}
            >
              Legal
            </Link>

            <Link
              href={`${base}/legal/account-deletion`}
              onClick={closeMobileMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "rgba(31,27,36,0.85)",
                border: "1px solid var(--lp-border)",
              }}
            >
              {safeLang === "en" ? "Account deletion" : "Eliminar cuenta"}
            </Link>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleToggleLanguage}
                className="rounded-full px-4 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{
                  border: "1px solid var(--lp-border)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--lp-primary-2)",
                }}
                aria-label="Cambiar idioma"
                title={safeLang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
              >
                {safeLang === "en"
                  ? "Cambiar a Español"
                  : "Switch to English"}
              </button>

              <Link
                href={`${base}/download`}
                onClick={closeMobileMenu}
                className="rounded-full px-4 py-3 text-center text-sm font-semibold transition hover:opacity-90"
                style={{
                  border: "1px solid var(--lp-border)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--lp-primary-2)",
                }}
              >
                {safeLang === "en" ? "Download app" : "Descargar app"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}