"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content/types";
import { getProjectVisual } from "@/lib/content/project-utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProjectVisualProps {
  project: Project;
  index?: number;
  priority?: boolean;
}

export function ProjectVisual({
  project,
  index = 0,
  priority = false,
}: ProjectVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const coverImage = project.images[0];
  const { gradient, accent } = getProjectVisual(project, index);

  if (coverImage) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    );
  }

  const content = (
    <>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}40 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${accent}20 0%, transparent 40%)`,
        }}
      />
      <div className="absolute inset-4 rounded-xl border border-white/10" />
      <div className="absolute top-6 left-6 flex gap-1.5" aria-hidden="true">
        <div className="size-2.5 rounded-full bg-white/20" />
        <div className="size-2.5 rounded-full bg-white/20" />
        <div className="size-2.5 rounded-full bg-white/20" />
      </div>
      <div className="relative z-10 text-center">
        <p
          className="font-heading text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: accent }}
        >
          {project.title.split(" ")[0]}
        </p>
        <p
          className="mt-1 text-sm font-medium opacity-60"
          style={{ color: accent }}
        >
          {project.title.split(" ").slice(1).join(" ")}
        </p>
      </div>
    </>
  );

  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      {prefersReducedMotion ? (
        content
      ) : (
        <motion.div
          className="relative flex size-full items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
}
