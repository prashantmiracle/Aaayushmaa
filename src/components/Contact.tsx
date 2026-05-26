import { useState, FormEvent } from 'react';
import { FAQS } from '../data';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, ArrowUpRight, Check } from 'lucide-react';

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Strategic Consultation Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formType, setFormType] = useState<'Individual' | 'Corporate'>('Individual');
  const [formInterest, setFormInterest] = useState('Fashion Technology Academy');
  const [formDetails, setFormDetails] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    // Compile text body on the fly
    const emailSubject = `Inquiry: ${formInterest} Consultation — ${formName}`;
    const emailBody = `AAYUSHMAA® STRATEGIC CONSULTATION APPLICATION\n==========================================\n\nCandidate Core Profile:\n- Requestor Name: ${formName}\n- Primary Contact: ${formEmail}\n- Phone/WhatsApp: ${formPhone || 'Not provided'}\n- Company/Role: ${formOrg || 'Independent Candidate'}\n- Application Type: ${formType}\n\nArea of Core Focus:\n- Selected Route: ${formInterest}\n\nAdditional Details / Operational Lapses:\n- Notes: ${formDetails || 'None provided'}\n\n---------------------------------------\nThis application was preloaded staticly via aayushmaa.in V1 Launch form.\nPlease review and schedule an administrative call.`;

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // Launch email integration
    window.open(`mailto:design@studioramaonline.com?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
    
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormOrg('');
      setFormDetails('');
    }, 5000);
  };

  const launchDirectWhatsAppCompact = () => {
    const defaultText = `Hello AAYUSHMAA® Team,\n\nI am hoping to schedule a short guidance chat with Prashant Kumar.\n\nMy Name: ${formName || 'Interested Buyer'}\nInterest Area: ${formInterest}\n\nPlease share coordinate slots.`;
    window.open(`https://wa.me/919451121115?text=${encodeURIComponent(defaultText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-charcoal-950 subtle-grain">
      {/* Light highlights */}
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contact/FAQ Headers */}
        <div className="flex flex-col gap-3 mb-16 text-center" id="contact-headers">
          <span className="font-mono text-xs text-gold-400 uppercase tracking-[0.25em] font-semibold font-bold">GET IN TOUCH OR ASK QUESTIONS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">Contact & Core FAQ</h2>
          <div className="h-[2px] w-20 bg-gold-400 mx-auto mt-2" />
          <p className="max-w-xl mx-auto text-xs md:text-sm text-charcoal-300 font-light mt-2 leading-relaxed">
            Ready to secure a space or transform your factory assembly operations? Apply for a diagnostic booking below or browse frequent industry questions.
          </p>
        </div>

        {/* Dynamic Accordion FAQ + Contact Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" id="contact-faq-grid">
          
          {/* Left Column: Interactive Technical FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-5" id="contact-faq-accordions">
            <h4 className="font-serif text-base md:text-lg font-bold text-ivory tracking-wide mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-gold-400" />
              Frequently Answered Concerns
            </h4>

            <div className="flex flex-col gap-3" id="accordion-desk">
              {FAQS.map((faq, idx) => {
                const isSelected = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-charcoal-900 border border-white/5 hover:border-gold-300/10 transition-colors"
                    id={`faq-accordion-item-${idx}`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    >
                      <span className="font-serif text-xs md:text-sm font-semibold text-gold-100 tracking-wide pr-4">
                        {faq.q}
                      </span>
                      <span className="font-mono text-xs text-gold-400 shrink-0">
                        {isSelected ? '[-]' : '[+]'}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isSelected ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[11px] md:text-xs text-charcoal-300 leading-relaxed font-sans font-light border-t border-white/5 pt-3">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Coordinates card */}
            <div className="p-6 bg-charcoal-900/40 border border-[#b2854b]/15 rounded-none mt-4 flex flex-col gap-4">
              <p className="font-serif text-xs uppercase tracking-wider text-gold-300 font-bold">AAYUSHMAA® Operations Desk</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono font-light text-charcoal-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <a href="mailto:design@studioramaonline.com" className="hover:text-gold-200">
                    design@studioramaonline.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <a href="https://wa.me/919451121115" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200">
                    +91 94511 21115 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Deployment Server: Hostinger static</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-gold-400" />
                  <span>Website URL: aayushmaa.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form Area */}
          <div className="lg:col-span-6 p-8 bg-charcoal-900 border border-gold-300/10 shadow-2xl relative" id="contact-booking-form">
            <h4 className="font-serif text-base md:text-lg font-bold text-ivory tracking-wide mb-2 uppercase">
              Application for Strategic Appraisal
            </h4>
            <p className="text-xs text-charcoal-450 text-[#a1a1aa] leading-relaxed mb-6 font-mono font-light">
              Submit your coordinate credentials below to preloaded an executable draft.
            </p>

            {formSuccess ? (
              <div className="text-center py-12 flex flex-col items-center gap-4 animate-fade-in" id="booking-success">
                <div className="w-14 h-14 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 font-extrabold" />
                </div>
                <div>
                  <h5 className="font-serif text-base md:text-lg font-bold text-ivory tracking-wide">Application Pre-packaged!</h5>
                  <p className="text-xs text-charcoal-300 max-w-sm mx-auto leading-relaxed mt-1 font-light">
                    The local client formatted your target request perfectly. Check your default loaded mailbox and click 'Send' to dispatch.
                  </p>
                </div>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-charcoal-950 border border-white/5 text-gold-400 text-xs font-mono uppercase tracking-widest hover:text-gold-200 duration-300"
                >
                  Write Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4" id="consultation-form-action">
                
                {/* Form type selection buttons */}
                <div className="grid grid-cols-2 gap-2" id="form-type-selectors">
                  <button
                    type="button"
                    onClick={() => setFormType('Individual')}
                    className={`py-2 p-3 font-mono text-[10px] uppercase tracking-widest border transition-all cursor-pointer ${
                      formType === 'Individual'
                        ? 'bg-gold-500/10 border-gold-400 text-gold-300'
                        : 'bg-transparent border-white/5 text-charcoal-400 hover:text-[#d4d4d8]'
                    }`}
                  >
                    Individual Careers / Students
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('Corporate')}
                    className={`py-2 p-3 font-mono text-[10px] uppercase tracking-widest border transition-all cursor-pointer ${
                      formType === 'Corporate'
                        ? 'bg-gold-500/10 border-gold-400 text-gold-300'
                        : 'bg-transparent border-white/5 text-charcoal-400 hover:text-[#d4d4d8]'
                    }`}
                  >
                    Fashion Boutiques / Factories
                  </button>
                </div>

                {/* Name & Contact fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Prashant Kumar"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">Email Coordinates *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. founder@brand.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">WhatsApp Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 94511 21115"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">Company / Organization / College Name</label>
                    <input
                      type="text"
                      placeholder="e.g. AAYUSHMAA Boutique"
                      value={formOrg}
                      onChange={(e) => setFormOrg(e.target.value)}
                      className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                {/* Scope Selection */}
                <div>
                  <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">Appraisal Intent Track</label>
                  <select
                    value={formInterest}
                    onChange={(e) => setFormInterest(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory focus:border-gold-400 outline-none cursor-pointer"
                  >
                    <option value="Fashion Technology Academy Core">Academy: Fashion Technology, Merchandising & ERP</option>
                    <option value="Fashion Generative AI Course">Academy: Modern Generative AI in Fashion</option>
                    <option value="Operational Diagnostics Turnaround">Consulting: Factory Turnaround & Line Balancing</option>
                    <option value="Enterprise ERP transition">Consulting: Apparel ERP & Database Integration</option>
                    <option value="Bespoke Portfolio Review">Mentorship: Individual Career Guidance & Portfolio review</option>
                  </select>
                </div>

                {/* Detailed comments */}
                <div>
                  <label className="text-[9px] font-mono text-charcoal-450 text-[#a1a1aa] uppercase tracking-wider block mb-1">Operational Concerns / Narrative Request</label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief outline of active sewing errors, bottlenecks, material leaks, or career questions..."
                    value={formDetails}
                    onChange={(e) => setFormDetails(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none resize-none"
                  />
                </div>

                {/* Action Buttons: Standard Mail + Quick WhatsApp compilation */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-4" id="form-booking-submits">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center gap-2 cursor-pointer"
                    id="booking-submit-mail"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Compile & Email Application</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={launchDirectWhatsAppCompact}
                    className="py-4 px-6 bg-emerald-900/35 hover:bg-emerald-900/50 text-emerald-100 border border-emerald-500/25 font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    id="booking-submit-whatsapp"
                    title="Send pre-filled quick note on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Draft</span>
                  </button>
                </div>

                <div className="text-center mt-2">
                  <span className="text-[10px] text-charcoal-500 font-mono italic">AAYUSHMAA® Luxury client architecture — 100% static, non-tracking</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
