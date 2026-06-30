import { motion } from "motion/react";
import { Search, Sparkles, Gauge, TrendingUp, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: Search,
    title: "Comprehensive SEO Audit",
    desc: "Analyze over 100 SEO checkpoints including on-page SEO, technical SEO, metadata, headings, images, indexing, and accessibility.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    desc: "Receive AI-powered suggestions that explain every SEO issue and how to fix it step-by-step.",
  },
  {
    icon: Gauge,
    title: "Performance Insights",
    desc: "Measure Core Web Vitals, page speed, loading performance, responsiveness, and user experience.",
  },
  {
    icon: TrendingUp,
    title: "Rank Tracking",
    desc: "Track SEO score improvements, keyword performance, backlinks, and website health over time.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass inline-flex items-center px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--fg-soft)] !rounded-full">
            Features
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--fg-strong)]">
            Everything You Need to{" "}
            <span className="text-gradient-brand">Rank Higher</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-[color:var(--fg-soft)]">
            A complete SEO toolkit designed to surface insights, fix issues, and grow your search visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#3b82f6]/40 via-[#6366f1]/30 to-[#8b5cf6]/40 transition-shadow duration-500 hover:shadow-[0_20px_80px_-20px_rgba(99,102,241,0.55)]"
              >
                <div className="glass !rounded-[calc(1.5rem-1px)] h-full p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                      <div className="relative grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] shadow-[0_8px_30px_-10px_rgba(99,102,241,0.7)]">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[color:var(--fg-strong)]">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-[color:var(--fg-soft)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
