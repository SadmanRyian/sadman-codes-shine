import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
            <div>
              {eyebrow && (
                <p className="font-mono text-xs text-primary tracking-widest uppercase">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                  {title}
                </h2>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
