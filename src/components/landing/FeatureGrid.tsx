import { MessageCircle, Camera, Sparkles, Heart, Calendar, Route } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  counter?: number;
  counterLabel?: string;
  delay?: number;
}

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut));
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}</span>;
};

const FeatureCard = ({ icon, title, description, counter, counterLabel, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card-hover p-6 md:p-8 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-light/80 mb-5">
        {icon}
      </div>
      
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      
      {counter !== undefined && counterLabel && (
        <div className="pt-4 border-t border-border">
          <div className="text-3xl font-bold text-primary mb-1">
            <AnimatedCounter target={counter} />+
          </div>
          <div className="text-sm text-muted-foreground">{counterLabel}</div>
        </div>
      )}
    </div>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Private Couple Chat",
      description: "Your conversations, shared only between two. Secure, intimate, and beautifully simple.",
    },
    {
      icon: <Camera className="w-6 h-6 text-primary" />,
      title: "Moments Captured",
      description: "A private gallery of your shared memories. Photos that tell your story.",
      counter: 12847,
      counterLabel: "Moments shared today",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Daily Connection Prompts",
      description: "Thoughtful questions and activities to deepen your bond, delivered daily.",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Thinking of You Pulse",
      description: "A gentle tap to let them know they're on your mind—no words needed.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Journey Counter",
      description: "Celebrate every milestone. Days together, memories made, love grown.",
      counter: 847,
      counterLabel: "Days together on average",
    },
    {
      icon: <Route className="w-6 h-6 text-primary" />,
      title: "Relationship Timeline",
      description: "A beautiful visual history of your journey together, from day one.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Features
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Everything you need,
            <br />
            nothing you don't
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Carefully crafted features to nurture your relationship without overwhelming it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
