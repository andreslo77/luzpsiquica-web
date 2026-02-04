// app/legal/documento-operativo/page.tsx
import Link from "next/link";
import { LEGAL_OPERATIVO } from "@/lib/legalDocs";

function SectionCard({
  title,
  body,
}: {
  title: string;
  body: string;
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

      {body ? (
        <div
          className="mt-3 text-sm leading-6"
          style={{
            color: "rgba(231,226,255,0.92)",
            fontWeight: 600,
            whiteSpace: "pre-line",
          }}
        >
          {body}
        </div>
      ) : null}
    </div>
  );
}

export default function DocumentoOperativoPage() {
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
              {LEGAL_OPERATIVO.title}
            </h1>
            <p className="mt-2 text-sm" style={{ color: "rgba(183,183,199,0.95)", fontWeight: 700 }}>
              Versión: {LEGAL_OPERATIVO.version} · Fecha: {LEGAL_OPERATIVO.date} · Plataforma: {LEGAL_OPERATIVO.platform}
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
          {LEGAL_OPERATIVO.sections.map((s, idx) => (
            <SectionCard key={`${idx}-${s.heading}`} title={s.heading} body={s.body} />
          ))}
        </div>
      </div>
    </div>
  );
}