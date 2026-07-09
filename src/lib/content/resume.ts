import { getAbout } from "./about";
import { getAllExperience } from "./experience";
import { getFeaturedProjects } from "./projects";
import { getAllSkills } from "./skills";
import { siteConfig, socialLinks } from "./site";
import { siteUrl } from "../site-url";

export const resumeAvailability =
  "Available for Freelance and Remote Opportunities";

export const resumeSummary =
  "Full-Stack Web Developer focused on building modern web applications and business systems that help companies work more efficiently. Experienced in developing, maintaining, and deploying production-ready software across the full stack — from responsive interfaces and REST APIs to databases, authentication, and cloud deployment. Combines clean architecture with practical delivery for business websites, management systems, and custom web applications.";

export function getResumeContact() {
  const github = socialLinks.find((link) => link.platform === "github");
  const linkedin = socialLinks.find((link) => link.platform === "linkedin");
  const whatsapp = socialLinks.find((link) => link.platform === "whatsapp");

  return {
    name: siteConfig.name,
    title: siteConfig.title,
    location: siteConfig.location,
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsappUrl: whatsapp?.url ?? siteConfig.whatsapp,
    whatsappLabel: siteConfig.phone,
    githubUrl: github?.url ?? "",
    linkedinUrl: linkedin?.url ?? "",
    portfolioUrl: siteUrl,
  };
}

export function getResumeExperience() {
  return getAllExperience();
}

export function getResumeFeaturedProjects() {
  return getFeaturedProjects();
}

export function getResumeSkills() {
  return getAllSkills().map((group) => ({
    category: group.category,
    items: group.items.map((skill) => skill.name),
  }));
}

export function getResumeEducation() {
  return {
    institution: siteConfig.education.institution,
    expectedGraduation: siteConfig.education.expectedGraduation,
  };
}

export function getResumeLanguages() {
  return getAbout().languages;
}
