import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/mockData";
import Magnetic from "@/components/ui/Magnetic";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-48 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-tight relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">TESTIMONIALS</span>
          </motion.div>
          <h2 className="heading-section text-charcoal">
            Stories of <span className="font-serif-italic text-primary italic lowercase">connection</span>
          </h2>
        </div>

        {/* Carousel Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-8 md:gap-16">
            {/* Prev Button - Desktop */}
            <div className="hidden lg:block">
              <Magnetic strength={0.4}>
                <button
                  onClick={prevSlide}
                  className="w-16 h-16 rounded-full bg-white dark:bg-card border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-soft group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative min-h-[450px] md:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-[3.5rem] md:rounded-[5rem] p-10 md:p-20 flex flex-col justify-center h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Quote className="w-40 h-40" />
                  </div>

                  {/* Quote UI */}
                  <div className="mb-10 text-primary">
                    <Quote className="w-12 h-12 fill-current" />
                  </div>

                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight mb-10 font-bold opacity-90">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <p className="text-secondary-foreground text-lg md:text-xl mb-12 opacity-70 leading-relaxed max-w-2xl italic font-serif-italic">
                    {testimonials[activeIndex].subtext}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-bold text-xl tracking-widest shadow-glow">
                      {testimonials[activeIndex].initials}
                    </div>
                    <div>
                      <div className="font-bold text-xl text-charcoal">{testimonials[activeIndex].author}</div>
                      <div className="text-primary font-bold text-xs uppercase tracking-widest mt-1 opacity-60">Connected since {testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button - Desktop */}
            <div className="hidden lg:block">
              <Magnetic strength={0.4}>
                <button
                  onClick={nextSlide}
                  className="w-16 h-16 rounded-full bg-white dark:bg-card border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500 shadow-soft group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Dots Pagination & Mobile Controls */}
          <div className="flex flex-col items-center gap-10 mt-16 md:mt-20">
            <div className="flex justify-center items-center gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-700 rounded-full ${idx === activeIndex
                    ? "w-12 h-2 bg-primary shadow-glow"
                    : "w-2 h-2 bg-primary/10 hover:bg-primary/30"
                    }`}
                />
              ))}
            </div>

            <div className="flex lg:hidden justify-center gap-8">
              <Magnetic strength={0.3}>
                <button onClick={prevSlide} className="w-14 h-14 bg-white rounded-full shadow-soft flex items-center justify-center text-primary border border-primary/5"><ChevronLeft /></button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <button onClick={nextSlide} className="w-14 h-14 bg-white rounded-full shadow-soft flex items-center justify-center text-primary border border-primary/5"><ChevronRight /></button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;