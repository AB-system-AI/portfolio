import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { focusAreas } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn about my journey as a full-stack developer, professional experience, and passion for building exceptional digital products.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Me"
        title="Turning ideas into impactful digital experiences"
        description="I'm a full-stack developer with a passion for clean code, thoughtful design, and building products that users love. My approach combines technical expertise with a deep understanding of user needs."
      >
        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/50 pt-10 sm:grid-cols-4 sm:gap-8">
            {focusAreas.map((area) => (
              <div key={area.label}>
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {area.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {area.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </PageHero>
      <AboutTimeline />
      <CTASection />
    </>
  );
}
