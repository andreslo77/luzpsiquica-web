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
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}>) {
  const p = await Promise.resolve(params);
  const lang = normalizeLang(p?.lang);

  return (
    <html lang={lang}>
      <body className="antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}