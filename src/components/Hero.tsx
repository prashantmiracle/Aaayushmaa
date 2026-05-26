import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0F0F0F] px-6 md:px-12 lg:px-16"
    >
      {/* Subtle Luxury Glow Orbs */}
      <div 
        id="hero-glow-orb-gold"
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-400/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
      />
      <div 
        id="hero-glow-orb-olive"
        className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-olive-light/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" 
        style={{ animationDelay: '4s' }}
      />

      {/* Top micro-tagline */}
      <div className="w-full flex justify-center mt-4 mb-2 z-10">
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#161616]/40 border border-[#C5A059]/15 rounded-full backdrop-blur-md"
          id="hero-tagline-pill"
        >
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">
            AAYUSHMAA® • Where Heritage Craft Meets Generative Systems
          </span>
        </div>
      </div>

      {/* Main Grid Assembly */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full z-10 my-auto py-6">
        
        {/* Left Vertical Column Marker (1 column) */}
        <div className="hidden lg:flex lg:col-span-1 border-r border-[#C5A059]/10 flex-col justify-end h-full pb-12">
          <div className="rotate-[-90deg] origin-left whitespace-nowrap font-sans text-[8px] tracking-[0.45em] uppercase text-ivory/30 translate-x-3 mb-6">
            Est. 2024 • Fashion Tech Academy
          </div>
        </div>

        {/* Center Headline & Mission Accent Column (7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-10 text-left animate-fade-in">
          <h1 className="font-serif text-[50px] sm:text-[75px] md:text-[90px] lg:text-[110px] leading-[0.9] italic font-light mb-8 select-none text-ivory">
            Fashion <br/>
            <span className="text-[#C5A059] ml-0 sm:ml-12 md:ml-20 not-italic font-normal block sm:inline mt-2 sm:mt-0">Technology</span>
          </h1>
          
          <div className="max-w-xl ml-0 sm:ml-12 md:ml-20">
            <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-ivory/80 mb-8 border-l-2 border-[#C5A059] pl-6 italic">
              Where heritage craftsmanship meets the precision of Artificial Intelligence. Helping individuals become <span className="text-[#C5A059] font-medium">industry ready</span> and businesses become <span className="text-[#C5A059] font-medium">system ready</span>.
            </p>
            
            <div className="flex gap-4 ml-0 sm:ml-6 flex-wrap">
              <button 
                onClick={() => onNavigate('academy')} 
                className="px-8 py-3 bg-[#C5A059] hover:bg-[#b08c48] transition-all text-[#0F0F0F] font-sans text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-lg shadow-[#C5A059]/10 flex items-center gap-2"
              >
                <span>Explore Academy</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
              <button 
                onClick={() => onNavigate('contact')} 
                className="px-8 py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 hover:text-white transition-all font-sans text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              >
                Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right Info and Bento Segment Column (4 columns) */}
        <div className="lg:col-span-4 flex flex-col justify-between py-6 lg:py-12 gap-10 lg:gap-0 lg:h-full lg:min-h-[450px]">
          {/* Bento-style glass card */}
          <div className="glass p-8 border border-white/5 rounded-sm bg-[#161616]/30 backdrop-blur-md">
            <div className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#C5A059] mb-4">The Visionary</div>
            <div className="font-serif text-3xl mb-4 italic text-ivory">Prashant Kumar</div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#5a5a40]/30 text-ivory text-[8px] px-2 py-1 uppercase tracking-wider font-mono">Fashion Technologist</span>
              <span className="bg-[#5a5a40]/30 text-ivory text-[8px] px-2 py-1 uppercase tracking-wider font-mono">AI Practitioner</span>
              <span className="bg-[#5a5a40]/30 text-ivory text-[8px] px-2 py-1 uppercase tracking-wider font-mono">ERP Consultant</span>
            </div>
            <p className="font-sans text-[11px] leading-relaxed text-ivory/70">
              Fashion Operations Specialist & Management Consultant dedicated to transforming apparel manufacturing and D2C through digital-first workflows.
            </p>
          </div>

          {/* Quick interactive updates */}
          <div className="flex flex-col gap-5 mt-auto">
            <div 
              onClick={() => onNavigate('academy')}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-10 h-px bg-[#C5A059]/40 group-hover:w-16 transition-all duration-300"></div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/80">
                Upcoming Batch: <span className="text-[#C5A059] group-hover:underline">Fashion AI Transformation</span>
              </div>
            </div>
            <div 
              onClick={() => onNavigate('consulting')}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-10 h-px bg-[#C5A059]/40 group-hover:w-16 transition-all duration-300"></div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/80">
                Consulting: <span className="text-[#C5A059] group-hover:underline">ERP & Operations Audit</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Ambient Scroll Down Discover Button */}
      <button
        onClick={() => onNavigate('founder')}
        className="mx-auto text-[#C5A059] hover:text-[#e5e0d8] transition-colors cursor-pointer flex flex-col items-center gap-1.5 select-none focus:outline-none group z-10"
        id="hero-scroll-trigger"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-ivory/40 group-hover:text-[#C5A059] duration-300">
          Discover Vision
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
}
