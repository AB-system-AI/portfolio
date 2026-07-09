interface ProjectCaseStudyListProps {
  title: string;
  items: string[];
}

export function ProjectCaseStudyList({ title, items }: ProjectCaseStudyListProps) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
