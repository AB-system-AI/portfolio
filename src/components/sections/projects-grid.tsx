"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/animations/section-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

function ProjectVisual({
  gradient,
  accent,
  title,
}: {
  gradient: string;
  accent: string;
  title: string;
}) {
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}40 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${accent}20 0%, transparent 40%)`,
        }}
      />
      <div className="absolute inset-4 rounded-xl border border-white/10" />
      <div className="absolute top-6 left-6 flex gap-1.5">
        <div className="size-2.5 rounded-full bg-white/20" />
        <div className="size-2.5 rounded-full bg-white/20" />
        <div className="size-2.5 rounded-full bg-white/20" />
      </div>
      <motion.div
        className="relative z-10 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: accent }}
        >
          {title.split(" ")[0]}
        </p>
        <p
          className="mt-1 text-sm font-medium opacity-60"
          style={{ color: accent }}
        >
          {title.split(" ").slice(1).join(" ")}
        </p>
      </motion.div>
    </div>
  );
}

interface ProjectsGridProps {
  limit?: number;
  showHeader?: boolean;
}

export function ProjectsGrid({ limit, showHeader = true }: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showHeader && (
          <SectionHeader
            label="Portfolio"
            title="Selected projects"
            description="A curated collection of work spanning web applications, mobile apps, and enterprise solutions — each built with attention to detail and performance."
          />
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {displayProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.article
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ProjectVisual
                  gradient={project.gradient}
                  accent={project.accent}
                  title={project.title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
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
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
                    >
                      <ExternalLink className="size-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "rounded-full"
                      )}
                    >
                      <GitHubIcon className="size-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {limit && projects.length > limit && (
          <ScrollReveal className="mt-12 text-center">
            <LinkButton href="/projects" variant="outline" size="lg" className="rounded-full">
              View All Projects
            </LinkButton>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
