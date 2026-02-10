import { Lock, EyeOff, ShieldCheck, Apple, Play, Heart, Server } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyTrust = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-card rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-20 shadow-soft border border-primary/10 relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                  PRIVACY & TRUST
                </span>
              </div>

              <h2 className="heading-section text-charcoal mb-8">
                Your space is sacred. <br />
                <span className="font-serif-italic text-secondary-foreground italic text-[0.9em]">We keep it that way</span>
              </h2>

              <p className="text-secondary-foreground text-lg leading-relaxed mb-10">
                Love Temple is built on a foundation of trust. We believe the most intimate parts of your relationship deserve the highest level of protection—and that's exactly what we provide.
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-accent/50 border border-primary/10 w-fit">
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-semibold text-charcoal">GDPR Compliant & Encrypted</span>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-12">
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
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                  className="flex gap-8 group"
                >
                  <div className="flex-none w-14 h-14 rounded-2xl bg-accent text-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow translate-y-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-secondary-foreground text-base leading-relaxed">
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
