import { Lock, EyeOff, Server } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyTrust = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[3rem] p-8 md:p-20 shadow-xl shadow-[#CD848C]/5 border border-[#EAE8E4]/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#CD848C] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
                PRIVACY & TRUST
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3A3535] mb-6 leading-tight">
                Your space is sacred. <br />
                We keep it that way.
              </h2>
              <p className="text-[#8A8585] text-lg leading-relaxed mb-8 font-sans">
                Between is built on a foundation of trust. We believe the most intimate parts of your relationship deserve the highest level of protection—and that's exactly what we provide.
              </p>
              <div className="h-1 w-20 bg-[#CD848C]/20 rounded-full" />
            </motion.div>

            {/* Right Column */}
            <div className="flex flex-col gap-10">

              {[
                { icon: <Lock className="w-6 h-6" />, title: "End-to-End Encrypted", desc: "Your messages are encrypted before they leave your device. Only you two can read them." },
                { icon: <EyeOff className="w-6 h-6" />, title: "No Third-Party Access", desc: "We don't sell your data. We don't show ads. Your privacy is our promise." },
                { icon: <Server className="w-6 h-6" />, title: "Secure Infrastructure", desc: "Industry-leading security standards protect your shared history and memories." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                  className="flex gap-6"
                >
                  <div className="flex-none w-14 h-14 rounded-2xl bg-[#FFF0F2] flex items-center justify-center text-[#CD848C]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#3A3535] mb-2">{item.title}</h3>
                    <p className="text-[#9A9595] text-sm leading-relaxed">
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
