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
    title:
      lang === "en"
        ? "Use or download Luz Psíquica | Web & App"
        : "Usa o descarga Luz Psíquica | Web y App",

    description:
      lang === "en"
        ? "Access Luz Psíquica from your browser or movil device, or download the app on Google Play to connect with professional psychics."
        : "Accede a Luz Psíquica desde tu navegador o celular o descarga la app en Google Play para conectar con psíquicos profesionales.",

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

export default async function LocalizedDownloadPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = p?.lang === "en" ? "en" : "es";

  return <DownloadPage lang={lang} />;
}