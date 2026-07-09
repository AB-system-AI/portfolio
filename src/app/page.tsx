import { Hero } from "@/components/sections/hero";
import { FeaturedProjectsCarousel } from "@/components/sections/featured-projects-carousel";
import { ServicesCards } from "@/components/sections/services-cards";
import { ClientLogos } from "@/components/sections/client-logos";
import { HomeAboutTeaser } from "@/components/sections/home-about-teaser";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjectsCarousel />
      <ClientLogos />
      <ServicesCards />
      <HomeAboutTeaser />
      <CTASection />
    </>
  );
}
