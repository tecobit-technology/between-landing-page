import { useState, useEffect, useCallback } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Privacy", href: "#privacy" },
  ];

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
        ? "py-4 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-rose-100/30 dark:border-white/10 shadow-soft"
        : "py-8 bg-transparent"
        }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-primary/20">
            <Heart className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="font-serif text-2xl text-charcoal font-medium">Between</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-semibold text-secondary-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={(e) => scrollToSection(e, "#download")}
            className="btn-primary py-2.5 px-6 text-sm"
          >
            Get Started
          </button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            className="p-2 text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/10 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal py-3 text-lg font-medium border-b border-primary/5"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => scrollToSection(e, "#download")}
                className="btn-primary w-full mt-4"
                aria-label="Get Started"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
