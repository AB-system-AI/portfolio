import type {
  FocusArea,
  NavLink,
  SiteConfig,
  SocialLink,
  Stat,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Abdelrahman Mohamed",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences with precision and purpose.",
  email: "hello@abdelrahman.dev",
  location: "Cairo, Egypt",
  twitterHandle: "@abdelrahman",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/abdelrahman",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/abdelrahman",
  },
  {
    platform: "twitter",
    label: "X",
    url: "https://twitter.com/abdelrahman",
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

export const stats: Stat[] = [
  { value: "—", label: "Years Experience" },
  { value: "—", label: "Projects Delivered" },
  { value: "—", label: "Happy Clients" },
  { value: "—", label: "Client Satisfaction" },
];

export const focusAreas: FocusArea[] = [
  { value: "Full-Stack", label: "Development" },
  { value: "UI/UX", label: "Design Systems" },
  { value: "Cloud", label: "Architecture" },
  { value: "AI", label: "Integration" },
];
