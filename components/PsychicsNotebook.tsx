"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Psychic } from "@/lib/api";

function resolvePhotoSrc(photo?: string | null) {
  if (!photo) return null;

  const raw = String(photo).trim();
  if (!raw) return null;

  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("/")) return raw;
  if (raw.startsWith("data:image")) return raw;

  return `data:image/jpeg;base64,${raw}`;
}

type Props = {
  lang: string;
  psychics: Psychic[];
  error: string | null;
};

type NotebookMode = "cover" | "opening" | "catalog" | "bio";
type TurnDirection = "forward" | "backward";

export default function PsychicsNotebook({ lang, psychics, error }: Props) {
  const [mode, setMode] = useState<NotebookMode>("cover");
  const [selectedPsychic, setSelectedPsychic] = useState<Psychic | null>(null);
  const [turning, setTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState<TurnDirection>("forward");
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [justOpened, setJustOpened] = useState(false);
  const [physicalTurn, setPhysicalTurn] = useState(false);

  const isEn = lang === "en";

  const t = {
    h1: isEn ? "Psychics" : "Psíquicos",
    p1: isEn
      ? "Catalog synced with the app. Open the notebook and explore."
      : "Catálogo sincronizado con la app. Abre el cuaderno y explora.",
    openNotebook: isEn ? "Open notebook" : "Abrir cuaderno",
    viewProfile: isEn ? "View profile" : "Ver perfil",
    backCatalog: isEn ? "Back to catalog" : "Volver al catálogo",
    download: isEn ? "Download the app" : "Descargar la app",
    howToConsult: isEn ? "How to consult" : "Cómo consultar",
    consultText: isEn
      ? "This profile is informational. To start a consultation, download the app and select"
      : "Este perfil es informativo. Para iniciar una consulta, descarga la app y selecciona a",
    comments: isEn ? "Comments" : "Comentarios",
    commentsText: isEn
      ? "Comments and reviews are visible inside the Luz Psíquica app."
      : "Los comentarios y reseñas son visibles únicamente dentro de la app Luz Psíquica.",
    safeText: isEn
      ? "Luz Psíquica promotes a safe and respectful experience. Communication is managed from the app without sharing personal information."
      : "Luz Psíquica promueve una experiencia segura y respetuosa. La comunicación se gestiona desde la app sin compartir información personal.",
    fallbackAbout: isEn
      ? "Consult from the app with privacy and respect."
      : "Consulta desde la app con privacidad y respeto.",
    empty: isEn ? "No psychics available yet." : "No hay psíquicos disponibles aún.",
    errTitle: isEn ? "Error loading psychics" : "Error cargando psíquicos",
    nextPage: isEn ? "Next page" : "Página siguiente",
    prevPage: isEn ? "Previous page" : "Página anterior",
    biography: isEn ? "Biography" : "Biografía",
  };

  const pageSize = 4;

  const totalSpreads = useMemo(() => {
    return Math.max(1, Math.ceil(psychics.length / pageSize));
  }, [psychics.length]);

  const visiblePsychics = useMemo(() => {
    const start = spreadIndex * pageSize;
    return psychics.slice(start, start + pageSize);
  }, [psychics, spreadIndex]);

  const openCatalog = () => {
    setMode("opening");

    setTimeout(() => {
      setJustOpened(true);
      setMode("catalog");

      setTimeout(() => {
        setJustOpened(false);
      }, 720);
    }, 1100);
  };

  const openBio = (psychic: Psychic) => {
    setTurnDirection("forward");
    setTurning(true);
    setTimeout(() => {
      setSelectedPsychic(psychic);
      setMode("bio");
      setTurning(false);
    }, 620);
  };

  const backToCatalog = () => {
    setTurnDirection("backward");
    setTurning(true);
    setTimeout(() => {
      setMode("catalog");
      setSelectedPsychic(null);
      setTurning(false);
    }, 620);
  };

  const goNextSpread = () => {
    if (spreadIndex >= totalSpreads - 1 || physicalTurn) return;

    setTurnDirection("forward");
    setTurning(true);
    setPhysicalTurn(true);

    setTimeout(() => {
      setSpreadIndex((prev) => Math.min(prev + 1, totalSpreads - 1));
    }, 420);

    setTimeout(() => {
      setPhysicalTurn(false);
      setTurning(false);
    }, 840);
  };

  const goPrevSpread = () => {
    if (spreadIndex <= 0 || physicalTurn) return;

    setTurnDirection("backward");
    setTurning(true);
    setPhysicalTurn(true);

    setTimeout(() => {
      setSpreadIndex((prev) => Math.max(prev - 1, 0));
    }, 420);

    setTimeout(() => {
      setPhysicalTurn(false);
      setTurning(false);
    }, 840);
  };

  const selectedName =
    selectedPsychic?.displayName ||
    selectedPsychic?.psychicName ||
    selectedPsychic?.name ||
    (isEn ? "Psychic" : "Psíquico");

  const selectedPhoto = resolvePhotoSrc(
    (selectedPsychic as any)?.photoUrl ?? (selectedPsychic as any)?.photo ?? null
  );

  const notebookTransform = turning
    ? turnDirection === "forward"
      ? "rotateY(-7deg) rotateZ(-0.35deg) scale(0.986)"
      : "rotateY(7deg) rotateZ(0.35deg) scale(0.986)"
    : "rotateY(0deg) rotateZ(0deg) scale(1)";

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 py-10 text-[#5c2394] sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(244,237,255,0.12), rgba(244,237,255,0.12)), url('/images/home/celesttial-cartas2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1
            className="text-[48px] font-semibold leading-tight md:text-[64px]"
            style={{ fontFamily: "Alexandria, sans-serif" }}
          >
            {t.h1}
          </h1>

          <p
            className="mt-4 max-w-[620px] text-[18px] leading-8 md:text-[22px]"
            style={{
              color: "rgba(92,35,148,0.95)",
              fontFamily: "Alexandria, sans-serif",
            }}
          >
            {t.p1}
          </p>
        </div>

        <div
          className={`relative mx-auto flex min-h-[720px] w-full max-w-[900px] flex-col items-center justify-center transition-all duration-500 [perspective:1900px] ${
            turning ? "scale-[0.985] opacity-95" : "scale-100 opacity-100"
          }`}
        >
          {mode === "cover" && (
            <div className="relative mx-auto max-w-[455px]">
              <NotebookStack compact />

              <div
                className="relative z-10 mx-auto max-w-[430px] rounded-[2rem] border-[10px] border-[#f7efe5]/95 bg-[#f7efe5] shadow-2xl transition-all duration-500"
                style={{
                  transform:
                    turning && turnDirection === "forward"
                      ? "rotateY(-16deg) rotateZ(-0.6deg) scale(0.985)"
                      : "rotateY(0deg) rotateZ(0deg) scale(1)",
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  boxShadow:
                    "0 34px 90px rgba(49,27,146,0.26), 0 12px 28px rgba(0,0,0,0.22)",
                }}
              >
                <div
                  className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden rounded-[1.4rem] bg-cover bg-center p-8 text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(10,8,22,0.10), rgba(10,8,22,0.10)), url('/images/home/hero-girl3.png')",
                  }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/24 via-black/7 to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-white/30 to-transparent" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(255,255,255,0.16) 0 1px, transparent 1px 5px), linear-gradient(120deg, rgba(255,255,255,0.24), transparent 45%, rgba(0,0,0,0.08))",
                    }}
                  />

                  <img
                    src="/images/brand/logo-full.png"
                    alt="Luz Psíquica"
                    className="relative z-10 mb-8 w-56"
                  />

                  <h2 className="relative z-10 text-[42px] font-bold leading-tight text-[#5c2394]">
                    {isEn ? "Psychic Catalog" : "Catálogo de Psíquicos"}
                  </h2>

                  <button
                    type="button"
                    onClick={openCatalog}
                    className="relative z-10 mt-10 rounded-full bg-[#5140b8] px-8 py-3 text-base font-bold text-white shadow-md transition hover:scale-[1.02] hover:bg-[#43309d]"
                  >
                    {t.openNotebook}
                  </button>
                </div>
              </div>
            </div>
          )}

          {mode === "opening" && (
            <div className="relative mx-auto flex h-[640px] w-full max-w-[900px] items-center justify-center [perspective:1800px]">
              <div
                className="absolute left-1/2 top-10 z-20 h-[560px] w-[430px] rounded-[2rem] border-[10px] border-[#f7efe5]/95 bg-[#f7efe5]"
                style={{
                  animation: "lpNotebookOpen 1.1s ease-in-out forwards",
                  transformOrigin: "left center",
                  boxShadow:
                    "0 34px 90px rgba(49,27,146,0.26), 0 12px 28px rgba(0,0,0,0.22)",
                }}
              >
                <div
                  className="h-full w-full rounded-[1.4rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(10,8,22,0.10), rgba(10,8,22,0.10)), url('/images/home/hero-girl3.png')",
                  }}
                />
              </div>
            </div>
          )}      

          {mode === "catalog" && (
            <>
                <NotebookFrame
                  turning={turning}
                  transform={notebookTransform}
                  transformOrigin={turnDirection === "forward" ? "left center" : "right center"}
                  direction={turnDirection}
                  justOpened={justOpened}
                  physicalTurn={physicalTurn}
                >
                <NotebookPage
                  side="left"
                  backgroundImage="linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('/images/psychics/notebook-bg-left.jpg')"
                >
                  <CatalogPage
                    items={visiblePsychics.slice(0, 2)}
                    t={t}
                    onOpenBio={openBio}
                    side="left"
                  />
                </NotebookPage>

                <NotebookPage
                  side="right"
                  backgroundImage="linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url('/images/psychics/notebook-bg-right.jpg')"
                >
                  <CatalogPage
                    items={visiblePsychics.slice(2, 4)}
                    t={t}
                    onOpenBio={openBio}
                    side="right"
                  />
                </NotebookPage>
              </NotebookFrame>

              {psychics.length > pageSize && (
                <div className="mt-5 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={goPrevSpread}
                    disabled={spreadIndex === 0 || turning}
                    className="rounded-full bg-white/70 px-6 py-3 text-sm font-bold text-[#5b3b91] shadow-sm transition hover:bg-white disabled:opacity-40"
                  >
                    {t.prevPage}
                  </button>

                  <div className="rounded-full bg-white/60 px-5 py-3 text-sm font-bold text-[#5b3b91] shadow-sm">
                    {spreadIndex + 1} / {totalSpreads}
                  </div>

                  <button
                    type="button"
                    onClick={goNextSpread}
                    disabled={spreadIndex >= totalSpreads - 1 || turning}
                    className="rounded-full bg-white/70 px-6 py-3 text-sm font-bold text-[#5b3b91] shadow-sm transition hover:bg-white disabled:opacity-40"
                  >
                    {t.nextPage}
                  </button>
                </div>
              )}
            </>
          )}

          {mode === "bio" && selectedPsychic && (
              <NotebookFrame
                turning={turning}
                transform={notebookTransform}
                transformOrigin={turnDirection === "forward" ? "left center" : "right center"}
                direction={turnDirection}
                justOpened={false}
                physicalTurn={false}
              >
              <NotebookPage
                side="left"
                backgroundImage={
                  selectedPhoto
                    ? `linear-gradient(rgba(255,255,255,0.80), rgba(255,255,255,0.80)), url('${selectedPhoto}')`
                    : "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88))"
                }
              >
                <div className="relative z-10 rounded-3xl bg-[#eee7fb]/92 p-4 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Avatar photo={selectedPhoto} name={selectedName} />
                    <div>
                      <h2 className="text-xl font-bold leading-tight text-[#5c2394]">
                        {selectedName}
                      </h2>
                      <p className="mt-1 text-[13px] italic leading-5 text-[#5f5273]">
                        {(selectedPsychic as any)?.about || t.fallbackAbout}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-5 max-h-[390px] overflow-y-auto rounded-3xl bg-[#eee7fb]/92 p-4 shadow-md backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-[#3f2a69]">{t.biography}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#5f5273]">
                    {(selectedPsychic as any)?.bio ||
                      (selectedPsychic as any)?.about ||
                      t.fallbackAbout}
                  </p>
                </div>
              </NotebookPage>

              <NotebookPage
                side="right"
                backgroundImage={
                  selectedPhoto
                    ? `linear-gradient(rgba(255,255,255,0.80), rgba(255,255,255,0.80)), url('${selectedPhoto}')`
                    : "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88))"
                }
              >
                <div className="relative z-10 rounded-3xl bg-[#eee7fb]/92 p-5 shadow-md backdrop-blur-sm">
                  <h3 className="text-xl font-bold leading-tight text-[#5c2394]">
                    {t.howToConsult}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#5f5273]">
                    {t.consultText} <strong>{selectedName}</strong>.
                  </p>

                  <Link
                    href={`/${lang}/download`}
                    className="mt-5 block rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#5b3b91] transition hover:bg-white/90"
                  >
                    {t.download}
                  </Link>

                  <button
                    type="button"
                    onClick={backToCatalog}
                    className="mt-3 w-full rounded-full bg-white/70 px-6 py-3 text-center text-sm font-bold text-[#5b3b91] transition hover:bg-white"
                  >
                    {t.backCatalog}
                  </button>

                  <div className="mt-6 rounded-2xl bg-white/72 p-4 text-[13px] leading-6 text-[#5f5273]">
                    {t.safeText}
                  </div>
                </div>

                <div className="relative z-10 mt-5 max-h-[130px] overflow-y-auto rounded-3xl bg-[#eee7fb]/92 p-4 shadow-md backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-[#3f2a69]">{t.comments}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#5f5273]">
                    {t.commentsText}
                  </p>
                </div>
              </NotebookPage>
            </NotebookFrame>
          )}

          {error && (
            <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
              <p className="font-bold">{t.errTitle}</p>
              <p>{error}</p>
            </div>
          )}

          {!error && psychics.length === 0 && (
            <div className="mt-6 rounded-2xl bg-white/70 p-4 text-sm">
              {t.empty}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function NotebookFrame({
  children,
  turning,
  transform,
  transformOrigin,
  direction,
  justOpened = false,
  physicalTurn = false,
}: {
  children: React.ReactNode;
  turning: boolean;
  transform: string;
  transformOrigin: string;
  direction: TurnDirection;
  justOpened?: boolean;
  physicalTurn?: boolean;
}) {
  return (
    <div className="relative">
      <NotebookStack />
      <PaperEdges />

        <div
          className={`relative z-10 grid gap-0 overflow-hidden rounded-[2rem] bg-[#f7efe5]/95 p-4 shadow-2xl transition-all duration-500 lg:grid-cols-2 ${
            justOpened ? "lp-notebook-spread-enter" : ""
          }`}
          style={{
            transform,
            transformStyle: "preserve-3d",
            transformOrigin,
            boxShadow:
              "0 34px 100px rgba(49,27,146,0.27), 0 16px 38px rgba(0,0,0,0.24)",
          }}
        >
        <div className="pointer-events-none absolute inset-0 z-[2] rounded-[2rem] border border-white/55" />

        <div
          className="pointer-events-none absolute left-1/2 top-4 z-30 hidden h-[calc(100%-2rem)] w-[46px] -translate-x-1/2 rounded-full lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(255,255,255,0.18) 18%, rgba(125,96,160,0.22) 38%, rgba(255,255,255,0.46) 50%, rgba(125,96,160,0.20) 62%, rgba(255,255,255,0.16) 82%, rgba(0,0,0,0.24) 100%)",
            boxShadow:
              "inset 14px 0 22px rgba(63,42,105,0.22), inset -14px 0 22px rgba(63,42,105,0.20), 0 0 16px rgba(0,0,0,0.18)",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-5 z-40 hidden h-[calc(100%-2.5rem)] w-[1px] -translate-x-1/2 bg-white/45 lg:block" />

        <NotebookStaples />

        <div className="pointer-events-none absolute inset-x-5 top-5 z-20 hidden h-8 rounded-full bg-gradient-to-b from-white/45 to-transparent opacity-70 lg:block" />

        <div className="pointer-events-none absolute bottom-3 left-8 right-8 z-20 hidden h-5 rounded-full bg-black/10 blur-md lg:block" />

        <PageTurnOverlay turning={turning && !physicalTurn} direction={direction} />

        <PhysicalPageTurn turning={physicalTurn} direction={direction} />

        {children}
      </div>
    </div>
  );
}

function NotebookPage({
  children,
  side,
  backgroundImage,
}: {
  children: React.ReactNode;
  side: "left" | "right";
  backgroundImage: string;
}) {
  return (
    <div
      className={`relative h-[600px] overflow-hidden bg-cover bg-center p-5 shadow-inner ${
        side === "left" ? "rounded-l-[1.5rem]" : "rounded-r-[1.5rem]"
      }`}
      style={{
        backgroundImage,
        transform:
          side === "left"
            ? "perspective(1300px) rotateY(1.2deg)"
            : "perspective(1300px) rotateY(-1.2deg)",
        transformOrigin: side === "left" ? "right center" : "left center",
        boxShadow:
          side === "left"
            ? "inset -46px 0 56px rgba(63,42,105,0.16), inset 12px 0 24px rgba(255,255,255,0.52), inset 0 -18px 20px rgba(66,43,22,0.06)"
            : "inset 46px 0 56px rgba(63,42,105,0.16), inset -12px 0 24px rgba(255,255,255,0.52), inset 0 -18px 20px rgba(66,43,22,0.06)",
      }}
    >
      <PaperTexture />
      <PageMargin side={side} />
      <PageCurl side={side} />
      <PageFoldCorner side={side} />
      {children}
    </div>
  );
}

function NotebookStack({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute rounded-[2rem] bg-[#e8ddcb] ${
          compact ? "inset-x-5 -bottom-3 top-5" : "inset-x-4 -bottom-4 top-4"
        }`}
        style={{
          boxShadow: "0 18px 35px rgba(0,0,0,0.14)",
        }}
      />

      <div
        className={`pointer-events-none absolute rounded-[2rem] bg-[#f2eadb] ${
          compact ? "inset-x-3 -bottom-2 top-3" : "inset-x-2 -bottom-3 top-2"
        }`}
      />

      <div
        className={`pointer-events-none absolute rounded-[2rem] border border-[#d7c9b4]/70 bg-[#fff8ea] ${
          compact ? "inset-x-1 -bottom-1 top-1" : "inset-x-0 -bottom-2 top-0"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(130,94,55,0.11) 0 1px, transparent 1px 5px)",
        }}
      />
    </>
  );
}

function PaperEdges() {
  return (
    <>
      <div
        className="pointer-events-none absolute -bottom-[10px] left-8 right-8 z-[9] h-[28px] rounded-b-[2rem]"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,250,239,0.95) 0 2px, rgba(210,198,178,0.70) 2px 3px, rgba(255,250,239,0.95) 3px 5px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-[9px] bottom-8 top-8 z-[9] w-[24px] rounded-r-[2rem]"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,250,239,0.96) 0 2px, rgba(210,198,178,0.68) 2px 3px, rgba(255,250,239,0.96) 3px 5px)",
          boxShadow: "10px 0 18px rgba(0,0,0,0.12)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-[5px] bottom-10 top-10 z-[9] w-[12px] rounded-l-[2rem]"
        style={{
          background:
            "linear-gradient(90deg, rgba(210,198,178,0.55), rgba(255,250,239,0.75))",
        }}
      />
    </>
  );
}

function NotebookStaples() {
  const staples = [18, 34, 50, 66, 82];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-50 hidden h-full -translate-x-1/2 lg:block">
      {staples.map((top) => (
        <div
          key={top}
          className="absolute h-[20px] w-[8px] -translate-x-1/2 rounded-full border border-[#cfc3dc]/80 bg-[#f8f4ff]/45"
          style={{
            top: `${top}%`,
            left: "50%",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.85), inset 0 -2px 3px rgba(80,58,100,0.14), 0 1px 3px rgba(0,0,0,0.10)",
          }}
        />
      ))}
    </div>
  );
}

function PageMargin({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div
        className={`pointer-events-none absolute top-0 z-[2] h-full w-14 ${
          side === "left" ? "right-0" : "left-0"
        }`}
        style={{
          background:
            side === "left"
              ? "linear-gradient(90deg, transparent 0%, rgba(63,42,105,0.10) 48%, rgba(0,0,0,0.16) 100%)"
              : "linear-gradient(270deg, transparent 0%, rgba(63,42,105,0.10) 48%, rgba(0,0,0,0.16) 100%)",
        }}
      />

      <div
        className={`pointer-events-none absolute top-8 z-[2] h-[calc(100%-4rem)] w-[1px] bg-[#7E57C2]/10 ${
          side === "left" ? "left-8" : "right-8"
        }`}
      />
    </>
  );
}

function PageCurl({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 z-[3] h-28 w-28 opacity-55 ${
        side === "left" ? "right-0" : "left-0"
      }`}
      style={{
        background:
          side === "left"
            ? "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.12), transparent 58%)"
            : "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.12), transparent 58%)",
      }}
    />
  );
}

function PageFoldCorner({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 z-[4] h-16 w-16 opacity-55 ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        background:
          side === "left"
            ? "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 38%, rgba(180,160,205,0.18) 39%, transparent 41%)"
            : "linear-gradient(225deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 38%, rgba(180,160,205,0.18) 39%, transparent 41%)",
        filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.10))",
      }}
    />
  );
}

function PaperTexture() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] rounded-[1.5rem] opacity-46"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.48) 0 1px, transparent 1px), radial-gradient(circle at 76% 64%, rgba(92,35,148,0.055) 0 1px, transparent 1px), repeating-linear-gradient(0deg, rgba(92,35,148,0.022) 0 1px, transparent 1px 30px), linear-gradient(115deg, rgba(255,255,255,0.22), transparent 48%, rgba(92,35,148,0.055))",
        backgroundSize: "20px 20px, 24px 24px, 100% 30px, cover",
      }}
    />
  );
}

function PageTurnOverlay({
  turning,
  direction,
}: {
  turning: boolean;
  direction: TurnDirection;
}) {
  if (!turning) return null;

  return (
    <>
      <div
        className="pointer-events-none absolute inset-y-4 z-35 hidden w-1/2 rounded-[1.5rem] lg:block"
        style={{
          left: direction === "forward" ? "0%" : "50%",
          background:
            direction === "forward"
              ? "linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.13), rgba(0,0,0,0.04))"
              : "linear-gradient(270deg, rgba(0,0,0,0.03), rgba(0,0,0,0.13), rgba(0,0,0,0.04))",
          filter: "blur(2px)",
          opacity: 0.55,
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-4 z-40 hidden w-1/2 overflow-hidden rounded-[1.5rem] bg-[#fffaf0]/88 shadow-2xl backdrop-blur-[1px] lg:block"
        style={{
          left: direction === "forward" ? "50%" : "0%",
          transform:
            direction === "forward"
              ? "perspective(1400px) rotateY(-86deg) rotateZ(-0.5deg) skewY(-2.2deg)"
              : "perspective(1400px) rotateY(86deg) rotateZ(0.5deg) skewY(2.2deg)",
          transformOrigin: direction === "forward" ? "left center" : "right center",
          transition:
            "transform 620ms cubic-bezier(0.22, 0.72, 0.22, 1), opacity 620ms ease",
          backgroundImage:
            direction === "forward"
              ? "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,250,240,0.88) 34%, rgba(235,224,248,0.58) 68%, rgba(0,0,0,0.16) 100%)"
              : "linear-gradient(270deg, rgba(255,255,255,0.98) 0%, rgba(255,250,240,0.88) 34%, rgba(235,224,248,0.58) 68%, rgba(0,0,0,0.16) 100%)",
          boxShadow:
            direction === "forward"
              ? "-28px 0 34px rgba(0,0,0,0.20), inset 24px 0 26px rgba(255,255,255,0.72), inset -18px 0 22px rgba(63,42,105,0.10)"
              : "28px 0 34px rgba(0,0,0,0.20), inset -24px 0 26px rgba(255,255,255,0.72), inset 18px 0 22px rgba(63,42,105,0.10)",
        }}
      >
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(92,35,148,0.025) 0 1px, transparent 1px 28px), radial-gradient(circle at 20% 25%, rgba(255,255,255,0.55) 0 1px, transparent 1px)",
            backgroundSize: "100% 28px, 18px 18px",
          }}
        />

        <div
          className="absolute bottom-0 h-28 w-28 opacity-45"
          style={{
            right: direction === "forward" ? "0" : "auto",
            left: direction === "backward" ? "0" : "auto",
            background:
              direction === "forward"
                ? "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.16), transparent 60%)"
                : "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.16), transparent 60%)",
          }}
        />
      </div>
    </>
  );
}

function PhysicalPageTurn({
  turning,
  direction,
}: {
  turning: boolean;
  direction: TurnDirection;
}) {
  if (!turning) return null;

  return (
    <div
      className="pointer-events-none absolute inset-y-4 z-[70] hidden w-1/2 overflow-hidden rounded-[1.5rem] lg:block"
      style={{
        left: direction === "forward" ? "50%" : "0%",
        transformOrigin: direction === "forward" ? "left center" : "right center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        animation:
          direction === "forward"
            ? "lpRealPageForward 840ms cubic-bezier(0.22, 0.72, 0.22, 1) forwards"
            : "lpRealPageBackward 840ms cubic-bezier(0.22, 0.72, 0.22, 1) forwards",
        background:
          "linear-gradient(115deg, rgba(255,255,255,0.98), rgba(250,244,255,0.90), rgba(229,215,248,0.72))",
        boxShadow:
          direction === "forward"
            ? "-34px 0 42px rgba(0,0,0,0.24), inset 24px 0 26px rgba(255,255,255,0.78), inset -20px 0 28px rgba(63,42,105,0.16)"
            : "34px 0 42px rgba(0,0,0,0.24), inset -24px 0 26px rgba(255,255,255,0.78), inset 20px 0 28px rgba(63,42,105,0.16)",
      }}
    >
      <PaperTexture />

      <div
        className="absolute inset-y-0 w-8 opacity-70"
        style={{
          left: direction === "forward" ? "0" : "auto",
          right: direction === "backward" ? "0" : "auto",
          background:
            direction === "forward"
              ? "linear-gradient(90deg, rgba(0,0,0,0.20), transparent)"
              : "linear-gradient(270deg, rgba(0,0,0,0.20), transparent)",
        }}
      />

      <div
        className="absolute bottom-0 h-32 w-32 opacity-50"
        style={{
          right: direction === "forward" ? "0" : "auto",
          left: direction === "backward" ? "0" : "auto",
          background:
            direction === "forward"
              ? "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.18), transparent 62%)"
              : "radial-gradient(circle at 0% 100%, rgba(0,0,0,0.18), transparent 62%)",
        }}
      />
    </div>
  );
}

function CatalogPage({
  items,
  t,
  onOpenBio,
  side,
}: {
  items: Psychic[];
  t: any;
  onOpenBio: (p: Psychic) => void;
  side: "left" | "right";
}) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center gap-6">
      {items.map((p) => {
        const name = p.displayName || p.psychicName || p.name || "Psíquico";
        const photo = resolvePhotoSrc((p as any)?.photoUrl ?? (p as any)?.photo ?? null);

        return (
          <div
            key={p.slug || name}
            className="rounded-3xl bg-[#eee7fb]/92 p-4 backdrop-blur-sm transition hover:-translate-y-1"
            style={{
              boxShadow:
                side === "left"
                  ? "10px 10px 18px rgba(63,42,105,0.13), -4px -4px 12px rgba(255,255,255,0.45), inset -10px 0 18px rgba(255,255,255,0.22)"
                  : "-10px 10px 18px rgba(63,42,105,0.13), 4px -4px 12px rgba(255,255,255,0.45), inset 10px 0 18px rgba(255,255,255,0.22)",
            }}
          >
            <div className="flex items-start gap-3">
              <Avatar photo={photo} name={name} />

              <div>
                <h3 className="text-sm font-bold text-[#5c2394]">{name}</h3>

                <p className="mt-2 text-[13px] italic leading-5 text-[#5f5273]">
                  “{(p as any)?.about || t.fallbackAbout}”
                </p>

                <button
                  type="button"
                  onClick={() => onOpenBio(p)}
                  className="mt-3 text-[13px] font-bold text-[#5b3b91] underline underline-offset-4"
                >
                  {t.viewProfile}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Avatar({ photo, name }: { photo: string | null; name: string }) {
  return (
    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#7E57C2] bg-white">
      {photo ? (
        <img src={photo} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs font-bold text-[#5c2394]">
          LP
        </div>
      )}
    </div>
  );
}