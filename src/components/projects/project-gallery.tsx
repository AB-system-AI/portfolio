"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/lib/content/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: ProjectImage[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const activeImage = images[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/50 bg-muted">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1152px"
        />
        {images.length > 1 && (
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
      </div>

      {activeImage.caption && (
        <p className="text-center text-sm text-muted-foreground">
          {activeImage.caption}
        </p>
      )}

      {images.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto pb-1"
          role="tablist"
          aria-label={`${title} gallery`}
        >
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={image.alt}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative size-20 shrink-0 overflow-hidden rounded-lg border transition-colors",
                index === activeIndex
                  ? "border-foreground"
                  : "border-border/50 opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
