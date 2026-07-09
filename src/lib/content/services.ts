import type { Service } from "./types";

export const servicesIntro =
  "I build modern web applications and business systems that help companies work more efficiently.";

export const services: Service[] = [
  {
    icon: "Globe",
    title: "Business Website Development",
    description:
      "Establish a credible digital presence with a website designed to represent your brand, convert visitors, and perform flawlessly on every device.",
    businessValue:
      "A professional website builds trust with customers, strengthens your brand identity, and turns online traffic into meaningful business inquiries.",
    features: [
      "Modern responsive websites",
      "SEO optimized",
      "Fast performance",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    cta: "Discuss Your Website Project",
  },
  {
    icon: "Layers",
    title: "Full-Stack Web Application Development",
    description:
      "Custom web applications built to automate workflows, centralize operations, and scale with your organization's growth.",
    businessValue:
      "Replace fragmented tools and manual processes with a unified platform that saves time, reduces errors, and gives your team full visibility over daily operations.",
    features: [
      "Custom web applications",
      "Authentication",
      "Dashboards",
      "APIs",
      "Database integration",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "REST APIs"],
    cta: "Plan Your Web Application",
  },
  {
    icon: "ShoppingCart",
    title: "POS & Business Management Systems",
    description:
      "Integrated point-of-sale and management platforms that connect sales, inventory, and customer data in one reliable system.",
    businessValue:
      "Gain real-time control over stock levels, sales performance, and customer relationships — enabling faster decisions and smoother day-to-day operations.",
    features: [
      "POS systems",
      "Inventory management",
      "Sales management",
      "Customer management",
      "Reports & analytics",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "REST APIs"],
    cta: "Streamline Your Operations",
  },
  {
    icon: "GraduationCap",
    title: "Educational Platforms",
    description:
      "Digital platforms that simplify administration, improve communication, and support better learning outcomes for schools and training organizations.",
    businessValue:
      "Reduce administrative overhead, keep parents and teachers aligned, and deliver a modern experience that reflects the quality of your institution.",
    features: [
      "Student management",
      "Attendance tracking",
      "Assignments",
      "Exams",
      "Teacher dashboard",
      "Parent portal",
    ],
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Authentication",
      "Role-based access",
    ],
    cta: "Modernize Your Institution",
  },
  {
    icon: "LayoutDashboard",
    title: "Admin Dashboards",
    description:
      "Centralized control panels that give leadership and operations teams clear visibility into performance, users, and business metrics.",
    businessValue:
      "Make informed decisions faster with real-time analytics, organized customer data, and secure access controls across your organization.",
    features: [
      "Analytics",
      "CRM",
      "User management",
      "Roles & permissions",
      "Reports",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Charts"],
    cta: "Build Your Dashboard",
  },
  {
    icon: "Server",
    title: "API Integration & Backend Development",
    description:
      "Robust backend systems and API layers that connect your software with payment providers, third-party services, and internal tools.",
    businessValue:
      "Reliable integrations eliminate data silos, automate payments and notifications, and create a solid foundation for future product growth.",
    features: [
      "REST APIs",
      "Third-party integrations",
      "Payment gateways",
      "Authentication",
      "Database architecture",
    ],
    technologies: [
      "Node.js",
      "Hono",
      "Express.js",
      "PostgreSQL",
      "Cloudflare Workers",
    ],
    cta: "Discuss Backend Requirements",
  },
];

export function getAllServices(): Service[] {
  return services;
}
