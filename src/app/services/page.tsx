import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { servicesIntro } from "@/lib/content/services";
import { ServicesCards } from "@/components/sections/services-cards";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = createPageMetadata(
  "Services",
  "Business website development, full-stack web applications, POS & management systems, educational platforms, admin dashboards, and API integration services.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Solutions that drive operational efficiency"
        description={`${servicesIntro} Explore the services below to see how each engagement is designed to solve a specific business challenge.`}
      />
      <ServicesCards showHeader={false} />
      <CTASection />
    </>
  );
}
