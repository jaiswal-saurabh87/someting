import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-[15%] pt-4 sm:pt-5"
    >
      <nav
        className={`glass-nav flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "shadow-glow" : ""
        }`}
        aria-label="Primary"
      >
        <a href="#home" aria-label="SEOBuddy home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--fg-soft)] transition-all hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--fg-strong)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/analyzer"
            className="group relative hidden overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] md:inline-flex md:items-center md:gap-1.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] animate-gradient" />
            <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6]" />
            <span className="relative z-10">Try Now</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface-1)] text-[color:var(--fg-strong)] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-[72px] md:hidden"
          >
            <div className="glass-nav rounded-2xl p-3">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--fg-soft)] hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--fg-strong)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <Link
                    to="/analyzer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] px-4 py-3 text-sm font-semibold text-white shadow-glow"
                  >
                    Try Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
