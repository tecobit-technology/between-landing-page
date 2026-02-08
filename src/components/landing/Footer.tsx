import { Heart, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:rotate-6">
                <Heart className="w-4 h-4 text-white fill-current" />
              </div>
              <span className="font-serif text-xl text-charcoal font-medium">Between</span>
            </div>
            <p className="text-secondary-foreground text-base leading-relaxed mb-8 max-w-xs">
              The world's most loved app for couples. Building space for your sanctuary since 2026.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-secondary-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Premium</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Safety</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-6">Privacy</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Between Inc. All rights reserved. Made with love for couples.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Privacy First</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">End-to-End Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
