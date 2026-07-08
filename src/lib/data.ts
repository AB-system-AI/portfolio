export const siteConfig = {
  name: "Abdelrahman Mohamed",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences with precision and purpose.",
  email: "hello@abdelrahman.dev",
  location: "Cairo, Egypt",
  github: "https://github.com/abdelrahman",
  linkedin: "https://linkedin.com/in/abdelrahman",
  twitter: "https://twitter.com/abdelrahman",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const timeline = [
  {
    year: "2024 — Present",
    role: "Senior Full-Stack Developer",
    company: "TechVentures Inc.",
    description:
      "Leading architecture and development of enterprise SaaS platforms serving 50K+ users. Mentoring junior developers and driving technical excellence across teams.",
  },
  {
    year: "2022 — 2024",
    role: "Full-Stack Developer",
    company: "Digital Craft Studio",
    description:
      "Built scalable web applications using Next.js, React, and Node.js. Improved application performance by 60% and reduced deployment time by 40%.",
  },
  {
    year: "2020 — 2022",
    role: "Frontend Developer",
    company: "Creative Labs",
    description:
      "Developed pixel-perfect interfaces for Fortune 500 clients. Specialized in React, TypeScript, and modern CSS architectures.",
  },
  {
    year: "2018 — 2020",
    role: "Computer Science",
    company: "Cairo University",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction.",
  },
];

export const projects = [
  {
    id: "nexus-platform",
    title: "Nexus Platform",
    description:
      "Enterprise collaboration platform with real-time messaging, project management, and AI-powered insights. Serving 10,000+ daily active users.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/abdelrahman/nexus",
    gradient: "from-zinc-900 via-zinc-800 to-zinc-950",
    accent: "#fafafa",
  },
  {
    id: "aurora-finance",
    title: "Aurora Finance",
    description:
      "Modern fintech dashboard with portfolio tracking, real-time market data, and predictive analytics powered by machine learning models.",
    technologies: ["React", "Node.js", "GraphQL", "D3.js", "MongoDB"],
    liveUrl: "https://aurora-finance.vercel.app",
    githubUrl: "https://github.com/abdelrahman/aurora",
    gradient: "from-neutral-100 via-neutral-200 to-neutral-300",
    accent: "#171717",
  },
  {
    id: "pulse-health",
    title: "Pulse Health",
    description:
      "Telemedicine application connecting patients with healthcare providers. Features video consultations, prescription management, and health records.",
    technologies: ["Next.js", "WebRTC", "Prisma", "Tailwind CSS", "Vercel"],
    liveUrl: "https://pulse-health.vercel.app",
    githubUrl: "https://github.com/abdelrahman/pulse",
    gradient: "from-zinc-800 via-zinc-700 to-zinc-900",
    accent: "#e4e4e7",
  },
  {
    id: "vertex-commerce",
    title: "Vertex Commerce",
    description:
      "Headless e-commerce solution with customizable storefronts, inventory management, and seamless payment integrations across 30+ countries.",
    technologies: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Edge"],
    liveUrl: "https://vertex-commerce.vercel.app",
    githubUrl: "https://github.com/abdelrahman/vertex",
    gradient: "from-neutral-50 via-white to-neutral-100",
    accent: "#0a0a0a",
  },
  {
    id: "cipher-vault",
    title: "Cipher Vault",
    description:
      "End-to-end encrypted password manager with biometric authentication, secure sharing, and cross-platform synchronization.",
    technologies: ["React Native", "Rust", "WebAssembly", "SQLite", "Crypto"],
    liveUrl: "https://cipher-vault.vercel.app",
    githubUrl: "https://github.com/abdelrahman/cipher",
    gradient: "from-zinc-950 via-black to-zinc-900",
    accent: "#ffffff",
  },
  {
    id: "flow-automation",
    title: "Flow Automation",
    description:
      "Visual workflow automation tool enabling non-technical users to build complex integrations between 200+ services without writing code.",
    technologies: ["Vue.js", "Python", "Docker", "Kubernetes", "Redis"],
    liveUrl: "https://flow-automation.vercel.app",
    githubUrl: "https://github.com/abdelrahman/flow",
    gradient: "from-neutral-200 via-neutral-100 to-zinc-200",
    accent: "#18181b",
  },
];

export const services = [
  {
    icon: "Code2",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. From MVPs to enterprise-scale platforms, delivered with clean architecture and exceptional performance.",
    features: ["React & Next.js", "TypeScript", "API Design", "Performance Optimization"],
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile experiences that feel fluid and intuitive. Optimized for both iOS and Android with shared business logic.",
    features: ["React Native", "Expo", "App Store Deployment", "Push Notifications"],
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality. Wireframes, prototypes, and design systems that scale with your product.",
    features: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: "Cloud",
    title: "Cloud Architecture",
    description:
      "Scalable cloud infrastructure designed for reliability and cost efficiency. CI/CD pipelines, monitoring, and automated deployments.",
    features: ["AWS & Vercel", "Docker", "CI/CD", "Infrastructure as Code"],
  },
  {
    icon: "Bot",
    title: "AI Integration",
    description:
      "Intelligent features powered by modern AI. Chatbots, content generation, recommendation engines, and custom ML model integration.",
    features: ["OpenAI API", "LangChain", "Vector Databases", "Custom Models"],
  },
  {
    icon: "Shield",
    title: "Technical Consulting",
    description:
      "Strategic technical guidance for startups and enterprises. Architecture reviews, code audits, and technology roadmap planning.",
    features: ["Code Reviews", "Architecture", "Team Mentoring", "Tech Strategy"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 88 },
      { name: "Terraform", level: 72 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", level: 92 },
      { name: "Figma", level: 80 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Testing", level: 85 },
      { name: "System Design", level: 82 },
    ],
  },
];

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];
