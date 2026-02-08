import { Apple, Play, Heart } from "lucide-react";
import { motion } from "framer-motion";

const DownloadCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined Gradient Background */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-accent to-transparent z-0" />

      <div className="container-tight text-center relative z-10">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 inline-flex items-center justify-center p-6 rounded-[2.5rem] bg-white shadow-soft relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Heart className="text-white fill-current w-10 h-10" />
          </div>
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/20 animate-pulse-glow" />
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="heading-section text-charcoal mb-8"
        >
          Ready to enter your <br />
          <span className="font-serif-italic text-primary italic text-[0.9em]">private sanctuary?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Download Between today and join over 1 million couples building their digital home.
          The space your relationship deserves is just a tap away.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-5 bg-charcoal text-white rounded-[1.5rem] px-10 py-5 transition-all duration-500 shadow-lg hover:shadow-2xl min-w-[240px]"
          >
            <Apple className="w-9 h-9" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-0.5">Download on</div>
              <div className="font-serif text-2xl leading-none">App Store</div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-5 bg-white border border-rose-100 text-charcoal rounded-[1.5rem] px-10 py-5 transition-all duration-500 hover:border-primary/30 shadow-soft hover:shadow-lifted min-w-[240px]"
          >
            <Play className="w-9 h-9 text-primary" fill="currentColor" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-0.5">Get it on</div>
              <div className="font-serif text-2xl leading-none">Google Play</div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
