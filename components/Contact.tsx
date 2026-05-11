"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end mb-10 lg:mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full">
              Get in touch
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Contact Us
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="text-slate-500 text-sm sm:text-base leading-relaxed lg:text-right lg:max-w-sm lg:justify-self-end"
          >
            Tell us about your shop and we&apos;ll get back to you within 24 hours -
            real humans, no chatbots.
          </motion.p>
        </motion.div>

        {/* Form + Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-stretch"
        >
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-slate-50 rounded-3xl border border-slate-200/70 p-6 sm:p-8 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Name" placeholder="Your full name" />
              <Field id="email" type="email" label="Email" placeholder="you@example.com" />
              <Field id="phone" type="tel" label="Phone Number" placeholder="(555) 123-4567" />
              <Field id="shop" label="Shop Name" placeholder="Your shop name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div>
                <label htmlFor="bays" className="block text-xs font-medium text-slate-600 mb-1.5">
                  Number of Bays
                </label>
                <select
                  id="bays"
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%2212%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%2364748b%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10"
                >
                  <option value="" disabled>
                    Select shop size
                  </option>
                  <option value="1-2">1 - 2 bays</option>
                  <option value="3-5">3 - 5 bays</option>
                  <option value="6-10">6 - 10 bays</option>
                  <option value="10+">10+ bays</option>
                </select>
              </div>
              <Field id="contact-time" label="Best Time to Reach You" placeholder="e.g. Weekday mornings" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-1.5">
                Message / What you&apos;d like to know
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Anything else we should know?"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] transition-all resize-none"
              />
            </div>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-full hover:bg-[#00594F] transition-all hover:shadow-lg hover:shadow-[#00594F]/20"
              >
                Get In Touch
              </button>
              <button
                type="submit"
                aria-label="Submit"
                className="inline-flex items-center justify-center w-12 h-12 border border-slate-300 text-slate-700 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </form>

          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 min-h-[360px] lg:min-h-0 shadow-sm">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/contact-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            {/* Soft top-right pill (echoes reference) */}
            <div className="absolute top-5 right-5">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold rounded-full shadow-sm">
                See it in action
              </span>
            </div>
            {/* Subtle bottom gradient for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] transition-all"
      />
    </div>
  );
}
