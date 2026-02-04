// app/legal/page.tsx
import Link from "next/link";

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

export default function LegalPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 py-10">
      {/* Contenedor oscuro (solo Legal) */}
      <div
        className="rounded-[40px] p-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,22,0.92) 0%, rgba(14,12,28,0.90) 40%, rgba(12,12,22,0.92) 100%)",
          boxShadow: "0 30px 90px rgba(0,0,0,0.30)",
        }}
      >
        <h1 className="text-4xl font-semibold" style={{ color: "rgba(255,255,255,0.95)" }}>
          Legal
        </h1>
        <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
          Selecciona el documento que deseas consultar.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <LegalCard
            title="Normas y Privacidad"
            description="Términos de uso, privacidad, reembolsos y reglas generales."
            href="/legal/normas-y-privacidad"
          />

          <LegalCard
            title="Documento de Funcionamiento Operativo de la Plataforma"
            description="Funcionamiento técnico-operativo, roles, sesiones, minutos y reglas de operación."
            href="/legal/documento-operativo"
          />
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="block w-full rounded-2xl py-3 text-center text-sm font-semibold"
            style={{
              background: "rgba(99,102,241,0.95)",
              color: "white",
              boxShadow: "0 14px 40px rgba(99,102,241,0.35)",
            }}
          >
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}