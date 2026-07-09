export type * from "./types";

export {
  siteConfig,
  socialLinks,
  navLinks,
  stats,
  focusAreas,
} from "./site";

export {
  projects,
  getAllProjects,
  getFeaturedProjects,
  getClientProjects,
  getPersonalProjects,
  getProjectBySlug,
  getAllProjectSlugs,
  getProjectsByCategory,
} from "./projects";

export {
  getPortfolioStats,
  getPortfolioProjectCounters,
  getProjectTimeline,
  getProjectCaseStudyContent,
  formatProjectCategory,
  sortProjects,
} from "./project-utils";

export { experience, getAllExperience } from "./experience";

export { skills, getAllSkills } from "./skills";

export { services, getAllServices } from "./services";

export {
  testimonials,
  getAllTestimonials,
  getFeaturedTestimonials,
} from "./testimonials";

export { certificates, getAllCertificates } from "./certificates";

export { about, getAbout } from "./about";

export {
  getResumeContact,
  getResumeEducation,
  getResumeExperience,
  getResumeFeaturedProjects,
  getResumeLanguages,
  getResumeSkills,
  resumeAvailability,
  resumeSummary,
} from "./resume";
