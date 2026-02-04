// lib/api_FIXED.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const PSYCHICS_PATH = process.env.NEXT_PUBLIC_PSYCHICS_PATH || "/api/users/psychics";

export type Psychic = {
  _id?: string;
  id?: string;
  slug?: string;

  name?: string;
  psychicName?: string;
  displayName?: string;

  // ✅ En la web seguimos usando photoUrl como "src final"
  // pero ahora puede ser:
  // - https://...
  // - /uploads/...
  // - data:image/...;base64,....
  photoUrl?: string;

  // campos opcionales originales
  photo?: string;
  avatar?: string;

  tagline?: string;

  languages?: string[];
  areas?: string[];
  areasOtherText?: string;

  tools?: string[];
  toolsOtherText?: string;

  experience?: string;
  about?: string;

  specialties?: string[];
  ratingAvg?: number;
  rating?: number;
  reviewsCount?: number;
  isOnline?: boolean;
  shortBio?: string;
  bio?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// ✅ Detecta "data:image/..."
function isDataImageUri(v: string) {
  return /^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(v);
}

// ✅ Heurística para base64 "puro" (sin prefijo data:)
// - Evita confundir rutas tipo "uploads/.."
// - Evita strings cortos
function isProbablyBase64(v: string) {
  const s = (v || "").trim();
  if (!s) return false;

  // si parece ruta/URL, NO es base64
  if (
    s.startsWith("http://") ||
    s.startsWith("https://") ||
    s.startsWith("/uploads/") ||
    s.startsWith("uploads/") ||
    s.includes("/uploads/") ||
    s.includes("://") ||
    s.includes(".jpg") ||
    s.includes(".jpeg") ||
    s.includes(".png") ||
    s.includes(".webp")
  ) {
    return false;
  }

  // base64 suele ser largo
  if (s.length < 200) return false;

  // solo caracteres base64 típicos
  // (permitimos saltos de línea por si acaso)
  const cleaned = s.replace(/\s+/g, "");
  if (!/^[A-Za-z0-9+/=]+$/.test(cleaned)) return false;

  // múltiplo de 4 es común (no obligatorio, pero ayuda)
  if (cleaned.length % 4 !== 0) return true;

  return true;
}

// ✅ Devuelve el "src" final para IMG:
// - si data-uri -> retorna tal cual
// - si base64 puro -> lo convierte a data-uri
// - si URL o ruta uploads -> la normaliza con API_URL
function buildPhotoSrc(rawPhoto: any): string | undefined {
  if (typeof rawPhoto !== "string") return undefined;
  const v0 = rawPhoto.trim();
  if (!v0) return undefined;

  // Normaliza backslashes por si acaso
  const v = v0.replace(/\\/g, "/");

  // 0) data-uri
  if (isDataImageUri(v)) return v;

  // 0.1) base64 puro
  if (isProbablyBase64(v)) {
    const cleaned = v.replace(/\s+/g, "");
    return `data:image/jpeg;base64,${cleaned}`;
  }

  // A partir de aquí es URL/ruta
  // Si no hay API_URL, solo permitimos URL absoluta o data-uri/base64 (ya manejados arriba)
  if (!API_URL) {
    if (v.startsWith("http://") || v.startsWith("https://")) return v;
    return undefined;
  }

  // 1) URL completa
  if (v.startsWith("http://") || v.startsWith("https://")) return v;

  // 2) Si viene el hostname pegado (sin protocolo)
  const host = "luz-psiquica-backend.onrender.com";
  if (v.startsWith(host)) return `https://${v}`;
  if (v.startsWith(`//${host}`)) return `https:${v}`;

  // 3) /uploads/...
  if (v.startsWith("/uploads/")) return `${API_URL}${v}`;

  // 4) uploads/... (sin slash)
  if (v.startsWith("uploads/")) return `${API_URL}/${v}`;

  // 5) contiene "/uploads/" en cualquier parte
  const idx = v.indexOf("/uploads/");
  if (idx !== -1) {
    return `${API_URL}${v.slice(idx)}`;
  }

  // 6) solo nombre de archivo
  return `${API_URL}/uploads/psychics/${v.replace(/^\/+/, "")}`;
}

// ✅ Elegir foto con prioridad a base64 (porque /uploads puede estar roto)
function pickRawPhoto(p: any) {
  const candidates = [
    p?.photo,         // ✅ aquí suele venir el base64 nuevo
    p?.avatar,
    p?.profilePhoto,
    p?.image,
    p?.profileImage,

    // dejamos photoUrl al final para que NO tape el base64
    p?.photoUrl,
  ];

  // si photoUrl viene como data-uri también lo aceptamos, pero ya va al final
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c;
  }
  return null;
}

function normalizePsychic(p: any): Psychic {
  // ✅ Prioridad correcta del nombre público (no nombre real)
  const publicName = p?.psychicName ?? p?.displayName ?? p?.alias ?? "";
  const slug = p?.slug ?? (publicName ? slugify(publicName) : undefined);

  const rawPhoto = pickRawPhoto(p);

  // ✅ Ahora photoUrl sirve como "src final" (URL o base64 data-uri)
  const photoUrl = buildPhotoSrc(rawPhoto);

  return {
    _id: p?._id,
    id: p?.id,
    slug,

    name: p?.name, // referencia interna
    psychicName: p?.psychicName,
    displayName: publicName,

    photoUrl,

    // dejamos opcional si alguna parte lo usa
    photo: typeof p?.photo === "string" ? p.photo : undefined,
    avatar: typeof p?.avatar === "string" ? p.avatar : undefined,

    languages: Array.isArray(p?.languages) ? p.languages : [],
    areas: Array.isArray(p?.areas) ? p.areas : [],
    areasOtherText: typeof p?.areasOtherText === "string" ? p.areasOtherText : undefined,

    tools: Array.isArray(p?.tools) ? p.tools : [],
    toolsOtherText: typeof p?.toolsOtherText === "string" ? p.toolsOtherText : undefined,

    experience: typeof p?.experience === "string" ? p.experience : undefined,
    about: typeof p?.about === "string" ? p.about : undefined,

    specialties: Array.isArray(p?.specialties) ? p.specialties : [],
    ratingAvg: typeof p?.ratingAvg === "number" ? p.ratingAvg : undefined,
    reviewsCount: typeof p?.reviewsCount === "number" ? p.reviewsCount : undefined,
    isOnline: typeof p?.isOnline === "boolean" ? p.isOnline : undefined,
    shortBio: p?.shortBio ?? undefined,
    bio: p?.bio ?? undefined,
    tagline: p?.tagline ?? undefined,
  };
}

async function getJson(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API error ${res.status} ${res.statusText} - ${text}`);
  }

  return res.json();
}

export async function fetchPsychics(): Promise<Psychic[]> {
  if (!API_URL) return [];

  const url = `${API_URL}${PSYCHICS_PATH}`;
  const data = await getJson(url);

  const arr = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data?.psychics)
        ? data.psychics
        : [];

  return arr
    .map(normalizePsychic)
    .filter((p: Psychic) => p.slug && p.displayName);
}

export async function fetchPsychicBySlug(slug: string): Promise<Psychic | null> {
  const list = await fetchPsychics();
  return list.find((p) => p.slug === slug) || null;
}