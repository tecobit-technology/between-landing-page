import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Privacy", href: "#privacy" },
    { name: "Download", href: "#download" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-3 bg-background/90 backdrop-blur-md shadow-sm"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* Logo - Matching Image (Icon + Text) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[#CD848C] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md shadow-rose-200">
            <span className="text-sm font-serif font-bold text-white mt-0.5">B</span>
          </div>
          <span className="font-serif text-xl text-[#4A4A4A]">Between</span>
        </a>

        {/* Desktop Navigation - Centered & Grey */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-[#7A7575] hover:text-[#CD848C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Matching Image (Get Started) */}
        <div className="hidden md:block">
          <button
            onClick={(e) => scrollToSection(e, "#download")}
            className="bg-[#CD848C] hover:bg-[#B66A73] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[#CD848C]/20 shadow-lg"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#4A4A4A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-rose-100 p-6 animate-fade-in shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#5A5A5A] py-2 text-base font-medium hover:text-[#CD848C] transition-colors"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => scrollToSection(e, "#download")}
              className="mt-4 bg-[#CD848C] text-white w-full py-3 rounded-full font-semibold"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
