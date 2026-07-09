/**
 * @deprecated Import from `@/lib/content` instead.
 * This file re-exports the content layer for backward compatibility.
 */
export {
  siteConfig,
  socialLinks,
  navLinks,
  stats,
  focusAreas,
  projects,
  experience,
  experience as timeline,
  skills,
  services,
  testimonials,
  certificates,
  about,
  getAbout,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getAllProjectSlugs,
  getProjectsByCategory,
  getAllExperience,
  getAllSkills,
  getAllServices,
  getAllTestimonials,
  getFeaturedTestimonials,
  getAllCertificates,
} from "./content";

export type * from "./content/types";
