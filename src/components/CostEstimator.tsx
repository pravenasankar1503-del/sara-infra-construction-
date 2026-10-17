import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Check, Clock, Phone } from 'lucide-react';

interface CostEstimatorProps {
  onEstimateReady?: (details: {
    type: string;
    area: number;
    grade: string;
    estimatedCost: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onEstimateReady }) => {
  const [projectType, setProjectType] = useState<'Residential' | 'Commercial' | 'Renovation'>('Residential');
  const [area, setArea] = useState<number>(6500);
  const [finishGrade, setFinishGrade] = useState<'Premium' | 'Ultra-Luxury' | 'Bespoke Landmark'>('Ultra-Luxury');

  // Rates per sq.ft based on Sara Infra construction standards
  const rateMatrix: Record<string, Record<string, number>> = {
    Residential: {
      'Premium': 2250,
      'Ultra-Luxury': 2450,
      'Bespoke Landmark': 2650,
    },
    Commercial: {
      'Premium': 2250,
      'Ultra-Luxury': 2450,
      'Bespoke Landmark': 2650,
    },
    Renovation: {
      'Premium': 2250,
      'Ultra-Luxury': 2450,
      'Bespoke Landmark': 2650,
    },
  };

  const currentRate = rateMatrix[projectType][finishGrade];
  const totalCost = area * currentRate;

  // Timeline computation
  const getTimeline = () => {
    if (projectType === 'Residential') {
      if (area < 5000) return '8 – 10 Months';
      if (area < 12000) return '11 – 15 Months';
      return '16 – 22 Months';
    } else if (projectType === 'Commercial') {
      if (area < 25000) return '12 – 16 Months';
      if (area < 80000) return '18 – 24 Months';
      return '24 – 32 Months';
    } else {
      if (area < 5000) return '3 – 6 Months';
      return '6 – 10 Months';
    }
  };

  // Format currency into INR notation (Lakhs & Crores)
  const formatCostInINR = (amount: number) => {
    if (amount >= 10000000) {
      const cr = (amount / 10000000).toFixed(2);
      return `₹${cr} Cr`;
    } else {
      const lakhs = (amount / 100000).toFixed(2);
      return `₹${lakhs} Lakhs`;
    }
  };

  const handleApplyToContact = () => {
    if (onEstimateReady) {
      onEstimateReady({
        type: projectType,
        area,
        grade: finishGrade,
        estimatedCost: formatCostInINR(totalCost),
      });
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-slate-100/70 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
              <span>Transparent Budgeting</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">Bill of Quantities (BOQ) Modeling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092347] tracking-tight font-['Outfit']">
              Interactive Construction Estimator
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 max-w-md text-sm sm:text-base font-normal leading-relaxed">
            Obtain preliminary architectural and structural cost benchmarks calculated according to Sara Infra specifications.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Input Controls Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* 1. Project Type Selector */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  1. Select Structural Category
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Residential', 'Commercial', 'Renovation'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`py-3.5 px-3 text-xs sm:text-sm font-bold rounded-lg border transition-all text-center ${
                        projectType === type
                          ? 'bg-[#092347] text-white border-[#092347] shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Built-up Area Slider & Input */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Approximate Built-up Area (Sq.Ft)
                  </label>
                  <span className="text-base font-black font-['Outfit'] text-[#092347] tabular-nums">
                    {area.toLocaleString()} sq.ft.
                  </span>
                </div>
                <input
                  type="range"
                  min={projectType === 'Commercial' ? 5000 : 1500}
                  max={projectType === 'Commercial' ? 120000 : 35000}
                  step={500}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#092347]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium tabular-nums">
                  <span>{projectType === 'Commercial' ? '5,000 sq.ft.' : '1,500 sq.ft.'}</span>
                  <span>{projectType === 'Commercial' ? '120,000 sq.ft.' : '35,000 sq.ft.'}</span>
                </div>
              </div>

              {/* 3. Finish Grade Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  3. Finish Specification & Material Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Premium', 'Ultra-Luxury', 'Bespoke Landmark'] as const).map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setFinishGrade(grade)}
                      className={`p-3.5 rounded-lg border text-left transition-all ${
                        finishGrade === grade
                          ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#092347]'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold font-['Outfit']">{grade}</span>
                        {finishGrade === grade && (
                          <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        ₹{rateMatrix[projectType][grade].toLocaleString()}/sq.ft
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Summary Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400 font-medium">
                  <span>Preliminary Estimate</span>
                  <span className="text-[#C5A059] font-bold uppercase">{projectType} Division</span>
                </div>

                <div className="my-6">
                  <div className="text-xs text-slate-300 font-medium uppercase tracking-wider">
                    Total Estimated Construction Cost
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-white tracking-tight mt-1 tabular-nums">
                    {formatCostInINR(totalCost)}
                  </div>
                  <div className="text-xs text-[#C5A059] mt-1 font-semibold">
                    ~ ₹{currentRate.toLocaleString()} per sq.ft (turnkey baseline)
                  </div>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Estimated Duration</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {getTimeline()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Structural Warranty</span>
                    <span className="font-bold text-white">25-Year Guaranteed Core</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Material Standard</span>
                    <span className="font-bold text-white">Fe-550D TMT & M35+ Ready Mix</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Executive Oversight</span>
                    <span className="font-bold text-white">CEO: P. Sankar</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={handleApplyToContact}
                  className="w-full py-3.5 px-4 bg-[#C5A059] hover:bg-[#b59146] text-[#092347] font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Request Full Itemized BOQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:9790082198"
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Direct Cost Inquiry: 9790082198</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
