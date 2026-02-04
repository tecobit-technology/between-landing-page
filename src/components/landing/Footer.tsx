import { Heart } from "lucide-react";

const Footer = () => {
  const links = {
    product: ["Features", "Pricing", "Download", "Updates"],
    company: ["About", "Blog", "Careers", "Press"],
    support: ["Help Center", "Contact", "Community", "Status"],
    legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-sm font-serif text-primary-foreground font-bold">B</span>
              </div>
              <span className="font-serif text-xl text-foreground">Between</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A quiet space for two.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Between. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary inline" /> for couples everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
