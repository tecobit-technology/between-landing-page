import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingSkeleton from "@/components/landing/LandingSkeleton";

const ThreeCanvas = lazy(() => import("@/components/landing/ThreeCanvas"));
const Header = lazy(() => import("@/components/landing/Header"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const CustomCursor = lazy(() => import("@/components/landing/CustomCursor"));
const BackToTop = lazy(() => import("@/components/landing/BackToTop"));

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-background relative">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LandingSkeleton />
                    </motion.div>
                ) : (
                    <div key="page-container">
                        {/* Premium Page Transition Wipe */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            style={{ originY: 1 }}
                            className="fixed inset-0 bg-primary z-[100] pointer-events-none"
                        />
                        <motion.div
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            style={{ originY: 0 }}
                            className="fixed inset-0 bg-primary z-[100] pointer-events-none"
                        />

                        <div className="fixed inset-0 pointer-events-none z-50">
                            <div className="pointer-events-auto">
                                <Suspense fallback={null}>
                                    <Header />
                                    <BackToTop />
                                    <CustomCursor />
                                </Suspense>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 pointer-events-none">
                            <Suspense fallback={null}>
                                <ThreeCanvas />
                            </Suspense>
                        </div>

                        <motion.main
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 w-full overflow-x-hidden pt-20"
                        >
                            {children}
                            <Suspense fallback={null}>
                                <Footer />
                            </Suspense>
                        </motion.main>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MainLayout;
