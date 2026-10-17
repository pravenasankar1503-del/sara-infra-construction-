/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { CostEstimator } from './components/CostEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Residential');

  const [currentEstimate, setCurrentEstimate] = useState<{
    type: string;
    area: number;
    grade: string;
    estimatedCost: string;
  } | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleEstimateReady = (details: {
    type: string;
    area: number;
    grade: string;
    estimatedCost: string;
  }) => {
    setSelectedService(details.type);
    setCurrentEstimate(details);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#092347] selection:text-[#C5A059]">
      {/* 1. Header Navigation with 3-Zone Contract & Call Action Button */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section featuring Transition Photography and 'Building Excellence' */}
        <Hero />

        {/* 3. Three Organized Service Sections Side-by-Side: Residential, Commercial, Renovation */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Filterable Landmark Case Studies & Architectural Portfolio */}
        <ProjectsSection />

        {/* 5. 5-Stage Engineering Methodology */}
        <ProcessSection />

        {/* 6. Interactive Cost & Scope Estimator */}
        <CostEstimator onEstimateReady={handleEstimateReady} />

        {/* 7. Direct Contact, Site Office & Consultation with Direct Call Desk */}
        <ContactSection
          initialService={selectedService}
          initialEstimate={currentEstimate}
        />
      </main>

      {/* 8. Corporate Dark Blue Footer */}
      <Footer />

      {/* Floating Call Assistance Button (Sticky on mobile, subtle on desktop) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <a
          href="tel:9790082198"
          className="flex items-center gap-3 px-4 py-2.5 bg-[#092347] hover:bg-[#071830] text-white rounded-full shadow-2xl border border-[#C5A059]/40 transition-all hover:scale-105 group"
          title="Call Sara Infra Construction: 9790082198"
        >
          <span className="p-1.5 bg-[#C5A059] text-[#092347] rounded-full">
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
          <div className="text-left pr-1">
            <span className="block text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">
              P. Sankar (CEO)
            </span>
            <span className="block text-xs font-bold font-['Outfit'] tracking-wide text-white">
              9790082198
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
