// app/[lang]/legal/documento-operativo/page.tsx
import Link from "next/link";
import { normalizeLang } from "@/lib/i18n";
import { getLegalDocs } from "@/lib/legalDocs.i18n";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl p-6"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
      }}
    >
      <div className="text-lg font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
        {title}
      </div>
      <div className="mt-3 text-sm leading-6" style={{ color: "rgba(231,226,255,0.92)", fontWeight: 600 }}>
        {children}
      </div>
    </div>
  );
}

type PageProps = { params: Promise<{ lang: string }> | { lang: string } };

export default async function DocumentoOperativoPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const { OPERATIVO } = getLegalDocs(lang);

  const waDigits = (OPERATIVO.whatsappNumberRaw || "").replace(/[^\d]/g, "");
  const waMe = waDigits ? `https://wa.me/${waDigits}` : null;
  const mailto = OPERATIVO.email
    ? `mailto:${OPERATIVO.email}?subject=${encodeURIComponent(
        lang === "en" ? "Legal support - Luz Psíquica" : "Soporte legal - Luz Psíquica"
      )}`
    : null;

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
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: "rgba(255,255,255,0.95)" }}>
              {OPERATIVO.title}
            </h1>

            <p className="mt-2 text-sm" style={{ color: "rgba(183,183,199,0.95)", fontWeight: 700 }}>
              {lang === "en" ? "Version" : "Versión"}: {OPERATIVO.version}
              {OPERATIVO.date ? ` · ${lang === "en" ? "Date" : "Fecha"}: ${OPERATIVO.date}` : ""}
              {OPERATIVO.platform ? ` · ${lang === "en" ? "Platform" : "Plataforma"}: ${OPERATIVO.platform}` : ""}
            </p>
          </div>

          <Link
            href={`/${lang}/legal`}
            className="mt-4 inline-flex w-fit items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold sm:mt-0"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {lang === "en" ? "Back" : "Volver"}
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {OPERATIVO.sections.map((s) => (
            <SectionCard key={s.title} title={s.title}>
              <div style={{ whiteSpace: "pre-line" }}>{s.body}</div>

              {s.title.includes("Contacto") || s.title.includes("Contact") ? (
                <div className="mt-4 flex flex-col gap-3">
                  {mailto ? (
                    <a
                      href={mailto}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold"
                      style={{
                        background: "rgba(35,26,74,0.95)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(155,140,255,0.95)",
                        width: "fit-content",
                      }}
                    >
                      Email: {OPERATIVO.email}
                    </a>
                  ) : null}

                  {waMe ? (
                    <a
                      href={waMe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl px-4 py-3 text-sm font-semibold"
                      style={{
                        background: "rgba(35,26,74,0.95)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(155,140,255,0.95)",
                        width: "fit-content",
                      }}
                    >
                      WhatsApp: {OPERATIVO.whatsappNumberPretty}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </SectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
