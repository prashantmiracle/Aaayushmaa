import { ArrowUp, Mail, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16" id="footer-blocks">
          
          {/* Brand block (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="footer-logo-block">
            <div className="flex items-baseline gap-1 cursor-pointer group select-none" onClick={scrollToTop}>
              <span className="font-serif text-2xl font-bold tracking-widest text-ivory group-hover:text-gold-200 duration-300">
                AAYUSHMAA
              </span>
              <span className="text-xs text-gold-400 font-serif relative -top-2">®</span>
            </div>
            
            <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm font-sans font-light">
              Where Fashion Meets Technology. Fusing traditional apparel industrial standards, assembly line scheduling logic (SAM measurements), global merchandising metrics, and generative AI design pipelines.
            </p>

            <div className="flex flex-col gap-1 text-[11px] text-charcoal-350 font-mono font-light text-[#a1a1aa]" id="footer-slogan">
              <p className="text-gold-300/80 font-medium font-serif leading-normal italic">
                “Helping individuals become industry ready. <br/>
                Helping fashion businesses become system ready.”
              </p>
              <p className="mt-2 text-charcoal-500 font-mono uppercase tracking-widest text-[9px]">Founder — Prashant Kumar</p>
            </div>
          </div>

          {/* Quick links block (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4" id="footer-links-block">
            <h5 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold border-b border-white/5 pb-2">Platform Navigation</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-charcoal-405 font-light font-sans text-charcoal-300">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Home</button>
              <button onClick={() => onNavigate('founder')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">About Founder</button>
              <button onClick={() => onNavigate('academy')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Academy</button>
              <button onClick={() => onNavigate('consulting')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Consulting</button>
              <button onClick={() => onNavigate('solutions')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Solutions</button>
              <button onClick={() => onNavigate('resources')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Resources</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-gold-200 transition-colors cursor-pointer">Contact Desk</button>
            </div>
          </div>

          {/* Core Roadmap (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4" id="footer-roadmap-block">
            <h5 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold border-b border-white/5 pb-2">Development Roadmap</h5>
            
            <div className="flex flex-col gap-3 font-mono text-[10px] text-charcoal-300" id="roadmap-points">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gold-205 text-gold-300 font-semibold uppercase">V1 Launcher (Current):</span>
                  <p className="text-charcoal-450 leading-normal text-[9px] text-[#a1a1aa] font-sans font-light mt-0.5">Luxury static animated brand pages. Fully Hostinger hosting friendly, no dynamic databases needed.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-charcoal-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-charcoal-400 uppercase">Phase 2:</span>
                  <p className="text-charcoal-500 leading-normal text-[9px] font-sans font-light mt-0.5">Bespoke database sync, live seat booking tracker, student waitlist verification admin panel.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar / Minimal Accent Panel */}
        <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-lower">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left text-[9px] font-sans tracking-[0.25em] uppercase text-ivory/50" id="footer-copyright">
            <span>© {new Date().getFullYear()} AAYUSHMAA® • Version 1.0 Launch • Phase 1 Digital Platform</span>
            <span className="hidden md:inline text-[#C5A059]/30">|</span>
            <span className="text-[#C5A059]">Integrated ERP & AI Architecture</span>
            <span className="hidden md:inline text-[#C5A059]/30">|</span>
            <a href="https://aayushmaa.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] flex items-center gap-1 transition-colors">
              aayushmaa.in
              <ExternalLink className="w-2 h-2 text-[#C5A059]" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            {/* Design theme color palette dots */}
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5A5A40]" title="Olive Brand State" />
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" title="Luxury Gold Accent" />
              <span className="w-2 h-2 rounded-full bg-[#E5E0D8]" title="Pure Warm Ivory" />
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 bg-charcoal-900 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0F0F0F] border border-white/5 transition-all cursor-pointer group rounded-none"
              id="back-to-top-btn"
              title="Return to top seam"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
