"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const dashboardY = useTransform(scrollYProgress, [0, 0.5], [60, -320]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 0.35], [4, 0]);

  // Keep the heading fully visible while the dashboard scrolls up, then
  // fade it out at the END — right as the dashboard reaches its final
  // pinned position (scroll progress 0.5 = dashboardY done at -320).
  const FADE_START = 0.35;
  const FADE_END = 0.5;
  const headingOpacity = useTransform(scrollYProgress, (v: number) => {
    if (v <= FADE_START) return 1;
    if (v >= FADE_END) return 0;
    return 1 - (v - FADE_START) / (FADE_END - FADE_START);
  });
  const headingY = useTransform(scrollYProgress, (v: number) => {
    if (v <= FADE_START) return 0;
    if (v >= FADE_END) return -60;
    return -((v - FADE_START) / (FADE_END - FADE_START)) * 60;
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center pt-24">
        {/* Background — subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E1FEE5]/40 via-[#FAFFDC]/20 to-white" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Subtle decorative blobs */}
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-[#CEDC00]/15 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#00594F]/8 rounded-full blur-[100px] animate-blob-delay" />

        {/* Heading */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#00594F] border border-[#00594F]/10 shadow-sm">
                <span className="w-2 h-2 bg-[#00594F] rounded-full animate-pulse" />
                Now in early access
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-slate-900"
            >
              The Auto Shop Management Software{" "}
              <span className="gradient-text">Built for Independent Shops.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              Ditch the paper tickets, the phone tag, and the spreadsheets.
              FixMyCarDude gives your shop cloud-based scheduling, digital
              estimates, and real-time customer updates - all in one place. Your
              bays stay full. Your customers stay informed. Your headaches disappear.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#00594F] text-white font-semibold rounded-full hover:bg-[#003d35] transition-all hover:shadow-xl hover:shadow-[#00594F]/25 hover:-translate-y-0.5"
              >
                Start Free 14-Day Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/70 backdrop-blur-sm border border-[#00594F]/10 text-[#00594F] font-semibold rounded-full hover:bg-white transition-all hover:-translate-y-0.5"
              >
                <Play size={14} fill="currentColor" />
                Watch Demo
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm text-slate-500"
            >
              No credit card required · Up and running in under an hour · Everything included from day one
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-sm text-[#00594F] font-medium"
            >
              Already on Mitchell1 or paper tickets? We make switching painless.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Dashboard — scroll-driven scale & translate */}
        <motion.div
          style={{
            scale: dashboardScale,
            y: dashboardY,
            rotateX: dashboardRotate,
          }}
          className="relative z-10 mt-10 w-[90%] max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-[#00594F]/10 rounded-[32px] blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden brand-glow-strong border border-white/60 bg-white">
              <img
                src="/images/banner.png"
                alt="FixMyCarDude Dashboard"
                className="w-full h-auto block"
                style={{ display: "block" }}
              />
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
              className="absolute top-12 -left-4 sm:-left-12 bg-white rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2.5 animate-pulse-glow hidden sm:flex"
            >
              <div className="w-7 h-7 bg-[#00594F]/10 rounded-full flex items-center justify-center">
                <span className="text-[#00594F] text-xs">✓</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Just now</p>
                <p className="text-xs font-medium text-slate-800">Estimate approved!</p>
              </div>
            </motion.div>

            {/* Floating revenue stat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 animate-float-delay hidden sm:block"
            >
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Today&apos;s Revenue</p>
              <p className="text-xl font-bold text-slate-900 mt-0.5">$1,280</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[10px] font-bold text-[#00594F]">↑ 8%</span>
                <span className="text-[10px] text-slate-400">vs yesterday</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ opacity: headingOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-5 h-8 border border-[#00594F]/30 rounded-full flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-[#00594F] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
