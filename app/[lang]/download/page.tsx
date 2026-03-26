// app/[lang]/download/page.tsx
import type { Metadata } from "next";
import DownloadPage from "@/app/download/page";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await Promise.resolve(params);
  const lang = p?.lang === "en" ? "en" : "es";
  const canonical = `https://luzpsiquica.com/${lang}/download`;

  return {
    title: lang === "en" ? "Download the app | Luz Psíquica" : "Descargar la app | Luz Psíquica",
    description:
      lang === "en"
        ? "Download Luz Psíquica and connect with professional psychics from your phone."
        : "Descarga Luz Psíquica y conecta con psíquicos profesionales desde tu celular.",
    alternates: {
      canonical,
      languages: {
        es: "https://luzpsiquica.com/es/download",
        en: "https://luzpsiquica.com/en/download",
        "x-default": "https://luzpsiquica.com/es/download",
      },
    },
  };
}

export default DownloadPage;