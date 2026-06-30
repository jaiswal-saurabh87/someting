import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#3b82f6]/50 via-[#6366f1]/40 to-[#8b5cf6]/50"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3b82f6]/20 via-transparent to-[#8b5cf6]/20 blur-2xl opacity-60 -z-10" />
          <div className="glass !rounded-[calc(1.5rem-1px)] px-6 sm:px-12 py-16 sm:py-20 text-center">
            <div className="text-5xl sm:text-6xl mb-4" aria-hidden>
              🚀
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--fg-strong)]">
              Start your{" "}
              <span className="text-gradient-brand">&nbsp;First SEO Analysis</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-[color:var(--fg-soft)]">
              Start analyzing your website instantly and discover actionable SEO improvements with AI-powered insights.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/analyzer"
                className="group relative inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] shadow-[0_15px_50px_-10px_rgba(99,102,241,0.7)] transition-all hover:scale-[1.04] hover:shadow-[0_20px_70px_-10px_rgba(139,92,246,0.85)]"
              >
                Start Free Analysis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
