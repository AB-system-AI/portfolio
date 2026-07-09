"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Hammer, Pin, Star } from "lucide-react";
import type { Project } from "@/lib/content/types";
import {
  formatProjectCategory,
  getProjectReadingTime,
  getProjectTimeline,
} from "@/lib/content/project-utils";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PremiumCard } from "@/components/animations/premium-card";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "./project-visual";
import { ProjectLinks } from "./project-links";
import { useLocale } from "@/components/providers/locale-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { locale, ui } = useLocale();
  const readingTime = getProjectReadingTime(project);
  const timeline = getProjectTimeline(project, locale);
  const isBuilding = project.status === "in-development";
  const isProductionReady = project.status === "production-ready";

  return (
    <ScrollReveal delay={index * 0.08}>
      <PremiumCard
        enableGlow
        className={cn(
          "group overflow-hidden transition-[transform,box-shadow,border-color] duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20",
          compact && "h-full"
        )}
      >
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative overflow-hidden">
            <ProjectVisual project={project} index={index} parallax />
            <div className="absolute top-4 start-4 flex flex-wrap gap-2">
              {project.pinned && (
                <Badge className="rounded-full bg-background/80 text-[10px] backdrop-blur-sm">
                  <Pin className="me-1 size-3" />
                  {ui.projects.pinnedBadge}
                </Badge>
              )}
              {project.featured && (
                <Badge className="rounded-full bg-background/80 text-[10px] backdrop-blur-sm">
                  <Star className="me-1 size-3" />
                  {ui.projects.featuredBadge}
                </Badge>
              )}
              {isProductionReady && (
                <Badge className="rounded-full border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-700 backdrop-blur-sm dark:text-emerald-300">
                  <CheckCircle2 className="me-1 size-3" />
                  {project.showcase?.statusBadge ?? ui.projects.productionReady}
                </Badge>
              )}
              {isBuilding && (
                <Badge className="rounded-full bg-background/80 text-[10px] backdrop-blur-sm">
                  <Hammer className="me-1 size-3" />
                  {ui.projects.currentlyBuilding}
                </Badge>
              )}
            </div>
          </div>
        </Link>

        <div className={cn("p-6", compact && "p-5")}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full text-xs font-normal">
              {formatProjectCategory(project.category, locale)}
            </Badge>
            {timeline && (
              <span className="text-xs text-muted-foreground">{timeline}</span>
            )}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              {readingTime} {ui.projects.min}
            </span>
          </div>

          <Link href={`/projects/${project.slug}`} className="group/title">
            <h3
              className={cn(
                "font-heading mt-3 font-semibold tracking-tight transition-colors group-hover/title:text-muted-foreground",
                compact ? "text-lg" : "text-xl"
              )}
            >
              {project.title}
            </h3>
          </Link>

          <p
            className={cn(
              "mt-2 leading-relaxed text-muted-foreground",
              compact ? "line-clamp-2 text-xs" : "text-sm"
            )}
          >
            {project.shortDescription}
          </p>

          {!compact && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full text-xs font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ProjectLinks project={project} />
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { x: locale === "ar" ? -3 : 3 }}
              transition={springSoft}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {ui.projects.caseStudy}
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </PremiumCard>
    </ScrollReveal>
  );
}
