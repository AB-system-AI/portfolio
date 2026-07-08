import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { stats } from "@/lib/data";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn about my journey as a full-stack developer, professional experience, and passion for building exceptional digital products."
);

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Me
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Turning ideas into impactful digital experiences
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer with a passion for clean code,
              thoughtful design, and building products that users love. My
              approach combines technical expertise with a deep understanding of
              user needs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/50 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <AboutTimeline />
      <CTASection />
    </>
  );
}
