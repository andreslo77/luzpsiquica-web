// app/download/page.tsx

type DownloadPageProps = {
  lang?: "es" | "en";
};

const content = {
  es: {
    title: "Descargar la app",
    subtitle: "Accede a Luz Psíquica desde tu navegador o descarga la app móvil.",
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
  },
  en: {
    title: "Download the app",
    subtitle: "Access Luz Psíquica from your browser or download the app.",
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
  },
};

export default function DownloadPage({ lang = "es" }: DownloadPageProps) {
  const t = content[lang];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold">{t.title}</h1>
        <p className="mt-2 text-sm opacity-80">{t.subtitle}</p>
      </div>

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
                className="h-[50px] w-auto object-contain"
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
                className="h-[50px] w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}