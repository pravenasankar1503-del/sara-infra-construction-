import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { SaraLogo } from './SaraLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051326] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <SaraLogo size="lg" variant="light" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Sara Infra Construction is a premier general contractor and structural engineering enterprise specializing in high-end bespoke residential villas, landmark corporate towers, and precision modern renovations.
            </p>

            {/* Principal Leadership / CEO */}
            <div className="p-3 bg-white/5 rounded-lg border border-slate-800 max-w-sm">
              <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
                CEO
              </div>
              <div className="text-base font-extrabold text-white font-['Outfit'] mt-0.5">
                P. Sankar
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <span>Direct Contact:</span>
                <a href="tel:9790082198" className="text-[#C5A059] font-semibold hover:underline">
                  +91 97900 82198
                </a>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-4 text-xs">
              <a
                href="tel:9790082198"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#C5A059] text-[#092347] font-bold rounded text-xs hover:bg-[#b59146] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: 9790082198</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Specialist Services
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Residential Luxury Villas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial High-Rises
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Renovations
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Turnkey Cost Estimations
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  BIM 3D Modeling (LOD 400)
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio & Case Studies */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Case Studies
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Azure Horizon Villa (ECR)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Nexus Commercial Tower
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  The Ironworks Glass Retrofit
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Serenity Ridge Estate
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Office & Desk */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Head Office
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span>M408, Oxygen by Urban Tree, 29 Pushkin Street, Perumbakkam, Chennai</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Oxygen+by+Urban+Tree+Perumbakkam+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[11px] text-[#C5A059] hover:underline mt-0.5"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:9790082198" className="hover:text-white font-semibold">
                  +91 97900 82198
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:sarainfraconstruction@gmail.com" className="hover:text-white transition-colors">
                  sarainfraconstruction@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Mon – Sun: 08:30 – 19:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline divider & Bottom Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Sara Infra Construction. All rights reserved.</span>
            <span>·</span>
            <span className="text-slate-300 font-semibold">CEO: P. Sankar</span>
            <span>·</span>
            <span className="text-slate-400">Working Hours: Monday to Sunday (08:30 – 19:30)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
