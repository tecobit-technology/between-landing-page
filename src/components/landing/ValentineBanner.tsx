import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

const ValentineBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("February 14, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-md rounded-xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 mb-2 overflow-hidden relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-white text-xl md:text-2xl font-bold font-mono absolute"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">{label}</span>
    </div>
  );

  return (
    <section id="valentine" className="py-12 md:py-24 relative z-10">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ boxShadow: ["0 0 60px rgba(245,53,170,0.3)", "0 0 100px rgba(245,53,170,0.5)", "0 0 60px rgba(245,53,170,0.3)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 md:p-20 group"
        >
          {/* Centered Glow Mesh */}
          <div className="glow-mesh w-full h-full inset-0 opacity-40 bg-white/10 blur-[150px]" />

          {/* Decorative floating icons with heartbeat */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [-12, -10, -12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10"
          >
            <Heart className="text-white/10 w-16 h-16" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [12, 15, 12] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 left-10"
          >
            <Heart className="text-white/10 w-12 h-12" />
          </motion.div>

          <Sparkles className="absolute top-1/3 left-1/4 text-white/10 w-8 h-8 animate-pulse" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/30">
                <Gift className="w-4 h-4 text-white fill-current" />
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Valentine's Special</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight font-medium">
                Love deserves a <br />
                <span className="italic font-serif-italic opacity-90">beautiful beginning</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8 lg:mb-0">
                Start your Love Temple journey this Valentine's Day with 3 months of Premium—completely free.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 md:gap-10">
              {/* Countdown Timer */}
              <div className="flex gap-3 xs:gap-4 md:gap-6 flex-wrap justify-center">
                <TimerUnit value={timeLeft.days} label="Days" />
                <TimerUnit value={timeLeft.hours} label="Hours" />
                <TimerUnit value={timeLeft.minutes} label="Mins" />
                <TimerUnit value={timeLeft.seconds} label="Secs" />
              </div>

              <div className="flex flex-col items-center gap-4 min-w-max">
                <Magnetic strength={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.querySelector("#download");
                      if (element) {
                        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }}
                    className="bg-white text-primary rounded-2xl px-12 py-5 font-bold text-lg transition-all duration-300 shadow-xl shadow-white/10 min-w-[240px]"
                  >
                    Claim Your Gift
                  </motion.button>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValentineBanner;
