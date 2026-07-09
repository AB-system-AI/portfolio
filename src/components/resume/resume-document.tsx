import {
  getResumeContact,
  getResumeEducation,
  getResumeExperience,
  getResumeFeaturedProjects,
  getResumeLanguages,
  getResumeSkills,
  resumeAvailability,
  resumeSummary,
} from "@/lib/content/resume";
import { formatExperiencePeriod } from "@/lib/content/experience";
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
  const contact = getResumeContact();
  const experience = getResumeExperience();
  const projects = getResumeFeaturedProjects();
  const skills = getResumeSkills();
  const education = getResumeEducation();
  const languages = getResumeLanguages();

  return (
    <article className="resume-sheet mx-auto bg-white text-black">
      <header className="resume-header border-b border-black/15 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="resume-name font-heading text-[1.65rem] font-semibold leading-tight tracking-tight">
              {contact.name}
            </h1>
            <p className="resume-title mt-1 text-[0.82rem] font-medium text-black/75">
              {contact.title}
            </p>
            <p className="mt-1 text-[0.78rem] text-black/65">{contact.location}</p>
          </div>
          <ResumeQrCode />
        </div>

        <p className="resume-contact mt-3 text-[0.72rem] leading-relaxed text-black/80">
          <a href={`mailto:${contact.email}`} className="resume-link">
            {contact.email}
          </a>
          <span className="resume-separator"> · </span>
          <a href={contact.whatsappUrl} className="resume-link">
            WhatsApp: {contact.whatsappLabel}
          </a>
          <span className="resume-separator"> · </span>
          <a href={contact.githubUrl} className="resume-link">
            {contact.githubUrl.replace("https://", "")}
          </a>
          <span className="resume-separator"> · </span>
          <a href={contact.linkedinUrl} className="resume-link">
            {contact.linkedinUrl.replace("https://", "")}
          </a>
          <span className="resume-separator"> · </span>
          <a href={contact.portfolioUrl} className="resume-link">
            {contact.portfolioUrl.replace("https://", "")}
          </a>
        </p>
      </header>

      <ResumeSection title="Professional Summary">
        <p className="resume-body">{resumeSummary}</p>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <div className="space-y-1.5">
          {skills.map((group) => (
            <p key={group.category} className="resume-body">
              <span className="font-semibold text-black">{group.category}: </span>
              <span>{group.items.join(", ")}</span>
            </p>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Professional Experience">
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
              <span className="font-semibold text-black">Technologies: </span>
              {role.technologies.join(", ")}
            </p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Featured Projects">
        <div className="space-y-2.5">
          {projects.map((project) => (
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
        <ResumeSection title="Education">
          <p className="resume-body font-semibold text-black">
            {education.institution}
          </p>
          <p className="resume-meta">
            Expected Graduation: {education.expectedGraduation}
          </p>
        </ResumeSection>

        <ResumeSection title="Languages">
          <ul className="resume-list">
            {languages.map((language) => (
              <li key={language.name}>
                {language.name} — {language.level}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Availability">
          <p className="resume-body">{resumeAvailability}</p>
        </ResumeSection>
      </div>
    </article>
  );
}
