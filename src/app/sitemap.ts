import type { MetadataRoute } from "next";
import { models } from "@/data/models";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...models.map((m) => ({ url: `${site.url}/modeller/${m.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
