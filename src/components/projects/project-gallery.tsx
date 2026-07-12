"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ImageIcon,
  Minus,
  Plus,
  X,
} from "lucide-react";
import type { Project } from "@/lib/content/types";
import { getProjectImageCandidates } from "@/lib/content/project-image-paths";
import { getProjectVisual } from "@/lib/content/project-utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { springSoft } from "@/lib/motion";

interface ProjectGalleryProps {
  project: Project;
}

function GalleryPlaceholder({ project }: { project: Project }) {
  const { ui } = useLocale();
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
            {ui.projects.galleryComingSoon}
          </p>
          <p className="mt-1 text-xs opacity-60" style={{ color: accent }}>
            {ui.projects.galleryHint.replace("{slug}", project.slug)}
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

function GallerySkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="size-20 shrink-0 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ui } = useLocale();
  const dialogRef = useRef<HTMLDivElement>(null);

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
  const [loadingSrc, setLoadingSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const discovering = project.images.length === 0;

  useEffect(() => {
    if (!discovering) return;

    images.forEach((image) => {
      const img = new window.Image();
      img.onload = () =>
        setLoadedImages((prev) =>
          prev.includes(image.src) ? prev : [...prev, image.src]
        );
      img.onerror = () => {};
      img.src = image.src;
    });
  }, [discovering, images]);

  const displayImages = discovering
    ? images.filter((image) => loadedImages.includes(image.src))
    : images;

  const activeImage = displayImages[activeIndex] ?? displayImages[0];

  const goTo = useCallback(
    (index: number) => {
      if (displayImages.length === 0) return;
      setLoadingSrc(displayImages[(index + displayImages.length) % displayImages.length]?.src ?? null);
      setActiveIndex((index + displayImages.length) % displayImages.length);
      setZoom(1);
    },
    [displayImages]
  );

  useEffect(() => {
    if (!fullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreen(false);
        setZoom(1);
      }
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "+" || event.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
      if (event.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [fullscreen, activeIndex, goTo]);

  if (discovering && displayImages.length === 0) {
    if (loadedImages.length === 0 && images.length > 0) {
      return <GallerySkeleton />;
    }
    return <GalleryPlaceholder project={project} />;
  }

  if (!activeImage) {
    return <GalleryPlaceholder project={project} />;
  }

  const isImageLoading = loadingSrc === activeImage.src;

  return (
    <>
      <div className="space-y-4">
        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/50 bg-muted">
          {isImageLoading && (
            <Skeleton className="absolute inset-0 rounded-none" aria-hidden="true" />
          )}
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
              priority={activeIndex === 0}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              onLoad={() => setLoadingSrc(null)}
              onLoadingComplete={() => setLoadingSrc(null)}
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
            className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            onClick={() => setFullscreen(true)}
            aria-label="Open fullscreen preview"
          >
            <Expand className="size-4" />
          </Button>
        </div>

        {displayImages.length > 1 && (
          <div
            className="flex gap-3 overflow-x-auto pb-1 scrollbar-none"
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
                onClick={() => goTo(index)}
                className={cn(
                  "relative size-20 shrink-0 overflow-hidden rounded-lg border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  index === activeIndex
                    ? "border-foreground ring-2 ring-foreground/20"
                    : "border-border/50 opacity-70 hover:opacity-100"
                )}
              >
                <Image src={image.src} alt="" fill className="object-cover" sizes="80px" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} ${ui.projects.gallery}`}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/92 p-4 backdrop-blur-md outline-none"
            onClick={() => {
              setFullscreen(false);
              setZoom(1);
            }}
          >
            <div
              className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-sm text-white/70">
                  {activeIndex + 1} / {displayImages.length}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80"
                    onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                    aria-label={ui.projects.zoomOut}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80"
                    onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
                    aria-label={ui.projects.zoomIn}
                  >
                    <Plus className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full bg-background/80"
                    onClick={() => {
                      setFullscreen(false);
                      setZoom(1);
                    }}
                    aria-label={ui.projects.closeGallery}
                  >
                    <X className="me-1 size-4" />
                    {ui.projects.closeGallery}
                  </Button>
                </div>
              </div>

              <motion.div
                initial={prefersReducedMotion ? false : { scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={springSoft}
                className="relative min-h-0 flex-1 overflow-hidden rounded-xl"
              >
                <motion.div
                  animate={{ scale: zoom }}
                  transition={springSoft}
                  className="relative size-full"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </motion.div>

              {displayImages.length > 1 && (
                <div
                  className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1 scrollbar-none"
                  role="tablist"
                  aria-label={`${project.title} lightbox thumbnails`}
                >
                  {displayImages.map((image, index) => (
                    <button
                      key={`lightbox-${image.src}-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={index === activeIndex}
                      aria-label={image.alt}
                      onClick={() => goTo(index)}
                      className={cn(
                        "relative size-14 shrink-0 overflow-hidden rounded-md border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        index === activeIndex
                          ? "border-white ring-2 ring-white/30"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image src={image.src} alt="" fill className="object-cover" sizes="56px" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
