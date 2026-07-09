"use client";

import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { ProjectCard } from "./project-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useLocale } from "@/components/providers/locale-provider";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  const { ui } = useLocale();

  if (projects.length === 0) return null;

  return (
    <section className="mt-20 border-t border-border/50 pt-16">
      <ScrollReveal>
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {ui.projects.related}
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {ui.projects.viewAll}
          </Link>
        </div>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} compact />
        ))}
      </div>
    </section>
  );
}
