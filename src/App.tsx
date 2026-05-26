import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Academy from './components/Academy';
import Consulting from './components/Consulting';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // 1. Loading screen timer to greet high-ticket clients
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // 2. IntersectionObserver tracking active sections in real-time
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'founder', 'academy', 'consulting', 'solutions', 'resources', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the active focus area
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  // Handle high speed jump navigation
  const handleNavigation = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset navigation jump to prevent navbar blocking headers
      const offsetPos = targetElement.offsetTop - 75;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div 
        id="loading-screen" 
        className="fixed inset-0 bg-charcoal-950 flex flex-col items-center justify-center p-6 z-50 transition-opacity duration-750 ease-in"
      >
        <div className="grain absolute inset-0 z-50 pointer-events-none" />
        <div className="flex flex-col items-center gap-6 text-center select-none max-w-lg relative z-10">
          {/* Classic Monogram Logo Silhouette */}
          <div className="relative w-20 h-20 border border-gold-400/30 flex items-center justify-center p-4 mb-4">
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold-400" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold-400" />
            <span className="font-serif text-3xl font-light text-gold-200 tracking-widest leading-none">A</span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl font-semibold tracking-[0.2em] text-ivory">
              AAYUSHMAA
            </h1>
            <p className="text-[9px] font-tech uppercase tracking-[0.4em] text-gold-300">
              Where Fashion Meets Technology
            </p>
          </div>

          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent my-2" />

          <p className="text-[10px] text-charcoal-400 font-mono tracking-widest uppercase">
            Executive Consulting Portfolio • V1 Active
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory relative font-sans selection:bg-gold-500/20 selection:text-gold-100 overflow-x-hidden">
      
      {/* 0. Tactile Digital Grain Overlay */}
      <div className="grain fixed inset-0 z-50 pointer-events-none" />

      {/* 1. Quiet Luxury Global Monogram Background Watermark */}
      <div className="absolute top-[80vh] right-[-10vw] font-serif text-[40vw] text-white/[0.015] leading-none tracking-tight pointer-events-none select-none select-none z-0">
        A
      </div>

      {/* 2. Primary Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* 3. Fluid Section Assemblies */}
      <main className="relative z-10">
        
        {/* Hero Entry Section */}
        <Hero onNavigate={handleNavigation} />

        {/* Founder Technical Story Block */}
        <Founder />

        {/* Academy High-Ticket Training Systems */}
        <Academy />

        {/* Operational Diagnostics & Consulting */}
        <Consulting />

        {/* Specific Industry Solutions */}
        <Solutions />

        {/* Downloads Library Vault */}
        <Resources />

        {/* Contact Coordinates & FAQS */}
        <Contact />

      </main>

      {/* 4. Branding Footer coordinates */}
      <Footer onNavigate={handleNavigation} />

      {/* 5. Fluid Floating Quick Action Drawer */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3" id="global-floating-widgets">
        <a
          href="https://wa.me/919451121115?text=Hello%2C%20I%20am%20interested%20in%20AAYUSHMAA%20Fashion%20Technology%20Consulting.%20Please%20schedule%20a%20seat."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-950/90 border border-emerald-500/30 text-emerald-100 rounded-full hover:bg-emerald-950 shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer group flex items-center gap-2 max-w-[45px] hover:max-w-[200px] overflow-hidden whitespace-nowrap duration-500"
          title="Direct link to WhatsApp Support"
          id="global-whatsapp-sticky"
        >
          <MessageSquare className="w-5 h-5 shrink-0" />
          <span className="text-xs font-sans tracking-wide font-medium pr-2">Chat with Founder</span>
        </a>
      </div>

    </div>
  );
}
