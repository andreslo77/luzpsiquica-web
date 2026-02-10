// app/[lang]/page.tsx
import Link from "next/link";

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const p = await Promise.resolve(params);
  const lang = p?.lang === "en" ? "en" : "es";
  const base = `/${lang}`;

  const t = {
    brand: "Luz Psíquica",
    title:
      lang === "en"
        ? "Clear spiritual guidance, when you need it"
        : "Orientación espiritual clara, cuando la necesitas",
    desc:
      lang === "en"
        ? "Connect with professional psychics for intuitive guidance through tarot, cards and other methods — directly from your phone."
        : "Conecta con psíquicos profesionales para guía intuitiva mediante tarot, cartas y otros métodos de orientación espiritual, directamente desde tu celular.",
    btnDownload: lang === "en" ? "Download the app" : "Descargar la app",
    btnPsychics: lang === "en" ? "View psychics" : "Ver psíquicos",
    sectionTitle: lang === "en" ? "Psychics" : "Psíquicos",
    sectionDesc:
      lang === "en"
        ? "Explore the catalog synced with the app and choose by specialty."
        : "Explora el catálogo sincronizado con la app y elige según especialidad.",
    btnCatalog: lang === "en" ? "View catalog" : "Ver catálogo",
    c1Title: lang === "en" ? "Confidentiality" : "Confidencialidad",
    c1Desc:
      lang === "en"
        ? "Experience focused on privacy and respect."
        : "Experiencia centrada en privacidad y respeto.",
    c2Title: lang === "en" ? "Quality & warmth" : "Calidad y calidez",
    c2Desc:
      lang === "en"
        ? "Clear profiles, visible specialties, human treatment."
        : "Perfiles claros, especialidades visibles y trato humano.",
    c3Title: lang === "en" ? "Fast & simple" : "Rápido y simple",
    c3Desc:
      lang === "en"
        ? "Choose your ideal psychic and consult from the app."
        : "Elige tu psíquico ideal y consulta desde la app.",
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="text-sm opacity-80">{t.brand}</p>

        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
          {t.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base opacity-90 md:text-lg">
          {t.desc}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`${base}/download`}
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-black hover:opacity-90"
          >
            {t.btnDownload}
          </Link>

          <Link
            href={`${base}/psychics`}
            className="rounded-full border border-white/20 px-6 py-3 text-center font-medium hover:bg-white/10"
          >
            {t.btnPsychics}
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">{t.c1Title}</p>
            <p className="mt-2 text-sm opacity-80">{t.c1Desc}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">{t.c2Title}</p>
            <p className="mt-2 text-sm opacity-80">{t.c2Desc}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium">{t.c3Title}</p>
            <p className="mt-2 text-sm opacity-80">{t.c3Desc}</p>
          </div>
        </div>
      </section>

      <section className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">{t.sectionTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm opacity-80">{t.sectionDesc}</p>
        </div>

        <Link
          href={`${base}/psychics`}
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium hover:bg-white/10"
        >
          {t.btnCatalog}
        </Link>
      </section>
    </div>
  );
}