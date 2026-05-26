import { useState } from 'react';
import { CONSULTING_SERVICES } from '../data';
import { ConsultingService } from '../types';
import { 
  TrendingUp, 
  Server, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  ArrowUpRight, 
  HelpCircle,
  FileCheck,
  Building,
  UserCheck
} from 'lucide-react';

export default function Consulting() {
  const [activeService, setActiveService] = useState<string>('operational-turnarounds');
  
  // Interactive Diagnostic Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const quizQuestions = [
    {
      q: 'How are production timelines, techpacks, and BOMs currently tracked in your business?',
      options: [
        { text: 'Verbal guidelines & loose paper notes given to tailors.', score: 1 },
        { text: 'Excel spreadsheets stored locally on individual laptops.', score: 2 },
        { text: 'Cloud databases (Google Sheets/Drive) with shared access.', score: 3 },
        { text: 'Unified enterprise PLM & ERP tracking system.', score: 4 }
      ]
    },
    {
      q: 'What is your primary method of fabric and marker layout calculation?',
      options: [
        { text: 'Manual estimates on cutting boards using tailors experience.', score: 1 },
        { text: 'Basic math formulas calculated on paper per bulk order.', score: 2 },
        { text: '2D CAD marker optimization sheets.', score: 3 },
        { text: 'Automatic nesting CAD software linked to material warehouses.', score: 4 }
      ]
    },
    {
      q: 'How does your facility manage assembly line delays & bottleneck points?',
      options: [
        { text: 'No active monitoring; discovered only when deliveries are delayed.', score: 1 },
        { text: 'End-of-day tally sheet reporting checked by floor supervisor.', score: 2 },
        { text: 'Hourly progress boards compiled manually on physical line ends.', score: 3 },
        { text: 'Real-time digital barcode or RFID terminal tracking updates.', score: 4 }
      ]
    },
    {
      q: 'To what degree has your design studio integrated Generative AI tools?',
      options: [
        { text: 'Zero awareness; pure manual sketching workflows only.', score: 1 },
        { text: 'Occasional web search or standard Pinterest reference boards.', score: 2 },
        { text: 'Using general AI tools (Midjourney) to brainstorm initial themes.', score: 3 },
        { text: 'Trained visual style datasets producing lookbooks and photorealistic catalog mockups.', score: 4 }
      ]
    }
  ];

  const handleOptionClick = (score: number) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate Diagnostics Score
      const totalScore = updatedAnswers.reduce((a, b) => a + b, 0);
      let classification = '';
      let recommendation = '';

      if (totalScore <= 6) {
        classification = 'Level 1: Frictional Guild (Ad-hoc Sourcing)';
        recommendation = 'Your operations rely heavily on individual craft memory rather than structured systems. Introduce digital Techpacks and BOM templates immediately to secure standard sizing and reduce 30%+ sampling waste.';
      } else if (totalScore <= 10) {
        classification = 'Level 2: Siloed Traditional (Excel Dependent)';
        recommendation = 'You have basic data records but sit in siloed sheets. Transition to a central cloud tracker, introduce Time Studies (SAM checks), and start testing early catalog AI workflows to scale up production velocity.';
      } else if (totalScore <= 14) {
        classification = 'Level 3: Operational Core (Standardized Assembly)';
        recommendation = 'Excellent foundation. Your shopfloor uses line balancing and standard guidelines. Maximize margins by implementing light MRP (Material Requirement) systems and training designers on structured CAD/ControlNet modeling.';
      } else {
        classification = 'Level 4: System Ready (Apparel Tech Elite)';
        recommendation = 'You are in the top tier. Your systems are highly integrated. Scale profitability further through advanced machine learning predictive stock replenishments and custom enterprise ERP tuning.';
      }

      setQuizResult(JSON.stringify({ classification, recommendation, totalScore }));
      setQuizStep(quizQuestions.length);
    }
  };

  const handleResetQuiz = () => {
    setQuizStep(0);
    setAnswers([]);
    setQuizResult(null);
  };

  const currentSelectedService = CONSULTING_SERVICES.find(s => s.id === activeService) || CONSULTING_SERVICES[0];

  // Helper mapping lucide icon strings to components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const formattedInquiryText = (srvTitle: string) => {
    const resObj = quizResult ? JSON.parse(quizResult) : null;
    const diagnosticLine = resObj 
      ? `Our Diagnostic Audit Level: ${resObj.classification} (Score: ${resObj.totalScore}/16)` 
      : 'Diagnostic not run';

    const text = `Hello Prashant Kumar,\n\nI am requesting a strategic consulting review of our operations.\n\nService of Interest:\n- ${srvTitle}\n\nApparel System Diagnostic Info:\n- ${diagnosticLine}\n${resObj ? `- Recommendation: ${resObj.recommendation}` : ''}\n\nPlease share availability for an executive diagnostic call.\n\nThank you!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="consulting" className="py-24 md:py-32 relative bg-charcoal-900 subtle-grain">
      {/* Decorative Gradient lines for high tech fashion look */}
      <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16 text-center" id="consulting-headers">
          <span className="font-mono text-xs text-gold-400 uppercase tracking-[0.25em] font-semibold">MANAGEMENT CONSULTING & ADVISORY</span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">Operations Optimization & Systems</h2>
          <div className="h-[2px] w-20 bg-gold-400 mx-auto mt-2" />
          <p className="max-w-2xl mx-auto text-charcoal-450 text-xs md:text-sm text-charcoal-300 font-light mt-2 leading-relaxed">
            Eliminate operational drag. Prashant Kumar leverages industrial engineering logic, sewing standard SAM formulas, database architecture, and advanced Generative AI configurations to build high-performance organizations.
          </p>
        </div>

        {/* Dynamic Services Selector Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start" id="consulting-showcase-grid">
          
          {/* Left Column: Quick Navigation Handles */}
          <div className="lg:col-span-4 flex flex-col gap-2.5" id="consulting-service-list">
            <h4 className="font-serif text-xs uppercase tracking-widest text-[#a1a1aa] mb-4 font-bold border-b border-white/5 pb-2">Consulting Core Practices</h4>
            {CONSULTING_SERVICES.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveService(srv.id)}
                className={`w-full text-left p-4 transition-all duration-300 flex items-center justify-between cursor-pointer rounded-none border ${
                  activeService === srv.id
                    ? 'bg-charcoal-950 border-gold-400 text-gold-300 shadow-lg'
                    : 'bg-charcoal-900/60 border-white/5 text-charcoal-300 hover:bg-charcoal-900 hover:text-ivory hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${activeService === srv.id ? 'text-gold-400' : 'text-charcoal-500'}`}>
                    {renderIcon(srv.iconName)}
                  </span>
                  <span className="font-serif text-xs md:text-sm font-semibold tracking-wide uppercase">{srv.title}</span>
                </div>
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeService === srv.id ? 'rotate-45 text-gold-400' : 'text-charcoal-500'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Active Service Detailed Profile Card */}
          <div className="lg:col-span-8 p-8 md:p-10 bg-charcoal-950/80 border border-gold-300/10 shadow-2xl relative" id="consulting-detailed-card">
            
            <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center p-2 text-gold-500/10 pointer-events-none">
              <Building className="w-24 h-24" />
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-400 border border-gold-400/20 px-3 py-1 self-start rounded-full">
                Target segment: {currentSelectedService.scope}
              </span>
              
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ivory tracking-wide">
                {currentSelectedService.title}
              </h3>
              
              <p className="text-xs md:text-sm text-charcoal-300 leading-relaxed font-light font-sans mt-2">
                {currentSelectedService.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pt-6 border-t border-white/5" id="consulting-deliverables-breakdown">
                
                {/* Benefits */}
                <div>
                  <h4 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    Projected Business Impact
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {currentSelectedService.benefits.map((bf, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-[#d4d4d8] font-light">
                        <span className="text-gold-400 font-mono font-bold">•</span>
                        <span>{bf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold mb-3 flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    Formal Scope Deliverables
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {currentSelectedService.deliverables.map((dl, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-[#d4d4d8] font-light">
                        <span className="text-gold-500 font-mono font-bold">0{idx + 1}.</span>
                        <span>{dl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Consultation trigger CTA */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 justify-between" id="consulting-action-stripe">
                <span className="text-[10px] sm:text-xs text-charcoal-400 font-mono">Consultation requires standard introductory diagnostic info.</span>
                <a
                  href={`https://wa.me/919451121115?text=${formattedInquiryText(currentSelectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-900 font-sans text-xs uppercase tracking-widest font-bold transition-all text-center"
                >
                  Book Strategic Diagnostic Call
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Systems Diagnostic Assessment Widget */}
        <div 
          className="p-8 md:p-12 bg-charcoal-950 border border-gold-300/15 relative overflow-hidden"
          id="system-readiness-quiz"
        >
          {/* Gold Glowing Corner Tag */}
          <div className="absolute top-0 right-0 py-1.5 px-4 bg-gold-400 text-charcoal-950 font-mono text-[9px] uppercase tracking-widest font-bold">
            Interactive Diagnostic Widget
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Quiz Info */}
            <div className="lg:col-span-4" id="quiz-left-panel">
              <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest">AAYUSHMAA® METRIC TOOLS</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ivory tracking-wide mt-1">Apparel System Readiness Audit</h3>
              <p className="text-xs text-charcoal-300 mt-2 leading-relaxed font-light">
                Answer these 4 multi-choice operational questions designed by Prashant Kumar to score your current shopfloor capability classification, and review localized transition guidelines.
              </p>
              
              {quizStep < quizQuestions.length && (
                <div className="mt-6 flex items-center gap-1.5" id="quiz-indicators">
                  {quizQuestions.map((_, i) => (
                    <span 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === quizStep 
                          ? 'w-8 bg-gold-400' 
                          : i < quizStep ? 'w-2.5 bg-gold-600/60' : 'w-2.5 bg-charcoal-800'
                      }`} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Quiz Body */}
            <div className="lg:col-span-8 p-6 bg-charcoal-900/40 border border-white/5 min-h-[220px] flex flex-col justify-between" id="quiz-right-panel">
              
              {quizStep < quizQuestions.length ? (
                <div className="flex flex-col gap-5 animate-fade-in" id="quiz-step-active">
                  <div>
                    <span className="font-mono text-[9px] text-[#a1a1aa] uppercase tracking-widest">Question {quizStep + 1} of 4</span>
                    <h5 className="font-serif text-xs md:text-sm font-semibold text-ivory mt-0.5 leading-normal">
                      {quizQuestions[quizStep].q}
                    </h5>
                  </div>
                  <div className="flex flex-col gap-2">
                    {quizQuestions[quizStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(opt.score)}
                        className="w-full text-left p-3.5 bg-charcoal-950 hover:bg-gold-500/5 hover:border-gold-500/25 border border-white/5 text-xs text-charcoal-300 hover:text-gold-200 transition-colors cursor-pointer flex gap-3 align-middle"
                      >
                        <span className="text-gold-400 font-mono font-bold shrink-0">[{idx + 1}]</span>
                        <span className="font-light">{opt.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Diagnostic results */
                <div className="flex flex-col gap-4 animate-fade-in" id="quiz-results-card">
                  <div>
                    <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest">AUDIT RESULTS READY</span>
                    <h5 className="font-serif text-base font-bold text-ivory tracking-wide mt-1">
                      {JSON.parse(quizResult || '{}').classification}
                    </h5>
                    <p className="font-mono text-[10px] text-gold-400 uppercase tracking-wide mt-0.5">
                      Diagnostic Score: {JSON.parse(quizResult || '{}').totalScore} out of 16 points
                    </p>
                  </div>
                  
                  <p className="text-xs text-[#d4d4d8] leading-relaxed p-4 bg-charcoal-950 border-l-2 border-gold-400 font-sans font-light">
                    {JSON.parse(quizResult || '{}').recommendation}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch gap-3.5 mt-2" id="quiz-result-actions">
                    <button
                      onClick={handleResetQuiz}
                      className="py-3 px-5 border border-white/10 text-charcoal-405 text-charcoal-300 hover:text-ivory transition-colors font-mono text-[10px] uppercase tracking-widest cursor-pointer"
                    >
                      Reset Diagnostic
                    </button>
                    <a
                      href={`https://wa.me/919451121115?text=${formattedInquiryText(currentSelectedService.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Request Prashant Kumar To Audit This Analysis</span>
                    </a>
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
