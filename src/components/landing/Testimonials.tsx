import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/mockData";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Data moved to @/lib/mockData

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-32 bg-background/30">
      <div className="container-tight max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-charcoal mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary-foreground text-base md:text-lg font-sans px-4"
          >
            Stories from couples who found their quiet space
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 md:gap-12 text-charcoal">

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden md:flex flex-none w-12 h-12 rounded-full bg-card border border-border items-center justify-center hover:bg-background hover:border-primary/30 transition-all shadow-sm z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 opacity-60" />
          </button>

          {/* Card */}
          <div className="flex-1 relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-[2rem] p-8 md:p-12 flex flex-col justify-center h-full"
              >

                {/* Pink Quote Icon */}
                <div className="mb-6 text-primary/40">
                  <Quote className="w-10 h-10 fill-current ml-1" />
                </div>

                {/* Quote */}
                <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-6 font-medium">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Subtext */}
                <p className="text-secondary-foreground text-sm md:text-base mb-8 font-light">
                  {testimonials[activeIndex].subtext}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-soft text-primary flex items-center justify-center font-bold text-sm tracking-widest">
                    {testimonials[activeIndex].initials}
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-secondary-foreground">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:flex flex-none w-12 h-12 rounded-full bg-card border border-border items-center justify-center hover:bg-background hover:border-primary/30 transition-all shadow-sm z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 opacity-60" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${idx === activeIndex
                ? "w-8 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-6 mt-6">
          <button onClick={prevSlide} className="p-3 bg-card rounded-full shadow-sm text-primary"><ChevronLeft /></button>
          <button onClick={nextSlide} className="p-3 bg-card rounded-full shadow-sm text-primary"><ChevronRight /></button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;