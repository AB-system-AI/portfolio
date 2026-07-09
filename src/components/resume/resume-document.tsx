"use client";

import { formatExperiencePeriod } from "@/lib/content/experience";
import { siteUrl } from "@/lib/site-url";
import { useLocale } from "@/components/providers/locale-provider";
import { ResumeQrCode } from "./resume-qr-code";

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      {children}
    </section>
  );
}

export function ResumeDocument() {
  const {
    about,
    siteConfig,
    socialLinks,
    experience,
    featuredProjects,
    skills,
    resumeSummary,
    resumeAvailability,
    ui,
  } = useLocale();

  const github = socialLinks.find((link) => link.platform === "github");
  const linkedin = socialLinks.find((link) => link.platform === "linkedin");
  const whatsapp = socialLinks.find((link) => link.platform === "whatsapp");

  const resumeSkills = skills.map((group) => ({
    category: group.category,
    items: group.items.map((skill) => skill.name),
  }));

  return (
    <article className="resume-sheet mx-auto bg-white text-black">
      <header className="resume-header border-b border-black/15 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="resume-name font-heading text-[1.65rem] font-semibold leading-tight tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="resume-title mt-1 text-[0.82rem] font-medium text-black/75">
              {siteConfig.title}
            </p>
            <p className="mt-1 text-[0.78rem] text-black/65">{siteConfig.location}</p>
          </div>
          <ResumeQrCode />
        </div>

        <p className="resume-contact mt-3 text-[0.72rem] leading-relaxed text-black/80">
          <a href={`mailto:${siteConfig.email}`} className="resume-link">
            {siteConfig.email}
          </a>
          <span className="resume-separator"> · </span>
          <a href={whatsapp?.url ?? siteConfig.whatsapp} className="resume-link">
            {ui.contact.whatsapp}: {siteConfig.phone}
          </a>
          <span className="resume-separator"> · </span>
          <a href={github?.url ?? ""} className="resume-link">
            {(github?.url ?? "").replace("https://", "")}
          </a>
          <span className="resume-separator"> · </span>
          <a href={linkedin?.url ?? ""} className="resume-link">
            {(linkedin?.url ?? "").replace("https://", "")}
          </a>
          <span className="resume-separator"> · </span>
          <a href={siteUrl} className="resume-link">
            {siteUrl.replace("https://", "")}
          </a>
        </p>
      </header>

      <ResumeSection title={ui.resume.summary}>
        <p className="resume-body">{resumeSummary}</p>
      </ResumeSection>

      <ResumeSection title={ui.resume.skills}>
        <div className="space-y-1.5">
          {resumeSkills.map((group) => (
            <p key={group.category} className="resume-body">
              <span className="font-semibold text-black">{group.category}: </span>
              <span>{group.items.join(", ")}</span>
            </p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title={ui.resume.experience}>
        {experience.map((role) => (
          <div key={role.id} className="resume-entry">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="resume-entry-title">{role.role}</h3>
              <p className="resume-meta">{formatExperiencePeriod(role)}</p>
            </div>
            <p className="resume-subtitle">
              {role.company} · {role.location}
            </p>
            <p className="resume-body mt-2">{role.summary}</p>
            <ul className="resume-list mt-2">
              {role.responsibilities.slice(0, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="resume-body mt-2">
              <span className="font-semibold text-black">{ui.resume.technologiesColon} </span>
              {role.technologies.join(", ")}
            </p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title={ui.resume.featuredProjects}>
        <div className="space-y-2.5">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="resume-entry-compact">
              <p className="resume-body">
                <span className="font-semibold text-black">{project.title}</span>
                {" — "}
                {project.shortDescription}
              </p>
              <p className="resume-meta mt-0.5">
                {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <div className="resume-footer-grid">
        <ResumeSection title={ui.resume.education}>
          <p className="resume-body font-semibold text-black">
            {siteConfig.education.institution}
          </p>
          <p className="resume-meta">
            {ui.resume.expectedGraduation} {siteConfig.education.expectedGraduation}
          </p>
        </ResumeSection>

        <ResumeSection title={ui.resume.languages}>
          <ul className="resume-list">
            {about.languages.map((language) => (
              <li key={language.name}>
                {language.name} — {language.level}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title={ui.resume.availability}>
          <p className="resume-body">{resumeAvailability}</p>
        </ResumeSection>
      </div>
    </article>
  );
}
