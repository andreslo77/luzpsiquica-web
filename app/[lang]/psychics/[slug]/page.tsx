// app/[lang]/psychics/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { fetchPsychics } from "@/lib/api";
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
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

function Row({ label, children }: { label: string; children: React.ReactNode }) {
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

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) return raw;
  if (raw.startsWith("data:image")) return raw;

  return `data:image/jpeg;base64,${raw}`;
}

export default async function PsychicDetailPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  const t =
    lang === "en"
      ? {
          notFoundTitle: "Psychic not found",
          notFoundDesc: "The profile may be unavailable or the link may be incorrect.",
          backCatalog: "Back to catalog",
          home: "Go home",
          psychics: "Psychics",
          available: "Available",
          unavailable: "Unavailable",
          reviews: "reviews",
          download: "Download the app",
          viewCatalog: "View catalog",
          bio: "Biography",
          bioPending: "Biography pending.",
          details: "Details",
          languages: "Languages",
          areas: "Areas",
          areasOther: "Areas (other)",
          tools: "Tools",
          toolsOther: "Tools (other)",
          experience: "Experience",
          aboutMe: "About me",
          pending: "Pending",
          comments: "Comments",
          noComments: "No comments yet for this psychic.",
          howTo: "How to consult",
          infoProfile:
            "This profile is informational. To start a consultation, download the app and select",
          safe:
            "Luz Psíquica promotes a safe and respectful experience. Communication is handled within the app without sharing personal information.",
          requestedSlug: "Requested slug",
          normalizedSlug: "Normalized slug",
          profileSlug: "Profile slug",
          dbgDecoded: "Decoded slug",
          loaded: "Loaded psychics",
        }
      : {
          notFoundTitle: "Psíquico no encontrado",
          notFoundDesc: "Puede que el perfil no esté disponible o que el enlace sea incorrecto.",
          backCatalog: "Volver al catálogo",
          home: "Ir al inicio",
          psychics: "Psíquicos",
          available: "Disponible",
          unavailable: "No disponible",
          reviews: "reseñas",
          download: "Descargar la app",
          viewCatalog: "Ver catálogo",
          bio: "Biografía",
          bioPending: "Biografía en configuración.",
          details: "Detalles",
          languages: "Idiomas",
          areas: "Áreas",
          areasOther: "Áreas (otros)",
          tools: "Herramientas",
          toolsOther: "Herramientas (otros)",
          experience: "Experiencia",
          aboutMe: "Sobre mí",
          pending: "En configuración",
          comments: "Comentarios",
          noComments: "Aún no hay comentarios para este psíquico.",
          howTo: "Cómo consultar",
          infoProfile:
            "Este perfil es informativo. Para iniciar una consulta, descarga la app y selecciona a",
          safe:
            "Luz Psíquica promueve una experiencia segura y respetuosa. La comunicación se gestiona desde la app sin compartir información personal.",
          requestedSlug: "Slug solicitado",
          normalizedSlug: "Slug normalizado",
          profileSlug: "Slug del perfil",
          dbgDecoded: "Slug decodificado",
          loaded: "Psíquicos cargados",
        };

  const rawSlug = typeof p?.slug === "string" ? p.slug : "";
  const decodedSlug = rawSlug ? decodeURIComponent(rawSlug) : "";
  const slug = slugify(decodedSlug);

  const psychics = await fetchPsychics();

  const psychic =
    psychics.find((pp: any) => (pp?.slug ? slugify(String(pp.slug)) : "") === slug) ??
    psychics.find((pp: any) => {
      const publicName = pp?.psychicName ?? pp?.displayName ?? pp?.alias ?? "";
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
            {t.notFoundTitle}
          </h1>
          <p className="mt-2 text-sm" style={{ opacity: 0.8 }}>
            {t.notFoundDesc}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              // ✅ FIX
              href={`/${lang}/psychics`}
              className="rounded-2xl px-4 py-2 text-sm hover:opacity-90"
              style={{ ...insetCardStyle, background: "rgba(255,255,255,0.65)" }}
            >
              {t.backCatalog}
            </Link>

            <Link
              // ✅ FIX
              href={`/${lang}`}
              className="rounded-2xl px-4 py-2 text-sm hover:opacity-90"
              style={{ ...insetCardStyle, background: "rgba(255,255,255,0.65)" }}
            >
              {t.home}
            </Link>
          </div>

          <div className="mt-4 text-xs" style={{ opacity: 0.75 }}>
            <div>
              {t.requestedSlug}: <span style={{ opacity: 1 }}>{rawSlug || "(vacío)"}</span>
            </div>
            <div>
              {t.dbgDecoded}: <span style={{ opacity: 1 }}>{decodedSlug || "(vacío)"}</span>
            </div>
            <div>
              {t.normalizedSlug}: <span style={{ opacity: 1 }}>{slug || "(vacío)"}</span>
            </div>
            <div className="mt-2" style={{ opacity: 0.7 }}>
              {t.loaded}: <span style={{ opacity: 1 }}>{psychics.length}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const displayName = psychic?.displayName ?? psychic?.psychicName ?? (lang === "en" ? "Psychic" : "Psíquico");
  const isOnline = typeof psychic?.isOnline === "boolean" ? psychic.isOnline : undefined;
  const ratingAvg = typeof psychic?.ratingAvg === "number" ? psychic.ratingAvg : undefined;
  const reviewsCount = typeof psychic?.reviewsCount === "number" ? psychic.reviewsCount : undefined;

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

  const photoSrc = resolvePhotoSrc((psychic as any)?.photoUrl ?? (psychic as any)?.photo ?? null);
  const isDataUri = typeof photoSrc === "string" && photoSrc.startsWith("data:image");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 py-10">
      <div className="text-sm" style={{ opacity: 0.8 }}>
        <Link href={`/${lang}/psychics`} className="hover:underline">
          {t.psychics}
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
              style={{ border: "2px solid var(--lp-accent)", background: "rgba(255,255,255,0.65)" }}
            >
              {photoSrc ? (
                isDataUri ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photoSrc} alt={displayName} className="h-full w-full object-cover" loading="eager" />
                ) : (
                  <Image src={photoSrc} alt={displayName} fill className="object-cover" sizes="112px" priority />
                )
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs" style={{ opacity: 0.7 }}>
                  {lang === "en" ? "No photo" : "Sin foto"}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
                {displayName}
              </h1>

              <div className="flex flex-wrap gap-2">
                {typeof isOnline === "boolean" && <Badge>{isOnline ? t.available : t.unavailable}</Badge>}

                {(typeof ratingAvg === "number" || typeof reviewsCount === "number") && (
                  <Badge>
                    ⭐ {typeof ratingAvg === "number" ? ratingAvg.toFixed(1) : "—"}
                    {reviewsCount ? ` · ${reviewsCount} ${t.reviews}` : ""}
                  </Badge>
                )}
              </div>

              <p className="text-sm italic" style={{ color: "rgba(49,27,146,0.85)" }}>
                {psychic?.tagline
                  ? `“${psychic.tagline}”`
                  : lang === "en"
                    ? "Consult from the app with privacy and respect."
                    : "Consulta desde la app con privacidad y respeto."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#"
              className="rounded-2xl px-5 py-2.5 text-sm font-medium hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--lp-primary)", border: "1px solid var(--lp-border)" }}
            >
              {t.download}
            </a>

            <Link
              // ✅ FIX
              href={`/${lang}/psychics`}
              className="rounded-2xl px-5 py-2.5 text-sm hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.55)", color: "var(--lp-primary-2)", border: "1px solid var(--lp-border)" }}
            >
              {t.viewCatalog}
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl p-6" style={cardStyle}>
          <h2 className="text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
            {t.bio}
          </h2>

          {bio ? (
            <p className="mt-3 whitespace-pre-line text-sm leading-7" style={{ opacity: 0.85 }}>
              {bio}
            </p>
          ) : (
            <p className="mt-3 text-sm" style={{ opacity: 0.7 }}>
              {t.bioPending}
            </p>
          )}

          <div className="mt-6 rounded-3xl p-6" style={insetCardStyle}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
              {t.details}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Row label={t.languages}>{languages.length ? languages.join(" · ") : t.pending}</Row>
              <Row label={t.areas}>{areas.length ? areas.join(" · ") : t.pending}</Row>
              {areasOtherText ? <Row label={t.areasOther}>{areasOtherText}</Row> : null}
              <Row label={t.tools}>{tools.length ? tools.join(" · ") : t.pending}</Row>
              {toolsOtherText ? <Row label={t.toolsOther}>{toolsOtherText}</Row> : null}
              <Row label={t.experience}>{experience || t.pending}</Row>
              <Row label={t.aboutMe}>{about || t.pending}</Row>
            </div>
          </div>

          <div className="mt-6 rounded-3xl p-6" style={insetCardStyle}>
            <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
              {t.comments}
            </h3>
            <p className="mt-3 text-sm" style={{ opacity: 0.8 }}>
              {t.noComments}
            </p>
          </div>
        </div>

        <div className="rounded-3xl p-6" style={cardStyle}>
          <h3 className="text-lg font-semibold" style={{ color: "var(--lp-primary)" }}>
            {t.howTo}
          </h3>
          <p className="mt-2 text-sm" style={{ opacity: 0.8 }}>
            {t.infoProfile} <span className="font-medium">{displayName}</span>.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#"
              className="rounded-2xl px-4 py-2 text-center text-sm font-medium hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.9)", color: "var(--lp-primary)", border: "1px solid var(--lp-border)" }}
            >
              {t.download}
            </a>

            <Link
              // ✅ FIX
              href={`/${lang}/psychics`}
              className="rounded-2xl px-4 py-2 text-center text-sm hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.55)", color: "var(--lp-primary-2)", border: "1px solid var(--lp-border)" }}
            >
              {t.backCatalog}
            </Link>
          </div>

          <div className="mt-6 rounded-2xl p-4 text-xs" style={insetCardStyle}>
            <span style={{ opacity: 0.85 }}>{t.safe}</span>
          </div>

          <div className="mt-4 text-xs" style={{ opacity: 0.6 }}>
            {t.requestedSlug}: <span style={{ opacity: 0.9 }}>{rawSlug}</span>
            <br />
            {t.normalizedSlug}: <span style={{ opacity: 0.9 }}>{slug}</span>
            <br />
            {t.profileSlug}: <span style={{ opacity: 0.9 }}>{psychic?.slug ?? "(sin slug)"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}