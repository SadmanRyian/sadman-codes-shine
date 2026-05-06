import { motion } from "framer-motion";

/**
 * Apple-style "liquid glass" background — slow drifting blurred gradient blobs
 * with subtle parallax. Sits behind all content (pointer-events: none).
 */
export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Liquid blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-32 size-[42rem] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary) 55%, transparent), transparent 60%)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-40 size-[36rem] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, color-mix(in oklab, var(--accent) 60%, transparent), transparent 65%)",
        }}
        animate={{ x: [0, -60, 30, 0], y: [0, 40, -50, 0], scale: [1, 0.9, 1.05, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-10rem] left-1/3 size-[40rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary-glow) 55%, transparent), transparent 60%)",
        }}
        animate={{ x: [0, 40, -60, 0], y: [0, -40, 20, 0], scale: [1, 1.08, 0.92, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating glass shards */}
      {[
        { top: "12%", left: "70%", size: 90, delay: 0, dur: 14 },
        { top: "65%", left: "12%", size: 70, delay: 1.5, dur: 18 },
        { top: "78%", left: "55%", size: 110, delay: 0.8, dur: 20 },
        { top: "28%", left: "40%", size: 56, delay: 2.2, dur: 16 },
      ].map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-2xl border border-white/15 backdrop-blur-xl"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--foreground) 8%, transparent), color-mix(in oklab, var(--primary) 10%, transparent))",
            boxShadow:
              "0 10px 40px -10px color-mix(in oklab, var(--primary) 25%, transparent), inset 0 1px 0 color-mix(in oklab, white 20%, transparent)",
          }}
          animate={{
            y: [0, -30, 10, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  );
}
