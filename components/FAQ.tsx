"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can I replace Mitchell1 with FixMyCarDude?",
    answer:
      "Yes. FixMyCarDude is built as a modern, cloud-based alternative to Mitchell1. You get digital estimates, scheduling, technician job boards, invoicing, and customer messaging - without the complexity or legacy infrastructure. Most shops complete the switch in under an hour.",
  },
  {
    question: "Is FixMyCarDude built for independent shops?",
    answer:
      "Absolutely. FixMyCarDude is designed specifically for owner-operated, independent auto repair shops with 1-5 bays. We're not trying to be everything for every enterprise chain - we focus on what independent shops actually need.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes - 14 days, full platform access, no credit card required. You get everything from day one: scheduling, digital estimates, DVI, customer messaging, invoicing, and profitability reporting.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most shops are up and running in under an hour. There's no IT department required - if you can use a web browser, you can set up FixMyCarDude. We also offer free onboarding support.",
  },
  {
    question: "Do my customers need to download an app?",
    answer:
      "The customer app is free and optional. Customers can use it to find your shop, book appointments, approve estimates, and track their repair in real time. The more customers on it, the smoother your shop runs - but it's not required.",
  },
  {
    question: "What makes FixMyCarDude different from Shopmonkey or Tekmetric?",
    answer:
      "FixMyCarDude is purpose-built for small, independent shops - not enterprise chains. We include a free customer-facing mobile app, real-time two-way communication, and a simpler interface designed for shops that don't have a dedicated IT person. Flat pricing, every feature included.",
  },
  {
    question: "Can I switch from paper tickets or spreadsheets?",
    answer:
      "That's exactly who we built this for. If you're running on paper tickets, spreadsheets, or sticky notes, FixMyCarDude gives you a digital system without the steep learning curve. Most shops see the difference on day one.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200/80">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-slate-900 pr-6 group-hover:text-[#00594F] transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 text-slate-400 group-hover:text-[#00594F] transition-colors"
        >
          <Plus size={20} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm sm:text-[15px] text-slate-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const INITIAL_COUNT = 4;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold text-[#00594F] uppercase tracking-[0.18em]"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Questions, answered.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-slate-200/80"
        >
          {visible.map((faq, i) => (
            <motion.div key={faq.question} variants={fadeInUp}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>

        {faqs.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                if (showAll) setOpenIndex(null);
                setShowAll((v) => !v);
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00594F] hover:text-[#003d35] transition-colors"
            >
              {showAll ? "Show fewer" : `Show all ${faqs.length} questions`}
              <span aria-hidden className={showAll ? "rotate-180 transition-transform" : "transition-transform"}>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
