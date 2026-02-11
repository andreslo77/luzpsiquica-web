// app/[lang]/legal/account-deletion/page.tsx
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function AccountDeletionEnPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Account deletion
      </h1>

      <p className="mt-3 text-sm" style={{ color: "rgba(31,27,36,0.80)" }}>
        This page explains how to request deletion of your account and associated data on{" "}
        <strong>Luz Psíquica</strong>.
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        How to request deletion
      </h2>

      <ol className="mt-3 list-decimal pl-6 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        <li>
          Email{" "}
          <a className="underline" href="mailto:luzpsiquica1@gmail.com">
            luzpsiquica1@gmail.com
          </a>
        </li>
        <li>
          Subject: <strong>“Delete account - Luz Psíquica”</strong>
        </li>
        <li>
          Include the identifier you used to sign up (email or username) and explicitly request account deletion.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Timeframes
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        We process requests within a reasonable timeframe. Timing may vary depending on minimal security
        verification and applicable legal obligations.
      </p>

      <h2 className="mt-8 text-xl font-semibold" style={{ color: "var(--lp-primary)" }}>
        Limited retention
      </h2>
      <p className="mt-3 text-sm leading-7" style={{ color: "rgba(31,27,36,0.85)" }}>
        We may retain limited records when required for legal, tax, accounting, or anti-fraud purposes (e.g.,
        payment receipts and minimal transaction logs), only for the period required by applicable law.
      </p>
    </div>
  );
}