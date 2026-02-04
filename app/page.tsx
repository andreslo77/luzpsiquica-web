import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="text-sm opacity-80">Luz Psíquica</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
          Orientación espiritual clara, cuando la necesitas
        </h1>
        <p className="mt-4 max-w-2xl text-base opacity-90 md:text-lg">
          Conecta con psíquicos profesionales para guía intuitiva mediante tarot, cartas y otros métodos de
          orientación espiritual, directamente desde tu celular.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/download"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-black hover:opacity-90"
          >
            Descargar la app
          </Link>
          <Link
            href="/psychics"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-medium hover:bg-white/10"
          >
            Ver psíquicos
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">Confidencialidad</p>
            <p className="mt-2 text-sm opacity-80">Experiencia centrada en privacidad y respeto.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">Calidad y calidez</p>
            <p className="mt-2 text-sm opacity-80">Perfiles claros, especialidades visibles y trato humano.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">Rápido y simple</p>
            <p className="mt-2 text-sm opacity-80">Elige tu psíquico ideal y consulta desde la app.</p>
          </div>
        </div>
      </section>

      <section className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Psíquicos</h2>
          <p className="mt-2 max-w-2xl text-sm opacity-80">
            Explora el catálogo sincronizado con la app y elige según especialidad.
          </p>
        </div>
        <Link href="/psychics" className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium hover:bg-white/10">
          Ver catálogo
        </Link>
      </section>
    </div>
  );
}