"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Sticky notes ── */

function shade(hex: string, amt: number): string {
  const m = hex.replace("#", "");
  const num = parseInt(m, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const adj = (c: number) =>
    Math.max(0, Math.min(255, Math.round(c + (amt / 100) * 255)));
  r = adj(r);
  g = adj(g);
  b = adj(b);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function clamp01(v: number, start: number, end: number) {
  if (v <= start) return 0;
  if (v >= end) return 1;
  return (v - start) / (end - start);
}

// Positions are % of viewport. Avoid the centered heading band
// (roughly x:18-82, y:30-65) and stay below the floating navbar (y >= 14).
const stickyNotes = [
  { text: "Call back Mrs.\nJohnson about\nbrake job", color: "#FEF08A", rotate: -4, x: 8, y: 16 },
  { text: "Order pads for\n2019 Camry", color: "#FCA5A5", rotate: 5, x: 77, y: 14 },
  { text: "Mike called in sick\nreschedule 3 jobs", color: "#FDBA74", rotate: 6, x: 2, y: 42 },
  { text: "Alignment machine\nneeds calibration", color: "#D8B4FE", rotate: 3, x: 83, y: 40 },
  { text: "Bay 2 lift\ninspection\noverdue!!", color: "#93C5FD", rotate: -2, x: 10, y: 70 },
  { text: "Invoice #4821\nstill unpaid", color: "#FEF08A", rotate: -5, x: 77, y: 72 },
];

function StickyNote({
  note,
  index,
  fallFromScroll,
}: {
  note: typeof stickyNotes[0];
  index: number;
  fallFromScroll: number; // 0 → 1, drives the scroll-out fall
}) {
  const [hoverFallen, setHoverFallen] = useState(false);
  const [hoverEntered, setHoverEntered] = useState(false);
  const exitRotate = note.rotate + (index % 2 === 0 ? 55 : -55);

  // Cascade the scroll-driven fall so each note tumbles slightly after the previous
  const cascadeStart = index * 0.08;
  const localProgress = clamp01(fallFromScroll, cascadeStart, cascadeStart + 0.45);
  const scrollY = localProgress * 900;
  const scrollRotate = localProgress * exitRotate;
  const scrollOpacity = 1 - localProgress;

  // If hovered, take over with the snappier hover animation
  const finalY = hoverFallen && hoverEntered ? 800 : scrollY;
  const finalRotate = hoverFallen && hoverEntered ? exitRotate : scrollRotate;
  const finalOpacity = hoverFallen && hoverEntered ? 0 : scrollOpacity;

  return (
    <div
      className="absolute select-none cursor-pointer"
      style={{
        left: `${note.x}%`,
        top: `${note.y}%`,
        zIndex: 10 + index,
        pointerEvents: hoverFallen || scrollOpacity < 0.1 ? "none" : "auto",
      }}
      onMouseEnter={() => {
        if (!hoverFallen) {
          setHoverEntered(true);
          setHoverFallen(true);
        }
      }}
      onPointerEnter={() => {
        if (!hoverFallen) {
          setHoverEntered(true);
          setHoverFallen(true);
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: note.rotate + 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: note.rotate }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 + index * 0.07, type: "spring", stiffness: 180, damping: 18 }}
      >
        <motion.div
          className="w-[145px] h-[145px] sm:w-[160px] sm:h-[160px] lg:w-[175px] lg:h-[175px]"
          animate={{
            y: finalY,
            rotate: finalRotate,
            opacity: finalOpacity,
          }}
          transition={
            hoverFallen && hoverEntered
              ? { duration: 0.9, ease: [0.4, 0, 0.2, 1] }
              : { duration: 0.15, ease: "easeOut" }
          }
          style={{
            filter:
              "drop-shadow(3px 6px 8px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
          }}
        >
          <div
            className="relative w-full h-full px-3 py-4 sm:px-4 sm:py-5 flex items-center justify-center text-center text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-snug text-slate-800 whitespace-pre-line"
            style={{
              background: `linear-gradient(135deg, ${note.color} 0%, ${note.color} 60%, ${shade(note.color, -8)} 100%)`,
              clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
            }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-4 rounded-[1px]"
              style={{
                background: "rgba(255,255,255,0.45)",
                borderTop: "1px solid rgba(255,255,255,0.6)",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            />
            <span className="block pt-1.5">{note.text}</span>
          </div>

          <div
            className="absolute pointer-events-none"
            style={{
              right: 0,
              bottom: 0,
              width: "18%",
              height: "18%",
              background: `linear-gradient(135deg, transparent 50%, ${shade(note.color, -20)} 50%, ${shade(note.color, -8)} 100%)`,
              borderBottomRightRadius: "4px",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Notebook paper background ── */

function NotebookBg({ opacity }: { opacity: number }) {
  return (
    <>
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          opacity,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(148,163,184,0.07) 27px, rgba(148,163,184,0.07) 28px)",
        }}
      />
      <div
        className="absolute left-[7%] top-0 bottom-0 w-px bg-rose-300/20 transition-opacity"
        style={{ opacity }}
      />
    </>
  );
}

/* ── Main component ── */

export default function StickyNotesIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Reading phase: 0 → 0.45 — everything held in place
  // Transition phase: 0.45 → 0.95 — notes fall, headline + paper fade, bg blends to Hero
  const READ_END = 0.45;
  const FADE_END = 0.95;

  const headlineOpacity = useTransform(scrollYProgress, (v: number) =>
    1 - clamp01(v, READ_END, READ_END + 0.25)
  );
  const headlineScale = useTransform(scrollYProgress, (v: number) =>
    1 - clamp01(v, READ_END, FADE_END) * 0.05
  );
  const fallProgress = useTransform(scrollYProgress, (v: number) =>
    clamp01(v, READ_END, FADE_END)
  );
  const [fallValue, setFallValue] = useState(0);
  fallProgress.on("change", (v) => setFallValue(v));

  // Notebook paper + section bg fades from paper-cream to Hero's mint/cream
  const paperOpacity = useTransform(scrollYProgress, (v: number) =>
    1 - clamp01(v, READ_END + 0.1, FADE_END)
  );
  const [paperValue, setPaperValue] = useState(1);
  paperOpacity.on("change", (v) => setPaperValue(v));

  const bgOpacity = useTransform(scrollYProgress, (v: number) =>
    clamp01(v, READ_END + 0.1, FADE_END)
  );

  return (
    <section ref={containerRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Paper background (fades out) */}
        <div
          className="absolute inset-0 transition-colors"
          style={{ backgroundColor: `rgba(250, 250, 248, ${paperValue})` }}
        />

        {/* Bottom-blending gradient (fades in) — pours mint into the lower half
            so the section's bottom edge matches Hero's top edge exactly,
            giving a seamless, blended handoff instead of a hard cut. */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: bgOpacity,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(250,255,220,0.35) 70%, rgba(225,254,229,0.55) 100%)",
          }}
        />

        <NotebookBg opacity={paperValue} />

        {/* Headline + scroll cue */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none"
          style={{ opacity: headlineOpacity, scale: headlineScale }}
        >
          <div className="text-center max-w-2xl px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.1]">
              Stop running your shop on{" "}
              <span className="relative inline-block">
                <span className="relative z-10">sticky notes.</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FEF08A]/70 -skew-x-2 -z-0 rounded-sm" />
              </span>
            </h2>
            <p className="mt-6 text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto">
              Missed calls. Lost tickets. Forgotten follow-ups. Sound familiar?
              There&apos;s a better way to run your shop.
            </p>
            <motion.div
              className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span>Scroll to see the fix</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Sticky notes scattered around */}
        {stickyNotes.map((note, i) => (
          <StickyNote key={i} note={note} index={i} fallFromScroll={fallValue} />
        ))}
      </div>
    </section>
  );
}
