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
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 py-10 text-[#5c2394] sm:px-10 lg:px-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(244,237,255,0.18), rgba(244,237,255,0.18)), url('/images/home/celestial-chica2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="max-w-[760px]">
          <h1
            className="text-[48px] md:text-[64px] font-semibold"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {isEn ? "Support" : "Soporte"}
          </h1>

          <p
            className="mt-4 text-[18px] leading-8 md:text-[22px]"
            style={{
              color: "rgba(92,35,148,0.95)",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {isEn ? (
              <>
                This page provides the official support channels for{" "}
                <strong>Luz Psíquica</strong>. You may contact us for general
                assistance, account-related questions, and support requests.
              </>
            ) : (
              <>
                Esta página presenta los canales oficiales de soporte de{" "}
                <strong>Luz Psíquica</strong>. Puedes comunicarte con nosotros
                para asistencia general, consultas relacionadas con tu cuenta y
                solicitudes de soporte.
              </>
            )}
          </p>

          <h2
            className="mt-10 text-[42px] font-bold"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {isEn ? "Contact" : "Contacto"}
          </h2>

          <p
            className="mt-4 text-[18px] leading-8 md:text-[22px]"
            style={{
              color: "rgba(92,35,148,0.95)",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {isEn ? (
              <>
                For any question, complaint, claim, or inquiry related to the
                operation of the app, users may contact Luz Psíquica through the
                support channels listed below.
              </>
            ) : (
              <>
                Para cualquier duda, queja, reclamo o consulta relacionada con
                el funcionamiento de la aplicación, el usuario podrá comunicarse
                con Luz Psíquica a través de los canales de soporte indicados a
                continuación.
              </>
            )}
          </p>

          <p
            className="mt-4 text-[18px] leading-8 md:text-[22px]"
            style={{
              color: "rgba(92,35,148,0.95)",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {isEn ? (
              <>
                Communications received will be handled according to the app’s
                internal procedures and within reasonable timeframes, depending
                on the nature of the request.
              </>
            ) : (
              <>
                Las comunicaciones recibidas serán atendidas conforme a los
                procedimientos internos de la aplicación y dentro de los plazos
                razonables, según la naturaleza de la solicitud.
              </>
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="rounded-2xl px-7 py-4 text-base font-semibold transition hover:opacity-90"
              style={{
                color: "#5c2394",
                border: "1px solid rgba(103,80,164,0.20)",
                background: "rgba(238,231,251,0.88)",
                backdropFilter: "blur(10px)",
                fontFamily: "Alexandria, sans-serif",
              }}
            >
              Email: {SUPPORT_EMAIL}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-7 py-4 text-base font-semibold transition hover:opacity-90"
              style={{
                color: "#5c2394",
                border: "1px solid rgba(103,80,164,0.20)",
                background: "rgba(238,231,251,0.88)",
                backdropFilter: "blur(10px)",
                fontFamily: "Alexandria, sans-serif",
              }}
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>

          <h2
            className="mt-12 text-[42px] font-bold"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {isEn ? "Account help" : "Ayuda con la cuenta"}
          </h2>

          <p
            className="mt-4 text-[18px] leading-8 md:text-[22px]"
            style={{
              color: "rgba(92,35,148,0.95)",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {isEn ? (
              <>
                If you need help with your account, including account
                deletion-related guidance, you may contact us through the
                support channels above.
              </>
            ) : (
              <>
                Si necesitas ayuda con tu cuenta, incluida orientación
                relacionada con la eliminación de cuenta, puedes comunicarte con
                nosotros a través de los canales de soporte indicados
                anteriormente.
              </>
            )}
          </p>

          {/* =======================================================
              QUIÉNES SOMOS
          ======================================================= */}

          <h2
            className="mt-14 text-[42px] font-bold"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {isEn ? "Who we are" : "Quiénes somos"}
          </h2>

          <div
            className="mt-6 rounded-[2rem] p-8"
            style={{
              background: "rgba(238,231,251,0.72)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(103,80,164,0.16)",
            }}
          >
            <p
              className="text-[17px] leading-8"
              style={{
                color: "rgba(92,35,148,0.96)",
                fontFamily: "Alexandria, sans-serif",
              }}
            >
              {isEn ? (
                <>
                  Luz Psíquica was born with the idea of creating a modern,
                  human and confidential space where people could access
                  intuitive guidance in a simple and secure way from anywhere.
                  <br />
                  <br />
                  Our platform connects users with evaluated psychics,
                  integrating technology, privacy and an experience designed to
                  provide clarity, companionship and emotional well-being.
                  <br />
                  <br />
                  We believe spiritual guidance can also evolve together with
                  technology, offering a more accessible, organized and
                  transparent experience for people seeking guidance in
                  different stages of life.
                </>
              ) : (
                <>
                  Luz Psíquica nació con la idea de crear un espacio moderno,
                  humano y confidencial donde las personas pudieran acceder a
                  orientación intuitiva de manera simple y segura desde
                  cualquier lugar.
                  <br />
                  <br />
                  Nuestra plataforma conecta usuarios con psíquicos evaluados,
                  integrando tecnología, privacidad y una experiencia diseñada
                  para brindar claridad, acompañamiento y bienestar emocional.
                  <br />
                  <br />
                  Creemos que la orientación espiritual también puede
                  evolucionar junto con la tecnología, ofreciendo una
                  experiencia más accesible, organizada y transparente para
                  quienes buscan guía en diferentes etapas de su vida.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}