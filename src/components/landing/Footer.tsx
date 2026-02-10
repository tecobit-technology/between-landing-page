import { Instagram, Twitter, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, footerNavigation } from "@/lib/mockData";
import Magnetic from "@/components/ui/Magnetic";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 md:pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -ml-32 -mb-32" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group cursor-pointer w-fit">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-105 bg-white">
                <img src="/logo.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-2xl text-charcoal font-bold tracking-tight leading-none">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-secondary-foreground text-lg leading-relaxed mb-8 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-5">
              {[Instagram, Twitter, MessageCircle].map((Icon, i) => (
                <Magnetic key={i} strength={0.4}>
                  <a href="#" className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-500 hover:shadow-glow">
                    <Icon size={20} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-charcoal">Product</h4>
            <ul className="space-y-2">
              {footerNavigation.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="block py-1.5 text-secondary-foreground hover:text-primary transition-colors text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-charcoal">Company</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block py-1.5 text-secondary-foreground hover:text-primary transition-colors text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-charcoal">Privacy</h4>
            <ul className="space-y-2">
              {footerNavigation.privacy.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="block py-1.5 text-secondary-foreground hover:text-primary transition-colors text-base">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="block py-1.5 text-secondary-foreground hover:text-primary transition-colors text-base">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-secondary-foreground text-sm opacity-60">
            &copy; {currentYear !== 2026 ? `2026-${currentYear}` : "2026"} {siteConfig.name} Inc. All rights reserved. Made with love for couples.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">Privacy First</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">End-to-End Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
