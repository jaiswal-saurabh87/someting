import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] blur-md opacity-70" />
        <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="2" />
            <path d="M14.5 14.5L20 20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M7 11L9 9L11 10.5L13 7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="text-lg font-bold tracking-tight text-[color:var(--fg-strong)]">
        SEO<span className="text-gradient-brand">Buddy</span>
      </span>
    </motion.div>
  );
}
