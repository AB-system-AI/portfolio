"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Hammer, Star } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content/projects";
import {
  formatProjectCategory,
  getProjectReadingTime,
  getProjectTimeline,
} from "@/lib/content/project-utils";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";

export function FeaturedProjectsCarousel() {
  const projects = getFeaturedProjects();
  const prefersReducedMotion = useReducedMotion();

  if (projects.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Featured
              </span>
              <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-none sm:-mx-6 sm:px-6">
          {projects.map((project, index) => {
            const timeline = getProjectTimeline(project);
            const isBuilding = project.status === "in-development";

            return (
            <ScrollReveal
              key={project.slug}
              delay={index * 0.08}
              className="w-[min(88vw,420px)] shrink-0 snap-center sm:w-[380px]"
            >
              <PremiumCard className="overflow-hidden">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="overflow-hidden">
                    <ProjectVisual project={project} index={index} parallax />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-full text-[10px]">
                        {formatProjectCategory(project.category)}
                      </Badge>
                      {isBuilding && (
                        <Badge variant="outline" className="rounded-full text-[10px]">
                          <Hammer className="mr-1 size-3" />
                          Currently Building
                        </Badge>
                      )}
                      <Badge variant="outline" className="rounded-full text-[10px]">
                        <Star className="mr-1 size-3" />
                        Featured
                      </Badge>
                      {timeline && (
                        <span className="text-[10px] text-muted-foreground">
                          {timeline}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="size-3" />
                        {getProjectReadingTime(project)} min read
                      </span>
                    </div>
                    <h3 className="font-heading mt-4 text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                    <motion.span
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium"
                      whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                      transition={springSoft}
                    >
                      Read case study
                      <ArrowRight className="size-3.5" />
                    </motion.span>
                  </div>
                </Link>
              </PremiumCard>
            </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-4 flex justify-center gap-2 text-xs text-muted-foreground sm:hidden">
          <ArrowLeft className="size-3.5" />
          Swipe to explore
          <ArrowRight className="size-3.5" />
        </div>
      </div>
    </section>
  );
}
