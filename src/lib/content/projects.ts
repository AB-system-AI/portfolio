import type { Project } from "./types";

/**
 * Add your projects here. Each entry must satisfy the Project interface.
 *
 * @example
 * {
 *   slug: "my-project",
 *   title: "My Project",
 *   shortDescription: "One-line summary for cards.",
 *   fullDescription: "Detailed case study introduction.",
 *   technologies: ["Next.js", "TypeScript"],
 *   category: "web-app",
 *   featured: true,
 *   images: [{ src: "/projects/my-project/cover.jpg", alt: "My Project cover" }],
 *   github: "https://github.com/you/my-project",
 *   liveDemo: "https://my-project.vercel.app",
 *   year: 2025,
 *   client: "Client Name",
 *   challenges: ["Challenge one"],
 *   solutions: ["Solution one"],
 *   results: ["Result one"],
 * }
 */
export const projects: Project[] = [];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}
