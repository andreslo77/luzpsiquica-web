// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { normalizeLang } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luz Psíquica",
  description: "Orientación espiritual moderna",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const p = await Promise.resolve(params);
  const lang = (p?.lang === "en" ? "en" : "es");

  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}