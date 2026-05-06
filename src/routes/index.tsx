import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Mail, Brain, Code2, Network, Wrench, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sadman Ryian — Software Engineer | AI Systems & Secure Web Apps" },
      { name: "description", content: "Portfolio of Sadman Ryian — building intelligent, scalable, and secure software systems across AI, web, and networking." },
      { property: "og:title", content: "Sadman Ryian — Software Engineer" },
      { property: "og:description", content: "AI systems & secure web applications." },
    ],
  }),
  component: Home,
});

const skillGroups = [
  { icon: Brain, title: "AI / ML", items: ["PyTorch", "DenseNet121", "Transformers", "Grad-CAM", "Self-supervised Learning"] },
  { icon: Code2, title: "Web Development", items: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"] },
  { icon: Network, title: "Systems & Networking", items: ["C / C++", "ONE Simulator", "DTN", "Operating Systems", "DBMS"] },
  { icon: Wrench, title: "Tools & Cloud", items: ["Git / GitHub", "MongoDB", "MySQL", "VS Code", "Linux"] },
];

function Home() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs font-mono">
            <span className="size-1.5 rounded-full bg-primary glow" />
            Available for internships & collaborations
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Sadman Ryian.
            <br />
            <span className="text-gradient">AI systems & secure web apps.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science engineer building <span className="text-foreground">intelligent, scalable, and secure software systems</span> — from explainable medical AI to opportunistic network frameworks.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/sadmanryian"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-foreground transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="size-4" /> Contact
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { k: "Focus", v: "AI · Web · Security" },
              { k: "Projects", v: `${projects.length} shipped` },
              { k: "Stack", v: "Python · React · C++" },
              { k: "Based in", v: "Dhaka, BD" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-5">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{s.k}</p>
                <p className="mt-1.5 text-sm font-medium">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="01 / About" title="Engineering across the stack — and the model.">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground">Computer Science & Engineering</span> student at East West University, focused on building software that bridges <span className="text-foreground">applied AI</span>, <span className="text-foreground">modern web systems</span>, and <span className="text-foreground">low-level networking</span>.
            </p>
            <p>
              My research project <span className="text-foreground">UltrasoundNet</span> uses a hybrid CNN + Transformer architecture with Grad-CAM explainability to classify breast tumors from noisy ultrasound scans. On the systems side, I implemented a <span className="text-foreground">Content-Centric Networking</span> framework on the ONE simulator for opportunistic IoV environments.
            </p>
            <p>
              I'm increasingly drawn to <span className="text-foreground">cloud security and secure-by-design web applications</span> — designing systems where reliability, observability, and trust are first-class concerns.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 card-shadow">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="size-4" />
              <p className="font-mono text-xs uppercase tracking-widest">Currently exploring</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {["Secure web architectures", "Explainable AI in healthcare", "Edge / opportunistic networks", "Cloud security fundamentals"].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="02 / Skills" title="Tools I reach for.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="size-10 grid place-items-center rounded-lg bg-surface-elevated text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="03 / Selected work" title="Projects.">
        <div className="grid md:grid-cols-2 gap-5">
          {featured && <ProjectCard project={featured} />}
          {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="04 / Contact" title="Let's build something.">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center card-shadow relative overflow-hidden">
          <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Have an idea worth <span className="text-gradient">engineering?</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              I'm open to internships, research collaborations, and freelance work in AI, web, and secure systems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:sadmanriyanzisan@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:glow transition-all">
                <Mail className="size-4" /> sadmanriyanzisan@gmail.com
              </a>
              <a href="https://github.com/sadmanryian" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-foreground transition-colors">
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
