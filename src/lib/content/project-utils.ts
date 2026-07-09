import type { Project } from "@/lib/content/types";

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
