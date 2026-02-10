import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/mockData";

interface StatProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    delay: number;
}

const Stat = ({ icon, label, value, delay }: StatProps) => {
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-card border border-primary/10 shadow-soft relative group overflow-hidden"
        >
            <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm relative" style={{ transform: "translateZ(40px)" }}>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">{icon}</div>
            </div>
            <div className="font-serif text-4xl md:text-5xl font-bold text-neon mb-2 tracking-tight" style={{ transform: "translateZ(50px)" }}>
                {value}
            </div>
            <div className="text-secondary-foreground font-semibold uppercase tracking-[0.2em] text-xs" style={{ transform: "translateZ(30px)" }}>
                {label}
            </div>
        </motion.div>
    );
};

const DataInsights2026 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
        container: { current: typeof window !== 'undefined' ? document.documentElement : null }
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
        <section id="insights" ref={containerRef} className="py-24 md:py-48 relative overflow-hidden bg-background">
            {/* Decorative Elements */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
            </motion.div>

            <div className="container-tight relative z-10">
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center mb-20 md:mb-32"
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
                            2026 IMPACT REPORT
                        </span>
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>

                    <h2 className="heading-section text-charcoal mb-8">
                        A year of <span className="font-serif-italic text-primary italic lowercase">deeper connection</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed px-6 opacity-80">
                        In 2026, Love Temple has become more than an app. It's the silent witness to millions of small, sacred moments that define modern love.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <Stat key={index} {...stat} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 md:mt-32 p-10 md:p-16 rounded-[3.5rem] md:rounded-[4rem] bg-card border border-primary/10 shadow-soft flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="max-w-2xl relative z-10">
                        <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 font-bold">Building for the next decade of love</h3>
                        <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed opacity-75">We're investing in zero-knowledge encryption and AI-assisted shared memory restoration to make your sanctuary even stronger.</p>
                    </div>
                    <div className="flex-none relative z-10">
                        <div className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.25em] text-xs uppercase px-8 py-4 rounded-full bg-accent border border-primary/10 shadow-glow">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                            LIVE DATA STREAM
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DataInsights2026;
