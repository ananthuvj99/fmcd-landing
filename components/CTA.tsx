"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 px-6 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#00594F]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CEDC00]/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#007a6d]/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Ready to run a{" "}
                <span className="text-[#CEDC00]">better shop?</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-5 text-white/70 text-lg leading-relaxed max-w-md"
              >
                14-day free trial. No credit card, no commitment — just a cleaner,
                more profitable way to manage your shop.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#00594F] font-semibold rounded-full hover:bg-[#FAFFDC] transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start Free Trial
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  Schedule a Demo
                </a>
              </motion.div>
            </div>

            {/* Right — download CTA */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#CEDC00]/20 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#CEDC00]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 18V6M12 18L7 13M12 18L17 13" />
                    <path d="M5 21H19" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Customer App</p>
                  <p className="text-white/50 text-xs">Free for your customers</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your customers find your shop, book appointments, and track repairs
                from the free app. The more customers on it, the smoother your shop runs.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#00594F] rounded-xl hover:bg-[#FAFFDC] transition-colors hover:shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] opacity-60 leading-none">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] opacity-50 leading-none">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
