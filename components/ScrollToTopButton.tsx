"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once the user has scrolled past one viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-12 h-12 rounded-full bg-[#00594F] text-white shadow-lg shadow-[#00594F]/30 hover:bg-[#003d35] hover:shadow-xl hover:shadow-[#00594F]/40 hover:-translate-y-0.5 transition-all"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
