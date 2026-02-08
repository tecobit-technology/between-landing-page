import { Heart, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ValentineBanner = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 shadow-[0_0_60px_rgba(245,53,170,0.3)] p-10 md:p-20 group"
        >
          {/* Centered Glow Mesh */}
          <div className="glow-mesh w-full h-full inset-0 opacity-40 bg-white/10 blur-[150px]" />

          {/* Decorative floating icons */}
          <Heart className="absolute top-10 right-10 text-white/10 w-16 h-16 -rotate-12" />
          <Heart className="absolute bottom-10 left-10 text-white/10 w-12 h-12 rotate-12" />
          <Sparkles className="absolute top-1/3 left-1/4 text-white/10 w-8 h-8 animate-pulse" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

            <div className="text-center lg:text-left max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/30">
                <Gift className="w-4 h-4 text-white fill-current" />
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Valentine's Special</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight font-medium">
                Love deserves a <br />
                <span className="italic font-serif-italic opacity-90">beautiful beginning</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                Start your Between journey this Valentine's Day with 3 months of Premium—completely free.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 min-w-max">
              <motion.button
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary rounded-2xl px-12 py-5 font-bold text-lg transition-all duration-300 shadow-xl shadow-white/10"
              >
                Claim Your Gift
              </motion.button>
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">
                <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                OFFER ENDS FEB 14
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValentineBanner;
