// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://luzpsiquica.com"),
  title: "Luz Psíquica",
  description: "Claridad, conexión y guía para tu camino",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const p = await Promise.resolve(params);

  const lang = normalizeLang ? normalizeLang(p?.lang) : p?.lang === "en" ? "en" : "es";

  return <div data-lang={lang}>{children}</div>;
}