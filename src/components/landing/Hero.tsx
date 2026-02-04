import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-light/30 via-background to-background" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-light/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-light/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container-tight relative z-10 text-center pt-20 pb-16">
        {/* Logo */}
        <div className="animate-fade-up mb-8">
          <span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Between
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-up font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          A quiet space
          <br />
          <span className="text-primary">for two</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delayed text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
          Your private digital sanctuary. Just you and your person—no distractions, no audience.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary text-lg">
            Start Your Journey
          </button>
          <button className="btn-secondary text-lg">
            Learn More
          </button>
        </div>

        {/* Hero Illustration */}
        <div className="animate-fade-up-delayed-2 relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src={heroIllustration} 
            alt="Two connected figures representing intimate connection"
            className="w-full h-auto rounded-3xl shadow-lifted"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
