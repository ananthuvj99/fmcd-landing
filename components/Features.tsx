"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

/* ─────────────── Scroll-driven iPad showcase ─────────────── */

const showcase = [
  {
    title: "Technician Job Board",
    description:
      "Assign jobs, track progress in real time - no sticky notes, no calls to the front desk.",
    image: "/features/jobboard.png",
  },
  {
    title: "Appointment Management",
    description:
      "Slot control, history tracking, and automated customer reminders for every drop-off.",
    image: "/features/appointment.png",
  },
  {
    title: "Smart Estimates",
    description:
      "Build categorized estimates. Customers approve straight from their phone.",
    image: "/features/estimates.png",
  },
  {
    title: "Digital Vehicle Inspection",
    description:
      "Photos, videos, and notes attached to each line - build trust before the first wrench turn.",
    image: "/features/dvi.png",
  },
];

function FeaturesShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      showcase.length - 1,
      Math.max(0, Math.floor(v * showcase.length))
    );
    if (idx !== active) setActive(idx);
  });

  const current = showcase[active];
  const jumpTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const start = el.offsetTop;
    const scrollable = el.offsetHeight - window.innerHeight;
    const target = start + (scrollable * (i + 0.5)) / showcase.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${showcase.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          {/* Gray container */}
          <div className="relative rounded-3xl bg-slate-100/70 border border-slate-200/60 px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-center">
              {/* iPad mockup */}
              <div className="relative mx-auto w-full max-w-2xl">
                <div className="relative aspect-[4/3] rounded-[24px] bg-slate-900 p-3 sm:p-3.5 shadow-2xl shadow-slate-900/20">
                  <span className="absolute top-1/2 -translate-y-1/2 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-white">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={current.image}
                        src={current.image}
                        alt={current.title}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Right: minimal content + vertical step indicator */}
              <div className="flex items-center gap-5 lg:gap-7">
                <div className="flex-1 min-w-0 min-h-[140px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-[#00594F] tracking-[0.18em]">
                        <span>{String(active + 1).padStart(2, "0")}</span>
                        <span className="w-5 h-px bg-[#00594F]/30" />
                        <span className="opacity-50">
                          {String(showcase.length).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl lg:text-2xl font-bold text-slate-900 tracking-tight">
                        {current.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {current.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Vertical step indicator */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  {showcase.map((_, i) => {
                    const isActive = active === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to step ${i + 1}`}
                        onClick={() => jumpTo(i)}
                        className="block"
                      >
                        <motion.span
                          initial={false}
                          animate={{
                            height: isActive ? 36 : 12,
                            backgroundColor: isActive ? "#00594F" : "#cbd5e1",
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="block w-[3px] rounded-full"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Remaining feature illustrations (kept) ─────────────── */

function IllustrationDashboard() {
  return (
    <svg viewBox="0 0 340 200" fill="none" className="w-full h-auto">
      <defs>
        <filter id="dashShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00594F" floodOpacity="0.08" />
        </filter>
        <filter id="dashShadowSm" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00594F" floodOpacity="0.06" />
        </filter>
        <linearGradient id="dashGrad" x1="0" y1="0" x2="340" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E1FEE5" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FAFFDC" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="340" height="200" rx="16" fill="url(#dashGrad)" />
      <g filter="url(#dashShadow)">
        <rect x="20" y="16" width="186" height="110" rx="12" fill="white" />
        <rect x="32" y="28" width="48" height="6" rx="3" fill="#00594F" opacity="0.7" />
        <rect x="32" y="40" width="30" height="4" rx="2" fill="#00594F" opacity="0.15" />
        <rect x="32" y="54" width="160" height="6" rx="3" fill="#00594F" opacity="0.05" />
        <rect x="32" y="54" width="112" height="6" rx="3" fill="#CEDC00" opacity="0.5" />
        <rect x="32" y="66" width="160" height="6" rx="3" fill="#00594F" opacity="0.05" />
        <rect x="32" y="66" width="80" height="6" rx="3" fill="#00594F" opacity="0.15" />
        <rect x="32" y="78" width="160" height="6" rx="3" fill="#00594F" opacity="0.05" />
        <rect x="32" y="78" width="140" height="6" rx="3" fill="#CEDC00" opacity="0.3" />
        <rect x="32" y="96" width="44" height="18" rx="9" fill="#00594F" opacity="0.08" />
        <rect x="40" y="102.5" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.2" />
        <rect x="84" y="96" width="44" height="18" rx="9" fill="#CEDC00" opacity="0.15" />
        <rect x="92" y="102.5" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.2" />
      </g>
      <g filter="url(#dashShadowSm)" transform="translate(222, 12)">
        <rect width="100" height="56" rx="10" fill="white" />
        <rect x="12" y="12" width="32" height="5" rx="2.5" fill="#00594F" opacity="0.6" />
        <text x="12" y="38" fontSize="18" fontWeight="700" fill="#00594F" opacity="0.8">$4,280</text>
      </g>
      <g filter="url(#dashShadowSm)" transform="translate(222, 80)">
        <rect width="100" height="56" rx="10" fill="white" />
        <rect x="12" y="12" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.4" />
        <rect x="12" y="26" width="76" height="4" rx="2" fill="#00594F" opacity="0.06" />
        <rect x="12" y="26" width="52" height="4" rx="2" fill="#CEDC00" opacity="0.5" />
        <rect x="12" y="36" width="76" height="4" rx="2" fill="#00594F" opacity="0.06" />
        <rect x="12" y="36" width="34" height="4" rx="2" fill="#00594F" opacity="0.15" />
      </g>
      <g filter="url(#dashShadowSm)" transform="translate(30, 138)">
        <rect width="148" height="48" rx="10" fill="white" />
        <path d="M20 34 L40 24 L60 30 L80 18 L100 22 L120 12" stroke="#00594F" strokeWidth="2" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 34 L40 24 L60 30 L80 18 L100 22 L120 12 L120 40 L20 40 Z" fill="#CEDC00" opacity="0.1" />
        <circle cx="80" cy="18" r="3" fill="#CEDC00" />
        <circle cx="120" cy="12" r="3" fill="#00594F" opacity="0.5" />
      </g>
      <g filter="url(#dashShadowSm)" transform="translate(194, 148)">
        <rect width="126" height="38" rx="10" fill="white" />
        <circle cx="22" cy="19" r="10" fill="#CEDC00" opacity="0.2" />
        <path d="M18 19 L21 22 L27 16" stroke="#00594F" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="40" y="13" width="52" height="5" rx="2.5" fill="#00594F" opacity="0.5" />
        <rect x="40" y="22" width="36" height="4" rx="2" fill="#00594F" opacity="0.12" />
      </g>
    </svg>
  );
}

function IllustrationInvoice() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-auto">
      <defs>
        <filter id="invShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#00594F" floodOpacity="0.08" />
        </filter>
        <linearGradient id="invGrad" x1="0" y1="0" x2="200" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FAFFDC" stopOpacity="0.2" />
          <stop offset="1" stopColor="#E1FEE5" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" rx="16" fill="url(#invGrad)" />
      <g filter="url(#invShadow)">
        <rect x="36" y="8" width="128" height="124" rx="12" fill="white" />
        <rect x="50" y="20" width="48" height="6" rx="3" fill="#00594F" opacity="0.6" />
        <rect x="50" y="32" width="32" height="4" rx="2" fill="#00594F" opacity="0.15" />
        <line x1="50" y1="44" x2="150" y2="44" stroke="#00594F" strokeWidth="0.8" opacity="0.08" />
        <rect x="50" y="52" width="56" height="4" rx="2" fill="#00594F" opacity="0.1" />
        <rect x="128" y="52" width="22" height="4" rx="2" fill="#00594F" opacity="0.3" />
        <rect x="50" y="64" width="48" height="4" rx="2" fill="#00594F" opacity="0.1" />
        <rect x="128" y="64" width="22" height="4" rx="2" fill="#00594F" opacity="0.3" />
        <rect x="50" y="76" width="52" height="4" rx="2" fill="#00594F" opacity="0.1" />
        <rect x="128" y="76" width="22" height="4" rx="2" fill="#00594F" opacity="0.3" />
        <line x1="50" y1="88" x2="150" y2="88" stroke="#00594F" strokeWidth="0.8" opacity="0.08" />
        <rect x="108" y="92" width="42" height="6" rx="3" fill="#00594F" opacity="0.55" />
        <rect x="50" y="106" width="100" height="18" rx="9" fill="#CEDC00" opacity="0.35" />
        <rect x="72" y="112.5" width="56" height="5" rx="2.5" fill="#00594F" opacity="0.3" />
      </g>
    </svg>
  );
}

function IllustrationInspection() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-auto">
      <defs>
        <filter id="insShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00594F" floodOpacity="0.07" />
        </filter>
        <linearGradient id="insGrad" x1="0" y1="0" x2="200" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E1FEE5" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FAFFDC" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" rx="16" fill="url(#insGrad)" />
      <g filter="url(#insShadow)">
        <rect x="18" y="10" width="108" height="120" rx="12" fill="white" />
        <rect x="50" y="6" width="44" height="12" rx="6" fill="white" stroke="#00594F" strokeWidth="1" strokeOpacity="0.12" />
        <rect x="60" y="10" width="24" height="4" rx="2" fill="#00594F" opacity="0.15" />
        {[0,1,2,3].map(i => {
          const y = 30 + i * 24;
          const checked = i < 2;
          return (
            <g key={i}>
              <rect x="32" y={y} width="14" height="14" rx="4" fill={checked ? "#CEDC00" : "white"} fillOpacity={checked ? 0.3 : 1} stroke={checked ? "#CEDC00" : "#00594F"} strokeWidth="1.2" strokeOpacity={checked ? 0.5 : 0.15} />
              {checked && <path d={`M${35} ${y+7} L${37.5} ${y+10} L${42} ${y+5}`} stroke="#00594F" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />}
              <rect x="54" y={y+2} width={50 - i*6} height="4.5" rx="2.25" fill="#00594F" opacity={checked ? 0.4 : 0.12} />
              <rect x="54" y={y+9} width={36 - i*4} height="3.5" rx="1.75" fill="#00594F" opacity="0.08" />
            </g>
          );
        })}
      </g>
      <g filter="url(#insShadow)" transform="translate(138, 18)">
        <rect width="52" height="52" rx="10" fill="white" />
        <rect x="8" y="8" width="36" height="26" rx="5" fill="#00594F" opacity="0.05" />
        <circle cx="26" cy="18" r="6" fill="#CEDC00" opacity="0.25" />
        <path d="M23 18 L26 15 L29 18" stroke="#00594F" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <line x1="26" y1="15" x2="26" y2="24" stroke="#00594F" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
        <rect x="10" y="40" width="32" height="4" rx="2" fill="#00594F" opacity="0.12" />
      </g>
      <g filter="url(#insShadow)" transform="translate(138, 82)">
        <rect width="52" height="48" rx="10" fill="white" />
        <rect x="8" y="8" width="36" height="26" rx="5" fill="#CEDC00" opacity="0.08" />
        <circle cx="26" cy="18" r="6" fill="#CEDC00" opacity="0.25" />
        <path d="M23 18 L26 15 L29 18" stroke="#00594F" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
        <line x1="26" y1="15" x2="26" y2="24" stroke="#00594F" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
        <rect x="10" y="40" width="32" height="4" rx="2" fill="#00594F" opacity="0.12" />
      </g>
    </svg>
  );
}

function IllustrationAccess() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-auto">
      <defs>
        <filter id="accShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00594F" floodOpacity="0.07" />
        </filter>
        <linearGradient id="accGrad" x1="0" y1="0" x2="200" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FAFFDC" stopOpacity="0.2" />
          <stop offset="1" stopColor="#E1FEE5" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="200" height="140" rx="16" fill="url(#accGrad)" />
      <g filter="url(#accShadow)">
        <rect x="56" y="6" width="88" height="36" rx="10" fill="white" />
        <circle cx="76" cy="20" r="8" fill="#00594F" opacity="0.1" />
        <circle cx="76" cy="17" r="3" fill="#00594F" opacity="0.2" />
        <path d="M71 24 C71 21 73 19 76 19 C79 19 81 21 81 24" stroke="#00594F" strokeWidth="0.8" opacity="0.15" />
        <rect x="90" y="14" width="42" height="5" rx="2.5" fill="#00594F" opacity="0.55" />
        <rect x="90" y="23" width="28" height="4" rx="2" fill="#00594F" opacity="0.12" />
      </g>
      <line x1="80" y1="42" x2="54" y2="62" stroke="#00594F" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
      <line x1="120" y1="42" x2="146" y2="62" stroke="#00594F" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
      <g filter="url(#accShadow)">
        <rect x="10" y="62" width="80" height="68" rx="10" fill="white" />
        <circle cx="50" cy="80" r="10" fill="#CEDC00" opacity="0.2" />
        <circle cx="50" cy="77" r="4" fill="#00594F" opacity="0.15" />
        <path d="M43 84 C43 81 46 79 50 79 C54 79 57 81 57 84" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
        <rect x="22" y="98" width="56" height="5" rx="2.5" fill="#00594F" opacity="0.4" />
        <rect x="22" y="108" width="56" height="14" rx="7" fill="#CEDC00" opacity="0.2" />
        <rect x="32" y="113" width="36" height="4" rx="2" fill="#00594F" opacity="0.2" />
      </g>
      <g filter="url(#accShadow)">
        <rect x="110" y="62" width="80" height="68" rx="10" fill="white" />
        <circle cx="150" cy="80" r="10" fill="#00594F" opacity="0.07" />
        <circle cx="150" cy="77" r="4" fill="#00594F" opacity="0.15" />
        <path d="M143 84 C143 81 146 79 150 79 C154 79 157 81 157 84" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
        <rect x="122" y="98" width="56" height="5" rx="2.5" fill="#00594F" opacity="0.4" />
        <rect x="122" y="108" width="56" height="14" rx="7" fill="#00594F" opacity="0.06" />
        <rect x="132" y="113" width="36" height="4" rx="2" fill="#00594F" opacity="0.15" />
      </g>
    </svg>
  );
}

function IllustrationChat() {
  return (
    <svg viewBox="0 0 360 140" fill="none" className="w-full h-auto">
      <defs>
        <filter id="chatShadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00594F" floodOpacity="0.07" />
        </filter>
        <linearGradient id="chatGrad" x1="0" y1="0" x2="360" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E1FEE5" stopOpacity="0.2" />
          <stop offset="1" stopColor="#FAFFDC" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="360" height="140" rx="16" fill="url(#chatGrad)" />
      <g filter="url(#chatShadow)">
        <circle cx="30" cy="36" r="14" fill="white" />
        <circle cx="30" cy="32" r="5" fill="#00594F" opacity="0.15" />
        <path d="M23 40 C23 37 26 35 30 35 C34 35 37 37 37 40" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      </g>
      <g filter="url(#chatShadow)">
        <rect x="54" y="16" width="148" height="44" rx="14" fill="white" />
        <rect x="70" y="28" width="80" height="5" rx="2.5" fill="#00594F" opacity="0.4" />
        <rect x="70" y="38" width="52" height="4" rx="2" fill="#00594F" opacity="0.12" />
        <rect x="168" y="30" width="24" height="10" rx="5" fill="#00594F" opacity="0.06" />
        <rect x="172" y="33" width="16" height="4" rx="2" fill="#00594F" opacity="0.12" />
      </g>
      <g filter="url(#chatShadow)">
        <circle cx="330" cy="86" r="14" fill="white" />
        <circle cx="330" cy="82" r="5" fill="#CEDC00" opacity="0.3" />
        <path d="M323 90 C323 87 326 85 330 85 C334 85 337 87 337 90" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      </g>
      <g filter="url(#chatShadow)">
        <rect x="158" y="72" width="160" height="44" rx="14" fill="white" />
        <rect x="174" y="84" width="90" height="5" rx="2.5" fill="#00594F" opacity="0.4" />
        <rect x="174" y="94" width="60" height="4" rx="2" fill="#00594F" opacity="0.12" />
        <rect x="282" y="86" width="24" height="10" rx="5" fill="#CEDC00" opacity="0.2" />
        <rect x="286" y="89" width="16" height="4" rx="2" fill="#00594F" opacity="0.15" />
      </g>
      <g filter="url(#chatShadow)">
        <rect x="64" y="104" width="120" height="26" rx="13" fill="white" />
        <rect x="78" y="113" width="56" height="5" rx="2.5" fill="#00594F" opacity="0.12" />
        <circle cx="168" cy="117" r="9" fill="#00594F" opacity="0.06" />
        <path d="M165 117 L171 117 M168 114 L168 120" stroke="#00594F" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const gridFeatures = [
  {
    title: "Profitability Dashboard",
    description:
      "Real-time revenue, labor costs, parts costs, and net profit - by day or date range.",
    illustration: IllustrationDashboard,
    span: "md:col-span-2",
  },
  {
    title: "Flexible Invoicing",
    description:
      "Configure tax rates, fees, and parts markup once. Every invoice follows your rules.",
    illustration: IllustrationInvoice,
    span: "md:col-span-2",
  },
  {
    title: "Courtesy Inspection",
    description:
      "Quick vehicle condition checklist with photos - trust before the first wrench turn.",
    illustration: IllustrationInspection,
    span: "md:col-span-2",
  },
  {
    title: "Role-Based Access",
    description:
      "Each role sees exactly what they need - owners see everything, techs see their jobs.",
    illustration: IllustrationAccess,
    span: "md:col-span-3",
  },
  {
    title: "In-App Messaging",
    description:
      "Direct chat tied to each appointment - no external texting apps needed.",
    illustration: IllustrationChat,
    span: "md:col-span-3",
  },
];

/* ─────────────── Section component ─────────────── */

export default function Features() {
  return (
    <section id="features" className="bg-white relative">
      {/* Heading — scrolls normally above the sticky showcase */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full">
            For service providers
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            Everything an independent shop needs.{" "}
            <span className="gradient-text">Nothing it doesn&apos;t.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scroll-driven iPad showcase — sticky */}
      <FeaturesShowcase />

      {/* Remaining bento grid — 5 items, balanced 3 + 2 rows */}
      <div className="relative max-w-5xl mx-auto px-6 w-full pt-12 sm:pt-16 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-3"
        >
          {gridFeatures.map((feature) => {
            const Illust = feature.illustration;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className={`group rounded-2xl bg-[#f7f8f9] border border-slate-100 overflow-hidden transition-all duration-400 hover:border-[#00594F]/12 hover:shadow-md hover:shadow-[#00594F]/5 hover:-translate-y-0.5 ${feature.span}`}
              >
                <div className="px-4 pt-4 pb-1.5">
                  <Illust />
                </div>
                <div className="px-4 pb-4 pt-2 border-t border-slate-100/80">
                  <h3 className="text-sm font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#00594F] text-white font-semibold rounded-full hover:bg-[#003d35] transition-all hover:shadow-xl hover:shadow-[#00594F]/20 hover:-translate-y-0.5"
          >
            Start Free Trial
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#00594F]/15 text-[#00594F] font-semibold rounded-full hover:bg-[#00594F]/5 transition-all"
          >
            Schedule a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
