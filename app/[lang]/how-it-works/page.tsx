// app/[lang]/how-it-works/page.tsx
import { normalizeLang } from "@/lib/i18n";
import Link from "next/link";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function HowItWorksPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const base = `/${lang}`;

  const t =
    lang === "en"
      ? {
          h1: "How it works",
          subtitle: "A simple, human and confidential experience.",
          steps: [
            {
              title: "1) Choose your psychic",
              text: "Explore specialties and find the style that best fits you.",
            },
            {
              title: "2) Consult from the app",
              text: "Access the conversation in an environment designed for your comfort.",
            },
            {
              title: "3) Receive clear guidance",
              text: "Guidance based on tarot, cards and intuitive methods.",
            },
          ],
          cta: "Download the app",
        }
      : {
          h1: "Cómo funciona",
          subtitle: "Una experiencia simple, humana y confidencial.",
          steps: [
            {
              title: "1) Elige tu psíquico",
              text: "Explora especialidades y encuentra el estilo ideal para ti.",
            },
            {
              title: "2) Consulta desde la app",
              text: "Accede a la conversación en un entorno diseñado para tu comodidad.",
            },
            {
              title: "3) Recibe orientación clara",
              text: "Guía basada en tarot, cartas y métodos intuitivos.",
            },
          ],
          cta: "Descargar la app",
        };

  return (
    <div className="flex flex-col gap-10">
      <header>
        <h1
          className="text-3xl font-semibold md:text-4xl"
          style={{ color: "var(--lp-primary)" }}
        >
          {t.h1}
        </h1>
        <p className="mt-2 text-sm opacity-80">{t.subtitle}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {t.steps.map((s, i) => (
          <div
            key={i}
            className="rounded-3xl p-6"
            style={{
              background: "var(--lp-card)",
              border: "1px solid var(--lp-border)",
            }}
          >
            <p className="font-medium">{s.title}</p>
            <p className="mt-2 text-sm opacity-80">{s.text}</p>
          </div>
        ))}
      </section>

      <div>
        <Link
          href={`${base}/download`}
          className="inline-flex rounded-full bg-white px-6 py-3 font-medium text-black hover:opacity-90"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}