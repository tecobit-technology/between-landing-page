import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/mockData";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Close" : "Open"} question: ${question}`}
      >
        <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${isOpen ? "text-primary" : "text-charcoal group-hover:text-primary"}`}>
          {question}
        </span>
        <span className={`flex-none w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-0" : "bg-accent text-primary group-hover:bg-primary group-hover:text-white"}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-secondary-foreground text-lg leading-relaxed pb-8 max-w-2xl px-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  // Data moved to @/lib/mockData


  return (
    <section className="py-16 md:py-32 relative z-10 bg-background">
      <div className="container-tight max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
              SUPPORT
            </span>
          </motion.div>
          <h2 className="heading-section text-charcoal">
            Common questions
          </h2>
        </div>

        <div className="flex flex-col bg-accent/30 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 border border-primary/10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;