import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getAbout } from "@/lib/content/about";
import { siteConfig } from "@/lib/data";
import { AboutContent } from "@/components/sections/about-content";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const about = getAbout();

export const metadata: Metadata = createPageMetadata(
  "About",
  about.summary,
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Me"
        title={about.heroTitle}
        description={about.summary}
      >
        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border/50 pt-10 sm:grid-cols-4 sm:gap-8">
            {about.languages.map((language) => (
              <div key={language.name}>
                <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {language.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {language.level}
                </p>
              </div>
            ))}
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {siteConfig.education.expectedGraduation}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Expected Graduation
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                Remote
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Freelance &amp; Remote Work
              </p>
            </div>
          </div>
        </ScrollReveal>
      </PageHero>
      <AboutContent />
      <AboutTimeline />
      <CTASection />
    </>
  );
}
