import type { Project } from "./types";
import type { Locale } from "../i18n/config";
import { getUi } from "../i18n/ui";
import { localizeProject } from "../i18n/localize-project";
import { getAllProjects } from "./projects";
import { siteConfig } from "./site";

export const DEFAULT_PROJECT_VISUALS = [
  { gradient: "from-zinc-900 via-zinc-800 to-zinc-950", accent: "#fafafa" },
  { gradient: "from-neutral-100 via-neutral-200 to-neutral-300", accent: "#171717" },
  { gradient: "from-zinc-800 via-zinc-700 to-zinc-900", accent: "#e4e4e7" },
  { gradient: "from-neutral-50 via-white to-neutral-100", accent: "#0a0a0a" },
  { gradient: "from-zinc-950 via-black to-zinc-900", accent: "#ffffff" },
  { gradient: "from-neutral-200 via-neutral-100 to-zinc-200", accent: "#18181b" },
] as const;

export function getProjectVisual(project: Project, index = 0) {
  const fallback =
    DEFAULT_PROJECT_VISUALS[index % DEFAULT_PROJECT_VISUALS.length];

  return {
    gradient: project.gradient ?? fallback.gradient,
    accent: project.accent ?? fallback.accent,
  };
}

export function formatProjectCategory(
  category: Project["category"],
  locale: Locale = "en"
): string {
  const ui = getUi(locale);
  return ui.categories[category] ?? category;
}

export function getProjectReadingTime(project: Project): number {
  const text = [
    project.title,
    project.shortDescription,
    project.fullDescription,
    project.problem,
    project.businessProblem,
    project.architecture,
    ...project.features,
    ...project.challenges,
    ...project.solutions,
    ...project.results,
  ].join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}

export function getProjectTimeline(
  project: Project,
  locale: Locale = "en"
): string | undefined {
  if (project.timeline) return project.timeline;
  if (project.endYear) return `${project.year} — ${project.endYear}`;
  if (project.status === "in-development") {
    const present = locale === "ar" ? "حتى الآن" : "Present";
    return `${project.year} — ${present}`;
  }
  return String(project.year);
}

export function getProjectCaseStudyContent(project: Project, locale: Locale = "en") {
  const fallback =
    locale === "ar"
      ? "معالجة فجوات تشغيلية من خلال حل برمجي مركّز."
      : "Addressing operational gaps through a focused software solution.";

  return {
    problem:
      project.problem ??
      project.businessProblem ??
      project.challenges[0] ??
      fallback,
    businessProblem:
      project.businessProblem ??
      project.problem ??
      project.challenges[0] ??
      fallback,
    architecture:
      project.architecture ??
      (locale === "ar"
        ? `بنية ${formatProjectCategory(project.category, locale).toLowerCase()} وحدات باستخدام ${project.technologies.slice(0, 4).join("، ")}، مصممة للصيانة والأداء وفصل واضح بين الواجهة ومنطق الأعمال وطبقة البيانات.`
        : `A modular ${formatProjectCategory(project.category, locale).toLowerCase()} architecture using ${project.technologies.slice(0, 4).join(", ")}, designed for maintainability, performance, and clear separation between UI, business logic, and data layers.`),
    developmentProcess:
      project.developmentProcess ??
      project.solutions,
  };
}

export function getRelatedProjects(
  project: Project,
  limit = 3,
  locale: Locale = "en"
): Project[] {
  return getAllProjects()
    .map((item) => localizeProject(item, locale))
    .filter(
      (item) =>
        item.slug !== project.slug &&
        (item.category === project.category || item.featured)
    )
    .slice(0, limit);
}

export function getAdjacentProjects(
  project: Project,
  locale: Locale = "en"
): { previous?: Project; next?: Project } {
  const ordered = getAllProjects()
    .map((item) => localizeProject(item, locale))
    .sort((a, b) => {
      const orderA = a.featuredOrder ?? 999;
      const orderB = b.featuredOrder ?? 999;
      if (orderA !== orderB) return orderA - orderB;
      return b.year - a.year;
    });

  const index = ordered.findIndex((item) => item.slug === project.slug);
  if (index === -1) return {};

  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}

export interface EnterpriseCaseStudySection {
  id: string;
  label: string;
}

export function getEnterpriseCaseStudySections(
  project: Project,
  locale: Locale = "en"
): EnterpriseCaseStudySection[] {
  const ui = getUi(locale);
  const sections: EnterpriseCaseStudySection[] = [
    { id: "overview", label: ui.projects.overview },
    { id: "problem", label: ui.projects.problem },
  ];

  if (project.research?.length) {
    sections.push({ id: "research", label: ui.projects.research });
  }

  sections.push(
    { id: "architecture", label: ui.projects.architecture },
    { id: "implementation", label: ui.projects.implementation },
    { id: "features", label: ui.projects.features },
    { id: "technologies", label: ui.projects.technologies },
    { id: "challenges", label: ui.projects.challenges },
    { id: "solutions", label: ui.projects.solution }
  );

  const impact = project.businessValue ?? project.results;
  if (impact.length > 0) {
    sections.push({ id: "business-impact", label: ui.projects.businessImpact });
  }

  if (project.lessonsLearned?.length) {
    sections.push({ id: "lessons-learned", label: ui.projects.lessonsLearned });
  }

  if (project.futureImprovements?.length) {
    sections.push({
      id: "future-improvements",
      label: ui.projects.futureImprovements,
    });
  }

  if (getProjectTimeline(project, locale)) {
    sections.push({ id: "timeline", label: ui.projects.timeline });
  }

  sections.push(
    { id: "gallery", label: ui.projects.gallery },
    { id: "links", label: ui.projects.links }
  );

  return sections;
}

export function getPortfolioProjectCounters() {
  const projects = getAllProjects();
  const currentYear = new Date().getFullYear();
  const yearsLearning = Math.max(
    1,
    currentYear - siteConfig.learningSince + 1
  );

  return {
    projectsCompleted: projects.filter(
      (project) => project.status !== "in-development"
    ).length,
    businessSystems: projects.filter(
      (project) => project.segment === "business-system"
    ).length,
    commercialWebsites: projects.filter(
      (project) => project.segment === "commercial-website"
    ).length,
    enterprisePlatforms: projects.filter(
      (project) => project.segment === "enterprise-platform"
    ).length,
    yearsLearning,
  };
}

export function getPortfolioStats(locale: Locale = "en") {
  const counters = getPortfolioProjectCounters();
  const ui = getUi(locale);

  return [
    { value: String(counters.projectsCompleted), label: ui.stats.projectsCompleted },
    { value: String(counters.businessSystems), label: ui.stats.businessSystems },
    { value: String(counters.commercialWebsites), label: ui.stats.commercialWebsites },
    { value: String(counters.enterprisePlatforms), label: ui.stats.enterprisePlatforms },
    { value: String(counters.yearsLearning), label: ui.stats.yearsLearning },
  ];
}

export type ProjectSortOption = "newest" | "oldest" | "title";

export function sortProjects(
  items: Project[],
  sort: ProjectSortOption
): Project[] {
  const sorted = [...items];

  switch (sort) {
    case "oldest":
      return sorted.sort((a, b) => a.year - b.year);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "newest":
    default:
      return sorted.sort((a, b) => b.year - a.year);
  }
}
