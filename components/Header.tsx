// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: "rgba(49,27,146,0.10)",
        background: "rgba(237,231,246,0.72)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="relative h-9 w-9 overflow-hidden rounded-xl"
            style={{
              border: "1px solid var(--lp-border)",
              background: "rgba(255,255,255,0.55)",
              boxShadow: "0 6px 18px rgba(49,27,146,0.10)",
            }}
          >
            <Image
              src="/logo.png"
              alt="Luz Psíquica"
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-semibold" style={{ color: "var(--lp-primary)" }}>
              Luz Psíquica
            </div>
            <div className="text-xs" style={{ color: "rgba(31,27,36,0.65)" }}>
              Orientación espiritual moderna
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href="/psychics" className="hover:opacity-100" style={{ color: "rgba(31,27,36,0.75)" }}>
            Psíquicos
          </Link>
          <Link href="/how-it-works" className="hover:opacity-100" style={{ color: "rgba(31,27,36,0.75)" }}>
            Cómo funciona
          </Link>

          {/* ✅ NUEVO */}
          <Link href="/legal" className="opacity-90 hover:opacity-100">
            Legal
          </Link>

          <Link
            href="/download"
            className="rounded-full px-4 py-2 font-medium"
            style={{
              border: "1px solid var(--lp-border)",
              background: "rgba(255,255,255,0.55)",
              color: "var(--lp-primary-2)",
            }}
          >
            Descargar app
          </Link>
        </nav>
      </div>
    </header>
  );
}