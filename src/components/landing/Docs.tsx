import { motion, AnimatePresence } from "framer-motion";
import {
    Rocket,
    Shield as ShieldIcon,
    Zap,
    ChevronRight,
    CheckCircle2,
    Book,
    Code,
    Heart
} from "lucide-react";
import { docsSteps } from "@/lib/mockData";
import { useState } from "react";

const iconMap: Record<string, any> = {
    Rocket: Rocket,
    Shield: ShieldIcon,
    Zap: Zap,
    Heart: Heart,
    Book: Book,
    Code: Code
};

const Docs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = docsSteps.map(step => ({
        ...step,
        icon: iconMap[step.iconName as keyof typeof iconMap] || Rocket
    }));

    return (
        <section id="docs" className="py-24 md:py-40 relative bg-background/50">
            <div className="container-tight relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Documentation</span>
                    </div>
                    <h2 className="heading-section mb-6">
                        How Love Temple Works
                    </h2>
                    <p className="text-base md:text-lg text-secondary-foreground max-w-2xl mx-auto px-4">
                        A comprehensive guide to getting started and making the most of your private sanctuary.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 space-y-4">
                        {features.map((feature, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${activeTab === idx
                                        ? "bg-card border-primary/20 shadow-soft"
                                        : "bg-transparent border-transparent hover:bg-accent/30"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl transition-colors ${activeTab === idx ? "bg-primary text-white" : "bg-card text-secondary-foreground group-hover:bg-white"
                                        }`}>
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold transition-colors ${activeTab === idx ? "text-charcoal" : "text-secondary-foreground"
                                            }`}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <ChevronRight className={`ml-auto w-4 h-4 transition-transform ${activeTab === idx ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-50"
                                        }`} />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-primary/10 shadow-soft"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 md:order-1">
                                        <h3 className="text-3xl font-bold text-charcoal mb-6">{features[activeTab].title}</h3>
                                        <p className="text-secondary-foreground text-lg leading-relaxed mb-8">
                                            {features[activeTab].description}
                                        </p>

                                        <div className="space-y-4">
                                            {features[activeTab].steps.map((step, sIdx) => (
                                                <div key={sIdx} className="flex items-start gap-3 group">
                                                    <div className="mt-1 flex-none w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-secondary-foreground font-medium">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="order-1 md:order-2">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <img
                                                src={features[activeTab].image}
                                                alt={features[activeTab].title}
                                                className="relative rounded-3xl shadow-2xl w-full aspect-[9/16] object-cover border-4 border-white/20 transform group-hover:scale-[1.02] transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Docs;
