"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Monitor, Smartphone } from "lucide-react";

export default function PlatformOverview() {
  return (
    <section id="platform" className="min-h-screen flex items-center py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
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
            className="inline-block text-sm font-semibold text-[#00594F] uppercase tracking-wider px-4 py-1 bg-[#00594F]/5 rounded-full"
          >
            The platform
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
          >
            One platform.{" "}
            <span className="gradient-text">Two powerful experiences.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg text-slate-500 leading-relaxed"
          >
            Most shop software stops at the garage door. FixMyCarDude goes
            further — connecting shop owners and customers on a single, real-time
            platform.
          </motion.p>
        </motion.div>

        {/* Two cards side by side */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Service Providers */}
          <motion.div
            variants={fadeInUp}
            className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-[#00594F]/8 transition-all duration-500"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="/images/service-providers.jpg"
                alt="Service provider managing their shop"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#00594F] border border-[#00594F]/10">
                  <Monitor size={12} />
                  Web App
                </span>
              </div>
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-xl font-bold text-slate-900">
                For Service Providers
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                A browser-based management platform for shop owners, service
                advisors, and technicians. Handle appointments, invoicing, and
                profitability tracking — all from one dashboard.
              </p>
            </div>
          </motion.div>

          {/* Customers */}
          <motion.div
            variants={fadeInUp}
            className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 hover:shadow-2xl hover:shadow-[#00594F]/8 transition-all duration-500"
          >
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="/images/customers.jpg"
                alt="Customer using FixMyCarDude app"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#00594F] border border-[#00594F]/10">
                  <Smartphone size={12} />
                  Mobile App
                </span>
              </div>
            </div>
            <div className="p-6 pt-2">
              <h3 className="text-xl font-bold text-slate-900">
                For Customers
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                A clean mobile app that lets customers find a shop, book a
                service, and track every repair in real time — no more phone tag
                or mystery invoices.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Connecting line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center mt-10 gap-4"
        >
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#00594F]/30" />
          <div className="px-4 py-2 bg-[#00594F]/5 rounded-full text-xs font-medium text-[#00594F] border border-[#00594F]/10">
            Connected in real time
          </div>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#00594F]/30" />
        </motion.div>
      </div>
    </section>
  );
}
