import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Star } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-500 hover:border-primary/60 hover:-translate-y-1 ${
        project.featured ? "md:col-span-2 md:row-span-1" : ""
      }`}
    >
      {project.featured && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          <Star className="size-3" /> Featured
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-primary">{project.category} · {project.year}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>
        <Link
          to="/projects/$projectId"
          params={{ projectId: project.id }}
          aria-label={`View ${project.title}`}
          className="shrink-0 size-10 grid place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        >
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-0 -rotate-45" />
        </Link>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface-elevated px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 text-sm">
        <Link
          to="/projects/$projectId"
          params={{ projectId: project.id }}
          className="font-medium text-primary hover:text-primary-glow transition-colors"
        >
          View case study →
        </Link>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="ml-auto text-muted-foreground hover:text-foreground transition-colors">
            <Github className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
}
