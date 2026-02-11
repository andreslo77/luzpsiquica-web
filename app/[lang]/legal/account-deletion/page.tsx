// app/[lang]/legal/account-deletion/page.tsx
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function AccountDeletionPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  const isEn = lang === "en";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Account deletion" : "Eliminación de cuenta"}
      </h1>

      <p className="mt-3 text-sm" style={{ color: "rgba(31,27,36,0.80)" }}>
        {isEn ? (
          <>
            This page explains how to request deletion of your account and associated data on{" "}
            <strong>Luz Psíquica</strong>. For entertainment purposes only.
          </>
        ) : (
          <>
            Esta página explica cómo solicitar la eliminación de tu cuenta y de los datos asociados en{" "}
            <strong>Luz Psíquica</strong>. Solo entretenimiento.
          </>
        )}
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "How to request deletion" : "Cómo solicitar la eliminación"}
      </h2>

      <ol
        className="mt-3 list-decimal pl-6 text-sm leading-7"
        style={{ color: "rgba(31,27,36,0.85)" }}
      >
        <li>
          {isEn ? "Email" : "Envía un correo a"}{" "}
          <a className="underline" href="mailto:luzpsiquica1@gmail.com">
            luzpsiquica1@gmail.com
          </a>
        </li>
        <li>
          {isEn ? (
            <>
              Subject: <strong>“Delete account - Luz Psíquica”</strong>
            </>
          ) : (
            <>
              En el asunto escribe: <strong>“Eliminar cuenta - Luz Psíquica”</strong>
            </>
          )}
        </li>
        <li>
          {isEn
            ? "Include the identifier you used to sign up (email or username) and explicitly request account deletion."
            : "En el mensaje incluye el dato con el que te registraste (correo o usuario) y solicita explícitamente la eliminación."}
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Timeframes" : "Plazos"}
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        {isEn
          ? "We process requests within a reasonable timeframe. Timing may vary depending on minimal security verification and applicable legal obligations."
          : "Procesaremos la solicitud en un plazo razonable. El tiempo puede variar según verificación mínima de seguridad y obligaciones legales aplicables."}
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Limited retention" : "Conservación limitada"}
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        {isEn
          ? "We may retain limited records when required for legal, tax, accounting, or anti-fraud purposes (e.g., payment receipts and minimal transaction logs), only for the period required by applicable law."
          : "Algunos datos podrán conservarse únicamente cuando exista una obligación legal, fiscal o contable (por ejemplo, comprobantes de pago y registros mínimos antifraude), y solo durante el período exigido por la normativa aplicable."}
      </p>
    </div>
  );
}