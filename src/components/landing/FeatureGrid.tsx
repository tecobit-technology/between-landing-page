import { MessageCircle, Camera, Sparkles, Heart, Calendar, Lock } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const FeatureCard = ({ icon, title, description, stat, statSuffix, statLabel, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border border-rose-100/50 shadow-soft hover:shadow-lifted transition-all duration-500 h-full overflow-hidden"
    >
      {/* Subtle Aura Hover Effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>

        <h3 className="font-serif text-2xl font-medium text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-secondary-foreground text-base leading-relaxed mb-8">
          {description}
        </p>

        {stat !== undefined && (
          <div className="mt-auto pt-8 border-t border-rose-50">
            <div className="text-3xl font-bold font-serif text-primary">
              <NumberCounter value={stat} suffix={statSuffix} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mt-2">{statLabel}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Private Couple Chat",
      description: "Encrypted, intimate, and distraction-free. Your messages belong to just the two of you.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Moments & Gallery",
      description: "A shared sanctuary for your photos. relive your favorite memories anytime, anywhere.",
      stat: 12847,
      statSuffix: "+",
      statLabel: "Moments Shared Today"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Daily Prompts",
      description: "Thoughtful questions to spark deeper conversations and meaningful connections every day.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Thinking of You",
      description: "Send a gentle notification to let your partner know they're on your mind with a single tap.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Journey Journal",
      description: "Celebrate milestones and track your growth as a couple with a beautiful shared timeline.",
      stat: 847,
      statSuffix: "+",
      statLabel: "Average Days Connected"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy First",
      description: "End-to-end encryption and no data selling. Your relationship is private, as it should be.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F6]/30">
      <div className="container-tight">
        <div className="text-center mb-16 md:mb-24">
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
            className="heading-section text-charcoal mb-6"
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
            Between brings you closer with features that matter, and leaves out everything that doesn't.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
