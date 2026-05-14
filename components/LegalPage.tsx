"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: Section[];
  lastUpdated?: string;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#E1FEE5]/40 via-[#FAFFDC]/20 to-white pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div className="absolute top-12 -left-20 w-[340px] h-[340px] bg-[#CEDC00]/15 rounded-[60px] rotate-12 blur-sm" />
          <div className="absolute top-32 -right-20 w-[280px] h-[280px] bg-[#E1FEE5]/50 rounded-[50px] -rotate-6 blur-sm" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full"
            >
              {eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]"
            >
              {title}
            </motion.h1>
            {intro && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed"
              >
                {intro}
              </motion.p>
            )}
            {lastUpdated && (
              <p className="mt-4 text-xs text-slate-400 uppercase tracking-[0.18em]">
                Last updated · {lastUpdated}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 px-6">
          <article className="max-w-3xl mx-auto">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="mb-10 last:mb-0"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-4 text-slate-600 leading-relaxed text-[15px]"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-600 leading-relaxed text-[15px]"
                      >
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00594F]/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <div className="mt-12 pt-8 border-t border-slate-200/80">
              <p className="text-sm text-slate-500">
                Questions about this page?{" "}
                <a
                  href="mailto:info@fixmycardude.com"
                  className="text-[#00594F] font-semibold hover:text-[#003d35] transition-colors"
                >
                  info@fixmycardude.com
                </a>
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
