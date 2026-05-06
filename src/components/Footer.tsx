import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Sadman Ryian — built from scratch.</p>
        <div className="flex flex-wrap gap-6">
          <Link to="/accessibility" className="hover:text-primary transition-colors">
            Accessibility
          </Link>
          <a href="https://github.com/sadmanryian" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:sadmanriyanzisan@gmail.com" className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
