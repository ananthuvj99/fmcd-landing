"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const integrations = [
  {
    id: "partstech",
    name: "PartsTech",
    status: "Live",
    description: "Search and order parts from inside a job. No browser switching, no copy-pasting part numbers.",
    color: "#FF6B35",
  },
  {
    id: "partsmatrix",
    name: "PartsMatrix",
    status: "Live",
    description: "Your parts pricing matrix, accessible directly within the workflow. Set it once, apply it everywhere.",
    color: "#2563EB",
  },
  {
    id: "motor",
    name: "Motor.com",
    status: "Coming soon",
    description: "Access OEM labor time standards and accurate pricing guides — directly tied to your estimates.",
    color: "#00594F",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    status: "Coming soon",
    description: "Close a job in FixMyCarDude and it posts to your books automatically.",
    color: "#2CA01C",
  },
];

function LogoIcon({ color, name }: { color: string; name: string }) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xs shadow-lg"
      style={{ background: color }}
    >
      {name === "PartsTech" && (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill="white" opacity="0.9" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" fill="white" opacity="0.6" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" fill="white" opacity="0.35" />
        </svg>
      )}
      {name === "PartsMatrix" && (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M6 6L12 10L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <path d="M6 12L12 16L18 12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M6 18L12 22L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </svg>
      )}
      {name === "Motor.com" && (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="2" opacity="0.8" />
          <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.6" />
          <path d="M12 5V8M12 16V19M5 12H8M16 12H19" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        </svg>
      )}
      {name === "QuickBooks" && (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect x="4" y="7" width="16" height="10" rx="2" stroke="white" strokeWidth="2" opacity="0.9" />
          <path d="M9 11V14M12 10V14M15 11V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        </svg>
      )}
    </div>
  );
}

const orbitPositions = [
  { top: "4%", left: "18%" },
  { top: "4%", right: "18%" },
  { bottom: "8%", left: "12%" },
  { bottom: "8%", right: "12%" },
];

export default function Integrations() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E1FEE5]/15 to-white" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold text-[#00594F] uppercase tracking-wider px-4 py-1 bg-[#00594F]/5 rounded-full"
          >
            Integrations
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Works with the tools{" "}
            <span className="gradient-text">your shop already relies on.</span>
          </motion.h2>
        </motion.div>

        {/* Central visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative mx-auto"
          style={{ maxWidth: 600, aspectRatio: "4 / 3" }}
        >
          {/* Dashboard mockup */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[65%]">
              <div className="absolute -inset-8 bg-[#00594F]/8 rounded-3xl blur-2xl" />
              <div className="relative">
                <div className="absolute -left-3 -top-3 w-[85%] h-full bg-slate-100/60 rounded-2xl border border-slate-200/60" />
                <div className="absolute -left-1.5 -top-1.5 w-[92%] h-full bg-slate-50/80 rounded-2xl border border-slate-200/80" />
                <div className="relative bg-white rounded-2xl border border-slate-200 p-5 shadow-xl shadow-slate-200/50">
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-1 h-12 bg-slate-50 rounded-lg border border-slate-100" />
                      <div className="flex-1 h-12 bg-slate-50 rounded-lg border border-slate-100" />
                    </div>
                    <div className="h-16 bg-slate-50 rounded-lg border border-slate-100" />
                    <div className="flex gap-3">
                      <div className="flex-1 h-8 bg-slate-50 rounded-lg border border-slate-100" />
                      <div className="w-24 h-8 bg-[#00594F]/10 rounded-lg border border-[#00594F]/15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashed connector lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 450">
            <line x1="155" y1="75" x2="230" y2="170" stroke="#00594F" strokeWidth="1" opacity="0.08" strokeDasharray="4 4" />
            <line x1="445" y1="75" x2="370" y2="170" stroke="#00594F" strokeWidth="1" opacity="0.08" strokeDasharray="4 4" />
            <line x1="125" y1="375" x2="215" y2="280" stroke="#00594F" strokeWidth="1" opacity="0.08" strokeDasharray="4 4" />
            <line x1="475" y1="375" x2="385" y2="280" stroke="#00594F" strokeWidth="1" opacity="0.08" strokeDasharray="4 4" />
          </svg>

          {/* Orbiting logos with tooltips */}
          {integrations.map((item, i) => {
            const pos = orbitPositions[i];
            const isActive = active === item.id;
            const isLeft = i === 0 || i === 2;
            return (
              <motion.div
                key={item.id}
                className="absolute z-10"
                style={{
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Glow */}
                    <div
                      className="absolute -inset-4 rounded-2xl blur-xl transition-opacity duration-300"
                      style={{ background: item.color, opacity: isActive ? 0.2 : 0.08 }}
                    />
                    <LogoIcon color={item.color} name={item.name} />
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute z-20 w-56 top-full mt-3 ${isLeft ? "left-0" : "right-0"}`}
                      >
                        <div className="bg-white rounded-xl p-4 shadow-xl shadow-slate-200/60 border border-slate-100">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-sm font-bold text-slate-900">{item.name}</span>
                            <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                              item.status === "Live"
                                ? "bg-[#00594F]/10 text-[#00594F]"
                                : "bg-amber-50 text-amber-600"
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mt-6"
        >
          Hover over an integration to learn more
        </motion.p>
      </div>
    </section>
  );
}
