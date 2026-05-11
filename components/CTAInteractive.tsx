"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, QrCode } from "lucide-react";

function clamp01(v: number, start: number, end: number) {
  if (v <= start) return 0;
  if (v >= end) return 1;
  return (v - start) / (end - start);
}

const stickyNotes = [
  { text: "Call back Mrs. Johnson\nabout brake job", color: "#FEF08A", rotate: -4, x: 6, y: 8 },
  { text: "Order pads for\n2019 Camry", color: "#FCA5A5", rotate: 5, x: 70, y: 5 },
  { text: "Bay 2 lift inspection\noverdue!!", color: "#93C5FD", rotate: -2, x: 76, y: 65 },
  { text: "Mike called in sick\nreschedule 3 jobs", color: "#FDBA74", rotate: 6, x: 3, y: 70 },
  { text: "Invoice #4821\nstill unpaid", color: "#FEF08A", rotate: -5, x: 40, y: 76 },
  { text: "Alignment machine\nneeds calibration", color: "#D8B4FE", rotate: 3, x: 64, y: 34 },
];

function StickyNote({ note, index }: { note: typeof stickyNotes[0]; index: number }) {
  const [fallen, setFallen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: note.rotate + 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: note.rotate }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.07, type: "spring", stiffness: 180, damping: 18 }}
      className="absolute select-none cursor-pointer"
      style={{ left: `${note.x}%`, top: `${note.y}%`, zIndex: 10 + index }}
      onMouseEnter={() => setFallen(true)}
    >
      <AnimatePresence>
        {!fallen && (
          <motion.div
            exit={{
              y: 800,
              rotate: note.rotate + 40 + Math.random() * 30,
              opacity: 0,
            }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="w-[120px] sm:w-[145px] lg:w-[165px]"
          >
            <div
              className="relative p-3 sm:p-3.5 rounded-[2px] text-[10px] sm:text-[11px] lg:text-xs font-medium leading-snug text-slate-700 whitespace-pre-line"
              style={{
                backgroundColor: note.color,
                boxShadow: "2px 4px 16px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-3 rounded-sm bg-black/[0.04] border border-black/[0.04]" />
              {note.text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function NotebookBg({ variant = "lines" }: { variant?: "lines" | "grid" | "dots" }) {
  if (variant === "grid") {
    return (
      <>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,89,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,89,79,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute left-[7%] top-0 bottom-0 w-px bg-[#00594F]/[0.06]" />
      </>
    );
  }
  if (variant === "dots") {
    return (
      <>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #00594F 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "12px 12px",
          }}
        />
        <div className="absolute right-[7%] top-0 bottom-0 w-px bg-[#00594F]/[0.04]" />
      </>
    );
  }
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(148,163,184,0.07) 27px, rgba(148,163,184,0.07) 28px)",
        }}
      />
      <div className="absolute left-[7%] top-0 bottom-0 w-px bg-rose-300/20" />
    </>
  );
}

function PageCornerCurl({
  progress,
  zIndex,
  children,
}: {
  progress: MotionValue<number>;
  zIndex: number;
  children: React.ReactNode;
}) {
  const clipPath = useTransform(progress, (p: number) => {
    if (p <= 0) return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const pct = Math.min(p * 100, 100);
    return `polygon(0% 0%, ${100 - pct}% 0%, 100% ${pct}%, 100% 100%, 0% 100%)`;
  });

  const pageOpacity = useTransform(progress, (p: number) => {
    if (p <= 0.6) return 1;
    if (p >= 0.9) return 0;
    return 1 - (p - 0.6) / 0.3;
  });

  const curlSize = useTransform(progress, (p: number) => Math.min(Math.max(p, 0), 1) * 140);
  const cornerRotate = useTransform(progress, (p: number) => {
    const c = Math.min(Math.max(p, 0), 1);
    if (c <= 0.6) return c / 0.6 * 25;
    return 25 + (c - 0.6) / 0.4 * 20;
  });
  const cornerOpacity = useTransform(progress, (p: number) => {
    if (p <= 0) return 0;
    if (p <= 0.05) return p / 0.05;
    if (p <= 0.85) return 1;
    if (p >= 1) return 0;
    return 1 - (p - 0.85) / 0.15;
  });

  return (
    <>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath, zIndex }}
      >
        <motion.div style={{ opacity: pageOpacity }} className="w-full h-full">
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 origin-top-right pointer-events-none"
        style={{
          zIndex: zIndex + 1,
          width: curlSize,
          height: curlSize,
          rotate: cornerRotate,
          opacity: cornerOpacity,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`curlGrad${zIndex}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#e2e8f0" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
            </linearGradient>
            <filter id={`curlShadow${zIndex}`}>
              <feDropShadow dx="-2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
            </filter>
          </defs>
          <path
            d="M100,0 L100,100 Q50,80 0,100 Q20,50 0,0 Z"
            fill={`url(#curlGrad${zIndex})`}
            filter={`url(#curlShadow${zIndex})`}
          />
        </svg>
      </motion.div>
    </>
  );
}

export default function CTAInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const page1Curl = useTransform(scrollYProgress, (v: number) => clamp01(v, 0.08, 0.38));
  const page2Curl = useTransform(scrollYProgress, (v: number) => clamp01(v, 0.55, 0.85));

  const page2ContentIn = useTransform(scrollYProgress, (v: number) => clamp01(v, 0.3, 0.42));
  const page3ContentIn = useTransform(scrollYProgress, (v: number) => clamp01(v, 0.78, 0.92));

  return (
    <section ref={containerRef} className="relative h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden z-[60]">
        <div className="relative w-full h-full">

          {/* PAGE 3 (bottom) - Mobile App on white paper with dot grid */}
          <div className="absolute inset-0 bg-[#fafaf8] z-[1]">
            <NotebookBg variant="dots" />

            <motion.div
              className="relative z-10 h-full flex items-center px-8 sm:px-12 lg:px-20"
              style={{ opacity: page3ContentIn }}
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-6xl mx-auto">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00594F]/5 rounded-full mb-6 border border-[#00594F]/10">
                    <Smartphone size={15} className="text-[#00594F]" />
                    <span className="text-xs font-semibold text-[#00594F] uppercase tracking-wider">Mobile App</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                    Your customers deserve a{" "}
                    <span className="gradient-text">better experience.</span>
                  </h3>
                  <p className="mt-5 text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg">
                    The free FixMyCarDude app lets customers find your shop, book
                    appointments, approve estimates, and track repairs in real time.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#00594F] text-white font-semibold text-sm rounded-full hover:bg-[#003d35] transition-all hover:shadow-lg hover:shadow-[#00594F]/20"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                      App Store
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#00594F] font-semibold text-sm rounded-full border border-[#00594F]/15 hover:bg-[#00594F]/5 transition-all"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.18 23.75c-.36-.17-.68-.42-.68-1.06V1.31c0-.57.26-.86.57-1.06l11.03 11.5L3.18 23.75zm1.56-22.86L16.1 7.33l-3.1 3.1L4.74.89zM20.8 11.05l-3.57-2.06-3.38 3.38 3.38 3.38 3.57-2.06c.67-.38.67-2.26 0-2.64zM4.74 23.11L15 16.67l3.1-3.1L4.74 23.11z" /></svg>
                      Google Play
                    </a>
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <div className="relative w-[200px] sm:w-[240px] lg:w-[260px]">
                    <div className="relative rounded-[28px] border-[6px] border-slate-800 bg-slate-900 overflow-hidden shadow-2xl shadow-black/30" style={{ aspectRatio: "9/19.5" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[16px] bg-slate-800 rounded-b-2xl z-10" />
                      <img
                        src="/images/find.png"
                        alt="FixMyCarDude Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -right-4 sm:right-0 lg:right-8 top-1/2 -translate-y-1/2 bg-white rounded-xl p-4 border border-slate-200 shadow-lg">
                    <QrCode size={56} className="text-[#00594F]/50" />
                    <p className="text-[10px] text-slate-400 mt-1.5 text-center font-medium">Scan to<br />download</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PAGE 2 - Web App on white paper with grid */}
          <PageCornerCurl progress={page2Curl} zIndex={2}>
            <div className="absolute inset-0 bg-[#fafaf8]">
              <NotebookBg variant="grid" />

              <motion.div
                className="relative z-10 h-full flex items-center px-8 sm:px-12 lg:px-20"
                style={{ opacity: page2ContentIn }}
              >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-6xl mx-auto">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00594F]/5 rounded-full mb-6 border border-[#00594F]/10">
                      <Monitor size={15} className="text-[#00594F]" />
                      <span className="text-xs font-semibold text-[#00594F] uppercase tracking-wider">Web App</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                      Your shop, managed from{" "}
                      <span className="gradient-text">one dashboard.</span>
                    </h3>
                    <p className="mt-5 text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg">
                      Scheduling, estimates, technician boards, invoicing, and profitability
                      reporting. No installs needed - just open your browser and go.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#00594F] text-white font-semibold text-sm rounded-full hover:bg-[#003d35] transition-all hover:shadow-lg hover:shadow-[#00594F]/20"
                      >
                        Start Free Trial
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#00594F]/15 text-[#00594F] font-semibold text-sm rounded-full hover:bg-[#00594F]/5 transition-all"
                      >
                        Schedule a Demo
                      </a>
                    </div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-300/50 w-full max-w-[440px]">
                      <div className="bg-slate-100 h-7 flex items-center gap-1.5 px-3.5 border-b border-slate-200">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        <div className="ml-4 flex-1 h-3.5 bg-slate-200 rounded-full max-w-[180px]" />
                      </div>
                      <img
                        src="/images/banner.png"
                        alt="FixMyCarDude Dashboard"
                        className="w-full h-auto block"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageCornerCurl>

          {/* PAGE 1 - Sticky Notes on ruled paper */}
          <PageCornerCurl progress={page1Curl} zIndex={3}>
            <div className="absolute inset-0 bg-[#fafaf8]">
              <NotebookBg variant="lines" />

              <div className="absolute inset-0 flex items-center justify-center z-20">
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
          </PageCornerCurl>
        </div>
      </div>
    </section>
  );
}
