import { Apple, Play } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-cream-dark/30 to-background">
      <div className="container-tight text-center">
        {/* App icon representation */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-rose-glow shadow-glow">
            <span className="text-4xl font-serif text-primary-foreground font-bold">B</span>
          </div>
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Ready to create your
          <br />
          quiet space together?
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Download Between now and start your journey of deeper connection.
        </p>
        
        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="flex items-center gap-3 bg-foreground text-background rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lifted group">
            <Apple className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="font-semibold text-lg -mt-1">App Store</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 bg-foreground text-background rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lifted group">
            <Play className="w-7 h-7" fill="currentColor" />
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="font-semibold text-lg -mt-1">Google Play</div>
            </div>
          </button>
        </div>
        
        {/* Social proof */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-lg">★</span>
              ))}
            </div>
            <span className="text-sm">4.9 rating</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">2M+</span> couples connected
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">150+</span> countries
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
