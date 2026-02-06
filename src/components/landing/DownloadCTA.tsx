import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

const DownloadCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8EFF1] to-transparent z-0" />

      <div className="container-tight text-center relative z-10">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 inline-flex items-center justify-center p-4 rounded-[2rem] bg-white shadow-xl shadow-rose-100/50"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#CD848C] flex items-center justify-center">
            <span className="font-serif font-bold text-3xl text-white">B</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3A3535] mb-6"
        >
          Ready to enter your <br />
          <span className="font-serif-italic text-[#CD848C]">sanctuary?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#8A8585] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Download Between today. Create the space your relationship deserves.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-[#3A3535] text-white rounded-2xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rose-900/10 min-w-[200px]"
          >
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <div className="text-[11px] font-bold uppercase tracking-wider opacity-60">Download on</div>
              <div className="font-serif text-xl leading-none">App Store</div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 bg-white border border-[#EAE8E4] text-[#3A3535] rounded-2xl px-8 py-4 transition-all duration-300 hover:border-[#CD848C]/50 shadow-lg hover:shadow-xl hover:shadow-rose-100/50 min-w-[200px]"
          >
            <Play className="w-8 h-8 text-[#CD848C]" fill="currentColor" />
            <div className="text-left">
              <div className="text-[11px] font-bold uppercase tracking-wider opacity-60">Get it on</div>
              <div className="font-serif text-xl leading-none">Google Play</div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
