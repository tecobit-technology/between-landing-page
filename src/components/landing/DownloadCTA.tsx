import { Apple, Play, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DownloadCTA = () => {
  return (
    <section id="download" className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Background Image / Ambient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Invite/HeroImage.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.05] grayscale blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Decorative Atmospheric Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-[0.15] mix-blend-screen">
        <div className="w-full h-full glow-mesh inset-0 animate-pulse-soft" style={{ position: 'relative' }} />
      </div>

      <div className="container-tight text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 inline-flex items-center justify-center p-8 rounded-[3rem] bg-card shadow-soft relative border border-primary/20 group hover:border-primary/40 transition-all duration-500"
        >
          <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-glow relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Heart className="text-white fill-current w-12 h-12" />
          </div>
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-[3rem] border-2 border-primary/20 animate-pulse-border" />

          {/* Floating Sparkles */}
          <Sparkles className="absolute -top-4 -right-4 text-primary animate-bounce" style={{ animationDuration: "3s" }} />
          <ShieldCheck className="absolute -bottom-4 -left-4 text-primary/40 w-8 h-8" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-8 leading-tight">
            Ready to build your <br />
            <span className="font-serif-italic text-primary italic lowercase">private sanctuary?</span>
          </h2>

          <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium opacity-80">
            Join over 2.1 million couples who have already secured their
            digital home. Your intimate space is waiting for you.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/signup"
              className="flex items-center gap-6 glass-card border-none bg-charcoal text-white rounded-[2rem] px-10 py-6 transition-all duration-500 hover:shadow-glow hover:bg-black w-full sm:w-auto min-w-[280px]"
            >
              <Apple className="w-10 h-10" />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 mb-1 leading-none">Download on</div>
                <div className="font-serif text-2xl leading-none">App Store</div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/signup"
              className="flex items-center gap-6 glass-card border-2 border-primary/20 text-charcoal rounded-[2rem] px-10 py-6 transition-all duration-500 hover:border-primary w-full sm:w-auto min-w-[280px]"
            >
              <Play className="w-10 h-10 text-primary" fill="currentColor" />
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-1 leading-none">Get it on</div>
                <div className="font-serif text-2xl leading-none">Google Play</div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Safe Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.4em] text-secondary-foreground opacity-40 uppercase"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-secondary-foreground" />
          TRUSTED BY 2M+ COUPLES WORLDWIDE
          <div className="w-1.5 h-1.5 rounded-full bg-secondary-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
