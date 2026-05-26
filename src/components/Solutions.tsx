import { useState } from 'react';
import { INDUSTRY_SOLUTIONS } from '../data';
import { Check, ShieldAlert, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export default function Solutions() {
  const [activeSegment, setActiveSegment] = useState<string>('Boutique');

  const selectedSolution = INDUSTRY_SOLUTIONS.find(sol => sol.segment === activeSegment) || INDUSTRY_SOLUTIONS[0];

  const segments = ['Boutique', 'Factory', 'Export House', 'D2C Brand'];

  return (
    <section id="solutions" className="py-24 md:py-32 relative bg-charcoal-950 subtle-grain">
      {/* Soft overlay sphere */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-olive-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6" id="solutions-headers">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-[0.25em] font-semibold">SEGMENT REMEDIES & bluePRINTS</span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">Industry Solutions</h2>
            <div className="h-[1px] w-24 bg-gold-400 mt-2" />
          </div>
          <p className="max-w-md text-charcoal-350 text-xs md:text-sm text-charcoal-300 font-light leading-relaxed">
            Every apparel model has a specific fail-point. Select your business vertical below to explore custom-engineered systems designed to stabilize margins and streamline design-to-delivery loops.
          </p>
        </div>

        {/* Custom tabs to change industry segments */}
        <div className="flex border-b border-white/5 mb-12 overflow-x-auto whitespace-nowrap" id="solutions-segment-tabs">
          {segments.map((seg) => (
            <button
              key={seg}
              onClick={() => setActiveSegment(seg)}
              className={`py-3.5 px-6 font-serif text-sm md:text-base font-medium tracking-wide border-b-2 transition-all cursor-pointer ${
                activeSegment === seg
                  ? 'border-gold-400 text-gold-300'
                  : 'border-transparent text-charcoal-400 hover:text-charcoal-200'
              }`}
            >
              {seg === 'Boutique' && 'Premium Boutiques'}
              {seg === 'Factory' && 'Manufacturing Plants'}
              {seg === 'Export House' && 'Export Houses'}
              {seg === 'D2C Brand' && 'Fast D2C Brands'}
            </button>
          ))}
        </div>

        {/* Solution Analysis Core Display */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
          id="solutions-board-display"
        >
          {/* Left panel: Challenge and Solution contrast */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between" id="sol-findings-left">
            <div className="flex flex-col gap-6">
              
              {/* Challenge Card */}
              <div className="p-6 bg-charcoal-900 border-l border-red-500/25 relative">
                <div className="flex items-center gap-2 text-red-400 mb-3" id="sol-challenge-title">
                  <ShieldAlert className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">Critical Threat / Core Bottleneck</span>
                </div>
                <h4 className="font-serif text-sm md:text-base font-semibold text-ivory mb-2">The Operational Fragility</h4>
                <p className="text-xs text-charcoal-300 leading-relaxed font-sans font-light">
                  {selectedSolution.challenge}
                </p>
              </div>

              {/* Resolution Card */}
              <div className="p-6 bg-charcoal-900 border-l border-gold-400/25 relative">
                <div className="flex items-center gap-2 text-gold-400 mb-3" id="sol-response-title">
                  <Zap className="w-4 h-4" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">AAYUSHMAA® System Redesign</span>
                </div>
                <h4 className="font-serif text-sm md:text-base font-semibold text-ivory mb-2">The Structural Transformation</h4>
                <p className="text-xs text-charcoal-300 leading-relaxed font-sans font-light">
                  {selectedSolution.solution}
                </p>
              </div>

            </div>

            {/* Solid projected impact banner */}
            <div className="p-6 bg-gradient-to-r from-gold-900/40 via-gold-900/10 to-transparent border border-gold-300/10" id="sol-impact-card">
              <span className="font-mono text-[9px] text-[#a1a1aa] uppercase tracking-widest block mb-1">Projected Outcome Model</span>
              <p className="font-serif text-lg md:text-xl text-gold-200 font-semibold leading-normal">
                {selectedSolution.impact}
              </p>
            </div>
          </div>

          {/* Right panel: Active Solution Implementation checklist */}
          <div className="lg:col-span-5 p-8 bg-charcoal-900 border border-white/5 flex flex-col justify-between" id="sol-checkpoints-right">
            <div>
              <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest block mb-1">Operational Checklist</span>
              <h4 className="font-serif text-base md:text-lg font-bold text-ivory tracking-wide mb-6">Transition Checkpoints</h4>

              <div className="flex flex-col gap-6" id="checkpoints-list">
                {selectedSolution.checkpoints.map((chk, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-gold-400/5 text-gold-400 border border-gold-300/10 flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <div>
                      <p className="font-serif text-xs md:text-sm font-semibold text-gold-100">{chk}</p>
                      <p className="text-[11px] text-[#a1a1aa] leading-relaxed mt-1 font-light font-sans">
                        Setup procedural guardrails checking actual standard deviations versus predicted goals.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Booking anchor */}
            <div className="mt-8 pt-6 border-t border-white/5" id="sol-action-area">
              <p className="text-[11px] text-charcoal-400 leading-normal mb-4 font-mono">
                Request Prashant Kumar to compile a customized transition binder for your brand.
              </p>
              <a
                href={`https://wa.me/919451121115?text=Hello%20Prashant%20Kumar%2C%20I%20am%20reviewing%20the%20AAYUSHMAA%20Industry%20Solutions%20for%20our%20${selectedSolution.segment}%20business%20segment.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-charcoal-950 hover:bg-gold-500/5 hover:text-gold-300 text-gold-400 border border-gold-400/20 hover:border-gold-400/40 text-xs font-mono uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
