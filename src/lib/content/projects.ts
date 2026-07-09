import type { Project } from "./types";
import { additionalProjects } from "./projects-additional";

export const projects: Project[] = [
  {
    slug: "professional-portfolio",
    title: "Professional Portfolio Website",
    shortDescription:
      "A premium personal portfolio with Apple-inspired design, fluid animations, and production-grade SEO.",
    fullDescription:
      "This portfolio website showcases my work as a full-stack developer through a refined, minimal interface designed for international clients. Built with Next.js and modern front-end tooling, it combines glassmorphism, responsive layouts, and thoughtful motion design to present projects, services, and experience in a clear, professional format.\n\nThe site is fully optimized for performance and discoverability, with structured metadata, accessible navigation, and seamless light and dark themes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    category: "web-app",
    segment: "personal",
    featured: true,
    pinned: true,
    images: [],
    year: 2026,
    gradient: "from-zinc-950 via-neutral-900 to-black",
    accent: "#fafafa",
    features: [
      "Apple-inspired minimal UI",
      "Glassmorphism surfaces",
      "Framer Motion animations",
      "Fully responsive design",
      "SEO optimized structure",
      "Dark and light mode",
    ],
    challenges: [
      "Creating a distinctive visual identity without relying on stock imagery or heavy decoration.",
      "Balancing animation richness with performance and accessibility preferences.",
      "Structuring content so projects, services, and experience remain easy to navigate on all devices.",
    ],
    solutions: [
      "Adopted a black-and-white design system with glass cards and Instrument Serif headings for a premium feel.",
      "Implemented reduced-motion support and lightweight animation patterns across key sections.",
      "Built a typed content layer and reusable section components for consistent layout and SEO metadata.",
    ],
    results: [
      "A polished portfolio suitable for freelance clients, remote opportunities, and professional networking.",
      "Fast page loads and clear information architecture that communicate technical credibility.",
      "A maintainable codebase that can grow as new projects and experience are added.",
    ],
  },
  {
    slug: "company-template",
    title: "Company Template",
    shortDescription:
      "A reusable business website starter with authentication, dashboard foundations, and production-ready architecture.",
    fullDescription:
      "The Company Template is a starter foundation for business websites that need more than a landing page. It provides a modern front-end structure, authentication-ready flows, and dashboard scaffolding so new client projects can move from concept to implementation faster.\n\nDesigned as a reusable base, it emphasizes clean architecture, responsive layouts, and patterns that scale as business requirements grow.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Authentication",
      "PostgreSQL",
    ],
    category: "saas",
    segment: "business-system",
    featured: true,
    images: [],
    year: 2026,
    gradient: "from-slate-900 via-indigo-950 to-slate-950",
    accent: "#a5b4fc",
    features: [
      "Reusable business website starter",
      "Authentication-ready structure",
      "Dashboard-ready layout",
      "Modern application architecture",
      "Responsive across devices",
      "Production-ready foundation",
    ],
    challenges: [
      "Building a template flexible enough for different business types without over-engineering.",
      "Establishing authentication and dashboard patterns that teams can extend confidently.",
      "Keeping the starter lightweight while still feeling complete and professional.",
    ],
    solutions: [
      "Defined modular page and layout patterns that separate marketing content from application areas.",
      "Integrated authentication-ready routes and dashboard shell components as extension points.",
      "Used typed configuration and consistent UI primitives to speed up customization per client.",
    ],
    results: [
      "Faster project kickoff for new business websites and internal tools.",
      "Consistent technical foundation that reduces setup time across engagements.",
      "A scalable starting point that supports long-term feature development.",
    ],
  },
  {
    slug: "barber-shop-management",
    title: "Barber Shop Management Website",
    shortDescription:
      "A business website with appointment booking, service management, and an admin dashboard for daily operations.",
    fullDescription:
      "This barber shop management website helps a service-based business present its brand online while handling core operational workflows. Customers can explore services and book appointments, while administrators manage schedules, offerings, and customer records from a dedicated dashboard.\n\nThe project focuses on practical usability for both staff and clients, with a responsive interface suited to mobile and desktop use.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
    ],
    category: "web-app",
    segment: "business-system",
    featured: true,
    images: [],
    year: 2026,
    gradient: "from-stone-900 via-amber-950 to-stone-950",
    accent: "#fcd34d",
    features: [
      "Appointment booking",
      "Services management",
      "Admin dashboard",
      "Customer management",
      "Responsive interface",
      "Role-based admin access",
    ],
    challenges: [
      "Designing a booking flow that is simple for customers on mobile devices.",
      "Giving shop staff clear tools to manage appointments and services without clutter.",
      "Keeping admin workflows separate from the public-facing marketing experience.",
    ],
    solutions: [
      "Built a streamlined booking interface with clear service selection and scheduling steps.",
      "Created an admin dashboard for managing services, appointments, and customer records.",
      "Separated public and admin routes with appropriate access patterns for daily operations.",
    ],
    results: [
      "A professional online presence that supports appointment-driven revenue.",
      "Reduced manual coordination for staff through centralized service and customer management.",
      "A responsive platform customers can use comfortably from any device.",
    ],
  },
  {
    slug: "bread-shop-website",
    title: "Bread Shop Website",
    shortDescription:
      "An e-commerce style business website for showcasing products, managing orders, and monitoring activity through a dashboard.",
    fullDescription:
      "The Bread Shop Website enables a retail food business to display its product catalog online, accept orders, and track activity from a management dashboard. The interface prioritizes clarity for shoppers browsing products while giving operators the tools needed to oversee orders and inventory-related workflows.\n\nBuilt with a responsive layout, the site supports both customer-facing discovery and back-office management in one cohesive experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
    ],
    category: "e-commerce",
    segment: "commercial-website",
    featured: false,
    images: [],
    year: 2026,
    gradient: "from-orange-950 via-amber-900 to-yellow-950",
    accent: "#fde68a",
    features: [
      "Product catalog",
      "Order management",
      "Business dashboard",
      "Responsive UI",
      "Customer order flow",
      "Admin order overview",
    ],
    challenges: [
      "Presenting products attractively while keeping ordering straightforward.",
      "Connecting the customer storefront with order management on the admin side.",
      "Ensuring the layout remains usable across phone, tablet, and desktop screens.",
    ],
    solutions: [
      "Designed a clean product browsing experience with clear pricing and ordering paths.",
      "Implemented an admin dashboard to review and manage incoming orders.",
      "Used responsive components and consistent spacing for reliable display on all screen sizes.",
    ],
    results: [
      "Improved product visibility and a structured path from browsing to order placement.",
      "More organized order handling for the business through a centralized dashboard.",
      "A cohesive brand experience across customer and admin interfaces.",
    ],
  },
  {
    slug: "potato-station-website",
    title: "Potato Station Website",
    shortDescription:
      "A restaurant landing page with menu presentation, contact information, and a mobile-friendly layout.",
    fullDescription:
      "Potato Station Website is a focused restaurant presence built to help customers discover the menu, learn about the brand, and get in touch quickly. The landing page emphasizes visual clarity, fast loading, and responsive design so visitors on any device can browse offerings and find contact details without friction.\n\nThis project demonstrates how a lean, well-structured site can support a local food business with minimal complexity.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    category: "web-app",
    segment: "commercial-website",
    featured: false,
    images: [],
    year: 2025,
    gradient: "from-lime-950 via-green-900 to-emerald-950",
    accent: "#bef264",
    features: [
      "Restaurant landing page",
      "Menu presentation",
      "Contact section",
      "Responsive layout",
      "Fast performance",
      "Mobile-first navigation",
    ],
    challenges: [
      "Communicating menu offerings clearly within a single-page restaurant experience.",
      "Making contact and location information immediately accessible on mobile.",
      "Delivering fast performance without unnecessary page weight.",
    ],
    solutions: [
      "Structured the page around menu, brand story, and contact sections with clear hierarchy.",
      "Optimized layout and typography for small screens and touch interaction.",
      "Kept the implementation lean with static-friendly rendering and minimal dependencies.",
    ],
    results: [
      "A professional restaurant web presence that supports customer discovery.",
      "Improved accessibility of menu and contact information for mobile visitors.",
      "A lightweight site that loads quickly and is easy to maintain.",
    ],
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    shortDescription:
      "A modern personal landing page focused on clarity, responsiveness, and fast performance.",
    fullDescription:
      "This personal website is a streamlined landing page built to introduce an individual or professional brand online. It focuses on essential content, strong typography, and responsive behavior so visitors get a clear first impression on any device.\n\nThe project prioritizes speed and simplicity — demonstrating how effective personal branding can be achieved without unnecessary complexity.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    category: "web-app",
    segment: "personal",
    featured: false,
    images: [],
    year: 2025,
    gradient: "from-neutral-100 via-zinc-200 to-neutral-300",
    accent: "#171717",
    features: [
      "Modern landing page",
      "Responsive design",
      "Fast performance",
      "Clean typography",
      "Lightweight structure",
      "Accessible layout",
    ],
    challenges: [
      "Delivering visual impact with a minimal single-page structure.",
      "Maintaining excellent performance on slower networks and mobile devices.",
      "Keeping content easy to update as personal branding evolves.",
    ],
    solutions: [
      "Used a focused section layout with strong typographic hierarchy and generous whitespace.",
      "Optimized assets and rendering for fast initial load and smooth scrolling.",
      "Built with reusable components so content updates require minimal code changes.",
    ],
    results: [
      "A credible personal web presence that loads quickly and reads clearly.",
      "Responsive experience suitable for sharing across professional channels.",
      "A simple foundation that can be extended with additional sections over time.",
    ],
  },
  {
    slug: "enterprise-business-platform",
    title: "Enterprise Business Management Platform",
    shortDescription:
      "A large-scale business management platform spanning CRM, POS, inventory, analytics, and multi-module operations.",
    fullDescription:
      "This case study reflects professional experience contributing to a large-scale business management platform — presented generically without client-specific or confidential details. The platform brings together CRM, POS, inventory, reporting, and administrative tooling into a unified system used to support day-to-day business operations.\n\nI contributed to developing, maintaining, and improving a large-scale business management platform by building new features, fixing production issues, improving performance, and supporting multiple business modules.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
      "Cloudflare",
      "Vercel",
    ],
    category: "saas",
    segment: "enterprise-platform",
    featured: true,
    pinned: true,
    images: [],
    year: 2026,
    gradient: "from-blue-950 via-slate-900 to-zinc-950",
    accent: "#93c5fd",
    features: [
      "CRM",
      "POS",
      "Inventory management",
      "Reports and analytics",
      "Admin dashboard",
      "Authentication",
      "User roles and permissions",
      "Notifications",
      "Orders",
      "Customer management",
    ],
    challenges: [
      "Supporting multiple interconnected business modules within a single platform.",
      "Resolving production issues while continuing to deliver new functionality.",
      "Maintaining performance and reliability as features and data complexity grew.",
      "Coordinating work across authentication, roles, and module-specific business logic.",
    ],
    solutions: [
      "Developed and integrated features across CRM, POS, inventory, and reporting modules.",
      "Investigated and resolved production bugs to keep critical workflows available.",
      "Improved application performance and maintainability through targeted refactoring.",
      "Collaborated on API design, database structures, and deployment of application updates.",
    ],
    results: [
      "Contributed to the ongoing delivery and improvement of a multi-module business platform.",
      "Helped maintain system stability while new capabilities were introduced across teams.",
      "Supported reliable day-to-day operations through feature development and production support.",
      "Strengthened platform usability and development workflow through continuous improvements.",
    ],
  },
  ...additionalProjects,
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    );
}

export function getClientProjects(): Project[] {
  return projects.filter((project) => project.isClientProject);
}

export function getPersonalProjects(): Project[] {
  return projects.filter((project) => !project.isClientProject);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}
