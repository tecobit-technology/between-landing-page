import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <Magnetic strength={0.4}>
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-accent/50 text-primary border border-primary/20 hover:border-primary/50 transition-colors shadow-lg shadow-primary/5"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === "light" ? (
                            <Moon className="w-5 h-5 fill-current" />
                        ) : (
                            <Sun className="w-5 h-5 fill-current" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </Magnetic>
    );
};

export default ThemeToggle;
