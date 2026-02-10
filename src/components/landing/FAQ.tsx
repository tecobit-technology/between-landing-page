import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/mockData";
import Magnetic from "@/components/ui/Magnetic";

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`border-b border-primary/10 last:border-0 transition-colors duration-700 ${isOpen ? "bg-primary/[0.03]" : ""}`}
    >
      <button
        className="w-full py-10 flex items-center justify-between text-left focus:outline-none group px-6 md:px-12"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`font-serif text-2xl md:text-3xl lg:text-4xl leading-tight transition-all duration-700 pr-8 ${isOpen ? "text-primary translate-x-4 italic" : "text-charcoal group-hover:text-primary group-hover:translate-x-2"}`}>
          {question}
        </span>
        <Magnetic strength={0.4}>
          <span className={`flex-none w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-700 shadow-sm ${isOpen ? "bg-primary text-white rotate-180 shadow-glow" : "bg-accent text-primary group-hover:bg-primary group-hover:text-white"}`}>
            {isOpen ? <Minus className="w-6 h-6 md:w-8 md:h-8" /> : <Plus className="w-6 h-6 md:w-8 md:h-8" />}
          </span>
        </Magnetic>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 max-w-3xl px-6 md:px-12 md:ml-2">
              <p className="text-secondary-foreground text-xl md:text-2xl leading-relaxed border-l-4 border-primary/30 pl-8 opacity-80">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-48 relative overflow-hidden bg-background">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse-soft" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="container-tight relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              SUPPORT & TRUST
            </span>
          </motion.div>
          <h2 className="heading-section text-charcoal pr-10">
            Your questions, <br />
            <span className="font-serif-italic text-primary italic lowercase">answered with care</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card/40 backdrop-blur-xl rounded-[3.5rem] md:rounded-[5rem] border border-primary/5 shadow-soft overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;