"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "FixMyCarDude",
  "is",
  "a",
  "complete",
  "auto",
  "repair",
  "platform",
  "that",
  "connects",
  "shop",
  "owners",
  "and",
  "customers",
  "on",
  "a",
  "single,",
  "real-time",
  "system",
  "—",
  "so",
  "every",
  "repair",
  "is",
  "faster,",
  "clearer,",
  "and",
  "fully",
  "transparent.",
];

const highlightWords = new Set(["FixMyCarDude", "connects", "real-time", "transparent."]);

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1]);
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh]"
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
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
