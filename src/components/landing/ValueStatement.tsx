import { motion } from "framer-motion";

const ValueStatement = () => {
  const text = "In a world screaming for attention, Love Temple offers a quiet place to listen.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
  };

  return (
    <section id="manifesto" className="py-24 md:py-48 relative overflow-hidden bg-background">
      {/* Soft Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-tight relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 160, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-px bg-gradient-to-b from-transparent via-primary to-transparent mb-20"
          />

          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-charcoal leading-[1.1] tracking-tight max-w-6xl mb-20 px-4"
            style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className={`inline-block mr-[0.3em] ${word === "Love" || word === "Temple" ? "font-serif-italic text-primary italic lowercase" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="flex items-center gap-8 text-primary font-bold tracking-[0.5em] uppercase text-[11px]"
          >
            <span className="w-16 h-px bg-primary/20" />
            <span className="opacity-80">THE MANIFESTO</span>
            <span className="w-16 h-px bg-primary/20" />
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 160, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-px bg-gradient-to-b from-primary via-primary/20 to-transparent mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
