import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient (theme-aware) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--hero-glow-top), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 20%, var(--hero-glow-accent), transparent 60%), var(--hero-base)",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.5] animate-grid"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Floating blurred orbs with parallax */}
      <div
        className="absolute -left-32 top-20 h-[480px] w-[480px] rounded-full opacity-50 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          transform: "translate3d(var(--mx,0), var(--my,0), 0)",
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="absolute -right-20 top-40 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          transform: "translate3d(calc(var(--mx,0) * -1), calc(var(--my,0) * -1), 0)",
          transition: "transform 0.4s ease-out",
        }}
      />
      <div
        className="absolute left-1/2 bottom-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(ellipse, #22d3ee 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: "var(--particle)",
            boxShadow: "0 0 8px var(--particle-shadow)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }
          }
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
    </div>
  );
}
