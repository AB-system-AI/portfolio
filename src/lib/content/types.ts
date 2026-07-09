// ---------------------------------------------------------------------------
// Site & navigation
// ---------------------------------------------------------------------------

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availability: string;
  education: {
    institution: string;
    expectedGraduation: number;
  };
  englishLevel: string;
  resumeUrl?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "whatsapp"
  | "twitter"
  | "email"
  | "dribbble"
  | "behance"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FocusArea {
  value: string;
  label: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface About {
  heroTitle: string;
  summary: string;
  background: string;
  specializations: string[];
  lookingFor: string;
  differentiators: string[];
  languages: Language[];
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type ProjectCategory =
  | "web-app"
  | "mobile"
  | "e-commerce"
  | "saas"
  | "open-source"
  | "design"
  | "other";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  images: ProjectImage[];
  github?: string;
  liveDemo?: string;
  year: number;
  client?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  /** Fallback card styling when no cover image is provided */
  gradient?: string;
  accent?: string;
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type ServiceIcon =
  | "Code2"
  | "Smartphone"
  | "Palette"
  | "Cloud"
  | "Bot"
  | "Shield";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
}

// ---------------------------------------------------------------------------
// Testimonials (future)
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  featured: boolean;
}

// ---------------------------------------------------------------------------
// Certificates (future)
// ---------------------------------------------------------------------------

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image?: string;
}
