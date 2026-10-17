import React from 'react';
import {
  ArrowDown,
  ShieldCheck,
  Award,
  Ruler,
  ArrowRight,
  Eye,
  PhoneCall
} from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onExploreServices?: () => void;
  onRequestQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onRequestQuote }) => {
  return (
    <>
      <section className="relative min-h-[94vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#071930]">
        {/* Background Hero Transition Photography (Vividly Visible) */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroTransition}
            alt="Sara Infra Construction - Modern luxury residential villa seamlessly transitioning into sleek commercial high-rise building"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Resilient fallback in case of bundling or path resolution issues
              const target = e.target as HTMLImageElement;
              if (target.src !== window.location.origin + '/images/hero_transition_1791731213825.jpg') {
                target.src = '/images/hero_transition_1791731213825.jpg';
              }
            }}
            className="w-full h-full object-cover transition-all duration-1000 ease-out brightness-[0.92] contrast-[1.05] scale-100 object-center"
          />

          {/* Balanced Architectural Contrast Scrim: Photo remains crisp & vividly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051326] via-[#051326]/35 to-[#071A33]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051326]/60 via-transparent to-[#051326]/60 pointer-events-none" />

          {/* Subtle architectural blueprint grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        {/* Top Architectural Subtitle */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-sm">
              <span className="text-white font-bold bg-[#092347]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C5A059]/40">
                CEO: P. Sankar
              </span>
              <span className="text-slate-400 font-normal">/</span>
              <span>Premier Engineering & Contracting</span>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-slate-200">Open Mon – Sun</span>
            </div>
          </div>
        </div>

        {/* Center Hero Focal Statement */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-10 sm:py-16">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 bg-black/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span>Sara Infra Construction</span>
            <span className="w-6 h-[1px] bg-[#C5A059]" />
          </div>

          {/* The Exact User Specification: "Building Excellence" */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight font-['Outfit'] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] text-balance">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#D4AF37]">Excellence</span>
          </h1>

          {/* Refined Descriptive Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] bg-black/20 backdrop-blur-[2px] p-2 rounded-lg">
            Seamlessly bridging the art of ultra-luxury residential villas and landmark commercial high-rises with surgical engineering precision, turnkey craftsmanship, and timeless durability.
          </p>

          {/* Principal Leadership Attribution */}
          <div className="mt-4 inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm text-slate-200 shadow-md">
            <span className="text-[#C5A059] font-bold uppercase tracking-wider text-[11px]">CEO:</span>
            <span className="text-white font-extrabold tracking-wide font-['Outfit']">P. Sankar</span>
            <span className="text-slate-400">|</span>
            <a href="tel:9790082198" className="text-[#C5A059] hover:underline font-semibold text-xs">
              Direct: 9790082198
            </a>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="#services"
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#b59146] text-[#092347] font-bold text-sm tracking-wide rounded-md transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span>Explore Three Core Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:9790082198"
              className="px-7 py-3.5 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white font-semibold text-sm tracking-wide rounded-md transition-all border border-white/30 hover:border-white/60 whitespace-nowrap shrink-0 flex items-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              <span>Call: 9790082198</span>
            </a>
          </div>
        </div>

        {/* Bottom Horizontal KPI & Trust Anchor Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#051326]/90 backdrop-blur-md rounded-lg border border-slate-700/60 shadow-2xl text-white">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded bg-white/10 text-[#C5A059] shrink-0">
                <Award className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-['Outfit'] tabular-nums tracking-tight text-white">
                  18+
                </div>
                <div className="text-xs text-slate-300 font-medium tracking-wide">
                  Years of Engineering
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded bg-white/10 text-[#C5A059] shrink-0">
                <Ruler className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-['Outfit'] tabular-nums tracking-tight text-white">
                  120+
                </div>
                <div className="text-xs text-slate-300 font-medium tracking-wide">
                  Completed Landmarks
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded bg-white/10 text-[#C5A059] shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-['Outfit'] tabular-nums tracking-tight text-white">
                  100%
                </div>
                <div className="text-xs text-slate-300 font-medium tracking-wide">
                  Quality & Safety Audit
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded bg-white/10 text-[#C5A059] shrink-0">
                <Eye className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-['Outfit'] tabular-nums tracking-tight text-white">
                  Turnkey
                </div>
                <div className="text-xs text-slate-300 font-medium tracking-wide">
                  Concept to Handover
                </div>
              </div>
            </div>
          </div>

          {/* Scroll prompt cue */}
          <div className="flex justify-center mt-5">
            <a
              href="#services"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to services"
            >
              <span>Discover Our Capabilities</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C5A059]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

