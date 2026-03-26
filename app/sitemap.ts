// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luzpsiquica.com";
  const lastModified = new Date();

  const staticPaths = [
    { path: "", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/es", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/en", priority: 1.0, changeFrequency: "weekly" as const },

    { path: "/es/psychics", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/en/psychics", priority: 0.9, changeFrequency: "weekly" as const },

    { path: "/es/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/en/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },

    { path: "/es/legal", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/legal", priority: 0.7, changeFrequency: "monthly" as const },

    { path: "/es/legal/account-deletion", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/legal/account-deletion", priority: 0.7, changeFrequency: "monthly" as const },

    { path: "/es/download", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/en/download", priority: 0.9, changeFrequency: "weekly" as const },

    // Inclúyelas solo si estas rutas sí existen físicamente
    { path: "/es/legal/normas-y-privacidad", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/legal/normas-y-privacidad", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/es/legal/documento-operativo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/en/legal/documento-operativo", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const psychicSlugs = [
    "ligia",
    "aurora",
    "frida",
    "isaac",
    "celeste",
    "naim",
    "luna",
    "iveth",
    "crystal",
    "saturnia",
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );

  const psychicUrls: MetadataRoute.Sitemap = psychicSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/es/psychics/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/psychics/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]);

  return [...staticUrls, ...psychicUrls];
}