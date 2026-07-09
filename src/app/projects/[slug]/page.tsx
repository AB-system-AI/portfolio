import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/content/projects";
import { enrichProject } from "@/lib/project-images.server";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectDetail } from "@/components/projects/project-detail";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata("Project Not Found", "The requested project could not be found.", `/projects/${slug}`);
  }

  return createPageMetadata(
    project.title,
    project.shortDescription,
    `/projects/${project.slug}`
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={enrichProject(project)} />;
}
