import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Maximize2,
  Calendar,
  Layers,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { IMAGES } from '../assets/images';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'renovation'>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<any | null>(null);

  const services = [
    {
      id: 'residential',
      title: 'Residential',
      subtitle: 'Bespoke Luxury Villas & Private Estates',
      tagline: 'Sculpted for sanctuary, engineered for generations.',
      image: IMAGES.serviceResidential,
      scale: '4,500 – 25,000+ sq.ft.',
      timeline: '8 – 14 Months',
      concreteGrade: 'M35 / M40 High-Performance Grade',
      // Minimalist Architectural Icon (Geometric Villa Cantilever)
      iconSvg: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 stroke-current stroke-[1.75]">
          <path d="M3 13L16 4L29 13" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 11V26C6 26.5523 6.44772 27 7 27H25C25.5523 27 26 26.5523 26 26V11" />
          <path d="M12 27V16H20V27" />
          <path d="M10 11H22" strokeDasharray="2 2" />
        </svg>
      ),
      description:
        'End-to-end luxury residential construction delivering architectural cantilevered villas, private waterfront estates, and climate-responsive smart sanctuaries with pristine materiality.',
      capabilities: [
        'Post-tensioned cantilever concrete slabs & floor-to-ceiling glass',
        'Infinity edge pools, subterranean garages & climate wine cellars',
        'Acoustically isolated private theaters & automated smart shading',
        'Custom Italian marble stonework and hand-finished teak facades',
      ],
      standards: ['Zero-sag engineering', 'ASTM waterproof membrane', 'Solar-ready grid'],
    },
    {
      id: 'commercial',
      title: 'Commercial',
      subtitle: 'Corporate High-Rises & Tech Campuses',
      tagline: 'Monumental corporate landmarks built to stand the test of time.',
      image: IMAGES.serviceCommercial,
      scale: '25,000 – 350,000+ sq.ft.',
      timeline: '14 – 24 Months',
      concreteGrade: 'M50 / M60 High-Rise Structural Composite',
      // Minimalist Architectural Icon (Geometric Commercial Skyscraper / Steel Grid)
      iconSvg: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 stroke-current stroke-[1.75]">
          <rect x="5" y="4" width="22" height="24" rx="1" />
          <line x1="11" y1="9" x2="15" y2="9" />
          <line x1="17" y1="9" x2="21" y2="9" />
          <line x1="11" y1="14" x2="15" y2="14" />
          <line x1="17" y1="14" x2="21" y2="14" />
          <line x1="11" y1="19" x2="15" y2="19" />
          <line x1="17" y1="19" x2="21" y2="19" />
          <path d="M13 28V24H19V28" />
        </svg>
      ),
      description:
        'Industrial-grade structural engineering for high-density corporate offices, retail complexes, and institutional facilities requiring rapid slip-form execution and LEED compliance.',
      capabilities: [
        'Precision unitized glass curtain wall systems & seismic dampening',
        'Spacious column-free floor plates with composite steel trusses',
        'LEED Gold & Platinum sustainable HVAC & graywater recycling',
        'High-speed vertical transportation integration & BMS automation',
      ],
      standards: ['NFPA fire compliance', 'Grade-A wind tunnel tested', 'Slip-form pacing'],
    },
    {
      id: 'renovation',
      title: 'Renovation',
      subtitle: 'Structural Retrofitting & Heritage Expansions',
      tagline: 'Breathing renewed structural integrity into existing structures.',
      image: IMAGES.serviceRenovation,
      scale: 'Adaptive & Turnkey Remodels',
      timeline: '3 – 9 Months',
      concreteGrade: 'Micro-Concrete Jacketing & Carbon Fiber Wrap',
      // Minimalist Architectural Icon (Restoration Caliper / Drafting Compass)
      iconSvg: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 stroke-current stroke-[1.75]">
          <circle cx="16" cy="7" r="3" />
          <path d="M14 9.5L6 26" strokeLinecap="round" />
          <path d="M18 9.5L26 26" strokeLinecap="round" />
          <path d="M9 19H23" strokeDasharray="3 3" />
          <circle cx="16" cy="19" r="1.5" fill="currentColor" />
        </svg>
      ),
      description:
        'Surgical structural reinforcement, heritage facade conservation, and modern architectural cantilever additions executed with zero damage to underlying historic foundations.',
      capabilities: [
        'Carbon fiber (CFRP) wrapping & foundation micropile underpinning',
        'Historic masonry preservation with steel-and-glass hybrid additions',
        'Full mechanical, electrical, and plumbing (MEP) infrastructure overhaul',
        'Acoustic decibel suppression and thermal envelope modernization',
      ],
      standards: ['Structural audit verified', 'Non-destructive testing (NDT)', 'Vibration damping'],
    },
  ];

  const handleConsult = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-20">
      {/* Decorative architectural hairline accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
              <span>Core Specializations</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">Uncompromising Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092347] tracking-tight font-['Outfit']">
              Three Pillars of Engineering
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm sm:text-base font-normal leading-relaxed">
            Sara Infra Construction operates dedicated specialist divisions tailored to the exact rigorous standards of residential, commercial, and restorative architecture.
          </p>
        </div>

        {/* The Exact User Specification: 3 Organized Service Sections Side-by-Side: "Residential", "Commercial", "Renovation" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-200 hover:border-[#092347]/40 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${service.title} construction by Sara Infra`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (service.id === 'residential') target.src = '/images/residential_villa_night_1791816705034.jpg';
                      if (service.id === 'commercial') target.src = '/images/service_commercial_1791731244556.jpg';
                      if (service.id === 'renovation') target.src = '/images/simple_house_renovation_1791819096728.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Minimalist Architectural Icon Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2.5 px-3 py-1.5 bg-[#092347]/95 backdrop-blur-md rounded border border-white/10 text-white shadow-md">
                    <span className="text-[#C5A059]">{service.iconSvg}</span>
                    <span className="text-xs font-bold tracking-wider uppercase font-['Outfit']">
                      Division
                    </span>
                  </div>

                  {/* Quick preview trigger */}
                  <button
                    onClick={() => setSelectedServiceForModal(service)}
                    className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-slate-800 rounded transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    title={`View ${service.title} details`}
                    aria-label={`Open ${service.title} specifications`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-medium tracking-wide text-slate-300">
                      {service.subtitle}
                    </div>
                    <div className="text-2xl font-black text-white font-['Outfit'] tracking-tight">
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Card Body & Architectural Specs */}
                <div className="p-6 sm:p-7">
                  {/* Service Statement */}
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#092347] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>Engineering Disciplines</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro Metadata Bar */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase font-semibold">Scale</span>
                      <span className="font-semibold text-slate-800">{service.scale}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 uppercase font-semibold">Timeline</span>
                      <span className="font-semibold text-slate-800">{service.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 bg-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleConsult(service.title)}
                    className="flex-1 py-3 px-4 bg-[#092347] hover:bg-[#061830] text-white font-bold text-xs tracking-wider uppercase rounded-md transition-all flex items-center justify-center gap-2 group/btn shadow-xs"
                  >
                    <span>Consult on {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    onClick={() => setSelectedServiceForModal(service)}
                    className="p-3 border border-slate-200 hover:border-slate-300 rounded-md text-slate-600 hover:text-slate-900 transition-colors"
                    title="View full structural specs"
                  >
                    <Layers className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification Comparison Matrix */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">
                Technical Rigor
              </div>
              <h3 className="text-xl font-bold text-[#092347] font-['Outfit']">
                Sara Infra Construction Quality Invariants
              </h3>
            </div>
            <a
              href="tel:9790082198"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#092347] hover:text-[#C5A059] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Direct Engineering Inquiries: 9790082198</span>
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">Residential Villas</th>
                  <th className="py-3 px-4">Commercial High-Rises</th>
                  <th className="py-3 px-4">Renovations & Retrofits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Structural Concrete</td>
                  <td className="py-3 px-4">M35 / M40 Self-Compacting Mix</td>
                  <td className="py-3 px-4">M50 / M60 High-Strength Core</td>
                  <td className="py-3 px-4">Polymer Modified Micro-Concrete</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Steel Reinforcement</td>
                  <td className="py-3 px-4">Fe-550D TMT Corrosion Resistant</td>
                  <td className="py-3 px-4">Fe-600 High Ductility Structural Rebar</td>
                  <td className="py-3 px-4">CFRP Laminates & Carbon Stitching</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Waterproofing Standard</td>
                  <td className="py-3 px-4">Triple-Layer Polyurethane Membrane</td>
                  <td className="py-3 px-4">Elastomeric Basement & Roof Shields</td>
                  <td className="py-3 px-4">Crystalline Chemical Pressure Injection</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Quality Testing Protocol</td>
                  <td className="py-3 px-4">Cube Crushing, NDT Rebound Hammer</td>
                  <td className="py-3 px-4">Ultrasonic Pulse, Core Cut & Wind Tunnel</td>
                  <td className="py-3 px-4">Ferroscan Covermeter & Pull-off Tensile</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 text-sm font-bold p-1 rounded-md"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <span>{selectedServiceForModal.subtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#092347] font-['Outfit'] mb-4">
              {selectedServiceForModal.title} Engineering Specifications
            </h3>

            <div className="rounded-lg overflow-hidden h-52 mb-6">
              <img
                src={selectedServiceForModal.image}
                alt={selectedServiceForModal.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (selectedServiceForModal.id === 'residential') target.src = '/images/residential_villa_night_1791816705034.jpg';
                  if (selectedServiceForModal.id === 'commercial') target.src = '/images/service_commercial_1791731244556.jpg';
                  if (selectedServiceForModal.id === 'renovation') target.src = '/images/simple_house_renovation_1791819096728.jpg';
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedServiceForModal.description}
            </p>

            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-[#092347]">
                Key Execution Highlights:
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedServiceForModal.capabilities.map((c: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  handleConsult(selectedServiceForModal.title);
                  setSelectedServiceForModal(null);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#092347] hover:bg-[#061830] text-white font-bold text-xs uppercase tracking-wider rounded-md"
              >
                Inquire About {selectedServiceForModal.title}
              </button>
              <a
                href="tel:9790082198"
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-[#092347] font-bold text-xs uppercase tracking-wider rounded-md text-center"
              >
                Call CEO (P. Sankar): 9790082198
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
