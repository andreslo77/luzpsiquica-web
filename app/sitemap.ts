// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luzpsiquica.com";
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/es",
    "/en",
    "/es/psychics",
    "/en/psychics",
    "/es/how-it-works",
    "/en/how-it-works",
    "/es/legal",
    "/en/legal",
    "/es/legal/account-deletion",
    "/en/legal/account-deletion",
    "/es/download",
    "/en/download",
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
    // agrega aquí los próximos slugs
    // "frida",
    // "juan",
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" || path === "/es" || path === "/en" ? 1 : 0.8,
  }));

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