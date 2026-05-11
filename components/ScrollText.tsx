"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "Independent",
  "shops",
  "run",
  "on",
  "too",
  "many",
  "disconnected",
  "tools.",
  "FixMyCarDude",
  "replaces",
  "all",
  "of",
  "them",
  "-",
  "scheduling,",
  "estimates,",
  "customer",
  "updates,",
  "technician",
  "workflows",
  "-",
  "in",
  "one",
  "cloud-based",
  "system.",
];

const highlightWords = new Set(["FixMyCarDude", "replaces", "cloud-based", "system."]);

function Word({
  word,
  index,
  total,
  scrollYProgress,
  revealEnd,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  revealEnd: number;
}) {
  // Distribute word reveals across [0, revealEnd] of the pin range.
  // Explicit callback clamps opacity at endpoints so it stays at 1 for
  // the entire held-state — never depends on framer's default clamping.
  const start = (index / total) * revealEnd;
  const end = ((index + 1) / total) * revealEnd;

  const opacity = useTransform(scrollYProgress, (v: number) => {
    if (v <= start) return 0.12;
    if (v >= end) return 1;
    return 0.12 + ((v - start) / (end - start)) * (1 - 0.12);
  });
  const isHighlight = highlightWords.has(word);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] ${
        isHighlight
          ? "text-[#00594F] font-medium"
          : "text-slate-700"
      }`}
    >
      {word}
    </motion.span>
  );
}

export default function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Aligning offset to the sticky pin window so the reveal completes
  // BEFORE the section releases to the next one.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Reveal completes at 50% of the pin — the remaining 50% is a
  // generous "fully revealed and held" buffer so on tall viewports the
  // text is unmistakably done before the next section can ever appear.
  const REVEAL_END = 0.5;

  return (
    <section
      ref={containerRef}
      className="relative h-[260vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <p className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-snug tracking-tight text-center">
            {words.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                word={word}
                index={i}
                total={words.length}
                scrollYProgress={scrollYProgress}
                revealEnd={REVEAL_END}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
