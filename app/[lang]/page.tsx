// app/[lang]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await Promise.resolve(params);
  const lang = p?.lang === "en" ? "en" : "es";
  const canonical = `https://luzpsiquica.com/${lang}`;

  return {
    title:
      lang === "en"
        ? "Luz Psíquica | Clarity, connection, and guidance for your path"
        : "Luz Psíquica | Claridad, conexión y guía para tu camino",
    description:
      lang === "en"
        ? "Connect with real evaluated psychics for intuitive guidance through tarot, cards and other spiritual orientation methods — directly from your phone."
        : "Conecta con psíquicos reales evaluados para guía intuitiva mediante tarot, cartas y otros métodos de orientación espiritual, directamente desde tu celular.",
    alternates: {
      canonical,
      languages: {
        es: "https://luzpsiquica.com/es",
        en: "https://luzpsiquica.com/en",
        "x-default": "https://luzpsiquica.com/es",
      },
    },
  };
}

export default async function LangHomePage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = p?.lang === "en" ? "en" : "es";
  const base = `/${lang}`;

  const t = {
    title:
      lang === "en"
        ? "Clarity, Connection and Guidance for Your Path"
        : "Claridad, Conexión y Guía para tu Camino",

    promoTitle:
      lang === "en"
        ? "Get your first five minutes free. Offer valid only in the United States"
        : "Obtén tus cinco minutos gratis. Oferta válida solo para Estados Unidos",

    promoText:
      lang === "en"
        ? "Then pay only US$1.25 per minute with the psychic you choose."
        : "Después US$1.25 min, con el psíquico que elijas.",

    desc:
      lang === "en"
        ? "Connect with professional psychics for intuitive guidance through tarot, cards and other spiritual orientation methods, directly from your phone."
        : "Conecta con psíquicos profesionales para guía intuitiva mediante tarot, cartas y otros métodos de orientación espiritual, directamente desde tu celular.",

    btnDownload: lang === "en" ? "Download the app" : "Descargar la app",
    btnPsychics: lang === "en" ? "View psychics" : "Ver psíquicos",

    c1Title: lang === "en" ? "Confidentiality" : "Confidencialidad",
    c1Desc:
      lang === "en"
        ? "Experience focused on privacy and respect."
        : "Experiencia centrada en privacidad y respeto.",

    c2Title: lang === "en" ? "Quality & warmth" : "Calidad y calidez",
    c2Desc:
      lang === "en"
        ? "Clear profiles, visible specialties and human treatment."
        : "Perfiles claros, especialidades visibles y trato humano.",

    c3Title: lang === "en" ? "Fast & simple" : "Rápido y simple",
    c3Desc:
      lang === "en"
        ? "Choose your ideal psychic and consult from the app."
        : "Elige tu psíquico ideal y consulta desde la app.",
  };

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f4edff] px-6 py-3 text-[#5c2394] sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(244, 237, 255, 0.28), rgba(244, 237, 255, 0.28)), url('/images/home/celestial-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid max-w-[1500px] items-start gap-10 lg:grid-cols-[1.55fr_0.85fr]">
        <div className="pt-1">
          <div className="mb-0 flex justify-center">
            <img
              src="/images/brand/logo-full.png"
              alt="Luz Psíquica"
              className="h-auto w-80 object-contain md:w-96"
            />
          </div>

          <h1 className="-mt-10 text-center text-[34px] font-normal leading-tight text-[#5c2394] md:text-[46px]">
            {t.title}
          </h1>

          <div className="mx-auto mt-3 flex max-w-4xl items-start justify-center gap-3 text-center">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7246b8] text-sm text-white shadow-md">
              ✦
            </div>

            <div>
              <p className="text-[17px] leading-[1.35] text-[#5c2394]">
                {t.promoTitle}
              </p>

              <p className="mt-1 text-[17px] leading-[1.35] text-[#5c2394]">
                {t.promoText}
              </p>
            </div>
          </div>

          <p
            className="mt-4 max-w-4xl text-[16px] font-semibold leading-[1.35] text-[#5c2394] md:text-[18px]"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {t.desc}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative rounded-2xl bg-[#d8c9ec]/85 p-5 pt-9 shadow-sm backdrop-blur-sm">
              <div className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9b6e4] text-xl shadow-sm">
                🔒
              </div>
              <p className="font-bold text-[#4f3678]">{t.c1Title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6a5b7e]">
                {t.c1Desc}
              </p>
            </div>

            <div className="relative rounded-2xl bg-[#d8c9ec]/85 p-5 pt-9 shadow-sm backdrop-blur-sm">
              <div className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9b6e4] text-xl shadow-sm">
                💜
              </div>
              <p className="font-bold text-[#4f3678]">{t.c2Title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6a5b7e]">
                {t.c2Desc}
              </p>
            </div>

            <div className="relative rounded-2xl bg-[#d8c9ec]/85 p-5 pt-9 shadow-sm backdrop-blur-sm">
              <div className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9b6e4] text-xl shadow-sm">
                ⚡
              </div>
              <p className="font-bold text-[#4f3678]">{t.c3Title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6a5b7e]">
                {t.c3Desc}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`${base}/download`}
                className="rounded-full bg-[#5140b8] px-7 py-3 text-center text-base font-bold text-white shadow-md hover:bg-[#43309d]"
              >
                {t.btnDownload}
              </Link>

              <Link
                href={`${base}/psychics`}
                className="rounded-full border-2 border-white bg-white/45 px-7 py-3 text-center text-base font-bold text-[#5b3b91] hover:bg-white"
              >
                {t.btnPsychics}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2 lg:justify-end">
          <img
            src="/images/home/hero-girl1.png"
            alt="Luz Psíquica - guía espiritual"
            style={{
              width: "410px",
              height: "590px",
              objectFit: "cover",
              borderRadius: "2rem",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </section>
  );
}