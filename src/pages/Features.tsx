import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { Sparkles, ShieldCheck, Heart } from "lucide-react";

const FeatureGrid = lazy(() => import("@/components/landing/FeatureGrid"));
const MomentsPreview = lazy(() => import("@/components/landing/MomentsPreview"));

const FeaturesPage = () => {
    return (
        <MainLayout>
            <div className="pt-24 pb-12 overflow-hidden">
                {/* Intro Section */}
                <div className="container-tight relative">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />

                    <div className="text-center mb-0 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                                THE EXPERIENCE
                            </span>
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="heading-hero text-charcoal mb-8"
                        >
                            Intimacy in every <span className="font-serif-italic text-primary italic lowercase">detail</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed px-4 opacity-80"
                        >
                            Every feature of Love Temple is designed to minimize complexity and maximize connection. No ads, no scrolling, just you and your partner.
                        </motion.p>
                    </div>
                </div>

                {/* Features Component */}
                <Suspense fallback={<div className="h-[60vh] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
                    <FeatureGrid />
                </Suspense>

                <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
                    <MomentsPreview />
                </Suspense>

                {/* Trust Section */}
                <div className="container-tight mt-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-10 md:p-16 rounded-[3rem] bg-accent/30 border-primary/10 flex flex-col md:flex-row items-center justify-between gap-12"
                    >
                        <div className="max-w-xl text-center md:text-left">
                            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6 mx-auto md:ml-0 shadow-glow">
                                <ShieldCheck size={24} />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal mb-4 uppercase tracking-tight">Security you can feel</h2>
                            <p className="text-secondary-foreground text-lg leading-relaxed">
                                We believe intimacy and privacy are the same thing. That's why your sanctuary is fortified with zero-knowledge architecture and biometric authentication options.
                            </p>
                        </div>
                        <div className="flex-none">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50 pulse-soft" />
                                <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border border-primary/5">
                                    <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />
                                    <div className="mt-4 text-center font-bold text-charcoal uppercase tracking-widest text-[10px]">ALWAYS SECURE</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FeaturesPage;
