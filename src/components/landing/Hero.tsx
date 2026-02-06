import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 overflow-hidden">

      <div className="container-tight relative z-10 text-center">
        {/* Tiny Label */}
        <div className="animate-fade-up mb-6 flex justify-center items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CD848C]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#9A8A8C] uppercase">
            BETWEEN
          </span>
        </div>

        {/* Headlines - Matching Image Typography */}
        <h1 className="animate-fade-up font-serif text-6xl md:text-7xl lg:text-8xl text-[#3A3535] mb-2 leading-none">
          A quiet space
        </h1>
        <h1 className="animate-fade-up font-serif-italic text-6xl md:text-7xl lg:text-8xl text-[#CD848C] mb-8 leading-none">
          for two
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delayed text-lg md:text-xl text-[#8A8585] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
          Your private digital sanctuary. Just you and your person—no distractions, no audience.
        </p>

        {/* Buttons matching image */}
        <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
          <button className="btn-primary min-w-[180px]">
            Start Your Journey
          </button>
          <button className="btn-secondary min-w-[160px]">
            Learn More
          </button>
        </div>

        {/* Hero Illustration - Soft fade at bottom */}
        <div className="animate-fade-up-delayed-2 relative max-w-5xl mx-auto">
          {/* Gradient mask to blend bottom into background if needed */}
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img
              src={heroIllustration}
              alt="Two connected figures"
              className="w-full h-auto opacity-90 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
