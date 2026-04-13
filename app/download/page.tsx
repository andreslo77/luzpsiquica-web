// app/download/page.tsx
type DownloadPageProps = {
  lang?: "es" | "en";
};

const content = {
  es: {
    title: "Descargar la app",
    subtitle: "Accede a Luz Psíquica desde tu navegador o celular, o descarga la app móvil.",
    webTitle: "Web-app",
    webText: "Accede desde tu navegador",
    webButton: "Abrir web-app",
    playTitle: "Google Play",
    playText: "Descarga la app móvil",
    playButton: "Disponible en Google Play",
     playBadge: "/google-play-es.png",
  },
  en: {
    title: "Download the app",
    subtitle: "Access Luz Psíquica from your browser or mobile device, or download the app.",
    webTitle: "Web app",
    webText: "Access from your browser",
    webButton: "Open web app",
    playTitle: "Google Play",
    playText: "Download the mobile app",
    playButton: "Get it on Google Play",
    playBadge: "/google-play-en.png",
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
          <p className="font-medium">{t.webTitle}</p>
          <p className="text-sm opacity-70">{t.webText}</p>

          <a
            href="https://luzpsiquicaweb-app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            {t.webButton}
          </a>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium">{t.playTitle}</p>
          <p className="text-sm opacity-70">{t.playText}</p>

          <a
            href="https://play.google.com/store/apps/details?id=com.luzpsiquica.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.playButton}
            className="mt-2 inline-block transition hover:scale-105"
          >
            <img
              src={t.playBadge}
              alt={t.playButton}
              className="h-10 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}