import { useState, useEffect, useCallback } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/lib/mockData";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "@/components/ui/Magnetic";
import TopBanner from "./TopBanner";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Privacy", href: "/privacy" },
    { name: "Docs", href: "/docs" },
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
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <TopBanner />
      <header
        className={`transition-all duration-700 ease-in-out w-full ${isScrolled
          ? "py-4 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-rose-100/30 dark:border-white/10 shadow-soft"
          : "py-8 bg-transparent"
          }`}
      >
        <div className="container-tight flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 shadow-md md:shadow-lg shadow-primary/20 bg-white">
              <img
                src="/logo.jpg"
                alt={siteConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-charcoal font-bold tracking-tight leading-none">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors relative group ${location.pathname === link.href ? "text-primary" : "text-secondary-foreground hover:text-primary"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Magnetic strength={0.3}>
              <Link
                to="/download"
                className="btn-primary py-2.5 px-6 text-sm"
              >
                Download Lov Temple
              </Link>
            </Magnetic>
          </div>

          <div className="flex md:hidden items-center gap-2 sm:gap-3">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-charcoal hover:bg-accent/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-background/95 backdrop-blur-2xl border-b border-rose-100/30 dark:border-white/10 shadow-lg"
          >
            <div className="relative px-4 sm:px-6 py-6 sm:py-8 max-h-[calc(100vh-120px)] overflow-y-auto">
              {/* Ambient Background Glows */}
              <div className="absolute top-1/4 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-1/4 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

              <nav className="flex flex-col gap-4 sm:gap-6 relative z-10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-2xl sm:text-3xl font-serif font-bold transition-all block py-2 ${location.pathname === link.href ? "text-primary italic" : "text-charcoal hover:text-primary"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-rose-100/30 dark:border-white/10"
                >
                  <Magnetic strength={0.2}>
                    <Link
                      to="/download"
                      className="btn-primary w-full py-3 sm:py-4 text-base sm:text-lg text-center block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Download App
                    </Link>
                  </Magnetic>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-rose-100/30 dark:border-white/10 text-center space-y-4"
              >
                <div className="flex justify-center items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart size={20} fill="currentColor" />
                  </div>
                </div>
                <p className="text-secondary-foreground text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">Lov Temple</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
