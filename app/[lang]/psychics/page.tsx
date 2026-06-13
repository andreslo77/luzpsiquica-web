// app/[lang]/psychics/page.tsx
import type { Metadata } from "next";
import { fetchPsychics, type Psychic } from "@/lib/api";
import { normalizeLang } from "@/lib/i18n";
import PsychicsNotebook from "@/components/PsychicsNotebook";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const canonical = `https://luzpsiquica.com/${lang}/psychics`;

  return {
    title: lang === "en" ? "Psychics | Luz Psíquica" : "Psíquicos | Luz Psíquica",
    description:
      lang === "en"
        ? "Explore the catalog of psychics available on Luz Psíquica and choose the profile that best fits your path."
        : "Explora el catálogo de psíquicos disponibles en Luz Psíquica y elige el perfil que mejor se adapte a tu camino.",
    alternates: {
      canonical,
      languages: {
        es: "https://luzpsiquica.com/es/psychics",
        en: "https://luzpsiquica.com/en/psychics",
        "x-default": "https://luzpsiquica.com/es/psychics",
      },
    },
  };
}

export default async function PsychicsPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  let psychics: Psychic[] = [];
  let error: string | null = null;

  try {
    psychics = await fetchPsychics();
  } catch (e: any) {
    error =
      e?.message ||
      (lang === "en" ? "Could not load the catalog." : "No se pudo cargar el catálogo.");
  }

  return <PsychicsNotebook lang={lang} psychics={psychics} error={error} />;
}