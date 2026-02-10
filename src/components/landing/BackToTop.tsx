import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-10 right-10 z-[100]">
                    <Magnetic strength={0.5}>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, y: 20 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-primary shadow-2xl group transition-all duration-300 hover:bg-primary/10"
                            aria-label="Back to top"
                        >
                            <motion.div
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ArrowUp className="w-6 h-6 stroke-[3px]" />
                            </motion.div>

                            <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity animate-pulse" />
                        </motion.button>
                    </Magnetic>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
