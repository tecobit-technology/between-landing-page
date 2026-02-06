import { Download, UserPlus, Send, Heart } from "lucide-react";
import { motion } from "framer-motion";

const GettingStarted = () => {
  const steps = [
    { num: 1, icon: <Download className="w-6 h-6" />, title: "Download Between", desc: "Get the app on iOS or Android—it takes just a moment." },
    { num: 2, icon: <UserPlus className="w-6 h-6" />, title: "Create Your Space", desc: "Set up your private sanctuary with a simple profile." },
    { num: 3, icon: <Send className="w-6 h-6" />, title: "Invite Your Person", desc: "Send a special invite link to connect your hearts." },
    { num: 4, icon: <Heart className="w-6 h-6" />, title: "Start Your Journey", desc: "Begin sharing moments and growing together." }
  ];

  return (
    <section className="py-24 relative z-10 bg-transparent">
      <div className="container-tight">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-[#3A3535] mb-4"
          >
            Getting started is easy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8A8585] text-lg font-sans"
          >
            Four simple steps to your private space together.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-[#EAE8E4] -z-10 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.15) }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="w-20 h-20 rounded-[2rem] bg-[#FFF0F2] flex items-center justify-center text-[#CD848C] transition-colors duration-500"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#CD848C] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-[#FAF8F6]">
                    {step.num}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#3A3535] mb-3">{step.title}</h3>
                <p className="text-[#9A9595] text-sm leading-relaxed px-2 font-sans">
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
