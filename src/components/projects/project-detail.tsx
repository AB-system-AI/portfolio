"use client";

import dynamic from "next/dynamic";
import type { Project } from "@/lib/content/types";
import { ProjectDetail as StandardProjectDetail } from "./project-detail-standard";

const FlagshipProjectShowcase = dynamic(
  () =>
    import("./flagship-project-showcase").then((module) => ({
      default: module.FlagshipProjectShowcase,
    })),
  { ssr: true }
);

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  if (project.showcase) {
    return <FlagshipProjectShowcase project={project} />;
  }

  return <StandardProjectDetail project={project} />;
}
