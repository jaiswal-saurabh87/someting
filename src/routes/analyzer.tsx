import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
  Sparkles,
  Loader2,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { Logo } from "@/components/Logo";
import { DashboardIllustration } from "@/components/DashboardIllustration";

export const Route = createFileRoute("/analyzer")({
  head: () => ({
    meta: [
      { title: "SEO Analyzer — SEOBuddy" },
      {
        name: "description",
        content:
          "Run an instant AI-powered SEO analysis of any URL — surface critical issues, technical fixes, and ranking opportunities in seconds.",
      },
      { property: "og:title", content: "SEO Analyzer — SEOBuddy" },
      {
        property: "og:description",
        content:
          "Instant AI-powered SEO analysis: surface issues, technical fixes, and ranking opportunities in seconds.",
      },
    ],
  }),
  component: AnalyzerPage,
});

type Status = "idle" | "scanning" | "done";

const ease = [0.16, 1, 0.3, 1] as const;

function AnalyzerPage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus("scanning");
    window.setTimeout(() => setStatus("done"), 1800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--bg-primary)] text-[color:var(--fg-strong)]">
      <HeroBackground />

      {/* Top bar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className="fixed left-0 right-0 top-0 z-50 px-[15%] pt-4 sm:pt-5"
      >
        <nav className="glass-nav flex w-full items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5">
          <Link to="/" aria-label="SEOBuddy home" className="flex items-center">
            <Logo />
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] px-4 py-2 text-sm font-medium text-[color:var(--fg-soft)] backdrop-blur-md transition-all hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--fg-strong)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
        </nav>
      </motion.header>

      <section className="relative mx-auto max-w-5xl px-6 pt-36 pb-24 sm:pt-40 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#22d3ee]" />
            SEO Analyzer
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Analyze any website in{" "}
            <span className="text-gradient-brand animate-gradient">seconds</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[color:var(--fg-soft)] sm:text-lg">
            Paste a URL and our AI will inspect on-page SEO, technical health, Core Web
            Vitals, and content quality — then tell you exactly what to fix.
          </p>
        </motion.div>

        {/* URL form */}
        <motion.form
          onSubmit={onAnalyze}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#3b82f6]/60 via-[#6366f1]/60 to-[#8b5cf6]/60">
            <div className="glass !rounded-[calc(1rem-1px)] flex items-center gap-2 p-2 sm:gap-3">
              <div className="flex items-center pl-3 text-[color:var(--fg-muted)]">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="url"
                required
                placeholder="https://yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent py-3 text-base text-[color:var(--fg-strong)] placeholder:text-[color:var(--fg-muted)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "scanning"}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)] transition-all hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100 sm:px-6 sm:text-base"
              >
                {status === "scanning" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Scanning…
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Analyze
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[color:var(--fg-muted)]">
            Free analysis · No signup required · Results in under 10 seconds
          </p>
        </motion.form>

        {/* Results */}
        {status === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mt-14 flex justify-center"
          >
            <DashboardIllustration showHeaderStrip={false} showRankingCard={false} />
          </motion.div>
        )}

        {status === "idle" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-16 grid gap-4 sm:grid-cols-3"
          >
            {[
              { title: "On-page SEO", desc: "Titles, meta, headings, content depth." },
              { title: "Technical SEO", desc: "Crawlability, schema, sitemaps, robots." },
              { title: "Performance", desc: "Core Web Vitals, speed, responsiveness." },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                className="glass rounded-2xl p-5"
              >
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-[color:var(--fg-soft)]">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
