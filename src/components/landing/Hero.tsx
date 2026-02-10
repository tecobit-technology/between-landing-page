import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, MessageCircle, Sparkles, Shield, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "@/components/ui/Magnetic";
import { siteConfig } from "@/lib/mockData";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    container: { current: typeof window !== 'undefined' ? document.documentElement : null }
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 lg:pt-52 overflow-hidden">
      {/* Decorative Floating Elements with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-4 md:left-20 text-primary/20"
        >
          <Heart size={30} className="md:w-10 md:h-10" fill="currentColor" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-4 md:right-32 text-primary/20"
        >
          <Heart size={40} className="md:w-[60px] md:h-[60px]" fill="currentColor" />
        </motion.div>
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute bottom-1/4 left-1/4 text-primary/10"
        >
          <Sparkles size={20} className="md:w-[30px] md:h-[30px]" />
        </motion.div>
      </div>

      {/* Atmospheric Glows & Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <motion.img
          style={{ y: y1, scale: 1.1 }}
          src="/Invite/HeroImage.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.03] blur-sm"
        />
      </div>

      {/* Refined Mesh Gradients */}
      <motion.div style={{ y: y2 }} className="glow-mesh w-[800px] h-[800px] -top-40 -left-60 opacity-[0.15] animate-pulse-soft" />
      <motion.div style={{ y: y1, animationDelay: "1s" }} className="glow-mesh w-[900px] h-[900px] bottom-0 -right-60 opacity-[0.15] animate-pulse-soft" />

      <motion.div style={{ opacity: opacityHero, scale: scaleHero }} className="container-tight relative z-10 text-center">
        {/* State-of-the-Art Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 inline-flex items-center gap-3 px-4 md:px-5 py-2 rounded-full bg-accent/50 border border-primary/10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">
            PRIVACY BY DESIGN
          </span>
        </motion.div>

        {/* Headlines with Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-hero text-charcoal mb-6 md:mb-8"
        >
          A sacred space <br />
          <span className="font-serif-italic text-primary italic lowercase">for just the two of you</span>
        </motion.h1>

        {/* Subheadline with better typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-secondary-foreground max-w-2xl mx-auto mb-14 md:mb-20 leading-relaxed font-medium opacity-80 px-6 sm:px-0"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-24 md:mb-32 w-full max-w-md mx-auto sm:max-w-none"
        >
          <Magnetic strength={0.4}>
            <Link
              to="/download"
              className="btn-primary w-full sm:w-auto sm:min-w-[220px] shadow-glow active:scale-[0.98] transition-all text-center"
            >
              Download Love Temple
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Link
              to="/features"
              className="btn-secondary w-full sm:w-auto sm:min-w-[200px] border-primary/5 active:scale-[0.98] transition-all text-center flex items-center justify-center"
            >
              Explore Features
            </Link>
          </Magnetic>
        </motion.div>

        {/* Phone Mockup Animation with Parallax */}
        <div className="relative w-full max-w-[90%] md:max-w-[420px] mx-auto perspective-1000">

          {/* Floating UI Step 1 (Begin) */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            animate={{ opacity: 1, x: -180, rotate: -10 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="absolute hidden xl:block z-0 w-48 aspect-[9/19.5] rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl opacity-40 grayscale-[0.5]"
          >
            <img src="/Invite/1.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>

          {/* Floating UI Step 2 (Invite) */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            animate={{ opacity: 1, x: 180, rotate: 12 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="absolute hidden xl:block z-0 w-48 aspect-[9/19.5] rounded-3xl overflow-hidden border-2 border-primary/10 shadow-2xl opacity-40 grayscale-[0.5]"
          >
            <img src="/Invite/4.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>

          {/* Main Phone */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotateX: [2, 0, 2], rotateY: [-2, 0, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 rounded-[2.5rem] md:rounded-[3.5rem] border-[8px] md:border-[14px] border-charcoal/95 bg-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden aspect-[9/19.5] border-t-[10px] md:border-t-[12px] border-b-[10px] md:border-b-[12px]"
            >
              {/* Phone Content (Actual Image) */}
              <div className="absolute inset-0 bg-background overflow-hidden selection:bg-transparent">
                <img
                  src="/Invite/HeroImage.jpg"
                  alt="Relationship Moment"
                  className="w-full h-full object-cover opacity-95 transition-opacity duration-700 hover:opacity-100"
                />

                {/* Overlaying UI on top of the image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 p-4 md:p-6 pt-12 md:pt-16 flex flex-col">
                  {/* Top Notch UI */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-charcoal rounded-b-2xl z-30" />

                  <div className="flex justify-between items-center mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                    <div className="w-10 h-5 md:w-12 md:h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                  </div>

                  <div className="mt-auto pb-4 md:pb-6 space-y-3 md:space-y-4">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="flex justify-end"
                    >
                      <div className="bg-white/95 backdrop-blur-xl p-3 md:p-4 rounded-3xl rounded-tr-none max-w-[85%] text-[10px] md:text-[11px] text-[#2D2D2D] font-bold shadow-2xl border border-white/50 leading-relaxed">
                        Thinking of you ❤️ This sunset made me smile.
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="flex justify-start"
                    >
                      <div className="bg-primary/95 backdrop-blur-xl p-3 md:p-4 rounded-3xl rounded-tl-none max-w-[85%] text-[10px] md:text-[11px] text-white font-bold shadow-2xl border border-white/20 leading-relaxed">
                        Me too! Can't wait for dinner. 🥂
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating High-End Stats/Badges with Parallax */}
          <motion.div
            style={{ y: y1 }}
            className="absolute -left-24 top-1/4 z-30 glass-card p-5 rounded-3xl shadow-xl hidden lg:flex items-center gap-4 border-2 border-white/50"
          >
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-glow">
              <Shield size={20} />
            </div>
            <div className="text-left">
              <div className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">Security</div>
              <div className="text-xs font-bold text-charcoal">E2E Encrypted</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute -right-28 top-2/3 z-30 glass-card p-5 rounded-3xl shadow-xl hidden lg:flex items-center gap-4 border-2 border-white/50"
          >
            <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-primary">
              <UserCheck size={20} />
            </div>
            <div className="text-left">
              <div className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">Verified</div>
              <div className="text-xs font-bold text-charcoal">Just Two of You</div>
            </div>
          </motion.div>

          {/* Strong Glowing Aura behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse-soft" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
