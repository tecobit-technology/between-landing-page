import { motion } from "framer-motion";

const ValueStatement = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container-tight relative">

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 64, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-transparent via-[#CD848C] to-transparent mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#3A3535] leading-tight max-w-4xl mb-8"
          >
            "In a world screaming for attention, <br className="hidden md:block" />
            <span className="font-serif-italic text-[#CD848C]">Between</span> offers a quiet place to listen."
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#8A8585] text-lg font-medium tracking-wide"
          >
            — THE MANIFESTO
          </motion.p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 64, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-[#CD848C] via-[#CD848C]/50 to-transparent mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
