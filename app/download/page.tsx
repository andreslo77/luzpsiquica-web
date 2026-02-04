export default function DownloadPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold">Descargar la app</h1>
        <p className="mt-2 text-sm opacity-80">
          Muy pronto encontrarás aquí los enlaces oficiales de App Store y Google Play.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium">App Store</p>
          <p className="mt-2 text-sm opacity-70">Enlace pendiente</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium">Google Play</p>
          <p className="mt-2 text-sm opacity-70">Enlace pendiente</p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/20 p-6 text-sm opacity-80">
        Cuando tengas los enlaces oficiales, los pegamos aquí y añadimos QR para descarga rápida.
      </div>
    </div>
  );
}