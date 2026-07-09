import fs from "node:fs";
import path from "node:path";
import type { Project, ProjectImage } from "./content/types";
import { PROJECT_IMAGE_FILES } from "./content/project-image-files";

export { PROJECT_IMAGE_FILES };

export function discoverProjectImages(
  slug: string,
  title: string
): ProjectImage[] {
  const projectDir = path.join(process.cwd(), "public", "projects", slug);

  if (!fs.existsSync(projectDir)) {
    return [];
  }

  return PROJECT_IMAGE_FILES.flatMap((file, index) => {
    const fullPath = path.join(projectDir, file);

    if (!fs.existsSync(fullPath)) {
      return [];
    }

    return [
      {
        src: `/projects/${slug}/${file}`,
        alt:
          file === "cover.webp"
            ? `${title} cover image`
            : `${title} screenshot ${index}`,
      },
    ];
  });
}

export function enrichProject(project: Project): Project {
  const discovered = discoverProjectImages(project.slug, project.title);

  return {
    ...project,
    images: project.images.length > 0 ? project.images : discovered,
  };
}

export function enrichProjects(projectList: Project[]): Project[] {
  return projectList.map((project) => enrichProject(project));
}
