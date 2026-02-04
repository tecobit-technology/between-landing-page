import { Heart, Gift, Sparkles } from "lucide-react";

const ValentineBanner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 via-rose-soft to-primary/80 p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-glow/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
          
          {/* Floating hearts */}
          <Heart className="absolute top-6 right-12 w-8 h-8 text-primary-foreground/30 animate-float" />
          <Heart className="absolute bottom-8 left-16 w-6 h-6 text-primary-foreground/20 animate-float" style={{ animationDelay: '-2s' }} />
          <Sparkles className="absolute top-12 left-1/4 w-5 h-5 text-primary-foreground/25 animate-pulse-glow" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Gift className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground text-sm font-medium">Valentine's Special</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
                Love deserves a
                <br />
                beautiful beginning
              </h2>
              
              <p className="text-primary-foreground/80 text-lg max-w-md">
                Start your Between journey this Valentine's Day with 3 months of Premium—free.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-4">
              <button className="bg-primary-foreground text-primary rounded-full px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Claim Your Gift
              </button>
              <span className="text-primary-foreground/60 text-sm">
                Offer ends February 14th
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentineBanner;
