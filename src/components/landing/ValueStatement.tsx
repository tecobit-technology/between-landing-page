import { motion } from "framer-motion";

const ValueStatement = () => {
  return (
    <section className="py-24 md:py-36 relative z-10 overflow-hidden bg-background/30">
      <div className="container-tight relative">

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-transparent via-primary to-transparent mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl mb-12"
          >
            "In a world screaming for attention, <br className="hidden md:block" />
            <span className="font-serif-italic text-primary italic">Love Temple</span> offers a quiet place to listen."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 text-primary font-bold tracking-[0.3em] uppercase text-xs"
          >
            <span className="w-8 h-px bg-primary/30" />
            <span>THE MANIFESTO</span>
            <span className="w-8 h-px bg-primary/30" />
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-primary via-primary/30 to-transparent mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
