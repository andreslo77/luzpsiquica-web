// app/[lang]/legal/eliminacion-de-cuenta/page.tsx
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function AccountDeletionEsPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  // Si entran a esta ruta en EN por error, igual se muestra (no pasa nada)
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Eliminación de cuenta
      </h1>

      <p className="mt-3 text-sm" style={{ color: "rgba(31,27,36,0.80)" }}>
        Esta página explica cómo solicitar la eliminación de tu cuenta y de los datos asociados en{" "}
        <strong>Luz Psíquica</strong>.
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Cómo solicitar la eliminación
      </h2>

      <ol className="mt-3 list-decimal pl-6 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        <li>
          Envía un correo a{" "}
          <a className="underline" href="mailto:luzpsiquica1@gmail.com">
            luzpsiquica1@gmail.com
          </a>
        </li>
        <li>
          En el asunto escribe: <strong>“Eliminar cuenta - Luz Psíquica”</strong>
        </li>
        <li>
          En el mensaje incluye el dato con el que te registraste (correo o usuario) y solicita explícitamente
          la eliminación.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Plazos
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        Procesaremos la solicitud en un plazo razonable. El tiempo puede variar según verificación mínima de
        seguridad y obligaciones legales aplicables.
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Conservación limitada
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        Algunos datos podrán conservarse únicamente cuando exista una obligación legal, fiscal o contable (por
        ejemplo, comprobantes de pago y registros mínimos antifraude), y solo durante el período exigido por la
        normativa aplicable.
      </p>
    </div>
  );
}