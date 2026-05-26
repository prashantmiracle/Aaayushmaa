import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        isScrolled === false && setIsScrolled(true);
      } else {
        isScrolled === true && setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'founder', label: 'About Founder' },
    { id: 'academy', label: 'Academy' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'solutions', label: 'Industry Solutions' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/90 backdrop-blur-xl border-b border-gold-300/10 py-4 shadow-xl shadow-black/40'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group flex flex-col items-start select-none"
          id="navbar-brand-logo"
        >
          <div className="flex items-baseline gap-0.5">
            <span className="font-serif text-xl md:text-2xl font-light tracking-[0.25em] text-[#C5A059] group-hover:text-ivory transition-colors duration-300">
              AAYUSHMAA
            </span>
            <span className="text-[9px] text-[#C5A059] font-serif relative -top-1.5">®</span>
          </div>
          <span className="text-[8px] font-sans uppercase tracking-[0.35em] text-ivory/40 -mt-0.5 font-medium group-hover:text-gold-200 transition-colors duration-300">
            Fashion Technology & Consulting
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8" id="navbar-desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 py-2 hover:text-gold-300 cursor-pointer ${
                activeSection === item.id ? 'text-gold-300 font-semibold' : 'text-charcoal-300'
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4" id="navbar-call-to-actions">
          <a
            href="https://wa.me/919451121115?text=Hello%2C%20I%20am%20interested%20in%20AAYUSHMAA%20Fashion%20Technology%20programs%20and%20consulting%20services.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-gold-300 hover:text-gold-100 transition-colors px-3 py-1.5 border border-gold-500/15 rounded-full hover:bg-gold-500/5"
            id="nav-whatsapp-direct"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 94511 21115</span>
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="group flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-none shadow-md hover:shadow-gold-500/20 transition-all duration-300 transform active:scale-95 cursor-pointer"
            id="nav-consultation-btn"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-ivory hover:text-gold-300 p-2 focus:outline-none cursor-pointer"
          id="navbar-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[65px] bg-charcoal-950/98 backdrop-blur-2xl z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
        id="navbar-mobile-drawer"
      >
        <div className="p-8 flex flex-col h-[calc(100vh-65px)] justify-between">
          <div className="flex flex-col gap-6" id="navbar-mobile-links">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-serif text-lg tracking-wider py-2 border-b border-charcoal-800 flex items-center justify-between hover:text-gold-300 cursor-pointer ${
                  activeSection === item.id ? 'text-gold-400 pl-2 border-gold-300/20' : 'text-ivory'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                id={`nav-mobile-link-${item.id}`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-gold-500/50">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 pb-8" id="navbar-mobile-footer">
            <a
              href="https://wa.me/919451121115?text=Hello%2C%20I%20am%20interested%20in%20AAYUSHMAA%20Fashion%20Technology%20programs%20and%20consulting%20services.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-900/35 hover:bg-emerald-900/50 border border-emerald-500/20 text-emerald-100 font-sans text-xs uppercase tracking-widest font-semibold py-3.5 transition-colors"
              id="mobile-whatsapp-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Chat (+91 94511 21115)</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-900 font-sans text-xs uppercase tracking-widest font-semibold py-3.5 cursor-pointer"
              id="mobile-consultation-btn"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
