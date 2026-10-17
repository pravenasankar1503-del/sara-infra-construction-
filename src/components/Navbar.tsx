import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Check, Copy } from 'lucide-react';
import { SaraLogo } from './SaraLogo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyPhone = (e: React.MouseEvent) => {
    // If clicked on desktop without calling protocol
    navigator.clipboard?.writeText('9790082198');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Pure Typographic Brand Wordmark & Leadership */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#"
                className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB] rounded-sm group"
                aria-label="Sara Infra Construction Home"
              >
                <SaraLogo size="md" variant="brand" />
              </a>
              <div className="hidden xl:flex flex-col border-l border-slate-200 pl-3 leading-tight">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                  CEO
                </span>
                <span className="text-xs font-bold text-[#092347]">
                  P. Sankar
                </span>
              </div>
            </div>

            {/* Zone 2: 4-5 Clean Single-Line Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-700">
              <a
                href="#services"
                className="whitespace-nowrap shrink-0 hover:text-[#092347] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                Services
              </a>
              <a
                href="#projects"
                className="whitespace-nowrap shrink-0 hover:text-[#092347] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                Landmark Projects
              </a>
              <a
                href="#methodology"
                className="whitespace-nowrap shrink-0 hover:text-[#092347] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                Engineering Process
              </a>
              <a
                href="#estimator"
                className="whitespace-nowrap shrink-0 hover:text-[#092347] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                Cost Estimator
              </a>
              <a
                href="#contact"
                className="whitespace-nowrap shrink-0 hover:text-[#092347] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action - "Call: 9790082198" as specified in prompt */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative group">
                <a
                  href="tel:9790082198"
                  className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold tracking-tight text-white bg-[#092347] hover:bg-[#071830] active:scale-[0.98] transition-all rounded-md shadow-sm border border-[#0F356B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                >
                  <span className="p-1 rounded-sm bg-[#C5A059] text-[#092347]">
                    <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span className="font-['Outfit'] font-bold tracking-wide">
                    Call: 9790082198
                  </span>
                </a>

                {/* Quick copy tooltip on hover for desktop user convenience */}
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone number to clipboard"
                  className="hidden md:flex absolute -bottom-7 right-0 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-slate-500 hover:text-slate-800 items-center gap-1 bg-white px-2 py-0.5 rounded shadow-xs border border-slate-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#092347] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#092347] rounded-md"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
              <SaraLogo size="sm" variant="brand" />
              <div className="text-right">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                  CEO
                </span>
                <span className="block text-xs font-bold text-[#092347]">
                  P. Sankar
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base font-semibold text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#092347]"
              >
                Services (Residential, Commercial, Renovation)
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#092347]"
              >
                Landmark Projects
              </a>
              <a
                href="#methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#092347]"
              >
                Engineering Process
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#092347]"
              >
                Cost Estimator
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#092347]"
              >
                Contact & Site Office
              </a>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="tel:9790082198"
                  className="flex items-center justify-center gap-2 w-full py-3 text-white bg-[#092347] font-bold rounded-md"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  Direct Line: 9790082198
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating toast notification when phone copied */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#092347] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 border border-[#C5A059]/40 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-[#C5A059]" />
          <span>Phone number (9790082198) copied to clipboard</span>
        </div>
      )}
    </>
  );
};
