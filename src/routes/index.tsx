import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEOBuddy — AI-Powered SEO Analyzer for Modern Teams" },
      {
        name: "description",
        content:
          "Instantly analyze your website's SEO, fix critical issues, and rank higher with AI-powered recommendations from SEOBuddy.",
      },
      { property: "og:title", content: "SEOBuddy — AI-Powered SEO Analyzer" },
      {
        property: "og:description",
        content:
          "Instant SEO analysis, technical audits, and AI suggestions to grow your search rankings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SEOBuddy — AI-Powered SEO Analyzer" },
      {
        name: "twitter:description",
        content:
          "Instant SEO analysis, technical audits, and AI suggestions to grow your search rankings.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--fg-strong)]">
      <Hero />
      <Features />
      <About />
      <FinalCTA />
      <Newsletter />
      <Footer />
      <div className="max-w-full bg-black h-12 flex items-center justify-center">
        <span className="text-white">Built on Lovable</span></div>
    </main>
  );
}