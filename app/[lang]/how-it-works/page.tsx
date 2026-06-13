// app/[lang]/how-it-works/page.tsx
import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import Link from "next/link";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const canonical = `https://luzpsiquica.com/${lang}/how-it-works`;

  return {
    title:
      lang === "en"
        ? "How it works | Luz Psíquica"
        : "Cómo funciona | Luz Psíquica",
    description:
      lang === "en"
        ? "Learn how Luz Psíquica works: choose your psychic, consult from the app, and receive clear guidance."
        : "Conoce cómo funciona Luz Psíquica: elige tu psíquico, consulta desde la app y recibe orientación clara.",
    alternates: {
      canonical,
      languages: {
        es: "https://luzpsiquica.com/es/how-it-works",
        en: "https://luzpsiquica.com/en/how-it-works",
        "x-default": "https://luzpsiquica.com/es/how-it-works",
      },
    },
  };
}

export default async function HowItWorksPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const base = `/${lang}`;

  const t =
    lang === "en"
      ? {
          h1: "How it works",
          subtitle: "A simple, human and confidential experience.",
          btnDownload: "Download the app",
          btnPsychics: "View psychics",
          womanAlt: "Woman receiving spiritual guidance",
          steps: [
            {
              icon: "🔮",
              title: "1) Choose your psychic",
              text: "Explore specialties and find the style that best fits you.",
            },
            {
              icon: "💜",
              title: "2) Consult from the app",
              text: "Access the conversation in an environment designed for your comfort.",
            },
            {
              icon: "✨",
              title: "3) Receive clear guidance",
              text: "Guidance based on tarot, cards and intuitive methods.",
            },
          ],
        }
      : {
          h1: "Cómo funciona",
          subtitle: "Una experiencia simple, humana y confidencial.",
          btnDownload: "Descargar la app",
          btnPsychics: "Ver psíquicos",
          womanAlt: "Mujer recibiendo guía espiritual",
          steps: [
            {
              icon: "🔮",
              title: "1) Elige tu psíquico",
              text: "Explora especialidades y encuentra el estilo ideal para ti.",
            },
            {
              icon: "💜",
              title: "2) Consulta desde la app",
              text: "Accede a la conversación en un entorno diseñado para tu comodidad.",
            },
            {
              icon: "✨",
              title: "3) Recibe orientación clara",
              text: "Guía basada en tarot, cartas y métodos intuitivos.",
            },
          ],
        };

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f4edff] px-6 py-8 text-[#5c2394] sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(244, 237, 255, 0.12), rgba(244, 237, 255, 0.12)), url('/images/home/celestial-cartas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[0.72fr_1.6fr]">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/home/hero-girl2.png"
            alt={t.womanAlt}
            className="h-[420px] w-full max-w-[380px] rounded-[2rem] object-cover shadow-2xl md:h-[520px] lg:h-[610px]"
          />
        </div>

        <div className="relative">
          <header className="text-center">
            <h1 className="text-[42px] font-normal leading-tight text-[#5c2394] md:text-[58px]">
              {t.h1}
            </h1>

            <p className="mt-2 text-[20px] font-semibold leading-tight text-[#5c2394] md:text-[27px]">
              {t.subtitle}
            </p>
          </header>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-[#eee7fb]/90 p-5 pt-9 shadow-lg backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(49,27,146,0.12)",
                }}
              >
                <div className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c9b6e4] text-xl shadow-md">
                  {s.icon}
                </div>

                <p className="font-bold text-[#3f2a69]">{s.title}</p>

                <p className="mt-3 text-sm leading-relaxed text-[#5f5273]">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`${base}/download`}
              className="rounded-full bg-[#5140b8] px-8 py-3 text-center text-base font-bold text-white shadow-md hover:bg-[#43309d]"
            >
              {t.btnDownload}
            </Link>

            <Link
              href={`${base}/psychics`}
              className="rounded-full border-2 border-white bg-white/55 px-8 py-3 text-center text-base font-bold text-[#5b3b91] hover:bg-white"
            >
              {t.btnPsychics}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}