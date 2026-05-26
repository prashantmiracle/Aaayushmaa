import { useState, FormEvent } from 'react';
import { RESOURCE_ITEMS } from '../data';
import { ResourceItem } from '../types';
import { Download, FileText, FileSpreadsheet, Key, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail || !selectedResource) return;

    // Simulate pre-compilation
    const text = `Hello AAYUSHMAA® Team,\n\nI am requesting direct download access to the premium library asset:\n\nResource Name: ${selectedResource.title}\nID: ${selectedResource.id}\n\nCandidate Profile:\n- Requestor: ${leadName}\n- Email: ${leadEmail}\n\nPlease share the download path or password credentials.\n\nThank you!`;
    const mailSubject = encodeURIComponent(`Resource Access Request: ${selectedResource.title}`);
    const mailBody = encodeURIComponent(text);

    // Open mail client
    window.open(`mailto:design@studioramaonline.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
    
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setSelectedResource(null);
      setLeadName('');
      setLeadEmail('');
    }, 4000);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Template': return <FileSpreadsheet className="w-5 h-5 text-gold-400" />;
      case 'Cheat Sheet': return <Key className="w-5 h-5 text-gold-400" />;
      case 'Industry Guide': return <FileText className="w-5 h-5 text-gold-400" />;
      default: return <FileText className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="resources" className="py-24 md:py-32 relative bg-charcoal-900 subtle-grain">
      {/* Decorative Gradient Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6" id="resources-headers">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-[0.25em] font-semibold">FREE DIGITAL VAULT & UTILITIES</span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide text-ivory">Industry Resources</h2>
            <div className="h-[1px] w-24 bg-gold-400 mt-2" />
          </div>
          <p className="max-w-md text-charcoal-350 text-xs md:text-sm text-charcoal-300 font-light leading-relaxed">
            Acquire functional blueprints used in boutique costings, high-volume production cutting boards, design AI prompting manuals, and entry terminology guides.
          </p>
        </div>

        {/* Dynamic Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="resources-grid-cards">
          {RESOURCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group p-6 bg-charcoal-950/80 border border-white/5 hover:border-gold-300/30 transition-all duration-350 flex flex-col justify-between"
              id={`resource-card-${item.id}`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between" id={`res-icon-${item.id}`}>
                  <div className="p-3 bg-gold-500/5 border border-gold-300/10 text-gold-400">
                    {getIconForType(item.type)}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#a1a1aa] bg-charcoal-900 px-2 py-1">
                    {item.type}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-sm md:text-base font-bold text-ivory tracking-wide leading-snug group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[9px] text-charcoal-500">
                    Downloads requested: {item.downloadCount} | {item.fileSize}
                  </span>
                </div>

                <p className="text-[11px] text-charcoal-300 leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5" id={`res-action-${item.id}`}>
                <button
                  onClick={() => setSelectedResource(item)}
                  className="w-full py-2.5 bg-charcoal-900 border border-gold-300/15 group-hover:bg-gold-400 group-hover:text-charcoal-950 font-mono text-[9px] uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-gold-300 group-hover:border-gold-400"
                >
                  <Download className="w-3 h-3 group-hover:translate-y-0.5 duration-300" />
                  <span>Request Full Access</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Modal Gate overlay */}
        {selectedResource && (
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            id="resource-modal-gate"
          >
            <div className="bg-charcoal-900 border border-gold-300/20 max-w-md w-full p-8 relative shadow-2xl">
              <button
                onClick={() => {
                  setSelectedResource(null);
                  setDownloadSuccess(false);
                  setLeadName('');
                  setLeadEmail('');
                }}
                className="absolute top-6 right-6 text-charcoal-400 hover:text-gold-300 font-mono text-xs cursor-pointer"
                id="resource-modal-close"
              >
                [ CLOSE ]
              </button>

              {downloadSuccess ? (
                <div className="text-center py-6 flex flex-col items-center gap-4 animate-fade-in" id="res-success">
                  <div className="w-12 h-12 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-ivory tracking-wide">Inquiry Pre-Compiled!</h4>
                    <p className="text-xs text-charcoal-300 max-w-sm mx-auto leading-relaxed font-light mt-1">
                      Our static server pre-packaged your interest. A download brochure request is being dispatched to your email handler. Please hit 'Send' in the default mailbox that was loaded.
                    </p>
                  </div>
                  <span className="font-mono text-[9px] text-[#a1a1aa] uppercase tracking-widest bg-charcoal-950 px-3 py-1">
                    Closing dialog tracker...
                  </span>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="flex flex-col gap-5" id="res-inquiry-form">
                  <div>
                    <span className="font-mono text-[9px] text-gold-300 uppercase tracking-widest">Asset Category: {selectedResource.type}</span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-ivory tracking-wide mt-1">
                      {selectedResource.title}
                    </h3>
                    <p className="text-[11px] text-[#a1a1aa] leading-relaxed mt-1 font-sans font-light">
                      This masterclass file contains editable structures. Provide credentials to pre-compile your direct FTP / drive password key.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3" id="res-lead-fields">
                    <div>
                      <label className="text-[9px] font-mono text-charcoal-400 uppercase tracking-wider block mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Prashant"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-mono text-charcoal-400 uppercase tracking-wider block mb-1">Primary Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. prashant@domain.com"
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full bg-charcoal-950 border border-white/5 p-3 text-xs text-ivory placeholder:text-charcoal-600 focus:border-gold-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-gold-400/5 p-3 border border-gold-300/10 text-[#d4d4d8] rounded-none">
                    <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-[10px] leading-snug font-light font-mono">
                      No databases are used. Pressing below will launch your default email client with your interest draft.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold text-center flex items-center justify-center gap-1.5 cursor-pointer hover:from-gold-500 hover:to-gold-300"
                    id="res-modal-submit-btn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Compile & Send Download Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
