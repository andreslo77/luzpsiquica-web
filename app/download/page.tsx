export default function DownloadPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold">Descargar la app</h1>
        <p className="mt-2 text-sm opacity-80">
          Accede a Luz Psíquica desde tu navegador o descarga la app móvil.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        
        {/* WEB APP */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <p className="font-medium">Web-app</p>
          <p className="text-sm opacity-70">
            Accede desde tu navegador
          </p>

          <a
            href="https://luzpsiquicaweb-app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition"
          >
            Abrir web-app
          </a>
        </div>

        {/* GOOGLE PLAY */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
          <p className="font-medium">Google Play</p>
          <p className="text-sm opacity-70">
            Descarga la app móvil
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.luzpsiquica.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
          >
            Descargar en Google Play
          </a>
        </div>

      </div>
    </div>
  );
}