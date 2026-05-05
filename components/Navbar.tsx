"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#platform", label: "Overview" },
  { href: "#features", label: "Features" },
  { href: "#mobile-app", label: "Mobile App" },
  { href: "#integrations", label: "Integrations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    if (latest > lastY.current && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = latest;
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden && !mobileOpen ? -100 : 0, opacity: hidden && !mobileOpen ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className={`max-w-6xl mx-auto transition-all duration-500 ${
        scrolled ? "navbar-pill rounded-full" : "rounded-2xl"
      }`}>
        <div className="px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img
              src="/images/logo.svg"
              alt="FixMyCarDude"
              className="h-7 w-auto group-hover:scale-105 transition-transform"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#00594F] hover:bg-[#00594F]/5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#00594F] transition-colors"
            >
              Demo
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[#00594F] text-white text-sm font-semibold rounded-full hover:bg-[#003d35] transition-all hover:shadow-lg hover:shadow-[#00594F]/30 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#00594F]/5 transition-colors text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-[#00594F]/10"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-[#00594F]/5 hover:text-[#00594F] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-[#00594F] text-white text-sm font-semibold rounded-full text-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
