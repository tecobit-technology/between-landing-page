import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] hidden lg:block">
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="relative"
            >
                {/* Main Circle */}
                <motion.div
                    animate={{
                        scale: isPointer ? 1.5 : 1,
                        backgroundColor: isPointer ? "rgba(245, 53, 170, 0.2)" : "rgba(245, 53, 170, 0.1)",
                    }}
                    className="w-8 h-8 rounded-full border border-primary flex items-center justify-center transition-colors duration-300"
                />

                {/* Pointer Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(245,53,170,0.8)] dark:shadow-[0_0_20px_rgba(245,53,170,1)]" />

                {/* Outer Ring */}
                <motion.div
                    animate={{
                        scale: isPointer ? 2.5 : 0,
                        opacity: isPointer ? 0.4 : 0,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-primary/30 rounded-full"
                />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
