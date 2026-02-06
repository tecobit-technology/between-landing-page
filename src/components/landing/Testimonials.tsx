import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Works perfectly on my phone and laptop. I love how responsive and fast it feels.",
      subtext: "Even on slow internet, the app performs well. The mobile experience is especially impressive.",
      author: "David P.",
      role: "Student",
      initials: "DP"
    },
    {
      quote: "It feels like we have our own little world again. Social media was making us distant, but Between brought the intimacy back.",
      subtext: "We use the shared gallery every day to document our small moments.",
      author: "Sarah & Tom",
      role: "Together 3 years",
      initials: "S&T"
    },
    {
      quote: "The daily prompts spark conversations we wouldn't have otherwise. It's become our favorite nightly ritual.",
      subtext: "Highly recommend for long-distance couples looking to stay connected.",
      author: "Emily R.",
      role: "Artist",
      initials: "ER"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative z-10 bg-white/50 border-y border-[#EAE8E4]/50">
      <div className="container-tight max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-[#3A3535] mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8A8585] text-lg font-sans"
          >
            Stories from couples who found their quiet space
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 md:gap-12 text-[#3A3535]">

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden md:flex flex-none w-12 h-12 rounded-full bg-white border border-[#EAE8E4] items-center justify-center hover:bg-[#FAF8F6] hover:border-[#CD848C]/30 transition-all shadow-sm z-20"
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
                className="bg-[#FAF8F6] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center h-full"
              >

                {/* Pink Quote Icon */}
                <div className="mb-6 text-[#CD848C]/40">
                  <Quote className="w-10 h-10 fill-current ml-1" />
                </div>

                {/* Quote */}
                <p className="font-serif text-xl md:text-2xl text-[#3A3535] leading-relaxed mb-6 font-medium">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Subtext */}
                <p className="text-[#8A8585] text-sm md:text-base mb-8 font-light">
                  {testimonials[activeIndex].subtext}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBD5D8] text-[#CD848C] flex items-center justify-center font-bold text-sm tracking-widest">
                    {testimonials[activeIndex].initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#3A3535]">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-[#8A8585]">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:flex flex-none w-12 h-12 rounded-full bg-white border border-[#EAE8E4] items-center justify-center hover:bg-[#FAF8F6] hover:border-[#CD848C]/30 transition-all shadow-sm z-20"
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
              className={`transition-all duration-300 rounded-full ${idx === activeIndex
                  ? "w-8 h-1.5 bg-[#CD848C]"
                  : "w-1.5 h-1.5 bg-[#EAE8E4] hover:bg-[#D4C5C5]"
                }`}
            />
          ))}
        </div>

        {/* Mobile Nav (visible only on small screens) */}
        <div className="flex md:hidden justify-center gap-6 mt-6">
          <button onClick={prevSlide} className="p-3 bg-white rounded-full shadow-sm text-[#CD848C]"><ChevronLeft /></button>
          <button onClick={nextSlide} className="p-3 bg-white rounded-full shadow-sm text-[#CD848C]"><ChevronRight /></button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;