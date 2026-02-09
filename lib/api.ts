// lib/api.ts

// -----------------------------
// ENV / NORMALIZACIÓN
// -----------------------------
function trimSlashEnd(v: string) {
  return v.replace(/\/+$/, "");
}

// Si te pasan ".../api" lo dejamos como origin "..." y base ".../api"
function normalizeApi(input: string) {
  const raw = trimSlashEnd(String(input || "").trim());
  if (!raw) return { origin: "", base: "" };

  // Si termina en /api => origin sin /api
  if (raw.endsWith("/api")) {
    const origin = raw.slice(0, -4);
    return { origin, base: `${origin}/api` };
  }

  // Si NO termina en /api => base = origin + /api
  return { origin: raw, base: `${raw}/api` };
}

const { origin: API_ORIGIN, base: API_BASE } = normalizeApi(process.env.NEXT_PUBLIC_API_URL || "");

// PATH del endpoint (solo el path, no full url)
export const PSYCHICS_PATH =
  process.env.NEXT_PUBLIC_PSYCHICS_PATH || "/users/psychics"; 
// ⚠️ Nota: aquí ahora es /users/psychics (sin /api) porque API_BASE ya tiene /api

export type Psychic = {
  _id?: string;
  id?: string;
  slug?: string;

  name?: string;
  psychicName?: string;
  displayName?: string;

  // photoUrl en web es el src final (url o data-uri)
  photoUrl?: string;

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

function isDataImageUri(v: string) {
  return /^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(v);
}

function isProbablyBase64(v: string) {
  const s = (v || "").trim();
  if (!s) return false;

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

  if (s.length < 200) return false;

  const cleaned = s.replace(/\s+/g, "");
  if (!/^[A-Za-z0-9+/=]+$/.test(cleaned)) return false;

  // múltiplo de 4 suele ser típico
  if (cleaned.length % 4 !== 0) return true;
  return true;
}

// ✅ IMPORTANTE: uploads se arma con API_ORIGIN (no con API_BASE)
function buildPhotoSrc(rawPhoto: any): string | undefined {
  if (typeof rawPhoto !== "string") return undefined;
  const v0 = rawPhoto.trim();
  if (!v0) return undefined;

  const v = v0.replace(/\\/g, "/");

  // data-uri
  if (isDataImageUri(v)) return v;

  // base64 puro
  if (isProbablyBase64(v)) {
    const cleaned = v.replace(/\s+/g, "");
    return `data:image/jpeg;base64,${cleaned}`;
  }

  // URL completa
  if (v.startsWith("http://") || v.startsWith("https://")) return v;

  // si no hay origin, no podemos construir rutas
  if (!API_ORIGIN) return undefined;

  // /uploads/...
  if (v.startsWith("/uploads/")) return `${API_ORIGIN}${v}`;

  // uploads/...
  if (v.startsWith("uploads/")) return `${API_ORIGIN}/${v}`;

  // contiene "/uploads/"
  const idx = v.indexOf("/uploads/");
  if (idx !== -1) return `${API_ORIGIN}${v.slice(idx)}`;

  // solo filename (fallback)
  return `${API_ORIGIN}/uploads/psychics/${v.replace(/^\/+/, "")}`;
}

function pickRawPhoto(p: any) {
  const candidates = [
    p?.photo,
    p?.avatar,
    p?.profilePhoto,
    p?.image,
    p?.profileImage,
    p?.photoUrl,
  ];

  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c;
  }
  return null;
}

function normalizePsychic(p: any): Psychic {
  const publicName = p?.psychicName ?? p?.displayName ?? p?.alias ?? "";
  const slug = p?.slug ?? (publicName ? slugify(publicName) : undefined);

  const rawPhoto = pickRawPhoto(p);
  const photoUrl = buildPhotoSrc(rawPhoto);

  return {
    _id: p?._id,
    id: p?.id,
    slug,

    name: p?.name,
    psychicName: p?.psychicName,
    displayName: publicName,

    photoUrl,

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
  if (!API_BASE) return [];

  // ✅ API_BASE ya incluye /api, por eso PSYCHICS_PATH no debe iniciar con /api
  const url = `${API_BASE}${PSYCHICS_PATH.startsWith("/") ? "" : "/"}${PSYCHICS_PATH}`;
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

// Útil para debug en UI si quieres mostrarlo
export const __API_DEBUG__ = { API_ORIGIN, API_BASE, PSYCHICS_PATH };