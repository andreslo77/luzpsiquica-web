import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold">Cómo funciona</h1>
        <p className="mt-2 text-sm opacity-80">Una experiencia simple, humana y confidencial.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium">1) Elige tu psíquico</p>
          <p className="mt-2 text-sm opacity-80">Explora especialidades y encuentra el estilo ideal para ti.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium">2) Consulta desde la app</p>
          <p className="mt-2 text-sm opacity-80">Accede a la conversación en un entorno diseñado para tu comodidad.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium">3) Recibe orientación clara</p>
          <p className="mt-2 text-sm opacity-80">Guía basada en tarot, cartas y métodos intuitivos.</p>
        </div>
      </div>

      <Link href="/download" className="w-fit rounded-full bg-white px-6 py-3 font-medium text-black hover:opacity-90">
        Descargar la app
      </Link>
    </div>
  );
}