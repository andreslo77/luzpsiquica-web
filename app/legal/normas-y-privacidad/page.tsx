// app/legal/normas-y-privacidad/page.tsx
import Link from "next/link";
import { LEGAL_NORMAS } from "@/lib/legalDocs";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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

export default function NormasPrivacidadPage() {
  const waDigits = LEGAL_NORMAS.whatsappNumberRaw.replace(/[^\d]/g, "");
  const waMe = `https://wa.me/${waDigits}`;
  const mailto = `mailto:${LEGAL_NORMAS.email}?subject=${encodeURIComponent("Soporte legal - Luz Psíquica")}`;

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
              {LEGAL_NORMAS.title}
            </h1>
            <p className="mt-2 text-sm" style={{ color: "rgba(183,183,199,0.95)", fontWeight: 700 }}>
              Versión: {LEGAL_NORMAS.version} · Titular legal: {LEGAL_NORMAS.owner} · Jurisdicción: {LEGAL_NORMAS.jurisdiction}
            </p>
          </div>

          <Link
            href="/legal"
            className="mt-4 inline-flex w-fit items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold sm:mt-0"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Volver
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {LEGAL_NORMAS.sections.map((s) => (
            <SectionCard key={s.title} title={s.title}>
              <div style={{ whiteSpace: "pre-line" }}>{s.body}</div>

              {s.title === "10. Contacto" ? (
                <div className="mt-4 flex flex-col gap-3">
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
                    Email: {LEGAL_NORMAS.email}
                  </a>

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
                    WhatsApp: {LEGAL_NORMAS.whatsappNumberPretty}
                  </a>
                </div>
              ) : null}
            </SectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}