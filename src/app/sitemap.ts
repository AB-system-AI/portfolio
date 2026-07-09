import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/data";
import { getAllProjectSlugs } from "@/lib/content/projects";
import { siteBuildDate, siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navLinks.map((link) => ({
      url: `${siteUrl}${link.href === "/" ? "" : link.href}`,
      lastModified: siteBuildDate,
      changeFrequency: link.href === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: link.href === "/" ? 1 : 0.8,
  }));

  const projectPages = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: siteBuildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
