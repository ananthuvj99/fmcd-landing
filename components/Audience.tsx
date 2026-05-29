"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Shop Owners & Admins",
    description:
      "Real-time revenue, labor costs, and profit - by day, by bay, by tech.",
    image: "/roles/owner.jpg",
  },
  {
    number: "02",
    title: "Service Advisors",
    description:
      "Write estimates, send DVIs, get approvals. No phone tag.",
    image: "/roles/service-advisor.jpg",
  },
  {
    number: "03",
    title: "Technicians",
    description:
      "Your jobs, your parts, your labor guides - all in one place.",
    image: "/roles/technician.jpg",
  },
  {
    number: "04",
    title: "Car Owners",
    description:
      "Book, approve, and track repairs from your phone.",
    image: "/roles/customer.jpg",
  },
];

export default function Audience() {
  return (
    // Full viewport height — content vertically centered. Cards animate in
    // from the right on view-enter. No sticky pin (which was leaving empty
    // pale-green space below after the cards finished animating).
    <section id="about" className="relative min-h-screen py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#E1FEE5]/40 via-[#FAFFDC]/30 to-[#E1FEE5]/40 flex items-center">
      <div className="relative w-full">
        {/* Animated background blobs */}
        <motion.div
          aria-hidden
          className="absolute top-[5%] left-[-6%] w-[420px] h-[420px] rounded-full bg-[#CEDC00]/25 blur-[140px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-[40%] right-[-8%] w-[480px] h-[480px] rounded-full bg-[#00594F]/15 blur-[150px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-[8%] left-[35%] w-[360px] h-[360px] rounded-full bg-emerald-300/20 blur-[130px]"
          animate={{ x: [0, 25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
              Built for everyone in the shop
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
            >
              The right tool for every role -{" "}
              <span className="gradient-text">without the learning curve.</span>
            </motion.h2>
          </motion.div>

          {/* Cards — slide in from the right one after another when the
              section enters view (whileInView), then stay visible for the
              whole sticky pin. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.1 },
              },
            }}
            className="mt-12 lg:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, x: 600 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-semibold text-[#00594F] tracking-[0.15em] px-2 py-1 bg-white/85 backdrop-blur-md rounded-full">
                    {step.number}
                  </span>
                </div>
                <div className="mt-4 px-1">
                  <h3 className="text-base lg:text-[17px] font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
