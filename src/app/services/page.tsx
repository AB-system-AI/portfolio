import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ServicesCards } from "@/components/sections/services-cards";
import { CTASection } from "@/components/sections/cta-section";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Professional web development, mobile apps, UI/UX design, cloud architecture, AI integration, and technical consulting services."
);

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Solutions tailored to your vision
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Comprehensive development services designed to take your project
              from concept to launch — and keep it thriving long after.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ServicesCards />
      <CTASection />
    </>
  );
}
