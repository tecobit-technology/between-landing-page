import { useRef, useState, useEffect, memo } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { MessageCircle, Camera, Sparkles, Heart, Calendar, Lock, Zap, Rocket, Shield } from "lucide-react";
import { features } from "@/lib/mockData";

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle className="w-6 h-6" />,
  Camera: <Camera className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: number;
  statSuffix?: string;
  statLabel?: string;
  index: number;
}

const NumberCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.round(current));
  const [displayString, setDisplayString] = useState("0");

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setDisplayString(latest.toLocaleString());
    });
  }, [displayValue]);

  return <span ref={ref}>{displayString}{suffix}</span>;
};

const FeatureCard = memo(({ icon, title, description, stat, statSuffix, statLabel, index }: FeatureCardProps) => {
  const isStaggered = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card p-8 md:p-10 rounded-[2.5rem] flex flex-col h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isStaggered ? "md:translate-y-12" : ""
        }`}
    >
      {/* Subtle Aura Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">{icon}</div>
        </div>

        <h3 className="font-serif text-2xl font-medium text-charcoal mb-4 group-hover:text-neon transition-colors duration-300">
          {title}
        </h3>

        <p className="text-secondary-foreground text-base leading-relaxed mb-8">
          {description}
        </p>

        {stat !== undefined && (
          <div className="mt-auto pt-8 border-t border-primary/10">
            <div className="text-3xl font-bold font-serif text-neon">
              <NumberCounter value={stat} suffix={statSuffix} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mt-2">{statLabel}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeatureGrid = () => {
  // Data moved to @/lib/mockData


  return (
    <section className="py-16 md:py-32 bg-background/30">
      <div className="container-tight">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
              DESIGNED FOR TWO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-section text-charcoal mb-4 md:mb-6"
          >
            Beautifully simple <br />
            <span className="font-serif-italic text-secondary-foreground italic text-[0.9em]">for your intentional bond</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Love Temple brings you closer with features that matter, and leaves out everything that doesn't.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              icon={iconMap[feature.iconName as keyof typeof iconMap]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
