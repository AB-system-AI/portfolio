import type { About } from "./types";

export const about: About = {
  heroTitle: "Software built to help companies work more efficiently",
  summary:
    "I build modern web applications and business systems that help companies work more efficiently. As a Full-Stack Web Developer and Computer & Data Science student, I partner with organizations to transform operational challenges into fast, scalable, and user-friendly software — delivered with clean architecture and a focus on measurable business outcomes.",
  background:
    "I'm currently studying at the Faculty of Computer and Data Science while continuously improving my practical skills through real-world projects. Alongside my academic studies, I focus on mastering modern web development, backend systems, cloud deployment, databases, and API development by building complete production-ready applications for businesses and institutions.",
  specializations: [
    "Full-Stack Web Development",
    "Business Management Systems",
    "POS & ERP Solutions",
    "Dashboard & Admin Panels",
    "REST APIs",
    "Database Design",
    "Performance Optimization",
    "Cloud Deployment",
    "Modern UI/UX Implementation",
  ],
  lookingFor:
    "I'm looking to partner with companies and organizations that need reliable software — from business websites and management systems to custom platforms and backend infrastructure. Whether you need a new product built or an existing workflow modernized, I'm focused on delivering production-ready solutions with clear communication and long-term maintainability.",
  differentiators: [
    "I build complete products from requirements through deployment.",
    "I focus on clean architecture, scalability, and maintainable code.",
    "I apply modern technologies and industry best practices on every project.",
    "I prioritize performance, security, and user experience in every deliverable.",
    "I communicate clearly and deliver reliable, production-ready solutions.",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2" },
  ],
};

export function getAbout(): About {
  return about;
}
