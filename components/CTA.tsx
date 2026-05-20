"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  ArrowRight,
  Calendar,
  Monitor,
  Smartphone,
  Download,
  X,
} from "lucide-react";

function clamp01(v: number, start: number, end: number) {
  if (v <= start) return 0;
  if (v >= end) return 1;
  return (v - start) / (end - start);
}

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [qrOpen, setQrOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Cards scale from 0.6 → 1.0 across first 75% of pin, then hold.
  const cardsScale = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0, 0.75);
    return 0.6 + p * 0.4;
  });

  // Ripple rings — three concentric circles pulsing during the scale-up
  const ripple1Scale = useTransform(scrollYProgress, (v: number) =>
    0.5 + clamp01(v, 0, 0.85) * 1.8
  );
  const ripple1Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0, 0.85);
    return Math.sin(p * Math.PI) * 0.4;
  });
  const ripple2Scale = useTransform(scrollYProgress, (v: number) =>
    0.4 + clamp01(v, 0.05, 0.9) * 2.2
  );
  const ripple2Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.05, 0.9);
    return Math.sin(p * Math.PI) * 0.32;
  });
  const ripple3Scale = useTransform(scrollYProgress, (v: number) =>
    0.3 + clamp01(v, 0.1, 0.95) * 2.7
  );
  const ripple3Opacity = useTransform(scrollYProgress, (v: number) => {
    const p = clamp01(v, 0.1, 0.95);
    return Math.sin(p * Math.PI) * 0.22;
  });

  // ESC to close QR modal
  useEffect(() => {
    if (!qrOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [qrOpen]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center px-6">
        {/* Ripple rings — concentric circles behind the cards */}
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
          style={{ scale: cardsScale }}
          className="relative w-full max-w-6xl mx-auto"
        >
          {/* Shared heading */}
          <motion.div variants={fadeInUp} className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full">
              Get started today
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Built for shops.{" "}
              <span className="gradient-text">Loved by customers.</span>
            </h2>
          </motion.div>

          {/* Two cards side by side */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {/* Card 1 — Shop / Service Provider (dark brand green) */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-[24px] overflow-hidden bg-[#00594F] shadow-2xl shadow-[#00594F]/30 min-h-[420px] flex flex-col"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/cta-bg.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00594F]/95 via-[#00594F]/80 to-[#003d35]/95" />

              <motion.img
                src="/shop-mockup.png"
                alt="FixMyCarDude shop dashboard"
                className="absolute right-0 -bottom-10 translate-x-1/2 w-[400px] sm:w-[440px] lg:w-[480px] h-auto rotate-[-6deg] drop-shadow-2xl pointer-events-none select-none opacity-90"
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 0.9, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#00594F]/30 via-[#00594F]/75 to-[#00594F]/95 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full p-7 sm:p-9">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#CEDC00] uppercase tracking-[0.18em] px-2.5 py-1 bg-[#CEDC00]/10 border border-[#CEDC00]/20 rounded-full w-fit">
                  <Monitor size={11} />
                  For Shops
                </div>
                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight">
                  Run your shop on{" "}
                  <span className="text-[#CEDC00]">FixMyCarDude</span>
                </h3>
                <p className="mt-3 text-white/65 text-sm sm:text-base leading-relaxed">
                  Scheduling, estimates, invoicing, and a free customer app —
                  all in one cloud-based system. Free for 21 days.
                </p>

                <div className="mt-auto pt-7 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#00594F] font-semibold text-sm rounded-full hover:bg-[#FAFFDC] transition-all hover:shadow-lg"
                  >
                    Start Free Trial
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/25 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-all"
                  >
                    <Calendar size={15} />
                    Schedule Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Customer App (light cream/lime) */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#FAFFDC] via-[#E1FEE5] to-[#CEDC00]/30 border border-[#CEDC00]/30 shadow-2xl shadow-[#CEDC00]/15 min-h-[420px] flex flex-col"
            >
              {/* Decorative blobs */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#CEDC00]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#00594F]/10 rounded-full blur-3xl" />

              {/* Floating phone mockup — bottom-right corner, mirrors Card 1's
                  dashboard placement so the two cards feel aligned */}
              <motion.img
                src="/customer-mockup.png"
                alt="FixMyCarDude customer app"
                className="absolute right-3 sm:right-5 bottom-3 w-[90px] sm:w-[100px] lg:w-[105px] h-auto rotate-[-6deg] drop-shadow-2xl pointer-events-none select-none opacity-95"
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 0.95, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Readability overlay — cream on the left where text sits,
                  fading to transparent in the bottom-right where the phone peeks in */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(250,255,220,0.3)_0%,_rgba(250,255,220,0.75)_35%,_rgba(250,255,220,0.95)_70%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full p-7 sm:p-9">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#00594F] uppercase tracking-[0.18em] px-2.5 py-1 bg-[#00594F]/10 border border-[#00594F]/15 rounded-full w-fit">
                  <Smartphone size={11} />
                  For Customers
                </div>
                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug tracking-tight">
                  Download the{" "}
                  <span className="gradient-text">customer app</span>
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Customers find your shop, book appointments, approve
                  estimates, and track repairs in real time. Free.
                </p>

                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    onClick={() => setQrOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00594F] text-white font-semibold text-sm rounded-full hover:bg-[#003d35] transition-all hover:shadow-lg hover:shadow-[#00594F]/20"
                  >
                    <Download size={15} />
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* QR popup modal */}
      <AnimatePresence>
        {qrOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4"
            onClick={() => setQrOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

            {/* Modal card */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setQrOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full">
                  <Smartphone size={12} />
                  Customer App
                </span>
                <h4 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Scan to download
                </h4>
                <p className="mt-1.5 text-sm text-slate-500">
                  Point your phone camera at one of the codes below.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <QRCard
                  src="/qr-appstore.png"
                  label="App Store"
                  store="iOS"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  }
                />
                <QRCard
                  src="/qr-playstore.png"
                  label="Google Play"
                  store="Android"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  }
                />
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                Free for your customers. Available on iOS and Android.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function QRCard({
  src,
  label,
  store,
  icon,
}: {
  src: string;
  label: string;
  store: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col items-center">
      <div className="w-full aspect-square rounded-xl bg-white p-2 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${label} QR code`} className="w-full h-full object-contain" />
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-slate-700">
        <span className="text-[#00594F]">{icon}</span>
        <div className="leading-tight text-center">
          <p className="text-[9px] text-slate-500 uppercase tracking-wider">{store}</p>
          <p className="text-[11px] font-semibold text-slate-900">{label}</p>
        </div>
      </div>
    </div>
  );
}
