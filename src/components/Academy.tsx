import { useState } from 'react';
import { ACADEMIC_PROGRAMS } from '../data';
import { AcademicProgram } from '../types';
import { BookOpen, Calendar, Clock, ChevronRight, Award, Copy, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Academy() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCourse, setActiveCourse] = useState<AcademicProgram | null>(null);
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistPhone, setWaitlistPhone] = useState('');
  const [waitlistOrg, setWaitlistOrg] = useState('');
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [submittingInquiry, setSubmittingInquiry] = useState(false);

  // Filter Categories
  const categories = ['All', 'Engineering & Production', 'Business & Management', 'Technology & Innovation', 'Enterprise Integration'];

  const filteredPrograms = selectedCategory === 'All'
    ? ACADEMIC_PROGRAMS
    : ACADEMIC_PROGRAMS.filter(prog => prog.category === selectedCategory);

  const triggerEnrollmentAction = (actionType: 'whatsapp' | 'email', progTitle: string) => {
    const contactText = `Hello AAYUSHMAA® Team,\n\nI am interested in entering the waitlist for the program: "${progTitle}".\n\nMy Details:\n- Name: ${waitlistName || 'Interested Candidate'}\n- Email: ${waitlistEmail || 'Not Provided'}\n- Phone: ${waitlistPhone || 'Not Provided'}\n- Profile/Org: ${waitlistOrg || 'Not Provided'}\n\nPlease share the formal syllabus brochure and notify me when batch slots open.\n\nThank you!`;
    
    if (actionType === 'whatsapp') {
      const urlEncoded = encodeURIComponent(contactText);
      window.open(`https://wa.me/919451121115?text=${urlEncoded}`, '_blank');
    } else {
      const emailSubject = encodeURIComponent(`Inquiry for ${progTitle} — AAYUSHMAA® Academy`);
      const emailBody = encodeURIComponent(contactText);
      window.open(`mailto:design@studioramaonline.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    }
  };

  const handleCopyTemplate = (progTitle: string) => {
    const contactText = `Hello AAYUSHMAA® Team,\n\nI am interested in entering the waitlist for the program: "${progTitle}".\n\nMy Details:\n- Name: ${waitlistName || 'Interested Candidate'}\n- Email: ${waitlistEmail || 'Not Provided'}\n- Phone: ${waitlistPhone || 'Not Provided'}\n- Profile/Org: ${waitlistOrg || 'Not Provided'}\n\nPlease share the formal syllabus brochure and notify me when batch slots open.`;
    navigator.clipboard.writeText(contactText);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <section id="academy" className="py-24 md:py-32 relative bg-charcoal-950 subtle-grain">
      {/* Accent Background Light */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6" id="academy-headers">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-[0.25em] font-semibold">THE ACADEMY — HIGH TICKET TRAINING</span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">
              Fashion Technology <br className="hidden sm:inline" />& Operations Programs
            </h2>
            <div className="h-[1px] w-24 bg-gold-400 mt-2" />
          </div>
          <p className="max-w-md text-charcoal-300 text-xs md:text-sm font-light leading-relaxed">
            Acquire localized technical literacy. Learn standardized calculations, factory systems, data layouts, and Generative Artificial Intelligence designed purely for garment professionals.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-4 border-b border-white/5" id="academy-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border text-[10px] md:text-xs uppercase tracking-widest font-mono font-medium transition-all duration-300 rounded-none cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-charcoal-950 border-gold-400'
                  : 'bg-transparent text-charcoal-400 border-white/5 hover:text-ivory hover:border-gold-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="academy-programs-grid">
          {filteredPrograms.map((prog) => {
            const hasStatus = prog.status === 'Now Open';
            return (
              <div
                key={prog.id}
                className="group p-8 bg-charcoal-900/80 border border-white/5 hover:border-gold-300/30 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl shadow-black relative"
                id={`program-card-${prog.id}`}
              >
                {/* Status indicator tag */}
                <div className="absolute top-6 right-8 flex items-center gap-1.5" id={`status-${prog.id}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${hasStatus ? 'bg-emerald-400 animate-pulse' : 'bg-gold-500'}`} />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-300">
                    {prog.status}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-400">
                    {prog.category}
                  </span>
                  
                  <h3 className="font-serif text-lg md:text-xl font-bold tracking-wide text-ivory group-hover:text-gold-200 duration-300">
                    {prog.title}
                  </h3>
                  
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light mt-1">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 my-4 py-3 border-y border-white/5" id={`prog-metadata-${prog.id}`}>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <p className="text-[9px] text-charcoal-500 uppercase font-mono">Duration</p>
                        <p className="text-[11px] font-sans text-ivory font-light">{prog.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <p className="text-[9px] text-charcoal-500 uppercase font-mono">Date Commencement</p>
                        <p className="text-[11px] font-sans text-ivory font-light">{prog.commencing}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => setActiveCourse(prog)}
                    className="flex-1 py-3 px-4 border border-gold-500/15 hover:border-gold-500/50 bg-charcoal-950 text-gold-300 hover:text-gold-100 transition-all font-mono text-[10px] uppercase tracking-widest font-semibold cursor-pointer text-center"
                    id={`btn-syllabus-${prog.id}`}
                  >
                    View Full Syllabus
                  </button>
                  <button
                    onClick={() => {
                      setActiveCourse(prog);
                      // Slight timeout to scroll down inside model
                    }}
                    className="py-3 px-5 bg-gold-400 text-charcoal-950 hover:bg-gold-300 transition-colors font-sans text-[10px] uppercase tracking-[0.15em] font-bold cursor-pointer"
                    id={`btn-join-${prog.id}`}
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Batch Interest Highlight banner */}
        <div 
          className="mt-16 p-8 bg-charcoal-900 border border-gold-300/10 text-center max-w-4xl mx-auto rounded-none relative overflow-hidden"
          id="academy-waitlist-banner"
        >
          <div className="absolute inset-0 bg-gold-500/5 opacity-40 pointer-events-none" />
          <h4 className="font-serif text-lg md:text-xl font-bold text-ivory tracking-wide mb-2">Can't Find Your Ideal Schedule?</h4>
          <p className="text-xs text-charcoal-300 max-w-2xl mx-auto leading-relaxed font-light mb-6">
            We periodically organize targeted masterclasses on Advanced ERP Planning, Quality Assurance AQL standards, and SCM log sheet analytics. Express your academic interest beforehand to be prioritised.
          </p>
          <button
            onClick={() => {
              // Scroll directly to contact consultation requesting custom education
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-transparent border border-gold-400 text-gold-200 hover:bg-gold-400 hover:text-charcoal-950 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
            id="academy-contact-redirect"
          >
            Submit Custom Interest Request
          </button>
        </div>

        {/* Interactive Detailed Syllabus Details Modal Overlay */}
        {activeCourse && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            id="syllabus-overlay-modal"
          >
            <div className="bg-charcoal-900 border border-gold-300/20 max-w-3xl w-full p-8 md:p-10 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Corner Design Close Buttons */}
              <button
                onClick={() => {
                  setActiveCourse(null);
                  setWaitlistName('');
                  setWaitlistEmail('');
                  setWaitlistPhone('');
                  setWaitlistOrg('');
                  setCopiedTemplate(false);
                }}
                className="absolute top-6 right-6 text-charcoal-400 hover:text-gold-200 p-2 font-mono text-sm cursor-pointer"
                id="modal-close-trigger"
              >
                [ CLOSE X ]
              </button>

              <div className="flex flex-col gap-6" id="modal-content">
                <div>
                  <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest">{activeCourse.category} program</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-ivory tracking-wider mt-1">{activeCourse.title}</h3>
                  <p className="text-xs text-[#a1a1aa] font-mono mt-1">Commences: {activeCourse.commencing} | {activeCourse.duration}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 border-y border-white/5" id="modal-syllabus-details">
                  {/* Left list: Key Target Competences */}
                  <div>
                    <h4 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Core Competencies
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {activeCourse.objectives.map((obj, i) => (
                        <li key={i} className="flex gap-2 text-xs text-charcoal-300">
                          <span className="text-gold-400 font-mono font-bold shrink-0">✓</span>
                          <span className="font-light leading-normal">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right list: Weekly Syllabus Modules */}
                  <div>
                    <h4 className="font-serif text-xs uppercase text-gold-300 tracking-widest font-bold mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Syllabus Breakdown
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {activeCourse.syllabus.map((syl, i) => (
                        <li key={i} className="flex gap-2 text-xs text-charcoal-300 align-top">
                          <span className="text-gold-500 font-mono shrink-0">0{i + 1}.</span>
                          <span className="font-light leading-snug">{syl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submitting form waitlist */}
                <div className="p-6 bg-charcoal-950 border border-gold-300/10">
                  <h4 className="font-serif text-sm font-bold text-ivory tracking-wider uppercase mb-3 text-center">
                    Enter Program Waitlist — Priority Queue
                  </h4>
                  <p className="text-[11px] text-[#a1a1aa] leading-loose font-mono font-light text-center mb-4">
                    Waitlists are validated manually. Fill your details to pre-compile your custom application template. No fees required.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4" id="waitlist-inputs">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={waitlistName}
                      onChange={(e) => setWaitlistName(e.target.value)}
                      className="bg-charcoal-900 border border-white/5 p-3 text-xs placeholder:text-charcoal-500 text-ivory focus:border-gold-400 outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Active Email Address"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="bg-charcoal-900 border border-white/5 p-3 text-xs placeholder:text-charcoal-500 text-ivory focus:border-gold-400 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile (+ Country Code)"
                      value={waitlistPhone}
                      onChange={(e) => setWaitlistPhone(e.target.value)}
                      className="bg-charcoal-900 border border-white/5 p-3 text-xs placeholder:text-charcoal-500 text-ivory focus:border-gold-400 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Boutique Name / Factory / Designer / Student"
                      value={waitlistOrg}
                      onChange={(e) => setWaitlistOrg(e.target.value)}
                      className="bg-charcoal-900 border border-white/5 p-3 text-xs placeholder:text-charcoal-500 text-ivory focus:border-gold-400 outline-none"
                    />
                  </div>

                  {/* Submission Routes */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5 mt-2 justify-center" id="waitlist-actions">
                    <button
                      onClick={() => triggerEnrollmentAction('whatsapp', activeCourse.title)}
                      className="flex-1 py-3 px-4 bg-emerald-900/30 hover:bg-emerald-900/50 border border-emerald-500/20 text-emerald-100 font-sans text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit via WhatsApp</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => triggerEnrollmentAction('email', activeCourse.title)}
                      className="flex-1 py-3 px-4 bg-charcoal-900 hover:bg-charcoal-800 border border-gold-300/20 text-gold-300 font-sans text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit via Email</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopyTemplate(activeCourse.title)}
                      className="py-3 px-4 bg-charcoal-900 hover:bg-charcoal-800 border border-white/5 text-[#a1a1aa] font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                      title="Copy pre-compiled text draft"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedTemplate ? 'Copied Draft!' : 'Copy Draft'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
