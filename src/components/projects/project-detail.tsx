"use client";

import type { Project } from "@/lib/content/types";
import { ProjectDetail as StandardProjectDetail } from "./project-detail-standard";
import { FlagshipProjectShowcase } from "./flagship-project-showcase";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  if (project.showcase) {
    return <FlagshipProjectShowcase project={project} />;
  }

  return <StandardProjectDetail project={project} />;
}
