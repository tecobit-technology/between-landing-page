import { MessageCircle, Camera, Sparkles, Heart, Calendar, Route } from "lucide-react";
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
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20, duration: 2000 });
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col p-8 rounded-[2rem] bg-white border border-[#EAE8E4] shadow-sm hover:shadow-xl hover:shadow-[#CD848C]/10 hover:border-[#CD848C]/30 transition-all duration-500 h-full"
    >
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#CD848C] group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-medium text-[#3A3535] mb-3 group-hover:text-[#CD848C] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-[#8A8585] text-sm leading-relaxed font-sans mb-auto">
        {description}
      </p>

      {stat !== undefined && (
        <div className="mt-8 pt-6 border-t border-[#FAF8F6]">
          <div className="text-2xl font-bold font-serif mb-1 text-[#CD848C]">
            <NumberCounter value={stat} suffix={statSuffix} />
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[#9A9595] font-medium mt-1">{statLabel}</div>
        </div>
      )}
    </motion.div>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Private Couple Chat",
      description: "Your conversations, shared only between two. Secure, intimate, and beautifully simple.",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Moments Captured",
      description: "A private gallery of your shared memories. Photos that tell your story.",
      stat: 12847,
      statSuffix: "+",
      statLabel: "Moments shared today"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Daily Connection Prompts",
      description: "Thoughtful questions and activities to deepen your bond, delivered daily.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Thinking of You Pulse",
      description: "A gentle tap to let them know they're on your mind—no words needed.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Journey Counter",
      description: "Celebrate every milestone. Days together, memories made, love grown.",
      stat: 847,
      statSuffix: "+",
      statLabel: "Days together on average"
    },
    {
      icon: <Route className="w-5 h-5" />,
      title: "Relationship Timeline",
      description: "A beautiful visual history of your journey together, from day one.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container-tight">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#CD848C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            FEATURES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#3A3535] mb-4"
          >
            Everything you need, <br />
            <span className="text-[#8A8585]">nothing you don't</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#9A9595] text-base max-w-lg mx-auto font-sans leading-relaxed"
          >
            Carefully crafted features to nurture your relationship without overwhelming it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
