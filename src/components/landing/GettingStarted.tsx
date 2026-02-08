import { Download, UserPlus, Send, Heart } from "lucide-react";
import { motion } from "framer-motion";

const GettingStarted = () => {
  const steps = [
    { num: "01", icon: <Download className="w-6 h-6" />, title: "Download Between", desc: "Get the app on iOS or Android—it takes just a moment to start your journey." },
    { num: "02", icon: <UserPlus className="w-6 h-6" />, title: "Create Your Space", desc: "Set up your private sanctuary with a simple profile for you and your partner." },
    { num: "03", icon: <Send className="w-6 h-6" />, title: "Invite Your Person", desc: "Send a special encrypted invite link to connect your accounts securely." },
    { num: "04", icon: <Heart className="w-6 h-6" />, title: "Grow Together", desc: "Begin sharing moments and building your digital home, just for the two of you." }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container-tight">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-charcoal mb-4"
          >
            Getting started is easy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary-foreground text-lg max-w-xl mx-auto"
          >
            Four simple steps to create your private digital world.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[2.75rem] left-[12%] right-[12%] h-0.5 bg-primary/20 -z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-[2.5rem] bg-accent flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white shadow-soft group-hover:shadow-glow">
                    {step.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-card text-primary flex items-center justify-center font-serif italic text-lg shadow-lifted border border-primary/10">
                    {step.num}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-secondary-foreground text-base leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
