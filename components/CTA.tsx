"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 px-6 relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#0a1a17] shadow-2xl shadow-[#00594F]/20"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        />
        {/* Subtle darkening overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a17]/75 via-[#0a1a17]/45 to-[#0a1a17]/55" />

        <div className="relative z-10">
          {/* Top section */}
          <div className="px-8 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-start">
              {/* Left — heading */}
              <motion.div variants={fadeInUp} className="lg:col-span-3">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                  Download{" "}
                  <span className="text-[#CEDC00]">FixMyCarDude</span>{" "}
                  now
                </h2>
                <p className="mt-5 text-white/55 text-base sm:text-lg max-w-md leading-relaxed">
                  Scan to install the customer app, or get the shop dashboard
                  on the web. Free for 14 days.
                </p>
              </motion.div>

              {/* Right — QR codes */}
              <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-wrap sm:flex-nowrap gap-4 sm:justify-end">
                <QRBlock
                  src="/qr-appstore.png"
                  label="App Store"
                  sub="Scan to download"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  }
                />
                <QRBlock
                  src="/qr-playstore.png"
                  label="Google Play"
                  sub="Scan to download"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  }
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom yellow accent bar — desktop CTAs */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#CEDC00] px-8 sm:px-12 lg:px-16 py-6 sm:py-7"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <p className="text-[#0a1a17] text-xs font-bold tracking-[0.18em] uppercase">
                  Run your shop on the web
                </p>
                <p className="mt-1 text-[#0a1a17]/70 text-sm">
                  No installs. No IT. Setup in under an hour.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:flex-nowrap">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#0a1a17] text-white font-semibold text-sm rounded-full hover:bg-[#00594F] transition-all"
                >
                  <Calendar size={15} />
                  Schedule a Demo
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white text-[#0a1a17] font-semibold text-sm rounded-full hover:bg-white/90 transition-all"
                >
                  Start Free Trial
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function QRBlock({
  src,
  label,
  sub,
  icon,
}: {
  src: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-1 sm:flex-initial bg-white/[0.04] border border-white/10 rounded-2xl p-3 backdrop-blur-sm hover:border-white/20 transition-colors">
      <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] rounded-xl bg-white p-2 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${label} QR code`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-3 px-1 flex items-center gap-1.5 text-white">
        <span className="opacity-70">{icon}</span>
        <div className="leading-tight">
          <p className="text-[10px] text-white/50">{sub}</p>
          <p className="text-xs font-semibold">{label}</p>
        </div>
      </div>
    </div>
  );
}
