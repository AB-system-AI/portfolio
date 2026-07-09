import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "oncall-full-stack-developer",
    company: "OnCall",
    role: "Full-Stack Web Developer",
    startDate: "March 2026",
    endDate: "July 2026",
    location: "Remote",
    summary:
      "Worked as a Full-Stack Web Developer responsible for building, maintaining, and improving business systems and web applications for multiple clients. Contributed throughout the complete software development lifecycle, from planning and implementation to deployment, maintenance, and continuous improvements.",
    responsibilities: [
      "Designed, developed, and maintained full-stack web applications.",
      "Built new features based on business requirements.",
      "Investigated and resolved bugs in production systems.",
      "Improved application performance, reliability, and maintainability.",
      "Developed and integrated REST APIs.",
      "Designed and maintained database structures and business logic.",
      "Deployed and monitored application updates.",
      "Worked on multiple client projects simultaneously.",
      "Collaborated on planning, testing, debugging, and feature releases.",
      "Maintained existing systems while continuously adding new functionality.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Cloudflare",
      "Vercel",
      "Git",
      "GitHub",
    ],
    achievements: [
      "Delivered production-ready features across multiple business projects.",
      "Successfully maintained and enhanced several client systems.",
      "Resolved technical issues efficiently to keep projects running smoothly.",
      "Contributed to building complete applications from development through deployment.",
      "Helped improve system stability, usability, and overall development workflow.",
    ],
    businessImpact:
      "Contributed to the successful delivery and continuous improvement of software solutions for multiple business clients by developing new features, maintaining existing systems, and ensuring reliable application performance.",
  },
];

export function getAllExperience(): Experience[] {
  return experience;
}

export function formatExperiencePeriod(item: Experience): string {
  return `${item.startDate} – ${item.endDate}`;
}
