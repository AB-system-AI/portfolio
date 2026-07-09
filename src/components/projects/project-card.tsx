"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { formatProjectCategory } from "@/lib/content/project-utils";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "./project-visual";
import { ProjectLinks } from "./project-links";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className="glass-card group overflow-hidden rounded-2xl transition-[transform,box-shadow,border-color] duration-500 hover:border-border hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20"
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <ProjectVisual project={project} index={index} />
        </Link>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full text-xs font-normal">
              {formatProjectCategory(project.category)}
            </Badge>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <Link href={`/projects/${project.slug}`} className="group/title">
            <h3 className="font-heading mt-3 text-xl font-semibold tracking-tight transition-colors group-hover/title:text-muted-foreground">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ProjectLinks project={project} />
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Case study
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}
