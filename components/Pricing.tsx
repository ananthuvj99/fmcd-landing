"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Zap, Star, Shield } from "lucide-react";

const plans = [
  {
    icon: Shield,
    name: "Free Trial",
    price: "21",
    unit: "Days",
    label: "FREE trial",
    description: "Try everything free - no credit card required.",
    highlight: false,
  },
  {
    icon: Zap,
    name: "Annual",
    price: "$347",
    unit: "per month",
    label: "Billed annually (Save 10%)",
    description: "Best value for growing shops.",
    highlight: true,
    badge: "Most Popular",
  },
  {
    icon: Star,
    name: "Monthly",
    price: "$397",
    unit: "per month",
    label: "Billed monthly",
    description: "Full flexibility, cancel anytime.",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E1FEE5]/20 to-white" />

      {/* Decorative blobs */}
      <div className="absolute top-12 -left-20 w-[340px] h-[340px] bg-[#CEDC00]/20 rounded-[60px] rotate-12 blur-sm" />
      <div className="absolute top-32 -left-10 w-[280px] h-[280px] bg-[#E1FEE5]/50 rounded-[50px] -rotate-6" />
      <div className="absolute bottom-12 -right-20 w-[340px] h-[340px] bg-[#CEDC00]/20 rounded-[60px] -rotate-12 blur-sm" />
      <div className="absolute bottom-32 -right-10 w-[280px] h-[280px] bg-[#E1FEE5]/50 rounded-[50px] rotate-6" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full"
          >
            <Zap size={12} />
            Pricing
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Flat pricing. Every feature.{" "}
            <span className="gradient-text">No gotchas.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-500 leading-relaxed max-w-lg mx-auto"
          >
            Every plan includes the full platform - scheduling, estimates,
            invoicing, DVI, customer messaging, and profitability reporting. No
            upsells, no surprises.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid sm:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative"
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-block px-5 py-1.5 bg-[#00594F] text-white text-xs font-bold rounded-full shadow-lg shadow-[#00594F]/25">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl p-7 transition-all duration-300 overflow-hidden ${
                  plan.highlight
                    ? "bg-white border-2 border-[#CEDC00] shadow-xl shadow-[#00594F]/8"
                    : "bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:shadow-[#00594F]/8 group-hover:border-[#00594F]/20"
                }`}
              >
                {/* Decorative corner shape inside card */}
                <div
                  className={`absolute -top-10 -right-10 w-28 h-28 rounded-3xl rotate-12 transition-all duration-500 ${
                    plan.highlight
                      ? "bg-[#CEDC00]/15 group-hover:rotate-[20deg] group-hover:scale-110"
                      : "bg-[#E1FEE5]/40 group-hover:rotate-[20deg] group-hover:scale-110"
                  }`}
                />
                <div
                  className={`absolute -top-6 -right-6 w-20 h-20 rounded-2xl rotate-6 transition-all duration-500 ${
                    plan.highlight
                      ? "bg-[#CEDC00]/10 group-hover:rotate-[15deg] group-hover:scale-105"
                      : "bg-[#E1FEE5]/25 group-hover:rotate-[15deg] group-hover:scale-105"
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      plan.highlight
                        ? "bg-[#00594F] text-white shadow-lg shadow-[#00594F]/25"
                        : "bg-[#00594F]/8 text-[#00594F] group-hover:bg-[#00594F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#00594F]/25"
                    }`}
                  >
                    <plan.icon size={20} />
                  </div>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-4xl font-bold transition-colors duration-300 ${
                          plan.highlight ? "text-[#00594F]" : "text-slate-900 group-hover:text-[#00594F]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">{plan.unit}</span>
                    </div>
                    <p className={`mt-1 text-sm font-semibold ${
                      plan.highlight ? "text-[#00594F]" : "text-slate-700"
                    }`}>
                      {plan.label}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
