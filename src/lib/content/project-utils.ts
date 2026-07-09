import type { Project } from "./types";
import { getAllProjects } from "./projects";
import { getAllServices } from "./services";
import { getAllSkills } from "./skills";

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

export function formatProjectCategory(category: Project["category"]): string {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getProjectReadingTime(project: Project): number {
  const text = [
    project.title,
    project.shortDescription,
    project.fullDescription,
    ...project.features,
    ...project.challenges,
    ...project.solutions,
    ...project.results,
  ].join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}

export function getProjectCaseStudyContent(project: Project) {
  return {
    businessProblem:
      project.businessProblem ??
      project.challenges[0] ??
      "Addressing operational gaps through a focused software solution.",
    architecture:
      project.architecture ??
      `A modular ${formatProjectCategory(project.category).toLowerCase()} architecture using ${project.technologies.slice(0, 4).join(", ")}, designed for maintainability, performance, and clear separation between UI, business logic, and data layers.`,
    developmentProcess:
      project.developmentProcess ??
      project.solutions,
  };
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return getAllProjects()
    .filter(
      (item) =>
        item.slug !== project.slug &&
        (item.category === project.category || item.featured)
    )
    .slice(0, limit);
}

export function getPortfolioStats() {
  const projects = getAllProjects();
  const services = getAllServices();
  const skillCount = getAllSkills().reduce(
    (total, group) => total + group.items.length,
    0
  );

  return [
    { value: String(projects.length), label: "Projects Delivered" },
    { value: String(services.length), label: "Service Areas" },
    { value: `${skillCount}+`, label: "Technologies" },
    { value: String(projects.filter((p) => p.featured).length), label: "Featured Builds" },
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
