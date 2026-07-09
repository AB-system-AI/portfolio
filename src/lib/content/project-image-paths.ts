import { PROJECT_IMAGE_FILES } from "@/lib/content/project-image-files";

export function getProjectImageCandidates(slug: string): string[] {
  return PROJECT_IMAGE_FILES.map((file) => `/projects/${slug}/${file}`);
}

export function getProjectCoverPath(slug: string): string {
  return `/projects/${slug}/cover.webp`;
}
