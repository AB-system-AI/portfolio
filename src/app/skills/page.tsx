import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = createPageMetadata(
  "Skills",
  "Technical skills and expertise in React, Next.js, TypeScript, Node.js, cloud infrastructure, and modern development practices."
);

export default function SkillsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Expertise
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Tools of the trade
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A deep toolkit spanning frontend, backend, DevOps, and design —
              continuously refined through years of hands-on experience.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <SkillsGrid />
      <CTASection />
    </>
  );
}
