import { useState } from 'react';
import { Award, Briefcase, Zap, Compass, CheckCircle2, Star, Quote } from 'lucide-react';

export default function Founder() {
  const [activeTab, setActiveTab] = useState<'journey' | 'methods' | 'vision'>('journey');

  const milestones = [
    { year: 'Phase 1 Launch', label: 'Operations Leadership', desc: 'Managed multi-line assembly shopfloors, standardizing material consumption models.' },
    { year: 'ERP & SCM Sage', label: 'Systems Pioneer', desc: 'Spearheaded mid-market apparel factory migrations to structured databases, dropping re-run billing errors.' },
    { year: 'Tech Consultant', label: 'AAYUSHMAA® Foundation', desc: 'Crafting custom diagnostics pipelines merging technical seam engineering with generative AI toolsets.' }
  ];

  const expertises = [
    { title: 'Fashion Technologist', desc: 'Mastery of seam strength (ASTM standards), sewing machinery metrics, Standard Allowed Minutes (SAM), techpacks, and marker optimization.' },
    { title: 'Management Consultant', desc: 'Industrial waste audits, line balancing algorithms, production floor layouts, and cost-yield metrics optimization.' },
    { title: 'Fashion AI Practitioner', desc: 'Virtual model replacement workflow design, high-fidelity textile rendering prompts, and automatic metadata enrichment pipelines.' },
    { title: 'Operations Specialist', desc: 'ERP data-pathways, Material Requirement Planning (MRP), inventory replenishment control, and supplier scorecard matrices.' }
  ];

  return (
    <section id="founder" className="py-24 md:py-32 relative bg-charcoal-900 subtle-grain overflow-hidden">
      {/* Decorative fine elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Premium Generated Graphic Representation */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="founder-visual-column">
            <div className="relative group overflow-hidden border border-gold-300/20 shadow-2xl p-2 bg-charcoal-950/80">
              {/* Antique gold accent corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-400" />
              
              <img
                src="/src/assets/images/fashion_tech_consulting_art_1779694039755.png"
                alt="AAYUSHMAA Fashion Technology Visual Artwork"
                className="w-full aspect-[4/5] object-cover filter brightness-[0.80] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback to high-quality fallback visual if image fails or path shifts
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&auto=format&fit=crop";
                }}
              />
              
              {/* Subtle glass overlay stating Founder focus */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card-gold text-center">
                <p className="font-serif text-lg tracking-widest text-[#faf6f0]">PRASHANT KUMAR</p>
                <p className="font-mono text-[9px] text-gold-300 uppercase tracking-[0.2em] mt-1">Founder & Managing Director</p>
              </div>
            </div>

            {/* Quick Metrics of Growth */}
            <div className="grid grid-cols-3 gap-4" id="founder-stats-strip">
              <div className="p-4 bg-charcoal-950/40 border border-white/5 text-center">
                <p className="font-tech text-xl md:text-2xl font-bold text-gold-300">22%+</p>
                <p className="text-[9px] text-[#a1a1aa] uppercase tracking-wider mt-1 font-mono">Factory Efficiency Boost</p>
              </div>
              <div className="p-4 bg-charcoal-950/40 border border-white/5 text-center">
                <p className="font-tech text-xl md:text-2xl font-bold text-gold-300">90%</p>
                <p className="text-[9px] text-[#a1a1aa] uppercase tracking-wider mt-1 font-mono">Sample Rendering Cost Cut</p>
              </div>
              <div className="p-4 bg-charcoal-950/40 border border-white/5 text-center">
                <p className="font-tech text-xl md:text-2xl font-bold text-gold-300">100%</p>
                <p className="text-[9px] text-[#a1a1aa] uppercase tracking-wider mt-1 font-mono">Industry Readiness</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8" id="founder-biography-column">
            <div className="flex flex-col gap-3">
              <span className="font-serif italic text-gold-300 text-lg tracking-wider">Meet the Founder</span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">Prashant Kumar</h2>
              <p className="font-tech text-xs uppercase tracking-[0.25em] text-gold-400 font-medium">
                Fashion Technologist • Management Consultant • AI Practitioner
              </p>
              <div className="h-[1px] w-20 bg-gold-400 mt-2" />
            </div>

            <p className="text-charcoal-300 text-sm md:text-base leading-relaxed font-light">
              "Traditional fashion education specializes in aesthetics; traditional management consulting specializes in scale. But the space in-between—the assembly floor SAM calculation, the digital nesting algorithm, ERP material balance, and Generative techpack science is where high-ticket clothing brands win. At AAYUSHMAA®, we fuse these disciplines to help individuals become system-independent and businesses escape operational friction."
            </p>

            {/* Biography Tabs */}
            <div className="flex border-b border-white/5" id="founder-tabs">
              <button
                onClick={() => setActiveTab('journey')}
                className={`py-3 px-6 text-xs uppercase tracking-widest font-mono font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'journey' ? 'border-gold-300 text-gold-300' : 'border-transparent text-charcoal-400 hover:text-charcoal-200'
                }`}
              >
                The Journey
              </button>
              <button
                onClick={() => setActiveTab('methods')}
                className={`py-3 px-6 text-xs uppercase tracking-widest font-mono font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'methods' ? 'border-gold-300 text-gold-300' : 'border-transparent text-charcoal-400 hover:text-charcoal-200'
                }`}
              >
                Core Expertise
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`py-3 px-6 text-xs uppercase tracking-widest font-mono font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'vision' ? 'border-gold-300 text-gold-300' : 'border-transparent text-charcoal-400 hover:text-charcoal-200'
                }`}
              >
                Mission Vision
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[220px]" id="founder-tab-content">
              {activeTab === 'journey' && (
                <div className="flex flex-col gap-6 animate-fade-in" id="tab-journey">
                  <div className="relative pl-6 border-l border-gold-500/20 flex flex-col gap-8">
                    {milestones.map((ml, i) => (
                      <div key={i} className="relative">
                        <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-charcoal-900 border border-gold-300" />
                        <span className="font-mono text-[10px] uppercase text-gold-400 tracking-widest font-semibold">{ml.year}</span>
                        <h4 className="font-serif text-sm md:text-base font-semibold text-ivory mt-0.5">{ml.label}</h4>
                        <p className="text-xs text-charcoal-300 mt-1 font-sans font-light leading-relaxed">{ml.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'methods' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" id="tab-expertises">
                  {expertises.map((exp, i) => (
                    <div key={i} className="p-4 bg-charcoal-950/50 border border-white/5 rounded-none flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-serif text-xs md:text-sm font-semibold text-gold-100">{exp.title}</h5>
                        <p className="text-[11px] text-charcoal-300 leading-relaxed font-sans font-light mt-1">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="flex flex-col gap-6 animate-fade-in" id="tab-vision">
                  <div className="p-6 bg-charcoal-950/80 border border-gold-500/10 relative">
                    <Quote className="absolute right-6 bottom-6 w-16 h-16 text-gold-500/5 rotate-180" />
                    <h5 className="font-serif text-base font-bold text-gold-200 uppercase tracking-widest mb-2">AAYUSHMAA® Mission Philosophy</h5>
                    <p className="text-xs leading-relaxed text-[#d4d4d8] font-mono font-light">
                      "To systematize the global apparel workforce and brand supply chains. We believe technical precision must replace visual guesswork. No fashion boutique should fail due to sewing defects; no production plant should face bankruptcy due to delayed material tracking; and no student should exit college lacking core competence in SAM planning, AI synthesis, or ERP pathways."
                    </p>
                    <div className="flex items-center gap-2 mt-6">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span className="text-[10px] text-gold-300 tracking-wider font-mono">100% Static Secure Architecture</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
