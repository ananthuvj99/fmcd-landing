"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

function IllustrationDashboard() {
  return (
    <svg viewBox="0 0 320 160" fill="none" className="w-full h-auto">
      <rect x="10" y="8" width="300" height="144" rx="10" stroke="#00594F" strokeWidth="1.5" opacity="0.2" />
      <rect x="22" y="22" width="85" height="50" rx="8" fill="#00594F" opacity="0.07" />
      <rect x="30" y="30" width="32" height="5" rx="2.5" fill="#00594F" opacity="0.25" />
      <rect x="30" y="40" width="22" height="18" rx="3" fill="#CEDC00" opacity="0.35" />
      <rect x="58" y="46" width="22" height="12" rx="3" fill="#00594F" opacity="0.18" />
      <rect x="120" y="22" width="85" height="50" rx="8" fill="#00594F" opacity="0.07" />
      <path d="M134 60 L152 40 L170 48 L188 28" stroke="#00594F" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <circle cx="152" cy="40" r="3.5" fill="#CEDC00" opacity="0.6" />
      <circle cx="188" cy="28" r="3.5" fill="#00594F" opacity="0.35" />
      <rect x="218" y="22" width="85" height="50" rx="8" fill="#00594F" opacity="0.07" />
      <text x="230" y="48" fontSize="24" fontWeight="700" fill="#00594F" opacity="0.3">$</text>
      <rect x="254" y="38" width="36" height="5" rx="2.5" fill="#00594F" opacity="0.15" />
      <rect x="254" y="48" width="24" height="5" rx="2.5" fill="#CEDC00" opacity="0.3" />
      <rect x="22" y="84" width="276" height="8" rx="4" fill="#00594F" opacity="0.06" />
      <rect x="22" y="84" width="190" height="8" rx="4" fill="#CEDC00" opacity="0.25" />
      <rect x="22" y="100" width="276" height="8" rx="4" fill="#00594F" opacity="0.06" />
      <rect x="22" y="100" width="130" height="8" rx="4" fill="#00594F" opacity="0.15" />
      <rect x="22" y="118" width="130" height="26" rx="6" fill="#00594F" opacity="0.06" />
      <rect x="164" y="118" width="130" height="26" rx="6" fill="#00594F" opacity="0.06" />
    </svg>
  );
}

function IllustrationEstimate() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <rect x="30" y="6" width="120" height="108" rx="8" stroke="#00594F" strokeWidth="1.5" opacity="0.2" fill="white" />
      <rect x="46" y="20" width="60" height="6" rx="3" fill="#00594F" opacity="0.25" />
      <rect x="46" y="32" width="40" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <line x1="46" y1="44" x2="134" y2="44" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      <rect x="46" y="52" width="66" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="120" y="52" width="18" height="4" rx="2" fill="#00594F" opacity="0.2" />
      <rect x="46" y="62" width="54" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="120" y="62" width="18" height="4" rx="2" fill="#00594F" opacity="0.2" />
      <rect x="46" y="72" width="60" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="120" y="72" width="18" height="4" rx="2" fill="#00594F" opacity="0.2" />
      <line x1="46" y1="84" x2="134" y2="84" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      <rect x="88" y="92" width="50" height="14" rx="7" fill="#CEDC00" opacity="0.3" />
      <circle cx="100" cy="99" r="4" stroke="#00594F" strokeWidth="1.2" opacity="0.3" fill="none" />
      <path d="M98 99 L99.5 100.5 L102 97.5" stroke="#00594F" strokeWidth="1" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IllustrationJobBoard() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <rect x="8" y="10" width="74" height="44" rx="7" fill="#00594F" fillOpacity="0.05" stroke="#00594F" strokeWidth="1" opacity="0.15" />
      <rect x="18" y="20" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.25" />
      <rect x="18" y="30" width="52" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <rect x="18" y="38" width="36" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <circle cx="72" cy="20" r="5" fill="#CEDC00" opacity="0.4" />
      <rect x="98" y="10" width="74" height="44" rx="7" fill="#00594F" fillOpacity="0.05" stroke="#00594F" strokeWidth="1" opacity="0.15" />
      <rect x="108" y="20" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.25" />
      <rect x="108" y="30" width="52" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <rect x="108" y="38" width="36" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <circle cx="162" cy="20" r="5" fill="#00594F" opacity="0.15" />
      <rect x="8" y="66" width="74" height="44" rx="7" fill="#CEDC00" fillOpacity="0.07" stroke="#CEDC00" strokeWidth="1" opacity="0.2" />
      <rect x="18" y="76" width="28" height="5" rx="2.5" fill="#00594F" opacity="0.25" />
      <rect x="18" y="86" width="52" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <rect x="18" y="94" width="36" height="3.5" rx="1.75" fill="#00594F" opacity="0.1" />
      <circle cx="72" cy="76" r="5" fill="#CEDC00" opacity="0.45" />
      <path d="M70 76 L71.5 77.5 L74 75" stroke="#00594F" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <rect x="98" y="66" width="74" height="44" rx="7" fill="#00594F" fillOpacity="0.03" stroke="#00594F" strokeWidth="1" opacity="0.1" strokeDasharray="4 3" />
      <text x="135" y="93" fontSize="22" fill="#00594F" opacity="0.15" textAnchor="middle">+</text>
    </svg>
  );
}

function IllustrationCalendar() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <rect x="15" y="8" width="150" height="104" rx="8" stroke="#00594F" strokeWidth="1.5" opacity="0.2" />
      <rect x="15" y="8" width="150" height="22" rx="8" fill="#00594F" opacity="0.06" />
      <rect x="26" y="16" width="36" height="5" rx="2.5" fill="#00594F" opacity="0.25" />
      <line x1="15" y1="30" x2="165" y2="30" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      {[0,1,2,3,4,5,6].map(i => (
        <text key={i} x={30 + i * 20} y="42" fontSize="7" fill="#00594F" opacity="0.2" textAnchor="middle" fontWeight="600">
          {["M","T","W","T","F","S","S"][i]}
        </text>
      ))}
      {[0,1,2,3,4].map(row =>
        [0,1,2,3,4,5,6].map(col => {
          const day = row * 7 + col + 1;
          if (day > 31) return null;
          const isHighlight = day === 9 || day === 14 || day === 22;
          return (
            <rect
              key={`${row}-${col}`}
              x={21 + col * 20} y={48 + row * 12}
              width="16" height="10" rx="3"
              fill={isHighlight ? "#CEDC00" : "#00594F"}
              opacity={isHighlight ? 0.3 : 0.04}
            />
          );
        })
      )}
    </svg>
  );
}

function IllustrationInvoice() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <rect x="35" y="6" width="110" height="108" rx="8" stroke="#00594F" strokeWidth="1.5" opacity="0.2" fill="white" />
      <rect x="50" y="20" width="40" height="6" rx="3" fill="#00594F" opacity="0.25" />
      <rect x="50" y="32" width="28" height="4" rx="2" fill="#00594F" opacity="0.1" />
      <line x1="50" y1="44" x2="130" y2="44" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      <rect x="50" y="52" width="48" height="4" rx="2" fill="#00594F" opacity="0.1" />
      <rect x="112" y="52" width="20" height="4" rx="2" fill="#00594F" opacity="0.18" />
      <rect x="50" y="62" width="42" height="4" rx="2" fill="#00594F" opacity="0.1" />
      <rect x="112" y="62" width="20" height="4" rx="2" fill="#00594F" opacity="0.18" />
      <line x1="50" y1="76" x2="130" y2="76" stroke="#00594F" strokeWidth="1" opacity="0.15" />
      <rect x="96" y="80" width="36" height="6" rx="3" fill="#00594F" opacity="0.25" />
      <rect x="50" y="94" width="82" height="14" rx="7" fill="#CEDC00" opacity="0.25" />
      <rect x="68" y="99" width="46" height="4" rx="2" fill="#00594F" opacity="0.2" />
    </svg>
  );
}

function IllustrationInspection() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <rect x="20" y="6" width="90" height="108" rx="10" stroke="#00594F" strokeWidth="1.5" opacity="0.2" />
      <rect x="48" y="2" width="34" height="10" rx="5" fill="white" stroke="#00594F" strokeWidth="1" opacity="0.15" />
      <rect x="32" y="24" width="12" height="12" rx="3" stroke="#00594F" strokeWidth="1.2" opacity="0.2" />
      <path d="M35 30 L38 33 L41 28" stroke="#00594F" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="52" y="28" width="48" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="32" y="46" width="12" height="12" rx="3" stroke="#00594F" strokeWidth="1.2" opacity="0.2" />
      <path d="M35 52 L38 55 L41 50" stroke="#00594F" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="52" y="50" width="42" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="32" y="68" width="12" height="12" rx="3" stroke="#00594F" strokeWidth="1.2" opacity="0.2" />
      <rect x="52" y="72" width="38" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="32" y="90" width="12" height="12" rx="3" stroke="#CEDC00" strokeWidth="1.2" opacity="0.4" />
      <rect x="52" y="94" width="34" height="4" rx="2" fill="#00594F" opacity="0.12" />
      <rect x="124" y="20" width="44" height="40" rx="6" fill="#00594F" fillOpacity="0.05" stroke="#00594F" strokeWidth="1" opacity="0.12" />
      <circle cx="146" cy="34" r="8" fill="#CEDC00" opacity="0.2" />
      <path d="M143 34 L146 31 L149 34" stroke="#00594F" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <line x1="146" y1="31" x2="146" y2="39" stroke="#00594F" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <rect x="130" y="50" width="32" height="4" rx="2" fill="#00594F" opacity="0.1" />
    </svg>
  );
}

function IllustrationAccess() {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="w-full h-auto">
      <circle cx="52" cy="36" r="16" fill="#00594F" fillOpacity="0.07" stroke="#00594F" strokeWidth="1.2" opacity="0.15" />
      <circle cx="52" cy="30" r="6" fill="#00594F" opacity="0.15" />
      <path d="M40 44 C40 38 45 34 52 34 C59 34 64 38 64 44" stroke="#00594F" strokeWidth="1.2" opacity="0.15" />
      <circle cx="128" cy="36" r="16" fill="#CEDC00" fillOpacity="0.1" stroke="#CEDC00" strokeWidth="1.2" opacity="0.2" />
      <circle cx="128" cy="30" r="6" fill="#00594F" opacity="0.15" />
      <path d="M116 44 C116 38 121 34 128 34 C135 34 140 38 140 44" stroke="#00594F" strokeWidth="1.2" opacity="0.15" />
      <circle cx="90" cy="80" r="16" fill="#00594F" fillOpacity="0.04" stroke="#00594F" strokeWidth="1.2" opacity="0.1" />
      <circle cx="90" cy="74" r="6" fill="#00594F" opacity="0.12" />
      <path d="M78 88 C78 82 83 78 90 78 C97 78 102 82 102 88" stroke="#00594F" strokeWidth="1.2" opacity="0.12" />
      <line x1="64" y1="46" x2="78" y2="68" stroke="#00594F" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
      <line x1="116" y1="46" x2="102" y2="68" stroke="#00594F" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 3" />
      <rect x="34" y="56" width="36" height="8" rx="4" fill="#00594F" opacity="0.07" />
      <rect x="38" y="58.5" width="16" height="3" rx="1.5" fill="#00594F" opacity="0.2" />
      <rect x="110" y="56" width="36" height="8" rx="4" fill="#CEDC00" opacity="0.15" />
      <rect x="114" y="58.5" width="14" height="3" rx="1.5" fill="#00594F" opacity="0.2" />
    </svg>
  );
}

function IllustrationChat() {
  return (
    <svg viewBox="0 0 320 120" fill="none" className="w-full h-auto">
      <circle cx="28" cy="34" r="12" fill="#00594F" opacity="0.08" />
      <circle cx="28" cy="31" r="4" fill="#00594F" opacity="0.15" />
      <path d="M22 38 C22 35 24 33 28 33 C32 33 34 35 34 38" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      <rect x="48" y="18" width="120" height="38" rx="14" fill="#00594F" opacity="0.06" />
      <rect x="64" y="30" width="70" height="5" rx="2.5" fill="#00594F" opacity="0.15" />
      <rect x="64" y="40" width="44" height="4" rx="2" fill="#00594F" opacity="0.08" />
      <circle cx="292" cy="68" r="12" fill="#CEDC00" opacity="0.12" />
      <circle cx="292" cy="65" r="4" fill="#00594F" opacity="0.15" />
      <path d="M286 72 C286 69 288 67 292 67 C296 67 298 69 298 72" stroke="#00594F" strokeWidth="0.8" opacity="0.12" />
      <rect x="152" y="54" width="130" height="38" rx="14" fill="#CEDC00" opacity="0.08" />
      <rect x="168" y="66" width="70" height="5" rx="2.5" fill="#00594F" opacity="0.15" />
      <rect x="168" y="76" width="50" height="4" rx="2" fill="#00594F" opacity="0.08" />
      <rect x="60" y="96" width="100" height="18" rx="9" stroke="#00594F" strokeWidth="1" opacity="0.12" />
      <rect x="72" y="103" width="44" height="4" rx="2" fill="#00594F" opacity="0.1" />
      <circle cx="148" cy="105" r="7" fill="#00594F" opacity="0.08" />
      <path d="M146 105 L150 105 M148 103 L148 107" stroke="#00594F" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
    </svg>
  );
}

const features = [
  {
    title: "Profitability Dashboard",
    description: "Real-time revenue, labor costs, parts costs, and net profit — by day or date range.",
    illustration: IllustrationDashboard,
    span: "md:col-span-2 md:row-span-2",
    tall: true,
  },
  {
    title: "Smart Estimates & DVI",
    description: "Build categorized estimates with digital vehicle inspection. Customers approve from their phone.",
    illustration: IllustrationEstimate,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Technician Job Board",
    description: "Assign jobs, track progress — no sticky notes or calls to the front desk.",
    illustration: IllustrationJobBoard,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Appointment Management",
    description: "Slot control, history tracking, and automated customer reminders for every drop-off.",
    illustration: IllustrationCalendar,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Flexible Invoicing",
    description: "Configure tax rates, fees, and parts markup once. Every invoice follows your rules.",
    illustration: IllustrationInvoice,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Courtesy Inspection",
    description: "Quick vehicle condition checklist with photos — trust before the first wrench turn.",
    illustration: IllustrationInspection,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Role-Based Access",
    description: "Each role sees exactly what they need — owners see everything, techs see their jobs.",
    illustration: IllustrationAccess,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "In-App Messaging",
    description: "Direct chat tied to each appointment — no external texting apps needed.",
    illustration: IllustrationChat,
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-10"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold text-[#00594F] uppercase tracking-wider px-4 py-1 bg-[#00594F]/5 rounded-full"
          >
            For service providers
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Everything your shop needs to{" "}
            <span className="gradient-text">run at its best.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-4"
        >
          {features.map((feature) => {
            const Illust = feature.illustration;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className={`group rounded-2xl bg-[#f7f8f9] border border-slate-100 overflow-hidden transition-all duration-400 hover:border-[#00594F]/12 hover:shadow-lg hover:shadow-[#00594F]/5 hover:-translate-y-0.5 ${feature.span}`}
              >
                <div className="px-5 pt-5 pb-2">
                  <Illust />
                </div>
                <div className="px-5 pb-5 pt-2 border-t border-slate-100/80">
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
