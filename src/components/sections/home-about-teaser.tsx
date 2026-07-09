"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticLinkButton } from "@/components/ui/magnetic-button";

export function HomeAboutTeaser() {
  const { about, ui } = useLocale();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {ui.home.aboutLabel}
              </span>
              <h2 className="font-heading mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {about.heroTitle}
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {about.summary}
              </p>
              <MagneticLinkButton
                href="/about"
                variant="outline"
                size="sm"
                className="mt-6 rounded-full"
              >
                {ui.home.readMore}
                <ArrowRight className="size-4" />
              </MagneticLinkButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
