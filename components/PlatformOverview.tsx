"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Monitor, Smartphone } from "lucide-react";

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full"
          >
            The platform
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            One platform{" "}
            <span className="gradient-text">organizes your entire shop.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed"
          >
            Independent shops run on too many disconnected tools. FixMyCarDude
            replaces all of them - scheduling, estimates, customer updates,
            technician workflows - in one cloud-based system.
          </motion.p>
        </motion.div>

        {/* Row 1 — Web App: text left, image right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00594F]/5 rounded-full text-xs font-semibold text-[#00594F] border border-[#00594F]/10">
              <Monitor size={12} />
              Web App
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
              Run your shop from a single dashboard.
            </h3>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-lg">
              Digital estimates, appointment scheduling, technician job
              assignments, invoicing, and real-time profit tracking - built for
              1-5 bay independent shops. No paper. No switching apps.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/service-providers.jpg"
                alt="Shop owner using FixMyCarDude dashboard"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#CEDC00]/30 blur-3xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Row 2 — Mobile App: image left, text right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 lg:mt-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="relative max-w-md mx-auto lg:mx-0 lg:mr-auto w-full lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/customers.jpg"
                alt="Customer using FixMyCarDude mobile app"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#00594F]/15 blur-3xl -z-10" />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:order-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00594F]/5 rounded-full text-xs font-semibold text-[#00594F] border border-[#00594F]/10">
              <Smartphone size={12} />
              Mobile App
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
              Your customers deserve better than a phone call and a prayer.
            </h3>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-lg">
              Give them a free app to book, approve estimates, and track their
              repair in real time. Higher approval rates, fewer calls, more
              repeat business.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
