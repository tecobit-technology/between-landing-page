import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Shield as ShieldIcon, Zap, Heart, UserCheck, Users, ArrowRight } from "lucide-react";
import { docsSteps } from "@/lib/mockData";
import Magnetic from "@/components/ui/Magnetic";

const iconMap: Record<string, React.ElementType> = {
    Rocket: Rocket,
    UserCheck: UserCheck,
    Shield: ShieldIcon,
    Zap: Zap,
    Heart: Heart,
    Users: Users
};

const PhoneMockup = ({ image }: { image: string }) => {
    return (
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-[9/19.5] mx-auto group perspective-2000">
            {/* Phone Case Shadow */}
            <div className="absolute inset-0 bg-charcoal/20 blur-[60px] rounded-[3.5rem] scale-[0.85] translate-y-10" />

            {/* Phone Frame */}
            <motion.div
                animate={{
                    rotateY: [0, 1.5, 0, -1.5, 0],
                    rotateX: [0, -0.8, 0, 0.8, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 border-[10px] md:border-[12px] border-charcoal/95 rounded-[3.2rem] md:rounded-[3.5rem] bg-card shadow-2xl overflow-hidden z-10 border-t-[8px] border-b-[8px]"
            >
                {/* Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-28 h-5 md:h-6 bg-charcoal rounded-b-[1.5rem] z-40 flex items-center justify-center">
                    <div className="w-8 h-1 bg-white/10 rounded-full" />
                </div>

                {/* Actual Image Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={image}
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 z-20"
                    >
                        <img
                            src={image}
                            alt="Application Interface"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-30 z-30 pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const Docs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const features = docsSteps.map(step => ({
        ...step,
        icon: iconMap[step.iconName as keyof typeof iconMap] || Rocket
    }));

    const handleTabChange = (idx: number) => {
        setActiveTab(idx);
        setActiveStep(0);
    };

    return (
        <section id="docs" className="py-24 md:py-48 bg-background relative overflow-hidden">
            <div className="container-tight relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">GUIDEBOOK</span>
                    </motion.div>
                    <h2 className="heading-section text-charcoal mb-8">
                        Experience the <span className="font-serif-italic text-primary italic lowercase">sanctuary</span>
                    </h2>
                    <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed opacity-70">
                        A visual guide to mastering your private digital home.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-20 md:mb-32">
                    {features.map((feature, idx) => (
                        <Magnetic key={idx} strength={0.2}>
                            <button
                                onClick={() => handleTabChange(idx)}
                                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border transition-all duration-500 group ${activeTab === idx
                                    ? "bg-primary text-white border-primary shadow-glow scale-105"
                                    : "bg-card border-primary/5 text-secondary-foreground hover:bg-accent/30"
                                    }`}
                            >
                                <feature.icon className={`w-5 h-5 transition-colors ${activeTab === idx ? "text-white" : "text-primary group-hover:scale-110"}`} />
                                <span className="font-serif text-lg font-bold whitespace-nowrap">{feature.title}</span>
                            </button>
                        </Magnetic>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start"
                    >
                        {/* Asset Column */}
                        <div className="order-2 lg:order-1 relative lg:sticky lg:top-32">
                            <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                            <PhoneMockup image={features[activeTab].images?.[activeStep] || features[activeTab].image} />

                            {/* Step Indicators for multi-step content */}
                            {features[activeTab].images && (
                                <div className="mt-12 flex justify-center gap-3">
                                    {features[activeTab].images.map((_, sIdx) => (
                                        <button
                                            key={sIdx}
                                            onClick={() => setActiveStep(sIdx)}
                                            className={`w-3 h-3 rounded-full transition-all duration-500 ${activeStep === sIdx
                                                ? "bg-primary w-10 shadow-glow"
                                                : "bg-primary/10 hover:bg-primary/30"}`}
                                            aria-label={`Go to screen ${sIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Steps Column */}
                        <div className="order-1 lg:order-2">
                            <div className="mb-14 text-center lg:text-left">
                                <h3 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-8 leading-tight">
                                    {features[activeTab].title}
                                </h3>
                                <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed opacity-80">
                                    {features[activeTab].description}
                                </p>
                            </div>

                            <div className="space-y-5">
                                {features[activeTab].steps.map((step, sIdx) => (
                                    <button
                                        key={sIdx}
                                        onClick={() => setActiveStep(sIdx)}
                                        className={`text-left p-6 md:p-8 rounded-[2.5rem] transition-all duration-700 relative overflow-hidden group w-full ${activeStep === sIdx
                                            ? "bg-white dark:bg-card shadow-soft border border-primary/10"
                                            : "hover:bg-accent/30 border border-transparent"
                                            }`}
                                    >
                                        {activeStep === sIdx && (
                                            <motion.div layoutId="doc-step-line" className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
                                        )}
                                        <div className="flex gap-6 items-center">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-xl font-bold transition-all duration-500 shrink-0 ${activeStep === sIdx ? "bg-primary text-white scale-110 shadow-glow" : "bg-accent/50 text-primary"
                                                }`}>
                                                {sIdx + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className={`text-xl font-bold transition-colors ${activeStep === sIdx ? "text-charcoal" : "text-gray-400"}`}>
                                                    {step}
                                                </h4>
                                                {activeStep === sIdx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="flex items-center gap-2 mt-2 text-primary text-sm font-bold tracking-wider"
                                                    >
                                                        ACTIVE STEP <ArrowRight className="w-4 h-4" />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Docs;
