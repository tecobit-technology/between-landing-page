import { Instagram, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, footerNavigation } from "@/lib/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 md:pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:rotate-3 bg-white">
                <img src="/logo.jpg" alt={siteConfig.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-sans text-xl text-charcoal font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="text-secondary-foreground text-base leading-relaxed mb-8 max-w-xs">
              {siteConfig.description}
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
            <h4 className="font-serif text-lg font-bold text-charcoal mb-4 md:mb-6">Product</h4>
            <ul className="space-y-1">
              {footerNavigation.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="block py-2 text-secondary-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-4 md:mb-6">Company</h4>
            <ul className="space-y-1">
              {footerNavigation.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block py-2 text-secondary-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-4 md:mb-6">Privacy</h4>
            <ul className="space-y-1">
              {footerNavigation.privacy.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="block py-2 text-secondary-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="block py-2 text-secondary-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear !== 2026 ? `2026-${currentYear}` : "2026"} {siteConfig.name} Inc. All rights reserved. Made with love for couples.
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
