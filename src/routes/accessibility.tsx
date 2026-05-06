import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Keyboard, Sparkles, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Sadman Ryian" },
      {
        name: "description",
        content:
          "How this site handles motion, contrast, and keyboard support — and how to tune it to your needs.",
      },
      { property: "og:title", content: "Accessibility — Sadman Ryian" },
      {
        property: "og:description",
        content: "Motion, contrast, and keyboard support on sadman.ryian's portfolio.",
      },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Back home
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs text-primary tracking-widest uppercase">
            Accessibility
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built to be usable by everyone.
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            This site aims to be calm, legible, and navigable without a mouse. Here's
            what's in place — and how to adjust it to match your preferences.
          </p>
        </header>

        <div className="mt-12 space-y-6">
          <section className="rounded-2xl border border-border bg-card p-6 card-shadow">
            <div className="flex items-center gap-3">
              <span className="size-10 grid place-items-center rounded-lg bg-surface-elevated text-primary">
                <Sparkles className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">Motion</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The animated background and scroll-triggered transitions respect your
              system's <span className="text-foreground">prefers-reduced-motion</span>{" "}
              setting. When enabled, the floating glass shards are removed and the
              drifting blobs hold still — leaving a calm, static gradient.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              You can toggle this in your OS: macOS → Settings → Accessibility →
              Display → Reduce motion. Windows → Settings → Accessibility → Visual
              effects → Animation effects.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 card-shadow">
            <div className="flex items-center gap-3">
              <span className="size-10 grid place-items-center rounded-lg bg-surface-elevated text-primary">
                <Eye className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">Contrast & color</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Both light and dark themes are tuned to meet WCAG AA contrast for body
              text. Use the sun/moon toggle in the navbar to switch — your choice is
              remembered across visits. Color is never the only signal; icons and
              text labels accompany every interactive cue.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 card-shadow">
            <div className="flex items-center gap-3">
              <span className="size-10 grid place-items-center rounded-lg bg-surface-elevated text-primary">
                <Keyboard className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">Keyboard support</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every link, button, and project card is reachable with{" "}
              <kbd className="font-mono text-xs px-1.5 py-0.5 rounded border border-border bg-surface">
                Tab
              </kbd>{" "}
              and activated with{" "}
              <kbd className="font-mono text-xs px-1.5 py-0.5 rounded border border-border bg-surface">
                Enter
              </kbd>
              . Focus rings are visible on all interactive elements, and the page
              uses semantic landmarks (header, main, footer) so screen-reader users
              can jump between regions.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Found something that doesn't work for you?{" "}
          <a
            href="mailto:sadmanriyanzisan@gmail.com"
            className="text-primary hover:underline"
          >
            Email me
          </a>{" "}
          — I'll fix it.
        </p>
      </main>
      <Footer />
    </div>
  );
}
