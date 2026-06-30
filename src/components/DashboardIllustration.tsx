import { motion } from "motion/react";
import {
  Gauge,
  TrendingUp,
  Link2,
  Search,
  Zap,
  ShieldCheck,
} from "lucide-react";

const ringCircumference = 2 * Math.PI * 52;

export function DashboardIllustration({
  showHeaderStrip = true,
  showRankingCard = true,
}: {
  showHeaderStrip?: boolean;
  showRankingCard?: boolean;
}) {
  const score = 92;
  const offset = ringCircumference - (score / 100) * ringCircumference;

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Glow halos */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#6366f1] opacity-30 blur-[100px]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#22d3ee] opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#8b5cf6] opacity-25 blur-[100px]" />
      </div>

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative overflow-hidden p-5 sm:p-6"
        style={{ borderRadius: "28px" }}
      >
        {showHeaderStrip && (
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
              <span className="ml-3 text-xs text-[color:var(--fg-muted)]">seobuddy.app/analyze</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] px-2.5 py-1 text-[10px] font-medium text-[color:var(--fg-soft)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live
            </div>
          </div>
        )}

        <div className="grid grid-cols-5 gap-4">
          {/* SEO Score Gauge */}
          <div className="col-span-5 sm:col-span-2">
            <div className="glass relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden p-4">
              <span className="text-[10px] font-medium uppercase tracking-wider text-[color:var(--fg-muted)]">
                SEO Score
              </span>
              <div className="relative">
                <svg width="130" height="130" viewBox="0 0 120 120" className="-rotate-90">
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="52" stroke="var(--border-mid)" strokeWidth="10" fill="none" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="url(#scoreGrad)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={ringCircumference}
                    initial={{ strokeDashoffset: ringCircumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[color:var(--fg-strong)]">{score}</div>
                    <div className="text-[10px] font-medium text-emerald-500">Excellent</div>
                  </div>
                </div>
              </div>
              <Gauge className="absolute right-3 top-3 h-4 w-4 text-[color:var(--fg-faint)]" />
            </div>
          </div>

          {/* Right column stats */}
          <div className="col-span-5 grid grid-cols-2 gap-3 sm:col-span-3">
            <StatCard
              icon={<Zap className="h-4 w-4" />}
              label="Page Speed"
              value="98"
              trend="+12"
              gradient="from-cyan-400/30 to-blue-500/30"
            />
            <StatCard
              icon={<Link2 className="h-4 w-4" />}
              label="Backlinks"
              value="2.4k"
              trend="+184"
              gradient="from-indigo-400/30 to-purple-500/30"
            />
            <StatCard
              icon={<Search className="h-4 w-4" />}
              label="Keywords"
              value="847"
              trend="+23"
              gradient="from-purple-400/30 to-fuchsia-500/30"
            />
            <StatCard
              icon={<ShieldCheck className="h-4 w-4" />}
              label="Tech SEO"
              value="A+"
              trend="9/10"
              gradient="from-blue-400/30 to-indigo-500/30"
            />
          </div>

          {/* Core Web Vitals bars */}
          <div className="col-span-5">
            <div className="glass p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-[#22d3ee]" />
                  <span className="text-xs font-semibold text-[color:var(--fg-strong)]">Core Web Vitals</span>
                </div>
                <span className="text-[10px] text-[color:var(--fg-muted)]">last 30 days</span>
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {[40, 65, 50, 72, 58, 80, 68, 90, 78, 95, 84, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${h}%`, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.05 }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] opacity-80"
                  />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Vital label="LCP" value="1.2s" />
                <Vital label="FID" value="38ms" />
                <Vital label="CLS" value="0.04" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating ranking card */}
      {showRankingCard && (
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="absolute -bottom-6 -left-2 hidden w-52 sm:block lg:-left-8"
        >
          <div className="glass-strong animate-float-medium p-3.5 shadow-glow">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[color:var(--fg-strong)]">Top Keywords ↑</span>
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                +14
              </span>
            </div>
            <div className="space-y-1.5">
              <RankRow keyword="ai seo tools" pos={3} />
              <RankRow keyword="seo analyzer" pos={5} />
              <RankRow keyword="site audit" pos={8} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  trend,
  gradient,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  gradient: string;
}) {
  return (
    <div className="glass relative overflow-hidden p-3">
      <div className={`absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br ${gradient} blur-2xl`} />
      <div className="relative">
        <div className="mb-2 flex items-center gap-1.5 text-[color:var(--fg-soft)]">
          {icon}
          <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-bold text-[color:var(--fg-strong)]">{value}</span>
          <span className="text-[10px] font-semibold text-emerald-500">{trend}</span>
        </div>
      </div>
    </div>
  );
}

function Vital({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] py-1.5">
      <div className="text-[9px] uppercase tracking-wider text-[color:var(--fg-faint)]">{label}</div>
      <div className="text-xs font-semibold text-[color:var(--fg-strong)]">{value}</div>
    </div>
  );
}

function RankRow({ keyword, pos }: { keyword: string; pos: number }) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="truncate text-[color:var(--fg-soft)]">{keyword}</span>
      <span className="ml-2 rounded-md bg-[color:var(--surface-3)] px-1.5 py-0.5 text-[color:var(--fg-strong)]">#{pos}</span>
    </div>
  );
}
