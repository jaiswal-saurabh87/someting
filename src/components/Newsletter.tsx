import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#3b82f6]/40 via-[#6366f1]/30 to-[#8b5cf6]/40"
        >
          {/* ambient wave / particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#3b82f6]/25 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#8b5cf6]/25 blur-3xl animate-float-medium" />
          </div>

          <div className="glass !rounded-[calc(1.5rem-1px)] relative px-6 sm:px-12 py-14 sm:py-16 text-center">
            <span className="glass inline-flex items-center px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)] !rounded-full">
              Stay Connected
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--fg-strong)]">
              Stay Updated with{" "}
              <span className="text-gradient-brand">SEO Insights</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-[color:var(--fg-soft)]">
              Subscribe to receive the latest SEO tips, algorithm updates, optimization strategies, and new feature announcements directly in your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 mx-auto flex flex-col sm:flex-row items-stretch gap-3 max-w-xl"
            >
              <div className="glass !rounded-2xl flex-1 flex items-center gap-3 px-4 py-3">
                <Mail className="h-5 w-5 text-[color:var(--fg-muted)] shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-[color:var(--fg-strong)] placeholder:text-[color:var(--fg-muted)] outline-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-medium text-white bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] shadow-[0_10px_40px_-10px_rgba(99,102,241,0.7)] transition-all hover:scale-[1.03] hover:shadow-[0_15px_60px_-10px_rgba(139,92,246,0.8)]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <p className="mt-5 text-xs text-[color:var(--fg-muted)]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
