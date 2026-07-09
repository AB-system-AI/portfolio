import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Responsive Design", level: 95 },
      { name: "Framer Motion", level: 75 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Hono", level: 75 },
      { name: "REST API Development", level: 90 },
      { name: "Authentication & Authorization", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 75 },
      { name: "Drizzle ORM", level: 85 },
      { name: "Prisma ORM", level: 70 },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel", level: 90 },
      { name: "Cloudflare Pages", level: 80 },
      { name: "Cloudflare Workers", level: 75 },
      { name: "Cloudflare D1", level: 75 },
      { name: "Cloudflare R2", level: 75 },
      { name: "Linux Server Basics", level: 70 },
      { name: "Deployment & Hosting", level: 85 },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 70 },
      { name: "npm", level: 90 },
      { name: "pnpm", level: 85 },
      { name: "Bun", level: 85 },
    ],
  },
];

export function getAllSkills(): SkillGroup[] {
  return skills;
}
