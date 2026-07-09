"use client";

import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-8 sm:pt-40",
        className
      )}
    >
      <AnimatedBackground />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
          <h1 className="font-heading mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
