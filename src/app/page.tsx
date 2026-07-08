import { Hero } from "@/components/sections/hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ServicesCards } from "@/components/sections/services-cards";
import { CTASection } from "@/components/sections/cta-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid limit={4} />
      <ServicesCards />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  About
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Passionate about crafting exceptional digital products
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                With over 8 years of experience in full-stack development, I
                specialize in building scalable web applications that combine
                beautiful design with robust engineering. Every project is an
                opportunity to push boundaries and deliver excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
