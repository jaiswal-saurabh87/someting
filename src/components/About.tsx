import { motion } from "motion/react";
import { User } from "lucide-react";

const tech = ["React", "Node.js", "Tailwind", "TypeScript"];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <span className="glass inline-flex items-center px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)] !rounded-full">
            About Us
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--fg-strong)]">
            Our <span className="text-gradient-brand">Mission</span> &{" "}
            <span className="text-gradient-brand">Developer</span>
          </h2>
          <div className="mt-6 space-y-5 text-base sm:text-lg text-[color:var(--fg-soft)] leading-relaxed">
            <p>
              SEOBuddy is an AI-powered SEO auditing platform built to make website optimization simple, accessible, and understandable for everyone. Whether you're a student, freelancer, blogger, startup founder, or business owner, SEOBuddy helps identify SEO issues, analyze website performance, and improve search visibility through intelligent recommendations.
            </p>
            <p>
              This project focuses on delivering clear insights instead of confusing technical reports, enabling users to optimize their websites faster and more effectively.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#3b82f6]/50 via-[#6366f1]/30 to-[#8b5cf6]/50 transition-shadow duration-500 hover:shadow-[0_20px_80px_-20px_rgba(139,92,246,0.55)]">
            <div className="glass !rounded-[calc(1.5rem-1px)] p-8 text-center">
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] blur-xl opacity-60" />
                <div className="relative grid place-items-center h-24 w-24 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.7)]">
                  <User className="h-10 w-10 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[color:var(--fg-strong)]">
                Saurabh Jaiswal
              </h3>
              <p className="mt-1 text-sm text-gradient-brand font-medium">
                Full Stack Developer · SEO Enthusiast
              </p>
              <p className="mt-4 text-sm text-[color:var(--fg-soft)] leading-relaxed">
                Passionate about building clean user experiences, AI-powered tools, and scalable web applications that solve real-world problems.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium text-[color:var(--fg)] border border-[color:var(--border-mid)] bg-[color:var(--surface-1)] transition-all hover:border-[#8b5cf6]/60 hover:shadow-[0_0_18px_-4px_rgba(139,92,246,0.6)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
