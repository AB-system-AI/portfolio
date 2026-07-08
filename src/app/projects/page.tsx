import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Explore a curated collection of web applications, mobile apps, and enterprise solutions built with modern technologies."
);

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Projects that define my craft
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From startups to enterprise — each project represents a unique
              challenge solved with creativity, precision, and modern technology.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ProjectsGrid showHeader={false} />
    </>
  );
}
