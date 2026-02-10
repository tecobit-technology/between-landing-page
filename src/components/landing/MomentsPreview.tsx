import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import { momentsData } from "@/lib/mockData";
import Magnetic from "@/components/ui/Magnetic";
import React, { memo } from "react";

const MomentCard = memo(({ moment, idx }: { moment: typeof momentsData[0], idx: number }) => {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group cursor-pointer"
        >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-soft group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-500">
                <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ transform: "translateZ(20px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-6 right-6" style={{ transform: "translateZ(40px)" }}>
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-2.5 rounded-full text-white">
                        <Heart className="w-4 h-4 fill-white" />
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6" style={{ transform: "translateZ(50px)" }}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                        {moment.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                        {moment.title}
                    </h3>
                </div>
            </div>

            <div className="px-2" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{moment.date}</span>
                </div>
                <p className="text-secondary-foreground leading-relaxed group-hover:text-charcoal transition-colors">
                    {moment.description}
                </p>
            </div>
        </motion.div>
    );
});

const MomentsPreview = () => {
    return (
        <section id="moments" className="py-24 md:py-48 bg-background relative overflow-hidden">
            <div className="container-tight relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/10"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-[0.3em]">THE JOURNAL</span>
                        </motion.div>
                        <h2 className="heading-section text-charcoal">
                            Captured in your <br />
                            <span className="font-serif-italic text-primary italic lowercase">private sanctuary</span>
                        </h2>
                    </div>
                    <Magnetic strength={0.3}>
                        <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group py-2">
                            <span className="text-lg">Explore more stories</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Magnetic>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {momentsData.map((moment, idx) => (
                        <MomentCard key={idx} moment={moment} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </section>
    );
};

export default MomentsPreview;
