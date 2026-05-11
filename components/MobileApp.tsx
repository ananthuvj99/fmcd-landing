"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MapPin, CheckCircle2, Bell, MessageCircle } from "lucide-react";

const screenImages: Record<string, string> = {
  find: "/images/find.png",
  approve: "/images/approve.png",
  updates: "/images/updates.png",
  chat: "/images/chat.png",
};

const appFeatures = [
  {
    id: "find",
    icon: MapPin,
    title: "Find shops nearby",
    description: "Browse repair shops on a map or list. See services, ratings, and availability - book with one tap.",
  },
  {
    id: "approve",
    icon: CheckCircle2,
    title: "Approve estimates",
    description: "Review what's being done to your vehicle, line by line. Approve, decline, or ask questions.",
  },
  {
    id: "updates",
    icon: Bell,
    title: "Live repair updates",
    description: "Push notifications at every stage - when your car goes in, work starts, and it's ready.",
  },
  {
    id: "chat",
    icon: MessageCircle,
    title: "Chat with your shop",
    description: "Message the shop directly inside the app. No hold music. No missed calls.",
  },
];

function FeatureCard({
  feature,
  isActive,
  onHover,
}: {
  feature: typeof appFeatures[0];
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={onHover}
      className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
        isActive
          ? "border-[#00594F]/20 shadow-lg shadow-[#00594F]/10"
          : "bg-white/70 backdrop-blur-sm border-white/80 hover:border-[#00594F]/15"
      }`}
      style={isActive ? { background: "linear-gradient(135deg, #E1FEE5 0%, #FAFFDC 50%, #E1FEE5 100%)" } : undefined}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
        isActive ? "bg-[#00594F]/10" : "bg-[#00594F]/8"
      }`}>
        <feature.icon size={16} className="text-[#00594F]" />
      </div>
      <h3 className={`mt-3 text-sm font-bold transition-colors ${isActive ? "text-[#00594F]" : "text-slate-900"}`}>
        {feature.title}
      </h3>
      <p className={`mt-1 text-xs leading-relaxed transition-colors ${isActive ? "text-slate-600" : "text-slate-500"}`}>
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function MobileApp() {
  const [activeScreen, setActiveScreen] = useState("find");

  return (
    <section
      id="mobile-app"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 mint-gradient-radial" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full"
          >
            For car owners
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Your car is in good hands.{" "}
            <span className="gradient-text">Now you&apos;ll know it, too.</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00594F] text-white rounded-xl hover:bg-[#003d35] transition-colors hover:shadow-lg hover:shadow-[#00594F]/20">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] opacity-80 leading-none">Download on the</p>
                <p className="text-xs font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#00594F]/15 text-[#00594F] rounded-xl hover:bg-[#00594F]/5 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] opacity-70 leading-none">Get it on</p>
                <p className="text-xs font-semibold">Google Play</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Interactive layout: cards – phone – cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
          {/* Left cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4"
          >
            {appFeatures.slice(0, 2).map((f) => (
              <FeatureCard
                key={f.id}
                feature={f}
                isActive={activeScreen === f.id}
                onHover={() => setActiveScreen(f.id)}
              />
            ))}
          </motion.div>

          {/* Center phone mockup — iPhone 15 Pro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-first lg:order-none"
          >
            <div className="relative">
              {/* Soft glow behind phone */}
              <div className="absolute -inset-8 bg-[#00594F]/8 rounded-[60px] blur-3xl" />

              {/* Phone body */}
              <div className="relative w-[260px] h-[530px]">
                {/* Titanium frame - outer shell */}
                <div
                  className="absolute inset-0 rounded-[50px]"
                  style={{
                    background: "linear-gradient(145deg, #e8e8e8 0%, #c4c4c4 30%, #a8a8a8 50%, #c4c4c4 70%, #d8d8d8 100%)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
                  }}
                />

                {/* Inner bezel */}
                <div className="absolute inset-[2px] rounded-[48px] bg-[#1a1a1a]" />

                {/* Side buttons — left */}
                {/* Silent switch */}
                <div
                  className="absolute -left-[2px] top-[100px] w-[2.5px] h-[24px] rounded-l-sm"
                  style={{ background: "linear-gradient(180deg, #d0d0d0, #a0a0a0, #d0d0d0)" }}
                />
                {/* Volume up */}
                <div
                  className="absolute -left-[2px] top-[140px] w-[2.5px] h-[38px] rounded-l-sm"
                  style={{ background: "linear-gradient(180deg, #d0d0d0, #a0a0a0, #d0d0d0)" }}
                />
                {/* Volume down */}
                <div
                  className="absolute -left-[2px] top-[188px] w-[2.5px] h-[38px] rounded-l-sm"
                  style={{ background: "linear-gradient(180deg, #d0d0d0, #a0a0a0, #d0d0d0)" }}
                />
                {/* Power button — right */}
                <div
                  className="absolute -right-[2px] top-[162px] w-[2.5px] h-[52px] rounded-r-sm"
                  style={{ background: "linear-gradient(180deg, #d0d0d0, #a0a0a0, #d0d0d0)" }}
                />

                {/* Screen area */}
                <div className="absolute inset-[6px] rounded-[44px] overflow-hidden bg-black">
                  {/* Screen content */}
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeScreen}
                        src={screenImages[activeScreen]}
                        alt={activeScreen}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>

                    {/* Dynamic Island */}
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-full z-10" />

                    {/* Home indicator */}
                    <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-[96px] h-[4px] bg-black/30 rounded-full z-10" />
                  </div>
                </div>

                {/* Screen edge highlight */}
                <div
                  className="absolute inset-[6px] rounded-[44px] pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.08)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4"
          >
            {appFeatures.slice(2, 4).map((f) => (
              <FeatureCard
                key={f.id}
                feature={f}
                isActive={activeScreen === f.id}
                onHover={() => setActiveScreen(f.id)}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
