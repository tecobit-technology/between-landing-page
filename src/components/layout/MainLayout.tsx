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
                    <>
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
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full overflow-x-hidden pt-20"
                        >
                            {children}
                            <Suspense fallback={null}>
                                <Footer />
                            </Suspense>
                        </motion.main>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MainLayout;
