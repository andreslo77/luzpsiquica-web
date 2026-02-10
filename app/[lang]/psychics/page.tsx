// app/[lang]/psychics/page.tsx
import Link from "next/link";
import { fetchPsychics, type Psychic, __API_DEBUG__ } from "@/lib/api";
import { normalizeLang } from "@/lib/i18n";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs"
      style={{
        border: "1px solid var(--lp-border)",
        background: "rgba(255,255,255,0.55)",
        color: "var(--lp-primary-2)",
      }}
    >
      {children}
    </span>
  );
}

// ✅ Soporta:
// - URL http/https
// - data:image/...;base64,xxxx
// - base64 puro (xxxx) -> lo convierte a data:image/jpeg;base64,xxxx
function resolvePhotoSrc(photo?: string | null) {
  if (!photo) return null;

  const raw = String(photo).trim();
  if (!raw) return null;

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) return raw;
  if (raw.startsWith("data:image")) return raw;

  return `data:image/jpeg;base64,${raw}`;
}

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function PsychicsPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  const t =
    lang === "en"
      ? {
          h1: "Psychics",
          p1: "Catalog synced with the app. Open a profile and consult from your phone.",
          errTitle: "Error loading psychics",
          empty: "No psychics available yet (or the endpoint is not returning data).",
          viewProfile: "View profile",
          available: "Available",
          unavailable: "Unavailable",
          fallbackAbout: "Consult from the app with privacy and respect.",
        }
      : {
          h1: "Psíquicos",
          p1: "Catálogo sincronizado con la app. Abre un perfil y consulta desde tu celular.",
          errTitle: "Error cargando psíquicos",
          empty: "No hay psíquicos disponibles aún (o la ruta no está entregando datos).",
          viewProfile: "Ver perfil",
          available: "Disponible",
          unavailable: "No disponible",
          fallbackAbout: "Consulta desde la app con privacidad y respeto.",
        };

  let psychics: Psychic[] = [];
  let error: string | null = null;

  try {
    psychics = await fetchPsychics();
  } catch (e: any) {
    error = e?.message || (lang === "en" ? "Could not load the catalog." : "No se pudo cargar el catálogo.");
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
          {t.h1}
        </h1>

        <p className="mt-2 text-sm" style={{ color: "rgba(31,27,36,0.80)" }}>
          {t.p1}
        </p>

        <p className="mt-1 text-xs" style={{ color: "rgba(31,27,36,0.55)" }}>
          API_ORIGIN: {__API_DEBUG__.API_ORIGIN} | API_BASE: {__API_DEBUG__.API_BASE} | PATH:{" "}
          {__API_DEBUG__.PSYCHICS_PATH}
        </p>
      </div>

      {error && (
        <div
          className="rounded-2xl p-4 text-sm"
          style={{
            border: "1px solid rgba(211,47,47,0.25)",
            background: "rgba(211,47,47,0.08)",
          }}
        >
          <p className="font-medium">{t.errTitle}</p>
          <p className="mt-1" style={{ opacity: 0.85 }}>
            {error}
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {psychics.map((p) => {
          const displayName = p.displayName || p.psychicName || p.name || (lang === "en" ? "Psychic" : "Psíquico");

          const status =
            typeof p.isOnline === "boolean"
              ? p.isOnline
                ? t.available
                : t.unavailable
              : null;

          const hasRating = typeof p.ratingAvg === "number" || typeof p.reviewsCount === "number";
          const photoSrc = resolvePhotoSrc((p as any)?.photoUrl ?? (p as any)?.photo ?? null);

          return (
            <Link
              key={p.slug}
              // ✅ FIX: ahora incluye /{lang}
              href={`/${lang}/psychics/${encodeURIComponent(p.slug!)}`}
              className="rounded-3xl p-5 transition"
              style={{
                background: "var(--lp-card)",
                border: "1px solid var(--lp-border)",
                boxShadow: "var(--lp-shadow)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 overflow-hidden rounded-full"
                  style={{
                    border: "2px solid var(--lp-accent)",
                    background: "rgba(255,255,255,0.65)",
                  }}
                >
                  {photoSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photoSrc}
                      alt={displayName}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-xs"
                      style={{ color: "var(--lp-primary-2)", fontWeight: 800 }}
                    >
                      LP
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="truncate font-medium" style={{ color: "var(--lp-primary)" }}>
                      {displayName}
                    </p>
                    {status ? <Badge>{status}</Badge> : null}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {hasRating ? (
                      <Badge>
                        ⭐{" "}
                        {typeof p.ratingAvg === "number" ? p.ratingAvg.toFixed(1) : p.ratingAvg ?? "—"}
                        {p.reviewsCount ? ` (${p.reviewsCount})` : ""}
                      </Badge>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm italic" style={{ color: "rgba(49,27,146,0.85)" }}>
                    {p.about ? `“${p.about}”` : t.fallbackAbout}
                  </p>

                  <p
                    className="mt-4 text-sm font-medium underline underline-offset-4"
                    style={{ color: "var(--lp-primary-2)" }}
                  >
                    {t.viewProfile}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {!error && psychics.length === 0 && (
        <div
          className="rounded-2xl p-6 text-sm"
          style={{ border: "1px solid var(--lp-border)", background: "var(--lp-card-2)" }}
        >
          {t.empty}
        </div>
      )}
    </div>
  );
}