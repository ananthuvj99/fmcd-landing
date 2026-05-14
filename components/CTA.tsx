"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Calendar } from "lucide-react";

function clamp01(v: number, start: number, end: number) {
  if (v <= start) return 0;
  if (v >= end) return 1;
  return (v - start) / (end - start);
}

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // 0 = section top hits viewport top (pin start), 1 = pin release
    offset: ["start start", "end end"],
  });

  // Card scales from 0.55 → 1.0 across the first 75% of the pin,
  // then holds for the last 25% before unsticking.
  const cardScale = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0, 0.75);
    return 0.55 + p * 0.45;
  });

  // Ripple rings — three concentric circles pulsing during the scale-up
  const ripple1Scale = useTransform(
    scrollYProgress,
    (v: number) => 0.5 + clamp01(v, 0, 0.85) * 1.8
  );
  const ripple1Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0, 0.85);
    return Math.sin(p * Math.PI) * 0.45;
  });
  const ripple2Scale = useTransform(
    scrollYProgress,
    (v: number) => 0.4 + clamp01(v, 0.05, 0.9) * 2.2
  );
  const ripple2Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.9);
    return Math.sin(p * Math.PI) * 0.35;
  });
  const ripple3Scale = useTransform(
    scrollYProgress,
    (v: number) => 0.3 + clamp01(v, 0.1, 0.95) * 2.7
  );
  const ripple3Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.1, 0.95);
    return Math.sin(p * Math.PI) * 0.25;
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-6">
        {/* Ripple rings — concentric circles emanating from card center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#00594F]/30"
            style={{ scale: ripple1Scale, opacity: ripple1Opacity }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#CEDC00]/50"
            style={{ scale: ripple2Scale, opacity: ripple2Opacity }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#00594F]/25"
            style={{ scale: ripple3Scale, opacity: ripple3Opacity }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ scale: cardScale }}
          className="relative w-full max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#00594F] shadow-2xl shadow-[#00594F]/30"
        >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        />
        {/* Green-tinted overlay — deep green on the left for text readability, lime on the right behind QR codes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00594F]/85 via-[#00594F]/60 to-[#CEDC00]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E1FEE5]/10 via-transparent to-[#00594F]/20" />

        <div className="relative z-10">
          {/* Top section */}
          <div className="px-7 sm:px-10 lg:px-14 pt-9 sm:pt-12 pb-8 sm:pb-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 items-center">
              {/* Left — heading */}
              <motion.div variants={fadeInUp} className="lg:col-span-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug tracking-tight">
                  Download{" "}
                  <span className="text-[#CEDC00]">FixMyCarDude</span>{" "}
                  now
                </h2>
                <p className="mt-3 text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
                  Scan to install the customer app, or get the shop dashboard
                  on the web. Free for 21 days.
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
            className="bg-[#CEDC00] px-7 sm:px-10 lg:px-14 py-5 sm:py-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[#0a1a17] text-[11px] font-bold tracking-[0.18em] uppercase">
                  Run your shop on the web
                </p>
                <p className="mt-1 text-[#0a1a17]/70 text-sm">
                  No installs. No IT. Setup in under an hour.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:flex-nowrap">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a1a17] text-white font-semibold text-sm rounded-full hover:bg-[#003d35] transition-all"
                >
                  <Calendar size={15} />
                  Schedule a Demo
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0a1a17] font-semibold text-sm rounded-full hover:bg-white/90 transition-all"
                >
                  Start Free Trial
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>
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
    <div className="flex-1 sm:flex-initial bg-white/[0.04] border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm">
      <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-lg bg-white p-1.5 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${label} QR code`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-2.5 px-1 flex items-center gap-1.5 text-white">
        <span className="opacity-70">{icon}</span>
        <div className="leading-tight">
          <p className="text-[9px] text-white/50">{sub}</p>
          <p className="text-[11px] font-semibold">{label}</p>
        </div>
      </div>
    </div>
  );
}
