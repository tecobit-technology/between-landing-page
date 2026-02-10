import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Gift } from "lucide-react";

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
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
                setIsVisible(false);
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

    const RollingNumber = ({ value, label }: { value: number, label: string }) => (
        <div className="flex items-center gap-1">
            <div className="relative h-5 md:h-6 overflow-hidden flex items-center justify-center min-w-[2ch]">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="font-mono font-bold text-xs md:text-sm absolute"
                    >
                        {value.toString().padStart(2, '0')}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-[8px] md:text-[10px] font-bold opacity-60 uppercase">{label}</span>
        </div>
    );

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-[50] bg-primary/95 backdrop-blur-xl text-white shadow-lg border-b border-white/10 overflow-hidden"
                >
                    {/* Shimmer Effect */}
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />

                    <div className="container-tight flex items-center justify-between gap-4 relative z-10 py-1">
                        <div className="flex items-center gap-3 sm:gap-6 overflow-hidden">
                            <div className="hidden sm:flex items-center gap-2">
                                <Gift className="w-4 h-4 text-white" />
                                <p className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                                    <span className="text-white/90">VALENTINE SPECIAL</span>
                                </p>
                            </div>

                            <div className="w-px h-4 bg-white/20 hidden sm:block" />

                            <div className="flex items-center gap-3 sm:gap-6">
                                <RollingNumber value={timeLeft.days} label="d" />
                                <RollingNumber value={timeLeft.hours} label="h" />
                                <RollingNumber value={timeLeft.minutes} label="m" />
                                <RollingNumber value={timeLeft.seconds} label="s" />

                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="ml-1"
                                >
                                    <Heart className="w-3.5 h-3.5 text-white shadow-glow fill-current" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const element = document.querySelector("#valentine");
                                    if (element) {
                                        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 120;
                                        window.scrollTo({ top: offsetTop, behavior: "smooth" });
                                    }
                                }}
                                className="text-xs font-bold tracking-widest uppercase bg-white text-primary px-4 py-2 rounded-full shadow-lg shrink-0 hover:bg-white/90 transition-colors"
                            >
                                Claim Now
                            </motion.button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0 group"
                                aria-label="Close notification"
                            >
                                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TopBanner;
