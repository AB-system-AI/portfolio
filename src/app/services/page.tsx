import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { ServicesCards } from "@/components/sections/services-cards";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Professional web development, mobile apps, UI/UX design, cloud architecture, and technical consulting services.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Solutions tailored to your vision"
        description="Comprehensive development services designed to take your project from concept to launch — and keep it thriving long after."
      />
      <ServicesCards showHeader={false} />
      <CTASection />
    </>
  );
}
