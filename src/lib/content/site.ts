import type {
  FocusArea,
  NavLink,
  SiteConfig,
  SocialLink,
  Stat,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Abdelrahman Mohamed",
  title: "Full-Stack Web Developer | AI & Business Systems Developer",
  tagline:
    "Building scalable web applications, business systems, and AI-powered solutions.",
  email: "bodammohamed204@gmail.com",
  phone: "+20 1284525538",
  whatsapp:
    "https://wa.me/201284525538?text=Hello%20Abdelrahman,%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project.",
  location: "Alexandria, Egypt",
  availability: "Available for Freelance & Remote Work",
  education: {
    institution: "Faculty of Computer and Data Science",
    expectedGraduation: 2029,
  },
  englishLevel: "B2",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/AB-system-AI",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abdo-mohamed-611a5b41b",
  },
  {
    platform: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/201284525538?text=Hello%20Abdelrahman,%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project.",
  },
];

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const stats: Stat[] = [];

export const focusAreas: FocusArea[] = [
  { value: "Web Apps", label: "Scalable Applications" },
  { value: "Business", label: "Systems Development" },
  { value: "AI", label: "Powered Solutions" },
  { value: "Remote", label: "Freelance & Remote Work" },
];
