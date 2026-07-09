import type { About } from "./types";

export const about: About = {
  heroTitle: "Building software that solves real business problems",
  summary:
    "I'm a Full-Stack Web Developer and Computer & Data Science student with a passion for building modern web applications, business systems, and AI-powered solutions. I enjoy transforming ideas into fast, scalable, and user-friendly products using modern technologies and clean software architecture. My goal is to deliver software that solves real business problems while providing an excellent user experience.",
  background:
    "I'm currently studying at the Faculty of Computer and Data Science while continuously improving my practical skills through real-world projects. Alongside my academic studies, I focus on mastering modern web development, backend systems, cloud deployment, databases, and AI integration by building complete production-ready applications.",
  specializations: [
    "Full-Stack Web Development",
    "Business Management Systems",
    "POS & ERP Solutions",
    "Dashboard & Admin Panels",
    "AI Integration",
    "REST APIs",
    "Database Design",
    "Performance Optimization",
    "Cloud Deployment",
    "Modern UI/UX Implementation",
  ],
  lookingFor:
    "I'm currently looking for freelance projects, remote opportunities, internships, and long-term collaborations where I can build high-quality software, solve challenging problems, and continue growing as a professional developer.",
  differentiators: [
    "I enjoy building complete products from idea to deployment.",
    "I always focus on clean architecture, scalability, and maintainable code.",
    "I continuously learn modern technologies and industry best practices.",
    "I care about performance, security, and user experience in every project.",
    "I communicate clearly and always aim to deliver reliable, production-ready solutions.",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2" },
  ],
};

export function getAbout(): About {
  return about;
}
