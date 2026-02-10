// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Luz Psíquica",
  description: "Orientación espiritual moderna",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const p = await Promise.resolve(params);

  // Si ya tienes normalizeLang en lib/i18n, úsalo.
  // Si normalizeLang no existe o no lo necesitas, puedes dejar la lógica simple.
  const lang = normalizeLang ? normalizeLang(p?.lang) : (p?.lang === "en" ? "en" : "es");

  // Importante: en layouts anidados NO se debe renderizar <html> ni <body>.
  // Tampoco Header/Footer aquí, para evitar duplicados.
  return <div data-lang={lang}>{children}</div>;
}