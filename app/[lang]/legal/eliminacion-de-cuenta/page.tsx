// app/[lang]/legal/eliminacion-de-cuenta/page.tsx
import { redirect } from "next/navigation";
import { normalizeLang } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function AccountDeletionAliasPage({ params }: PageProps) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  // Alias -> ruta oficial (misma para ES/EN)
  redirect(`/${lang}/legal/account-deletion`);
}