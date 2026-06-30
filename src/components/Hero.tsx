import { motion } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Bot, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroBackground } from "@/components/HeroBackground";
import { DashboardIllustration } from "@/components/DashboardIllustration";

const ease = [0.16, 1, 0.3, 1] as const;

const microFeatures = [
  { icon: Zap, label: "Instant Analysis" },
  { icon: TrendingUp, label: "Better Rankings" },
  { icon: Bot, label: "AI Suggestions" },
  { icon: Search, label: "Technical SEO" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-24 sm:pt-36 lg:pt-40">
      <HeroBackground />
      <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[3fr_2fr] lg:gap-10 lg:px-10">
        {/* Left - Content */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-[color:var(--fg-strong)] sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFeatureSettings: '"ss01"' }}
          >
            Start{" "}
            <span className="text-gradient-brand animate-gradient">Optimizing</span>{" "}
            Your{" "}
            <span className="text-gradient-brand animate-gradient">Website</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--fg-soft)] sm:text-lg"
          >
            Run your website review today to get an instant SEO analysis, discover critical
            issues, improve search rankings, and unlock your website's full potential with
            AI-powered recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
            id="cta"
          >
            <Link
              to="/analyzer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1.5px] animate-glow-pulse"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22d3ee] via-[#6366f1] to-[#8b5cf6] animate-gradient" />
              <span
                className="relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-[color:var(--fg-strong)] backdrop-blur-xl transition-all group-hover:-translate-y-0.5"
                style={{ background: "var(--cta-inner)" }}
              >
                Check Your Score
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <a
              href="/docs"
              className="rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] px-6 py-3.5 text-sm font-medium text-[color:var(--fg-soft)] backdrop-blur-md transition-all hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--fg-strong)]"
            >
              See how it works
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
            className="mt-8 flex flex-wrap gap-2.5"
            aria-label="Key features"
          >
            {microFeatures.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
                className="group flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] px-3.5 py-2 text-xs font-medium text-[color:var(--fg-soft)] backdrop-blur-md transition-all hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--fg-strong)]"
              >
                <Icon className="h-3.5 w-3.5 text-[#22d3ee] transition-transform group-hover:scale-110" />
                {label}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex items-center gap-5 text-xs text-[color:var(--fg-muted)]"
          >
            <div className="flex -space-x-2">
              {["#3b82f6", "#6366f1", "#8b5cf6", "#22d3ee"].map((c) => (
                <div
                  key={c}
                  className="h-7 w-7 rounded-full border-2 border-[color:var(--bg-primary)]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>
              Trusted by <span className="font-semibold text-[color:var(--fg-strong)]">120+</span> teams
              optimizing for growth
            </span>
          </motion.div>
        </div>

        {/* Right - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative"
        >
          <DashboardIllustration />
        </motion.div>
      </div>
    </section>
  );
}
