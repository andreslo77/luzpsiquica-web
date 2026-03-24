// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luzpsiquica.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es/psychics`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/psychics`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es/how-it-works`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/how-it-works`,
      lastModified: new Date(),
    },
  ];
}