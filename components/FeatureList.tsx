"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Check, Clock, Settings, MessageSquare, Rocket } from "lucide-react";

const categories = [
  {
    id: "management",
    label: "Shop Management",
    icon: Settings,
    features: [
      { name: "Appointment scheduling", desc: "Slot-based booking with drop-off hour controls and appointment history.", live: true },
      { name: "Estimate builder", desc: "DVI-linked estimates with services, parts, and customer approval flow.", live: true },
      { name: "Invoice & payment", desc: "Send invoices, accept payments, and configure all fee types.", live: true },
      { name: "Profitability reports", desc: "Revenue, labor, parts costs, and net profit — with date range controls.", live: true },
      { name: "Courtesy inspection", desc: "Vehicle condition checklist with photo documentation on arrival.", live: true },
      { name: "Technician job board", desc: "Assigned tasks, part status, and labor reference for each tech.", live: true },
      { name: "Customer profiles", desc: "New vs. returning tracking, service history, and notes per vehicle.", live: true },
      { name: "Role-based access", desc: "Owner, admin, advisor, and technician views — each tailored to the role.", live: true },
      { name: "VIN scanner", desc: "Point and capture — vehicle details auto-fill, no manual entry.", live: true },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: MessageSquare,
    features: [
      { name: "In-app messaging", desc: "Direct shop-to-customer chat tied to each appointment.", live: true },
      { name: "SMS notifications", desc: "Customers get texts for updates, estimate links, and invoices.", live: true },
      { name: "Push notifications", desc: "Real-time alerts on the customer app for messages and status changes.", live: true },
      { name: "Estimate approval flow", desc: "Customers approve or decline line items remotely.", live: true },
    ],
  },
  {
    id: "coming",
    label: "Coming Soon",
    icon: Rocket,
    features: [
      { name: "Motor.com labor data", desc: "Pull OEM labor times and pricing guides directly into job estimates.", live: false },
      { name: "QuickBooks sync", desc: "Auto-sync invoices and revenue to your accounting software.", live: false },
      { name: "Multi-rate pricing", desc: "Set different labor rates for European cars, fleet accounts, and more.", live: false },
    ],
  },
];

export default function FeatureList() {
  const [activeTab, setActiveTab] = useState("management");
  const activeCat = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
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
            Everything included
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
          >
            No add-ons. No surprises.{" "}
            <span className="gradient-text">Everything&apos;s in the box.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-slate-500"
          >
            Every plan includes the full platform — shop web app,
            customer-facing tools, and all features below.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-1 p-1.5 bg-slate-100 rounded-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#00594F] text-white shadow-md shadow-[#00594F]/20"
                      : "text-slate-600 hover:text-[#00594F] hover:bg-white/60"
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                  }`}>
                    {cat.features.length}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {activeCat.features.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="group relative bg-white rounded-xl p-4 border border-slate-100 hover:border-[#00594F]/15 hover:shadow-lg hover:shadow-[#00594F]/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      f.live
                        ? "bg-[#00594F]/8 group-hover:bg-[#00594F] text-[#00594F] group-hover:text-white"
                        : "bg-amber-50 text-amber-500"
                    }`}>
                      {f.live ? (
                        <Check size={13} strokeWidth={2.5} />
                      ) : (
                        <Clock size={13} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{f.name}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
