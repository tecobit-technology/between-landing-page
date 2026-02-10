import { Lock, EyeOff, ShieldCheck, Apple, Play, Heart, Server } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

const PrivacyTrust = () => {
  return (
    <section id="privacy" className="py-24 md:py-48 relative overflow-hidden bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-20 shadow-soft border border-primary/10 relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

          {/* Scanning Effect Overlay */}
          <motion.div
            initial={{ top: "-100%" }}
            animate={{ top: "200%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent skew-y-12 z-0 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                  SANCUTARY PRIVACY
                </span>
              </div>

              <h2 className="heading-section text-charcoal mb-8">
                Your space is sacred. <br />
                <span className="font-serif-italic text-primary italic lowercase">we keep it that way</span>
              </h2>

              <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed mb-12 opacity-80">
                Love Temple is built on a foundation of trust. We believe the most intimate parts of your relationship deserve the highest level of protection.
              </p>

              <div className="flex items-center gap-4 p-5 rounded-3xl bg-accent/50 border border-primary/10 w-fit">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-charcoal">GDPR Compliant</span>
                  <span className="text-xs text-secondary-foreground font-medium">Zero-knowledge storage</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-10">
              {[
                { icon: <Lock className="w-6 h-6" />, title: "End-to-End Encrypted", desc: "Your messages are encrypted before they leave your device. Only you two can read them." },
                { icon: <EyeOff className="w-6 h-6" />, title: "No Third-Party Access", desc: "We don't sell your data. We don't show ads. Your privacy is our only priority." },
                { icon: <Server className="w-6 h-6" />, title: "Secure Infrastructure", desc: "Industry-leading security standards protect your shared history and memories forever." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                  className="flex gap-6 md:gap-8 group p-2 rounded-[2rem] hover:bg-accent/30 transition-colors"
                >
                  <Magnetic strength={0.3}>
                    <div className="flex-none w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent text-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow shrink-0">
                      {item.icon}
                    </div>
                  </Magnetic>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-secondary-foreground text-base md:text-lg leading-relaxed opacity-70">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyTrust;
