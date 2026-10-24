import React from 'react';
import { Compass, Box, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Feasibility & Soil Stratigraphy',
      desc: 'Rigorous geotech bore-well analysis, load-bearing soil testing, regulatory setback zoning, and structural feasibility audits before the first shovel touches the ground.',
      duration: 'Weeks 1 – 2',
      standards: 'Core soil penetration testing & seismic profiling',
      icon: <Compass className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      num: '02',
      title: 'Structural Design & Engineering Analysis',
      desc: 'Finite element analysis (FEA) and structural clash detection. Every beam dimension, rebar bend schedule, and MEP routing is simulated to the millimeter.',
      duration: 'Weeks 3 – 5',
      standards: 'High-Precision Structural Engineering & Analysis',
      icon: <Box className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      num: '03',
      title: 'Direct-from-Mill Material Procurement',
      desc: 'Exclusive sourcing of Fe-550D primary steel from top-tier primary mills and computerized batch-mixed concrete tested on-site for slump and compressive yield.',
      duration: 'Ongoing Milestone Pacing',
      standards: '100% batch laboratory quality testing',
      icon: <Truck className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      num: '04',
      title: 'Precision Turnkey Execution & Daily Audits',
      desc: 'Laser-guided formwork, slip-form staging, strict curing schedules, and multi-tier quality inspection checkpoints at each milestone with client digital portal logs.',
      duration: 'As per Project Blueprint',
      standards: 'Zero-tolerance tolerance margins (±2mm)',
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      num: '05',
      title: 'Comprehensive Handover & Structural Warranty',
      desc: 'Non-destructive testing (NDT), air-pressure and water deluge testing of all glazing and roofs, culminating in handover with structural warranty documentation.',
      duration: 'Final Commissioning',
      standards: 'Complete as-built drawings & lifecycle maintenance manual',
      icon: <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />,
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
              <span>Standard Operating Protocol</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">Zero-Defect Quality</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092347] tracking-tight font-['Outfit']">
              The Sara Infra Construction Discipline
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm sm:text-base font-normal leading-relaxed">
            Every square foot constructed by Sara Infra adheres to an uncompromising 5-stage structural engineering governance lifecycle.
          </p>
        </div>

        {/* Step-by-step numbered cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-50 border border-slate-200 hover:border-[#092347] rounded-xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-['Outfit'] text-[#092347] group-hover:text-[#C5A059] transition-colors tabular-nums">
                    {step.num}
                  </span>
                  <div className="p-2 bg-white rounded-md border border-slate-200 shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[#092347] font-['Outfit'] mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700 block">{step.duration}</span>
                <span className="text-slate-500">{step.standards}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
