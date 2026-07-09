"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, ImageIcon } from "lucide-react";
import type { Project } from "@/lib/content/types";
import { getProjectImageCandidates } from "@/lib/content/project-image-paths";
import { getProjectVisual } from "@/lib/content/project-utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { springSoft } from "@/lib/motion";

interface ProjectGalleryProps {
  project: Project;
}

function GalleryPlaceholder({ project }: { project: Project }) {
  const { gradient, accent } = getProjectVisual(project);
  const candidates = getProjectImageCandidates(project.slug);

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border/70 bg-gradient-to-br",
          gradient
        )}
      >
        <div className="text-center">
          <ImageIcon className="mx-auto size-8 opacity-40" style={{ color: accent }} />
          <p className="mt-3 text-sm font-medium" style={{ color: accent }}>
            Screenshots coming soon
          </p>
          <p className="mt-1 text-xs opacity-60" style={{ color: accent }}>
            Add images to public/projects/{project.slug}/
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {candidates.slice(1).map((path) => (
          <div
            key={path}
            className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20"
          >
            <ImageIcon className="size-4 text-muted-foreground/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const images = useMemo(
    () =>
      project.images.length > 0
        ? project.images
        : getProjectImageCandidates(project.slug).map((src, index) => ({
            src,
            alt:
              index === 0
                ? `${project.title} cover image`
                : `${project.title} screenshot ${index}`,
          })),
    [project.images, project.slug, project.title]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    if (project.images.length > 0) return;

    images.forEach((image) => {
      const img = new window.Image();
      img.onload = () =>
        setLoadedImages((prev) =>
          prev.includes(image.src) ? prev : [...prev, image.src]
        );
      img.onerror = () => {};
      img.src = image.src;
    });
  }, [images, project.images.length, project.slug]);

  const availableImages = images.filter((image) =>
    project.images.length > 0 ? true : loadedImages.includes(image.src)
  );

  if (project.images.length === 0 && availableImages.length === 0) {
    return <GalleryPlaceholder project={project} />;
  }

  const displayImages = project.images.length > 0 ? images : availableImages;
  const activeImage = displayImages[activeIndex] ?? displayImages[0];

  const goTo = (index: number) => {
    setActiveIndex((index + displayImages.length) % displayImages.length);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/50 bg-muted">
          <motion.div
            key={activeImage.src}
            initial={prefersReducedMotion ? false : { opacity: 0.85, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative size-full"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </motion.div>

          {displayImages.length > 1 && (
            <>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous image"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next image"
              >
                <ChevronRight className="size-4" />
              </Button>
            </>
          )}

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => setFullscreen(true)}
            aria-label="Open fullscreen preview"
          >
            <Expand className="size-4" />
          </Button>
        </div>

        {displayImages.length > 1 && (
          <div
            className="flex gap-3 overflow-x-auto pb-1"
            role="tablist"
            aria-label={`${project.title} gallery`}
          >
            {displayImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={image.alt}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative size-20 shrink-0 overflow-hidden rounded-lg border transition-all",
                  index === activeIndex
                    ? "border-foreground ring-2 ring-foreground/20"
                    : "border-border/50 opacity-70 hover:opacity-100"
                )}
              >
                <Image src={image.src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setFullscreen(false)}
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={springSoft}
              className="relative h-[min(80vh,900px)] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <Button
                type="button"
                variant="outline"
                className="absolute top-4 right-4 rounded-full bg-background/80"
                onClick={() => setFullscreen(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
