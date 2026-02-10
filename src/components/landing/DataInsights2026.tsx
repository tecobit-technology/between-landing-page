import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/mockData";

interface StatProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    delay: number;
}

const Stat = ({ icon, label, value, delay }: StatProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-card border border-primary/10 shadow-soft relative group overflow-hidden"
    >
        <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">{icon}</div>
        </div>
        <div className="font-serif text-4xl md:text-5xl font-bold text-neon mb-2 tracking-tight">
            {value}
        </div>
        <div className="text-secondary-foreground font-semibold uppercase tracking-[0.2em] text-xs">
            {label}
        </div>
    </motion.div>
);

const DataInsights2026 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    const stats = [
        {
            icon: <Heart className="w-8 h-8" fill="currentColor" />,
            label: "Shared Moments",
            value: siteConfig.stats.sharedMoments,
            delay: 0.1
        },
        {
            icon: <Users className="w-8 h-8" />,
            label: "New Sanctuary Spaces",
            value: siteConfig.stats.newSanctuaries,
            delay: 0.2
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            label: "Privacy Protection",
            value: siteConfig.stats.privacyProtection,
            delay: 0.3
        }
    ];

    return (
        <section ref={containerRef} className="py-16 md:py-32 relative overflow-hidden bg-background/20">
            {/* Decorative Elements */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
            </motion.div>

            <div className="container-tight relative z-10">
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                            2026 IMPACT REPORT
                        </span>
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>

                    <h2 className="heading-section text-charcoal mb-6">
                        A year of <span className="font-serif-italic text-primary italic">deeper connection</span>
                    </h2>
                    <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                        In 2026, Love Temple has become more than an app. It's the silent witness to millions of small, sacred moments that define modern love.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <Stat key={index} {...stat} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 md:mt-20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-card border border-primary/10 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <div className="max-w-xl">
                        <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3 font-medium">Building for the next decade of love</h3>
                        <p className="text-secondary-foreground">We're investing in zero-knowledge encryption and AI-assisted shared memory restoration to make your sanctuary even stronger.</p>
                    </div>
                    <div className="flex-none">
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase px-6 py-3 rounded-full bg-accent">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                            LIVE DATA STREAM
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DataInsights2026;
