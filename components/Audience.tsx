"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Shop Owners & Admins",
    description:
      "Full visibility into revenue, jobs, and team performance. Set up pricing rules, manage roles, and track profitability from one dashboard.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
  },
  {
    number: "02",
    title: "Service Advisors",
    description:
      "Write estimates, communicate with customers, manage appointments, and send invoices — without switching between tools.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop",
  },
  {
    number: "03",
    title: "Technicians",
    description:
      "See your assigned jobs, complete inspection checklists, access labor guides, and track part status — all from the job board.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
  },
  {
    number: "04",
    title: "Car Owners & Customers",
    description:
      "Find a trusted shop near you, get a clear estimate before work begins, and stay updated on your repair in real time.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
  },
];

export default function Audience() {
  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E1FEE5]/20 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
          >
            Built for everyone in the{" "}
            <span className="gradient-text">repair journey.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg text-slate-600"
          >
            Whether you&apos;re running the shop or dropping off the car —
            FixMyCarDude was made with you in mind.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#00594F]/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00594F]/8"
            >
              <div className="relative h-44 overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-bold text-[#00594F] border border-[#00594F]/10">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
