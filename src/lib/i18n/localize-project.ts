import type { Project } from "@/lib/content/types";
import type { Locale } from "./config";
import { projectTranslationsAr } from "./content/ar/projects";

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;
  const overlay = projectTranslationsAr[project.slug];
  return overlay ? { ...project, ...overlay } : project;
}

export function localizeProjects(projects: Project[], locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale));
}
