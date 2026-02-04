import { Heart, Shield, Sparkles } from "lucide-react";

const ValueStatement = () => {
  return (
    <section className="section-padding bg-cream-dark/50">
      <div className="container-tight">
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-light mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Connection without the noise
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            In a world of endless notifications and public feeds, Between is your refuge. 
            A private space where every message, memory, and moment belongs only to the two of you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Shield className="w-5 h-5 text-blue-mist" />
              <span className="text-sm font-medium">End-to-end encrypted</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Ad-free, always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStatement;
