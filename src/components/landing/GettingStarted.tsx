import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Heart, Share2, ShieldCheck, Sparkles } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const steps = [
  {
    id: "step1",
    title: "Start Your Sanctuary",
    description: "Begin your journey by creating a space designed exclusively for your relationship. No noise, just you.",
    image: "/Invite/1.jpg",
    icon: <Sparkles className="w-5 h-5" />,
    label: "INITIATE"
  },
  {
    id: "step2",
    title: "Invite Your Person",
    description: "Share a unique, secure code with your partner. Your space remains completely private and encrypted.",
    image: "/Invite/4.jpg",
    icon: <Share2 className="w-5 h-5" />,
    label: "INVITE"
  },
  {
    id: "step3",
    title: "Link Your Hearts",
    description: "Once your partner enters the code, our systems instantly bridge your worlds together in real-time.",
    image: "/Invite/2.jpg",
    icon: <ShieldCheck className="w-5 h-5" />,
    label: "CONNECT"
  },
  {
    id: "step4",
    title: "Forever Connected",
    description: "Connection established. You now share a dedicated digital home that exists only for the two of you.",
    image: "/Invite/3.jpg",
    icon: <CheckCircle2 className="w-5 h-5" />,
    label: "SUCCESS"
  }
];

const PhoneMockup = ({ image }: { image: string }) => {
  return (
    <div className="relative w-full max-w-[90%] md:max-w-[340px] lg:max-w-[380px] aspect-[9/19.5] mx-auto group perspective-2000">
      {/* Dynamic Aura Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -inset-20 bg-primary/20 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Phone Case Shadow */}
      <div className="absolute inset-0 bg-charcoal/20 blur-[60px] rounded-[3.5rem] scale-[0.85] translate-y-10" />

      {/* Phone Frame */}
      <motion.div
        animate={{
          rotateY: [0, 2, 0, -2, 0],
          rotateX: [0, -1, 0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 border-[12px] md:border-[14px] border-charcoal/95 rounded-[3.2rem] md:rounded-[3.5rem] bg-card shadow-2xl overflow-hidden z-10 border-t-[10px] md:border-t-[12px] border-b-[10px] md:border-b-[12px]"
      >
        {/* Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-charcoal rounded-b-[1.75rem] z-40 flex items-center justify-center">
          <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>

        {/* Actual Image Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20"
          >
            <img
              src={image}
              alt="Application User Interface"
              className="w-full h-full object-cover"
            />

            {/* Premium Overlay Filter */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-30 z-30 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Light Sweep */}
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none z-[35]"
        />
      </motion.div>

      {/* Ambient Floating Accents */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-[50px] rounded-full animate-pulse-soft" />
    </div>
  );
};

const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-24 md:py-48 relative overflow-hidden bg-background">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(245,53,170,0.03),transparent_40%)]" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <PhoneMockup image={steps[activeStep].image} />

            {/* Dynamic Step Label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].label}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white dark:bg-card px-8 py-3 rounded-full border border-primary/10 shadow-glow z-20 flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-charcoal uppercase">
                  {steps[activeStep].label}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Interaction & Text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
                  EXPERIENCE
                </span>
              </div>

              <h2 className="heading-section text-charcoal mb-8">
                Building your <br />
                <span className="font-serif-italic text-primary italic">private world</span>
              </h2>

              <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed max-w-xl opacity-80">
                We've engineered a seamless transition into your digital sanctuary. Every step is encrypted, private, and designed for two.
              </p>
            </motion.div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <Magnetic key={step.id} strength={0.15}>
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`relative w-full text-left p-6 md:p-8 rounded-[2.5rem] transition-all duration-700 overflow-hidden group ${activeStep === index
                      ? "bg-white dark:bg-card shadow-soft border border-primary/10"
                      : "hover:bg-accent/30 border border-transparent"
                      }`}
                  >
                    {/* Active Indicator Line */}
                    {activeStep === index && (
                      <motion.div
                        layoutId="active-step-line"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-full"
                      />
                    )}

                    <div className="flex gap-8 items-center">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${activeStep === index
                        ? "bg-primary text-white scale-110 shadow-glow"
                        : "bg-accent/50 text-primary group-hover:bg-white"
                        }`}>
                        <span className="font-serif text-xl font-bold">{index + 1}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-700 ${activeStep === index ? "text-charcoal" : "text-gray-400"
                            }`}>
                            {step.title}
                          </h3>
                          {activeStep === index && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-primary"
                            >
                              <Heart className="w-5 h-5 fill-current" />
                            </motion.div>
                          )}
                        </div>

                        <AnimatePresence mode="wait">
                          {activeStep === index && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 0.7 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="text-secondary-foreground text-base leading-relaxed overflow-hidden"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
