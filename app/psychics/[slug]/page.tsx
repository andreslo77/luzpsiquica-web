// app/psychics/[slug]/page_FIXED.tsx
import Link from "next/link";
import Image from "next/image";
import { fetchPsychics } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

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

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm leading-7">
      <span className="font-semibold">{label}: </span>
      <span style={{ opacity: 0.85 }}>{children}</span>
    </div>
  );
}

// ✅ Soporta URL / data-uri / base64 puro
function resolvePhotoSrc(photo?: string | null) {
  if (!photo) return null;

  const raw = String(photo).trim();
  if (!raw) return null;

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) {
    return raw;
  }

  if (raw.startsWith("data:image")) {
    return raw;
  }

  return `data:image/jpeg;base64,${raw}`;
}

export default async function PsychicDetailPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = resolvedParams?.slug ?? "";
  const slug = slugify(decodeURIComponent(rawSlug));

  const psychics = await fetchPsychics();

  const psychic =
    psychics.find((p: any) => (p?.slug ? slugify(String(p.slug)) : "") === slug) ??
    psychics.find((p: any) => {
      const publicName = p?.psychicName ?? p?.displayName ?? p?.alias ?? "";
      return publicName ? slugify(String(publicName)) === slug : false;
    }) ??
    null;

  const cardStyle: React.CSSProperties = {
    background: "var(--lp-surface)",
    border: "1px solid var(--lp-border)",
    boxShadow: "var(--lp-shadow)",
  };

  const insetCardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.55)",
    border: "1px solid var(--lp-border)",
  };

  if (!psychic) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col gap-6 py-10">
        <div className="rounded-2xl p-6" style={cardStyle}>
          <h1 className="text-2xl font-semibold" style={{ color: "var(--lp-primary)" }}>
            Psíquico no encontrado
          </h1>
          <p className="mt-2 text-sm" style={{ opacity: 0.8 }}>
            Puede que el perfil no esté disponible o que el enlace sea incorrecto.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/psychics"
              className="rounded-2xl px-4 py-2 text-sm hover:opacity-90"
              style={{
                ...insetCardStyle,
                background: "rgba(255,255,255,0.65)",
              }}
            >
              Volver al catálogo
            </Link>

            <Link
              href="/"
              className="rounded-2xl px-4 py-2 text-sm hover:opacity-90"
              style={{
                ...insetCardStyle,
                background: "rgba(255,255,255,0.65)",
              }}
            >
              Ir al inicio
            </Link>
          </div>

          <div className="mt-4 text-xs" style={{ opacity: 0.6 }}>
            Slug solicitado: <span style={{ opacity: 0.9 }}>{rawSlug}</span>
          </div>
        </div>
      </div>
    );
  }

  const displayName = psychic?.displayName ?? psychic?.psychicName ?? "Psíquico";

  const isOnline = typeof psychic?.isOnline === "boolean" ? psychic.isOnline : undefined;

  const ratingAvg = typeof psychic?.ratingAvg === "number" ? psychic.ratingAvg : undefined;

  const reviewsCount =
    typeof psychic?.reviewsCount === "number" ? psychic.reviewsCount : undefined;

  const bio = psychic?.bio ?? psychic?.shortBio ?? "";

  const languages: string[] = Array.isArray(psychic?.languages) ? psychic.languages : [];
  const areas: string[] = Array.isArray(psychic?.areas) ? psychic.areas : [];
  const tools: string[] = Array.isArray(psychic?.tools) ? psychic.tools : [];

  const areasOtherText: string | undefined =
    typeof psychic?.areasOtherText === "string" ? psychic.areasOtherText.trim() : undefined;

  const toolsOtherText: string | undefined =
    typeof psychic?.toolsOtherText === "string" ? psychic.toolsOtherText.trim() : undefined;

  const experience: string | undefined =
    typeof psychic?.experience === "string" ? psychic.experience.trim() : undefined;

  const about: string | undefined =
    typeof psychic?.about === "string" ? psychic.about.trim() : undefined;

  // ✅ aquí el cambio real
  const photoSrc = resolvePhotoSrc((psychic as any)?.photoUrl ?? (psychic as any)?.photo ?? null);
  const isDataUri = typeof photoSrc === "string" && photoSrc.startsWith("data:image");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 py-10">
      <div className="text-sm" style={{ opacity: 0.8 }}>
        <Link href="/psychics" className="hover:underline">
          Psíquicos
        </Link>
        <span className="mx-2" style={{ opacity: 0.6 }}>
          /
        </span>
        <span style={{ opacity: 0.9 }}>{displayName}</span>
      </div>

      <div className="rounded-3xl p-6" style={cardStyle}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-6">
            <div
              className="relative h-28 w-28 overflow-hidden rounded-3xl"
              style={{
                border: "2px solid var(--lp-accent)",
                background: "rgba(255,255,255,0.65)",
              }}
            >
              {photoSrc ? (
                isDataUri ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photoSrc}
                    alt={displayName}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <Image
                    src={photoSrc}
                    alt={displayName}
                    fill
                    className="object-cover"
                    sizes="112px"
                    priority
                  />
                )
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs" style={{ opacity: 0.7 }}>
                  Sin foto
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
                {displayName}
              </h1>

              <div className="flex flex-wrap gap-2">
                {typeof isOnline === "boolean" && <Badge>{isOnline ? "Disponible" : "No disponible"}</Badge>}

                {(typeof ratingAvg === "number" || typeof reviewsCount === "number") && (
                  <Badge>
                    ⭐ {typeof ratingAvg === "number" ? ratingAvg.toFixed(1) : "—"}
                    {reviewsCount ? ` · ${reviewsCount} reseñas` : ""}
                  </Badge>
                )}
              </div>

              <p className="text-sm italic" style={{ color: "rgba(49,27,146,0.85)" }}>
                {psychic?.tagline ? `“${psychic.tagline}”` : "Consulta desde la app con privacidad y respeto."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#"
              className="rounded-2xl px-5 py-2.5 text-sm font-medium hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "var(--lp-primary)",
                border: "1px solid var(--lp-border)",
              }}
            >
              Descargar la app
            </a>

            <Link
              href="/psychics"
              className="rounded-2xl px-5 py-2.5 text-sm hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "var(--lp-primary-2)",
                border: "1px solid var(--lp-border)",
              }}
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl p-6" style={cardStyle}>
          <h2 className="text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
            Biografía
          </h2>

          {bio ? (
            <p className="mt-3 whitespace-pre-line text-sm leading-7" style={{ opacity: 0.85 }}>
              {bio}
            </p>
          ) : (
            <p className="mt-3 text-sm" style={{ opacity: 0.7 }}>
              Biografía en configuración.
            </p>
          )}

          <div className="mt-6 rounded-3xl p-6" style={insetCardStyle}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
              Detalles
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Row label="Idiomas">{languages.length ? languages.join(" · ") : "En configuración"}</Row>

              <Row label="Áreas">{areas.length ? areas.join(" · ") : "En configuración"}</Row>

              {areasOtherText ? <Row label="Áreas (otros)">{areasOtherText}</Row> : null}

              <Row label="Herramientas">{tools.length ? tools.join(" · ") : "En configuración"}</Row>

              {toolsOtherText ? <Row label="Herramientas (otros)">{toolsOtherText}</Row> : null}

              {experience ? <Row label="Experiencia">{experience}</Row> : <Row label="Experiencia">En configuración</Row>}

              {about ? <Row label="Sobre mí">{about}</Row> : <Row label="Sobre mí">En configuración</Row>}
            </div>
          </div>

          <div className="mt-6 rounded-3xl p-6" style={insetCardStyle}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
              Comentarios
            </h3>
            <p className="mt-3 text-sm" style={{ opacity: 0.8 }}>
              Aún no hay comentarios para este psíquico.
            </p>
          </div>
        </div>

        <div className="rounded-3xl p-6" style={cardStyle}>
          <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
            Cómo consultar
          </h3>
          <p className="mt-2 text-sm" style={{ opacity: 0.8 }}>
            Este perfil es informativo. Para iniciar una consulta, descarga la app y selecciona a{" "}
            <span className="font-medium">{displayName}</span>.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#"
              className="rounded-2xl px-4 py-2 text-center text-sm font-medium hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "var(--lp-primary)",
                border: "1px solid var(--lp-border)",
              }}
            >
              Descargar la app
            </a>

            <Link
              href="/psychics"
              className="rounded-2xl px-4 py-2 text-center text-sm hover:opacity-90"
              style={{
                background: "rgba(255,255,255,0.55)",
                color: "var(--lp-primary-2)",
                border: "1px solid var(--lp-border)",
              }}
            >
              Volver al catálogo
            </Link>
          </div>

          <div className="mt-6 rounded-2xl p-4 text-xs" style={insetCardStyle}>
            <span style={{ opacity: 0.85 }}>
              Luz Psíquica promueve una experiencia segura y respetuosa. La comunicación se gestiona
              desde la app sin compartir información personal.
            </span>
          </div>

          <div className="mt-4 text-xs" style={{ opacity: 0.6 }}>
            Slug solicitado: <span style={{ opacity: 0.9 }}>{rawSlug}</span>
            <br />
            Slug del perfil: <span style={{ opacity: 0.9 }}>{psychic?.slug ?? slug}</span>
          </div>
        </div>
      </div>
    </div>
  );
}