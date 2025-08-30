import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400; // re-generate once per day during build/ISR

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://korbinhillan.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://korbinhillan.com/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://korbinhillan.com/resume",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://korbinhillan.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
