"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

function clamp01(v: number, start: number, end: number) {
  if (v <= start) return 0;
  if (v >= end) return 1;
  return (v - start) / (end - start);
}

/* ── Sticky notes ── */

const stickyNotes = [
  { text: "Call back Mrs. Johnson\nabout brake job", color: "#FEF08A", rotate: -4, x: 5, y: 6 },
  { text: "Order pads for\n2019 Camry", color: "#FCA5A5", rotate: 5, x: 58, y: 3 },
  { text: "Bay 2 lift inspection\noverdue!!", color: "#93C5FD", rotate: -2, x: 80, y: 58 },
  { text: "Mike called in sick\nreschedule 3 jobs", color: "#FDBA74", rotate: 6, x: 2, y: 62 },
  { text: "Invoice #4821\nstill unpaid", color: "#FEF08A", rotate: -5, x: 35, y: 72 },
  { text: "Alignment machine\nneeds calibration", color: "#D8B4FE", rotate: 3, x: 72, y: 28 },
];

function StickyNote({ note, index }: { note: typeof stickyNotes[0]; index: number }) {
  const [fallen, setFallen] = useState(false);
  const [entered, setEntered] = useState(false);
  // Deterministic tumble so every note falls with the same speed/feel
  const exitRotate = note.rotate + (index % 2 === 0 ? 55 : -55);

  return (
    <div
      className="absolute select-none cursor-pointer"
      style={{
        left: `${note.x}%`,
        top: `${note.y}%`,
        zIndex: 10 + index,
        pointerEvents: fallen ? "none" : "auto",
      }}
      onMouseEnter={() => {
        if (!fallen) {
          setEntered(true);
          setFallen(true);
        }
      }}
      onPointerEnter={() => {
        if (!fallen) {
          setEntered(true);
          setFallen(true);
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
          className="w-[120px] sm:w-[145px] lg:w-[165px]"
          animate={
            fallen && entered
              ? { y: 800, rotate: exitRotate, opacity: 0 }
              : { y: 0, rotate: 0, opacity: 1 }
          }
          transition={
            fallen
              ? { duration: 0.9, ease: [0.4, 0, 0.2, 1] }
              : { duration: 0 }
          }
        >
          <div
            className="relative p-3 sm:p-3.5 rounded-[2px] text-[10px] sm:text-[11px] lg:text-xs font-bold leading-snug text-slate-700 whitespace-pre-line"
            style={{
              backgroundColor: note.color,
              boxShadow: "2px 4px 16px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-3 rounded-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)" }}
            />
            {note.text}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── QR block ── */

function QRBlock({
  src,
  label,
  sub,
  icon,
}: {
  src: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-1 sm:flex-initial bg-white/[0.04] border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm">
      <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-lg bg-white p-1.5 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${label} QR code`} className="w-full h-full object-contain" />
      </div>
      <div className="mt-2.5 px-1 flex items-center gap-1.5 text-white">
        <span className="opacity-70">{icon}</span>
        <div className="leading-tight">
          <p className="text-[9px] text-white/50">{sub}</p>
          <p className="text-[11px] font-semibold">{label}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Notebook background ── */

function NotebookBg() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(148,163,184,0.07) 27px, rgba(148,163,184,0.07) 28px)",
        }}
      />
      <div className="absolute left-[7%] top-0 bottom-0 w-px bg-rose-300/20" />
    </>
  );
}

/* ── Main component ── */

export default function CTAInteractiveV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const greenContentIn = useTransform(scrollYProgress, (v: number) => clamp01(v, 0.45, 0.6));

  // Card scales up as it enters; settles at 1
  const cardScale = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.45, 0.75);
    return 0.86 + p * 0.14;
  });

  // Ripples — three concentric rings expanding from card center as scroll progresses
  const ripple1Scale = useTransform(scrollYProgress, (v: number) => 0.6 + clamp01(v, 0.45, 0.95) * 1.8);
  const ripple1Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.45, 0.95);
    return Math.sin(p * Math.PI) * 0.35;
  });
  const ripple2Scale = useTransform(scrollYProgress, (v: number) => 0.5 + clamp01(v, 0.5, 1) * 2.2);
  const ripple2Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.5, 1);
    return Math.sin(p * Math.PI) * 0.25;
  });
  const ripple3Scale = useTransform(scrollYProgress, (v: number) => 0.4 + clamp01(v, 0.55, 1) * 2.8);
  const ripple3Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.55, 1);
    return Math.sin(p * Math.PI) * 0.18;
  });

  const clipPath = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.55);
    if (p <= 0) return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const pct = p * 200;
    return `polygon(0% 0%, ${100 - pct}% 0%, 100% ${pct}%, 100% 100%, 0% 100%)`;
  });

  const curlSize = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.55);
    return Math.min(Math.max(p, 0), 1) * 160;
  });

  const cornerRotate = useTransform(scrollYProgress, (v: number) => {
    const c = Math.min(Math.max(clamp01(v, 0.05, 0.55), 0), 1);
    return c <= 0.6 ? (c / 0.6) * 25 : 25 + ((c - 0.6) / 0.4) * 20;
  });

  const cornerOpacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.55);
    if (p <= 0) return 0;
    if (p <= 0.05) return p / 0.05;
    if (p <= 0.85) return 1;
    if (p >= 1) return 0;
    return 1 - (p - 0.85) / 0.15;
  });

  const pageOpacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.55);
    if (p <= 0.7) return 1;
    return 1 - (p - 0.7) / 0.3;
  });

  return (
    <section ref={containerRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden z-[60]">
        <div className="relative w-full h-full">

          {/* REVEALED background layer - light gradient with grid + blobs */}
          <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 25%, #f0f9ff 50%, #faf5ff 75%, #fdf4ff 100%)" }}>
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,89,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,89,79,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Gradient blobs */}
            <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#CEDC00]/20 blur-[120px] animate-blob" />
            <div className="absolute bottom-[10%] right-[8%] w-[400px] h-[400px] rounded-full bg-[#00594F]/15 blur-[130px] animate-blob-delay" />
            <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-emerald-400/10 blur-[100px] animate-blob" />
            <div className="absolute bottom-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-violet-400/8 blur-[90px] animate-blob-delay" />

            {/* Content */}
            <motion.div
              className="relative z-10 h-full flex items-center"
              style={{ opacity: greenContentIn }}
            >
              {/* Ripple rings emanating from card center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#00594F]/30"
                  style={{ scale: ripple1Scale, opacity: ripple1Opacity }}
                />
                <motion.div
                  className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#CEDC00]/50"
                  style={{ scale: ripple2Scale, opacity: ripple2Opacity }}
                />
                <motion.div
                  className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#00594F]/25"
                  style={{ scale: ripple3Scale, opacity: ripple3Opacity }}
                />
              </div>

              <motion.div
                className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16"
                style={{ scale: cardScale }}
              >
                <div className="relative rounded-[28px] overflow-hidden bg-[#00594F] shadow-2xl shadow-[#00594F]/30">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/cta-bg.png')" }}
                  />
                  {/* Green-tinted overlay — light on the right, deep green on the left for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00594F]/85 via-[#00594F]/60 to-[#CEDC00]/25" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#E1FEE5]/10 via-transparent to-[#00594F]/20" />

                  <div className="relative z-10">
                    {/* Top section */}
                    <div className="px-7 sm:px-10 lg:px-12 pt-9 sm:pt-11 pb-8 sm:pb-9">
                      <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 items-center">
                        {/* Left — heading */}
                        <div className="lg:col-span-3">
                          <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
                            Download{" "}
                            <span className="text-[#CEDC00]">FixMyCarDude</span>{" "}
                            now
                          </h3>
                          <p className="mt-3 text-white/55 text-sm sm:text-base max-w-md leading-relaxed">
                            Scan to install the customer app, or get the shop dashboard
                            on the web. Free for 14 days.
                          </p>
                        </div>

                        {/* Right — QR codes */}
                        <div className="lg:col-span-2 flex flex-wrap sm:flex-nowrap gap-3 sm:justify-end">
                          <QRBlock
                            src="/qr-appstore.png"
                            label="App Store"
                            sub="Scan to download"
                            icon={
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                              </svg>
                            }
                          />
                          <QRBlock
                            src="/qr-playstore.png"
                            label="Google Play"
                            sub="Scan to download"
                            icon={
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                              </svg>
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom yellow accent bar — desktop CTAs */}
                    <div className="bg-[#CEDC00] px-7 sm:px-10 lg:px-12 py-5 sm:py-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="text-[#0a1a17] text-[11px] font-bold tracking-[0.18em] uppercase">
                            Run your shop on the web
                          </p>
                          <p className="mt-1 text-[#0a1a17]/70 text-sm">
                            No installs. No IT. Setup in under an hour.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2.5 sm:flex-nowrap">
                          <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a1a17] text-white font-semibold text-sm rounded-full hover:bg-[#00594F] transition-all"
                          >
                            <Calendar size={15} />
                            Schedule a Demo
                          </a>
                          <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0a1a17] font-semibold text-sm rounded-full hover:bg-white/90 transition-all"
                          >
                            Start Free Trial
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* WHITE page with clip-path — bg + content peel together */}
          <motion.div
            className="absolute inset-0 overflow-hidden z-[3]"
            style={{ clipPath, opacity: pageOpacity }}
          >
            <div className="w-full h-full bg-[#fafaf8] relative">
              <NotebookBg />

              <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
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
                    className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-300"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    <span>Scroll to see the fix</span>
                  </motion.div>
                </div>
              </div>

              {stickyNotes.map((note, i) => (
                <StickyNote key={i} note={note} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Curl corner triangle (gray) */}
          <motion.div
            className="absolute top-0 right-0 origin-top-right pointer-events-none z-[4]"
            style={{
              width: curlSize,
              height: curlSize,
              rotate: cornerRotate,
              opacity: cornerOpacity,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="curlGradV2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d1d5db" stopOpacity="1" />
                  <stop offset="35%" stopColor="#9ca3af" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#6b7280" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4b5563" stopOpacity="0.3" />
                </linearGradient>
                <filter id="curlShadowV2">
                  <feDropShadow dx="-3" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.2" />
                </filter>
              </defs>
              <path
                d="M100,0 L100,100 Q50,80 0,100 Q20,50 0,0 Z"
                fill="url(#curlGradV2)"
                filter="url(#curlShadowV2)"
              />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
