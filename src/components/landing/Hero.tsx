import { motion } from "framer-motion";
import { Heart, MessageCircle, Image as ImageIcon, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 lg:pt-40 overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 text-primary/20"
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-10 md:right-32 text-primary/20"
        >
          <Heart size={60} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 text-primary/10"
        >
          <Sparkles size={30} />
        </motion.div>
      </div>

      {/* Atmospheric Glows */}
      <div className="glow-mesh w-[500px] h-[500px] -top-20 -left-20 opacity-10" />
      <div className="glow-mesh w-[600px] h-[600px] bottom-0 -right-20 opacity-10" />

      <div className="container-tight relative z-10 text-center">
        {/* Tiny Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-[0.3em] text-secondary-foreground uppercase">
            ESTABLISHED FOR TWO
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-hero text-charcoal mb-4"
        >
          A quiet space <br />
          <span className="font-serif-italic text-neon italic">for just the two of you</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
        >
          Your private digital sanctuary. A place to share moments, messages, and memories
          without the noise of the world. Just you and your person.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
        >
          <button className="btn-primary min-w-[200px]">
            Start Your Journey
          </button>
          <button className="btn-secondary min-w-[180px]">
            Explore Features
          </button>
        </motion.div>

        {/* Phone Mockup Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="relative max-w-[320px] md:max-w-[380px] mx-auto perspective-1000"
        >
          {/* Main Phone */}
          <motion.div
            animate={{ y: [0, -15, 0], rotateX: [2, 0, 2], rotateY: [-2, 0, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 rounded-[3rem] border-[12px] border-charcoal bg-card shadow-2xl overflow-hidden aspect-[9/19.5]"
          >
            {/* Phone Content (Simulated UI) */}
            <div className="absolute inset-0 bg-background p-4 flex flex-col pt-12">
              <div className="h-40 w-full rounded-2xl bg-accent/50 border border-primary/10 mb-4 flex items-center justify-center">
                <ImageIcon className="text-primary/40 w-12 h-12" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded-full bg-secondary/40" />
                <div className="h-4 w-1/2 rounded-full bg-secondary/30" />
              </div>
              <div className="mt-auto pb-4 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary/10 p-3 rounded-2xl rounded-tr-none max-w-[80%] text-xs text-primary font-medium">
                    Thinking of you ❤️
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-secondary/20 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-xs text-secondary-foreground font-medium">
                    Me too! Can't wait for dinner.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating UI Elements Around Phone */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-16 top-1/4 z-30 glass-card p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary">
                <Heart size={16} fill="currentColor" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-secondary-foreground uppercase tracking-wider">New Moment</div>
                <div className="text-xs font-semibold text-charcoal">Just posted a photo</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-20 top-2/3 z-30 glass-card p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-blue-400">
                <MessageCircle size={16} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-secondary-foreground uppercase tracking-wider">Private Chat</div>
                <div className="text-xs font-semibold text-charcoal">Encrypted for two</div>
              </div>
            </div>
          </motion.div>

          {/* Glowing Aura behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
