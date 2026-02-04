import { Download, UserPlus, Heart, Send } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ number, icon, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Step indicator */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-3xl bg-rose-light/60 flex items-center justify-center transition-all duration-500 group-hover:bg-rose-light group-hover:scale-105 group-hover:shadow-glow">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      
      <h3 className="font-serif text-xl text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

const GettingStarted = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Download Between",
      description: "Get the app on iOS or Android—it takes just a moment.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-primary" />,
      title: "Create Your Space",
      description: "Set up your private sanctuary with a simple profile.",
    },
    {
      icon: <Send className="w-8 h-8 text-primary" />,
      title: "Invite Your Person",
      description: "Send a special invite link to connect your hearts.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Start Your Journey",
      description: "Begin sharing moments and growing together.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-cream-dark/30">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-mist text-sm font-semibold tracking-wide uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Getting started is easy
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four simple steps to your private space together.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-rose-light via-primary/30 to-rose-light" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <Step
                key={step.title}
                number={index + 1}
                {...step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
