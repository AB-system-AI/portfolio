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
  /** Year programming journey began — used for Years Learning counter */
  learningSince: number;
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

export type ProjectStatus = "completed" | "in-development";

export type ProjectSegment =
  | "personal"
  | "client"
  | "business-system"
  | "commercial-website"
  | "enterprise-platform";

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
  endYear?: number;
  timeline?: string;
  status?: ProjectStatus;
  segment?: ProjectSegment;
  featuredOrder?: number;
  isClientProject?: boolean;
  client?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  features: string[];
  problem?: string;
  businessProblem?: string;
  architecture?: string;
  developmentProcess?: string[];
  pinned?: boolean;
  /** Fallback card styling when no cover image is provided */
  gradient?: string;
  accent?: string;
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
  id: string;
  company: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  businessImpact?: string;
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
  | "Globe"
  | "Layers"
  | "ShoppingCart"
  | "GraduationCap"
  | "LayoutDashboard"
  | "Server";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  businessValue: string;
  features: string[];
  technologies: string[];
  cta: string;
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
