// app/download/page.tsx
import Link from "next/link";
import { fetchPsychics, type Psychic } from "@/lib/api";

type DownloadPageProps = {
  lang?: "es" | "en";
};

const content = {
  es: {
    promoTitle: "Promoción de bienvenida",
    promoText:
      "Regístrate en Luz Psíquica y recibe 5 minutos gratis para tu primera consulta por chat o llamada.",
    promoNote: "Escoge el psíquico que desees para tu consulta",
    webTitle: "Web-app",
    webText: "Accede desde tu navegador en cualquier dispositivo",
    webButton: "Abrir web-app",
    webLogo: "/logo.png",
    storeTitle: "App móvil",
    storeText: "Descarga la app móvil",
    playButton: "Disponible en Google Play",
    playBadge: "/google-play-es.svg",
    appStoreButton: "Descargar en App Store",
    appStoreBadge: "/app-store-es.svg",
    callNow: "Llamar ahora",
    fallbackComment: "Consulta con privacidad, respeto y conexión espiritual.",
  },
  en: {
    promoTitle: "Welcome promotion",
    promoText:
      "Sign up for Luz Psíquica and receive 5 free minutes for your first chat or voice consultation.",
    promoNote: "Choose the psychic you want for your consultation",
    webTitle: "Web app",
    webText: "Access it from your browser on any device",
    webButton: "Open web app",
    webLogo: "/logo.png",
    storeTitle: "Mobile app",
    storeText: "Download the mobile app",
    playButton: "Get it on Google Play",
    playBadge: "/google-play-en.svg",
    appStoreButton: "Download on the App Store",
    appStoreBadge: "/app-store-en.svg",
    callNow: "Call now",
    fallbackComment: "Consult with privacy, respect, and spiritual connection.",
  },
};

function resolvePhotoSrc(photo?: string | null) {
  if (!photo) return null;

  const raw = String(photo).trim();
  if (!raw) return null;

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) return raw;
  if (raw.startsWith("data:image")) return raw;

  return `data:image/jpeg;base64,${raw}`;
}

function getDisplayName(p: Psychic, lang: "es" | "en") {
  return p.displayName || p.psychicName || p.name || (lang === "en" ? "Psychic" : "Psíquico");
}

function getRating(p: Psychic) {
  if (typeof p.ratingAvg === "number") return p.ratingAvg;
  if (typeof p.rating === "number") return p.rating;
  return 5;
}

function getComment(p: Psychic, fallback: string) {
  const possibleComments =
    (p as any)?.reviews ||
    (p as any)?.comments ||
    (p as any)?.testimonials ||
    (p as any)?.ratings ||
    [];

  if (Array.isArray(possibleComments) && possibleComments.length > 0) {
    const first = possibleComments[0];

    if (typeof first === "string" && first.trim()) return first.trim();

    if (typeof first?.comment === "string" && first.comment.trim()) return first.comment.trim();
    if (typeof first?.text === "string" && first.text.trim()) return first.text.trim();
    if (typeof first?.review === "string" && first.review.trim()) return first.review.trim();
    if (typeof first?.message === "string" && first.message.trim()) return first.message.trim();
  }

  return p.about || p.tagline || p.shortBio || fallback;
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.max(1, Math.min(5, Math.round(rating)));

  return (
    <span className="whitespace-nowrap text-lg leading-none text-yellow-400">
      {"★".repeat(rounded)}
    </span>
  );
}

export default async function DownloadPage({ lang = "es" }: DownloadPageProps) {
  const t = content[lang];

  let psychics: Psychic[] = [];

  try {
    psychics = await fetchPsychics();
  } catch {
    psychics = [];
  }

  const featuredPsychics = psychics.slice(0, 3);

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 py-10 sm:px-10 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(244,237,255,0.18), rgba(244,237,255,0.18)), url('/images/home/celestial-cartas2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="rounded-3xl border border-purple-300/30 bg-purple-500/15 p-5 shadow-lg shadow-purple-900/20">
        <p className="text-sm font-semibold uppercase tracking-wide text-black">
          🎁 {t.promoTitle}
        </p>

        <p className="mt-2 text-lg font-semibold leading-snug text-black">
          {t.promoText}
        </p>

        <p className="mt-4 text-sm text-black/80">{t.promoNote}</p>
      </div>

      {featuredPsychics.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPsychics.map((p) => {
            const displayName = getDisplayName(p, lang);
            const photoSrc = resolvePhotoSrc(p.photoUrl ?? p.photo ?? p.avatar ?? null);
            const rating = getRating(p);
            const comment = getComment(p, t.fallbackComment);

            return (
              <Link
                key={p.slug || p._id || p.id || displayName}
                href="https://luzpsiquicaweb-app.com"
                className="rounded-3xl border border-white/20 bg-white/45 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white">
                    {photoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={photoSrc}
                        alt={displayName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-bold text-purple-700">
                        LP
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <p className="truncate font-semibold text-purple-950">{displayName}</p>
                      <Stars rating={rating} />
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm text-black/75">- {comment}</p>

                    <div className="mt-4 flex justify-end">
                      <span className="rounded-md bg-indigo-700 px-3 py-1 text-xs font-semibold text-white">
                        {t.callNow}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <img
              src={t.webLogo}
              alt="Luz Psíquica"
              className="h-12 w-12 rounded-2xl object-contain"
            />

            <div>
              <p className="font-medium">{t.webTitle}</p>
              <p className="text-sm opacity-70">{t.webText}</p>
            </div>
          </div>

          <a
            href="https://luzpsiquicaweb-app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            {t.webButton}
          </a>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium">{t.storeTitle}</p>
          <p className="text-sm opacity-70">{t.storeText}</p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.luzpsiquica.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.playButton}
              className="inline-flex items-center justify-center transition hover:scale-105 hover:opacity-90"
            >
              <img
                src={t.playBadge}
                alt={t.playButton}
                className="h-auto w-[155px] object-contain"
              />
            </a>

            <a
              href="https://apps.apple.com/app/id6761389671"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.appStoreButton}
              className="inline-flex items-center justify-center transition hover:scale-105 hover:opacity-90"
            >
              <img
                src={t.appStoreBadge}
                alt={t.appStoreButton}
                className="h-auto w-[135px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}