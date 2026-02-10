// app/[lang]/legal/page.tsx
import Link from "next/link";
import { normalizeLang } from "@/lib/i18n";

function LegalCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block w-full rounded-3xl p-6 transition"
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.06)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
      }}
    >
      <div className="text-xl font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
        {title}
      </div>
      <div className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
        {description}
      </div>
    </Link>
  );
}

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function LegalPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  const t =
    lang === "en"
      ? {
          title: "Legal",
          subtitle: "Select the document you want to review.",
          card1Title: "Rules & Privacy",
          card1Desc: "Terms of use, privacy, refunds, and general rules.",
          card2Title: "Platform Operational Document",
          card2Desc: "Operational flow, roles, sessions, minutes, and operating rules.",
          back: "Back",
        }
      : {
          title: "Legal",
          subtitle: "Selecciona el documento que deseas consultar.",
          card1Title: "Normas y Privacidad",
          card1Desc: "Términos de uso, privacidad, reembolsos y reglas generales.",
          card2Title: "Documento de Funcionamiento Operativo de la Plataforma",
          card2Desc: "Funcionamiento técnico-operativo, roles, sesiones, minutos y reglas de operación.",
          back: "Volver",
        };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 py-10">
      <div
        className="rounded-[40px] p-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,22,0.92) 0%, rgba(14,12,28,0.90) 40%, rgba(12,12,22,0.92) 100%)",
          boxShadow: "0 30px 90px rgba(0,0,0,0.30)",
        }}
      >
        <h1 className="text-4xl font-semibold" style={{ color: "rgba(255,255,255,0.95)" }}>
          {t.title}
        </h1>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
          {t.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <LegalCard
            title={t.card1Title}
            description={t.card1Desc}
            href={`/${lang}/legal/normas-y-privacidad`}
          />

          <LegalCard
            title={t.card2Title}
            description={t.card2Desc}
            href={`/${lang}/legal/documento-operativo`}
          />
        </div>

        <div className="mt-8">
          <Link
            href={`/${lang}`}
            className="block w-full rounded-2xl py-3 text-center text-sm font-semibold"
            style={{
              background: "rgba(99,102,241,0.95)",
              color: "white",
              boxShadow: "0 14px 40px rgba(99,102,241,0.35)",
            }}
          >
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
}