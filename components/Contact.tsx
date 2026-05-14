"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white py-12 sm:py-16 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-6 lg:mb-8"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em] px-3 py-1 bg-[#00594F]/5 rounded-full">
              Get in touch
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Contact Us
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="text-slate-500 text-sm leading-relaxed lg:text-right lg:max-w-sm lg:justify-self-end"
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
          className="grid lg:grid-cols-[1.1fr_1fr] gap-5 lg:gap-7 items-stretch"
        >
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-slate-50 rounded-3xl border border-slate-200/70 p-5 sm:p-6 lg:p-7"
          >
            <div className="space-y-3.5">
              <Field id="name" label="Name" required placeholder="Your full name" />
              <Field id="shop" label="Shop Name" required placeholder="Your shop name" />
              <Field id="email" type="email" label="Email Address" required placeholder="you@example.com" />

              <div className="grid sm:grid-cols-2 gap-3.5">
                <Field id="phone" type="tel" label="Phone" required placeholder="(555) 123-4567" />
                <Field id="city" label="City" required placeholder="City" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <Field id="state" label="State" required placeholder="State" />
                <Field id="zipcode" label="Zipcode" required placeholder="Zipcode" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-slate-700 mb-1">
                  How can we help you?<span className="text-[#00594F] ml-0.5">*</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us a bit about what you're looking for..."
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] transition-all resize-none"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-full hover:bg-[#00594F] transition-all hover:shadow-lg hover:shadow-[#00594F]/20"
              >
                Get In Touch
              </button>
              <button
                type="submit"
                aria-label="Submit"
                className="inline-flex items-center justify-center w-11 h-11 border border-slate-300 text-slate-700 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ArrowUpRight size={17} />
              </button>
            </div>
          </form>

          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 min-h-[320px] lg:min-h-0 shadow-sm">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/contact-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold rounded-full shadow-sm">
                See it in action
              </span>
            </div>
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
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-slate-700 mb-1">
        {label}
        {required && <span className="text-[#00594F] ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594F]/20 focus:border-[#00594F] transition-all"
      />
    </div>
  );
}
