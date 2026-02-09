import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Heart, Share2, ShieldCheck, Sparkles } from "lucide-react";

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
    <div className="relative w-full max-w-[90%] md:max-w-[340px] lg:max-w-[380px] aspect-[9/19.5] mx-auto group perspective-1000">
      {/* Phone Case Shadow */}
      <div className="absolute inset-0 bg-charcoal/20 blur-[60px] rounded-[3.5rem] scale-[0.85] translate-y-10 group-hover:blur-[80px] transition-all duration-700" />

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
        className="absolute inset-0 border-[14px] border-charcoal/95 rounded-[3.5rem] bg-card shadow-2xl overflow-hidden z-10 transition-transform duration-700 group-hover:scale-[1.02] border-t-[12px] border-b-[12px]"
      >
        {/* Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-charcoal rounded-b-[1.75rem] z-40 flex items-center justify-center">
          <div className="w-10 h-1 bg-white/10 rounded-full" />
        </div>

        {/* Actual Image Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20"
          >
            <img
              src={image}
              alt="Application User Interface"
              className="w-full h-full object-cover"
            />

            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 z-30" />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Scan Line Effect */}
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none z-35"
        />
      </motion.div>

      {/* Ambient Floating Accents */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-400/10 blur-[50px] rounded-full animate-pulse-border" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 blur-[70px] rounded-full animate-pulse-border" style={{ animationDelay: "2s" }} />
    </div>
  );
};

const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-background">
      {/* Background Decorative Text */}
      <div className="absolute top-[10%] left-[-5%] text-[15vw] font-bold text-charcoal/[0.02] select-none pointer-events-none uppercase">
        Process
      </div>
      <div className="absolute bottom-[10%] right-[-5%] text-[15vw] font-bold text-charcoal/[0.02] select-none pointer-events-none uppercase">
        Connect
      </div>

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <PhoneMockup image={steps[activeStep].image} />

            {/* Step Label Overlay */}
            <motion.div
              key={steps[activeStep].label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-primary/10 shadow-lg z-20 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-charcoal uppercase">
                {steps[activeStep].label}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Interaction & Text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
                  HOW IT WORKS
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-[1.1]">
                Five steps to a <br />
                <span className="font-serif-italic text-primary italic">private world</span>
              </h2>

              <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed max-w-xl">
                We've engineered the connection process to be as effortless as it is secure.
                Your digital sanctuary is only moments away.
              </p>
            </motion.div>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left p-6 rounded-[2.5rem] transition-all duration-500 overflow-hidden group ${activeStep === index
                    ? "bg-white dark:bg-white/5 shadow-soft border border-primary/10"
                    : "hover:bg-accent/30 border border-transparent"
                    }`}
                >
                  {/* Subtle active progress bar */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="step-progress-active"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"
                    />
                  )}

                  <div className="flex gap-6 items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeStep === index ? "bg-primary text-white scale-110 shadow-glow" : "bg-card text-secondary-foreground group-hover:bg-white"
                      }`}>
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-xl font-bold transition-colors duration-500 ${activeStep === index ? "text-charcoal" : "text-gray-400"
                          }`}>
                          {step.title}
                        </h3>
                        {activeStep === index && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-primary"
                          >
                            {step.icon}
                          </motion.div>
                        )}
                      </div>

                      <AnimatePresence mode="wait">
                        {activeStep === index && (
                          <motion.p
                            initial={{ height: 0, opacity: 0, y: -10 }}
                            animate={{ height: "auto", opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="text-secondary-foreground text-sm md:text-base leading-relaxed overflow-hidden pr-8"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
