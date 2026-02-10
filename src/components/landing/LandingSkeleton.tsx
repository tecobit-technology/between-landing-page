import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LandingSkeleton = () => {
    return (
        <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[200]">
            <div className="relative">
                {/* Outer Glow Ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"
                />

                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 bg-white dark:bg-card p-8 rounded-[2.5rem] shadow-2xl border border-primary/10"
                >
                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-20 h-20 rounded-2xl overflow-hidden"
                    >
                        <img src="/logo.jpg" alt="Love Temple" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Brand Text Reveal */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-10 text-center"
            >
                <h1 className="text-3xl font-serif font-bold text-charcoal tracking-tight">
                    Love Temple
                </h1>
            </motion.div>

            {/* Progress Bar (Decorative) */}
            <div className="mt-12 w-48 h-1 bg-accent rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-primary"
                />
            </div>
        </div>
    );
};

export default LandingSkeleton;
