import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, ExternalLink, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";

const socials: { name: string; icon: LucideIcon; href: string }[] = [
  { name: "X (Twitter)", icon: Twitter, href: "https://www.x.com/_saurabh87" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/jaiswal-saurabh87/" },
  { name: "GitHub", icon: Github, href: "https://www.github.com/jaiswal-saurabh87/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/jaiswal__saurabh_" },
];

export function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl p-[1px] bg-gradient-to-br from-[#3b82f6]/30 via-[#6366f1]/20 to-[#8b5cf6]/30"
      >
        <div className="glass !rounded-[calc(1.5rem-1px)] px-6 sm:px-10 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left 60% */}
            <div className="lg:col-span-3 space-y-4">
              <Logo />
              <p className="text-sm text-[color:var(--fg-soft)]">
                Built with <span className="text-[#ef4444]">❤️</span> in India
              </p>
              <p className="text-sm text-[color:var(--fg-muted)]">
                © Saurabh Jaiswal • 2026
              </p>
              <a
                href="https://github.com/jaiswal-saurabh87"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--fg-soft)] hover:text-[color:var(--fg-strong)] transition-colors group"
              >
                <Github className="h-4 w-4" />
                github.com/jaiswal-saurabh87
                <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Right 40% */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)]">
                Follow me on
              </h4>
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative grid place-items-center h-11 w-11 rounded-full border border-[color:var(--border-mid)] bg-[color:var(--surface-2)] backdrop-blur-xl transition-shadow hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.7)]"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b82f6]/0 via-[#6366f1]/0 to-[#8b5cf6]/0 group-hover:from-[#3b82f6]/30 group-hover:via-[#6366f1]/20 group-hover:to-[#8b5cf6]/30 transition-all" />
                      <Icon className="relative h-4.5 w-4.5 text-[color:var(--fg)] group-hover:text-white" />
                    </motion.a>
                  );
                })}
              </div>
              <div>
                <a href="https://github.com/jaiswal-saurabh87/seo-analyzer/" target="_blank" rel="noreferrer" className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors">
                <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)] mt-5">
                Star this repository on <br></br>GitHub if you like it!
                </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
