"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-semibold text-[#00594F] uppercase tracking-wider px-4 py-1 bg-[#00594F]/5 rounded-full"
          >
            Get in touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Got questions? We&apos;re real people —{" "}
            <span className="gradient-text">not a chatbot.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-slate-500 leading-relaxed"
          >
            Whether you&apos;re evaluating FixMyCarDude for your shop or just want
            to see it in action — someone from our team will get back to you quickly.
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 space-y-4 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-lg shadow-slate-100/50"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] focus:bg-white transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] focus:bg-white transition-all"
                placeholder="john@shop.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] focus:bg-white transition-all"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] focus:bg-white transition-all resize-none"
              placeholder="Tell us about your shop..."
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00594F] text-white font-semibold rounded-full hover:bg-[#003d35] transition-all hover:shadow-xl hover:shadow-[#00594F]/25 hover:-translate-y-0.5"
            >
              <Send size={16} />
              Send Message
            </button>
            <p className="text-xs text-slate-400">
              We typically reply within a few hours.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
