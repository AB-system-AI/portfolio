import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

const FlagshipProjectSpotlight = dynamic(
  () =>
    import("@/components/sections/flagship-project-spotlight").then((module) => ({
      default: module.FlagshipProjectSpotlight,
    }))
);

const FeaturedProjectsCarousel = dynamic(
  () =>
    import("@/components/sections/featured-projects-carousel").then((module) => ({
      default: module.FeaturedProjectsCarousel,
    }))
);

const ClientLogos = dynamic(
  () =>
    import("@/components/sections/client-logos").then((module) => ({
      default: module.ClientLogos,
    }))
);

const ServicesCards = dynamic(
  () =>
    import("@/components/sections/services-cards").then((module) => ({
      default: module.ServicesCards,
    }))
);

const HomeAboutTeaser = dynamic(
  () =>
    import("@/components/sections/home-about-teaser").then((module) => ({
      default: module.HomeAboutTeaser,
    }))
);

const CTASection = dynamic(
  () =>
    import("@/components/sections/cta-section").then((module) => ({
      default: module.CTASection,
    }))
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <FlagshipProjectSpotlight />
      <FeaturedProjectsCarousel />
      <ClientLogos />
      <ServicesCards />
      <HomeAboutTeaser />
      <CTASection />
    </>
  );
}
