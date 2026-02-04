// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "rgba(49,27,146,0.10)",
        background: "rgba(237,231,246,0.65)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-semibold" style={{ color: "var(--lp-primary)" }}>
              Luz Psíquica
            </p>

            <p style={{ color: "rgba(31,27,36,0.75)", maxWidth: 520 }}>
              Orientación espiritual con confidencialidad, respeto y una experiencia moderna.
            </p>

            <p style={{ color: "rgba(31,27,36,0.60)" }}>
              © {year} Luz Psíquica. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(31,27,36,0.55)" }}>
              Síguenos
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100088800364925"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-xs font-semibold transition hover:opacity-90"
                style={{
                  border: "1px solid var(--lp-border)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--lp-primary-2)",
                }}
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/luzpsiquica.oficial/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-xs font-semibold transition hover:opacity-90"
                style={{
                  border: "1px solid var(--lp-border)",
                  background: "rgba(255,255,255,0.55)",
                  color: "var(--lp-primary-2)",
                }}
              >
                Instagram
              </a>
            </div>

            <p className="mt-1 text-xs" style={{ color: "rgba(31,27,36,0.55)" }}>
              (Web informativa)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}