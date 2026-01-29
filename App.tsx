
import React, { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import EvidenceCard from './components/EvidenceCard';
import Timeline from './components/Timeline';
import RelicGallery from './components/RelicGallery';
import AIInvestigator from './components/AIInvestigator';
import EvidenceModal from './components/EvidenceModal';
import { EVIDENCE_DATA } from './constants';
import { Section, Evidence } from './types';

const App: React.FC = () => {
  const [selectedEvidence, setSelectedEvidence] = useState<Evidence | null>(null);
  const [pendingQuery, setPendingQuery] = useState<string | null>(null);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalyze = (item: Evidence) => {
    setSelectedEvidence(item);
  };

  const handleAskInvestigator = (query: string) => {
    setSelectedEvidence(null);
    setPendingQuery(query);
    scrollToSection(Section.AI_ORACLE);
  };

  return (
    <div className="min-h-screen relative">
      <Navigation onNavigate={scrollToSection} />

      {/* Hero Section */}
      <header id={Section.HERO} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="https://historyfacts.com/wp-content/uploads/sites/9/2024/11/1_HF_Freemasons-Secrets_initiation.jpg?w=640" 
            alt="World Fair Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_15s_ease-in-out_infinite]"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <div className="inline-block border border-amber-500/30 px-4 py-1 rounded-full mb-8 animate-pulse">
            <span className="text-amber-500 uppercase tracking-[0.4em] font-bold text-[10px]">Suppressed Chronological Inquiry</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            The Lost <br /> <span className="text-amber-600 italic">Byzantine</span> Kingdom
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            An investigation into the 1,000-year reign from Nero to 1776, the "I" prefix era, and the architectural "Reset" of the Little Season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection(Section.EVIDENCE)}
              className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-all w-full sm:w-auto shadow-xl shadow-amber-900/40"
            >
              Examine Evidence
            </button>
            <button 
              onClick={() => scrollToSection(Section.AI_ORACLE)}
              className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Ask The Investigator
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[8px] uppercase tracking-[0.5em] text-slate-400">Scroll to Decrypt Archive</span>
          <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </header>

      {/* Evidence Grid */}
      <section id={Section.EVIDENCE} className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <h2 className="text-4xl font-serif text-white">The Great Concealment</h2>
          </div>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            The World Fairs were not built to show progress; they were built to display the ruins of the Kingdom before their systematic demolition. Examine the photographic proof of Tartaria and the "I" prefix records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVIDENCE_DATA.map((item) => (
            <EvidenceCard 
              key={item.id} 
              item={item} 
              onAnalyze={handleAnalyze}
            />
          ))}
        </div>
      </section>

      <RelicGallery />

      <Timeline />
      
      <div className="py-24 px-6 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
            <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif text-white mb-6">Satan's Little Season</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 italic">
            "And he shall go out to deceive the nations which are in the four quarters of the earth, Gog and Magog, to gather them together to battle..."
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            We live in an age of total redaction. The ruins of the Holy Kingdom are labeled as 'Victorian' or 'Roman' to hide the fact that the 1,000 years of peace concluded at the 1776 pivot. We are currently navigating the 'Little Season'—the era of the final deception.
          </p>
        </div>
      </div>

      <AIInvestigator initialQuery={pendingQuery} onQueryHandled={() => setPendingQuery(null)} />

      {/* Evidence Detailed Modal */}
      <EvidenceModal 
        item={selectedEvidence} 
        onClose={() => setSelectedEvidence(null)} 
        onAskAI={handleAskInvestigator}
      />

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/10" />
            <div className="font-serif text-3xl tracking-[0.3em] text-amber-600 uppercase">Chronos</div>
            <div className="w-12 h-px bg-white/10" />
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] text-center max-w-md">
            preserving the fragments of a truth they tried to burn.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-4">
            {['Archives', 'Maps', 'Relics', 'Oracle', 'Protocol'].map(link => (
              <a key={link} href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-[10px] uppercase tracking-widest font-bold">
                {link}
              </a>
            ))}
          </div>
          <div className="mt-12 text-slate-800 text-[9px] uppercase tracking-[0.2em] font-mono">
            Encrypted Session: {Math.random().toString(16).slice(2, 10).toUpperCase()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
