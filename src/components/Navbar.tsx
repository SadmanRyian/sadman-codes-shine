import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About", hash: "about" },
  { to: "/#projects", label: "Projects", hash: "projects" },
  { to: "/#contact", label: "Contact", hash: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm tracking-tight rounded-md">
            <span className="text-primary">~/</span>sadman.ryian
          </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const isActive =
              l.hash
                ? location.pathname === "/" && location.hash === l.hash
                : location.pathname === l.to && !location.hash;
            return (
              <a
                key={l.to + l.label}
                href={l.hash ? `/#${l.hash}` : l.to}
                className={`transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center size-9 rounded-full border border-border bg-surface/60 backdrop-blur-md hover:border-primary hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="mailto:sadmanriyanzisan@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Let's talk
            <span className="size-1.5 rounded-full bg-primary glow" />
          </a>
        </div>
      </div>
      </header>
    </>
  );
}
