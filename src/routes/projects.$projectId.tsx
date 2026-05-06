import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Sadman Ryian` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — Case Study` },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Project — Sadman Ryian" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center px-6">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" /> All projects
          </Link>

          <header className="mt-10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs text-primary">{project.category}</span>
              <span className="text-muted-foreground">·</span>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                  <Star className="size-3" /> Featured
                </span>
              )}
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">{project.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm hover:border-foreground transition-colors">
                  <Github className="size-4" /> Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:glow transition-all">
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              )}
            </div>
          </header>

          <div className="mt-12 aspect-[16/8] rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-elevated overflow-hidden grid place-items-center relative">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <p className="relative font-mono text-6xl md:text-8xl text-gradient font-bold">
              {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
            </p>
          </div>

          <Block title="Overview">{project.overview}</Block>
          <Block title="Problem">{project.problem}</Block>
          <Block title="Solution & Approach">{project.solution}</Block>

          <BlockList title="Key Features" items={project.features} />

          <div>
            <SectionHeading>Tech Stack</SectionHeading>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <BlockList title="Challenges" items={project.challenges} />
          <BlockList title="Future Improvements" items={project.improvements} />

          {/* Next */}
          <div className="mt-24 pt-10 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Next project</p>
            <Link
              to="/projects/$projectId"
              params={{ projectId: next.id }}
              className="group mt-3 flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {next.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{next.tagline}</p>
              </div>
              <span className="text-primary text-2xl">→</span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-mono text-xs uppercase tracking-widest text-primary">{children}</h2>;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <SectionHeading>{title}</SectionHeading>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function BlockList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-12">
      <SectionHeading>{title}</SectionHeading>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="text-primary mt-2 size-1.5 rounded-full bg-primary shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
