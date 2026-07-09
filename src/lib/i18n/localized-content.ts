import type { Locale } from "./config";
import { aboutAr } from "./content/ar/about";
import { experienceAr } from "./content/ar/experience";
import {
  clientProjectsDisclaimerAr,
  clientProjectsFootnoteAr,
  resumeAvailabilityAr,
  resumeSummaryAr,
  skillCategoryLabelsAr,
} from "./content/ar/misc";
import { servicesAr, servicesIntroAr } from "./content/ar/services";
import {
  focusAreasAr,
  navLinksAr,
  siteConfigAr,
} from "./content/ar/site";
import { getAbout as getAboutEn } from "@/lib/content/about";
import { getAllExperience as getAllExperienceEn } from "@/lib/content/experience";
import {
  getAllProjects as getAllProjectsEn,
  getClientProjects as getClientProjectsEn,
  getFeaturedProjects as getFeaturedProjectsEn,
  getPersonalProjects as getPersonalProjectsEn,
  getProjectBySlug as getProjectBySlugEn,
} from "@/lib/content/projects";
import { getAllServices as getAllServicesEn, servicesIntro } from "@/lib/content/services";
import { getAllSkills as getAllSkillsEn } from "@/lib/content/skills";
import {
  focusAreas,
  navLinks,
  siteConfig,
  socialLinks,
} from "@/lib/content/site";
import type { About, Experience, FocusArea, NavLink, Project, Service, SiteConfig, SkillGroup } from "@/lib/content/types";
import { localizeProject, localizeProjects } from "./localize-project";
import { getPortfolioProjectCounters } from "@/lib/content/project-utils";

export function getSiteConfig(locale: Locale): SiteConfig {
  if (locale === "en") return siteConfig;
  return { ...siteConfig, ...siteConfigAr };
}

export function getNavLinks(locale: Locale): NavLink[] {
  return locale === "ar" ? navLinksAr : navLinks;
}

export function getFocusAreas(locale: Locale): FocusArea[] {
  return locale === "ar" ? focusAreasAr : focusAreas;
}

export function getAbout(locale: Locale): About {
  return locale === "ar" ? aboutAr : getAboutEn();
}

export function getAllServices(locale: Locale): Service[] {
  return locale === "ar" ? servicesAr : getAllServicesEn();
}

export function getServicesIntro(locale: Locale): string {
  return locale === "ar" ? servicesIntroAr : servicesIntro;
}

export function getAllSkills(locale: Locale): SkillGroup[] {
  const skills = getAllSkillsEn();
  if (locale === "en") return skills;
  return skills.map((group) => ({
    ...group,
    category: skillCategoryLabelsAr[group.category] ?? group.category,
  }));
}

export function getAllExperience(locale: Locale): Experience[] {
  return locale === "ar" ? experienceAr : getAllExperienceEn();
}

export function getAllProjects(locale: Locale): Project[] {
  return localizeProjects(getAllProjectsEn(), locale);
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return localizeProjects(getFeaturedProjectsEn(), locale);
}

export function getClientProjects(locale: Locale): Project[] {
  return localizeProjects(getClientProjectsEn(), locale);
}

export function getPersonalProjects(locale: Locale): Project[] {
  return localizeProjects(getPersonalProjectsEn(), locale);
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  const project = getProjectBySlugEn(slug);
  return project ? localizeProject(project, locale) : undefined;
}

export function getClientProjectsDisclaimer(locale: Locale): string {
  return locale === "ar" ? clientProjectsDisclaimerAr : "Additional commercial projects were delivered under company ownership and cannot be publicly disclosed.";
}

export function getClientProjectsFootnote(locale: Locale): string {
  return locale === "ar" ? clientProjectsFootnoteAr : "More commercial projects available upon request.";
}

export function getResumeAvailability(locale: Locale): string {
  return locale === "ar" ? resumeAvailabilityAr : "Available for Freelance and Remote Opportunities";
}

export function getResumeSummary(locale: Locale): string {
  return locale === "ar" ? resumeSummaryAr : "Full-Stack Web Developer focused on building modern web applications and business systems that help companies work more efficiently. Experienced in developing, maintaining, and deploying production-ready software across the full stack — from responsive interfaces and REST APIs to databases, authentication, and cloud deployment. Combines clean architecture with practical delivery for business websites, management systems, and custom web applications.";
}

export function getPortfolioStats(locale: Locale) {
  const counters = getPortfolioProjectCounters();
  const labels =
    locale === "ar"
      ? {
          projectsCompleted: "مشاريع مكتملة",
          businessSystems: "أنظمة أعمال",
          commercialWebsites: "مواقع تجارية",
          enterprisePlatforms: "منصات مؤسسية",
          yearsLearning: "سنوات التعلم",
        }
      : {
          projectsCompleted: "Projects Completed",
          businessSystems: "Business Systems",
          commercialWebsites: "Commercial Websites",
          enterprisePlatforms: "Enterprise Platforms",
          yearsLearning: "Years Learning",
        };

  return [
    { value: String(counters.projectsCompleted), label: labels.projectsCompleted },
    { value: String(counters.businessSystems), label: labels.businessSystems },
    { value: String(counters.commercialWebsites), label: labels.commercialWebsites },
    { value: String(counters.enterprisePlatforms), label: labels.enterprisePlatforms },
    { value: String(counters.yearsLearning), label: labels.yearsLearning },
  ];
}

export { socialLinks };
