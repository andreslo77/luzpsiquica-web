// lib/i18n.ts
export const SUPPORTED_LANGS = ["es", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function normalizeLang(v: any): Lang {
  const raw = String(v || "").toLowerCase();
  return (SUPPORTED_LANGS as readonly string[]).includes(raw) ? (raw as Lang) : "es";
}