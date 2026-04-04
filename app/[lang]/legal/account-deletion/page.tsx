import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

const SUPPORT_EMAIL = "luzpsiquica1@gmail.com";
const WHATSAPP_DISPLAY = "+1 (813) 618-7770";
const WHATSAPP_LINK = "https://wa.me/18136187770";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);
  const canonical = `https://luzpsiquica.com/${lang}/legal/account-deletion`;

  return {
    title: lang === "en" ? "Support | Luz Psíquica" : "Soporte | Luz Psíquica",
    description:
      lang === "en"
        ? "Contact Luz Psíquica support through WhatsApp or email for account help, general assistance, and support requests."
        : "Contacta al soporte de Luz Psíquica por WhatsApp o correo para ayuda con tu cuenta, asistencia general y solicitudes de soporte.",
    alternates: {
      canonical,
      languages: {
        es: "https://luzpsiquica.com/es/legal/account-deletion",
        en: "https://luzpsiquica.com/en/legal/account-deletion",
        "x-default": "https://luzpsiquica.com/es/legal/account-deletion",
      },
    },
  };
}

export default async function AccountDeletionPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  const isEn = lang === "en";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Support" : "Soporte"}
      </h1>

      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.80)" }}>
        {isEn ? (
          <>
            This page provides the official support channels for <strong>Luz Psíquica</strong>.
            You may contact us for general assistance, account-related questions, and support
            requests.
          </>
        ) : (
          <>
            Esta página presenta los canales oficiales de soporte de <strong>Luz Psíquica</strong>.
            Puedes comunicarte con nosotros para asistencia general, consultas relacionadas con tu
            cuenta y solicitudes de soporte.
          </>
        )}
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Contact" : "Contacto"}
      </h2>

      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        {isEn ? (
          <>
            For any question, complaint, claim, or inquiry related to the operation of the app,
            users may contact Luz Psíquica through the support channels listed below.
          </>
        ) : (
          <>
            Para cualquier duda, queja, reclamo o consulta relacionada con el funcionamiento de la
            aplicación, el usuario podrá comunicarse con Luz Psíquica a través de los canales de
            soporte indicados a continuación.
          </>
        )}
      </p>

      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        {isEn ? (
          <>
            Communications received will be handled according to the app’s internal procedures and
            within reasonable timeframes, depending on the nature of the request.
          </>
        ) : (
          <>
            Las comunicaciones recibidas serán atendidas conforme a los procedimientos internos de
            la aplicación y dentro de los plazos razonables, según la naturaleza de la solicitud.
          </>
        )}
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex w-fit rounded-2xl border px-6 py-4 text-base font-medium transition hover:opacity-90"
          style={{
            color: "var(--lp-primary)",
            borderColor: "rgba(103,80,164,0.28)",
            background: "rgba(103,80,164,0.08)",
          }}
        >
          {isEn ? `Email: ${SUPPORT_EMAIL}` : `Email: ${SUPPORT_EMAIL}`}
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-2xl border px-6 py-4 text-base font-medium transition hover:opacity-90"
          style={{
            color: "var(--lp-primary)",
            borderColor: "rgba(103,80,164,0.28)",
            background: "rgba(103,80,164,0.08)",
          }}
        >
          {isEn ? `WhatsApp: ${WHATSAPP_DISPLAY}` : `WhatsApp: ${WHATSAPP_DISPLAY}`}
        </a>
      </div>

      <h2 className="mt-10 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        {isEn ? "Account help" : "Ayuda con la cuenta"}
      </h2>

      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        {isEn ? (
          <>
            If you need help with your account, including account deletion-related guidance, you may
            contact us through the support channels above.
          </>
        ) : (
          <>
            Si necesitas ayuda con tu cuenta, incluida orientación relacionada con la eliminación de
            cuenta, puedes comunicarte con nosotros a través de los canales de soporte indicados
            anteriormente.
          </>
        )}
      </p>
    </div>
  );
}