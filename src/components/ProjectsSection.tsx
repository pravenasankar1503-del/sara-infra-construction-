import React, { useState } from 'react';
import { Project } from '../types';
import { MapPin, Calendar, Maximize2, Ruler, ArrowRight, ExternalLink } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Renovation'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'proj-1',
      title: 'The Azure Horizon Cantilever Villa',
      category: 'Residential',
      location: 'East Coast Sanctuary, ECR Corridor',
      area: '14,200 sq.ft.',
      year: '2025',
      duration: '14 Months',
      architecturalStyle: 'Modern Brutalist & Glass Minimalist',
      image: IMAGES.serviceResidential,
      description:
        'A masterwork of residential structural engineering featuring an 8-meter post-tensioned cantilever concrete terrace floating above an infinity pool with full panoramic sea frontage.',
      highlights: [
        'Post-tensioned cantilever deck with zero supporting perimeter columns',
        'Floor-to-ceiling insulated double-glazed curtain glass',
        'Subterranean automated 6-car collector garage',
        'Integrated solar bioclimatic cooling canopy',
      ],
    },
    {
      id: 'proj-2',
      title: 'Nexus Commercial Tower & Corporate Atrium',
      category: 'Commercial',
      location: 'Central Financial & IT Expressway',
      area: '280,000 sq.ft.',
      year: '2025',
      duration: '22 Months',
      architecturalStyle: 'High-Tech Contemporary Commercial',
      image: IMAGES.serviceCommercial,
      description:
        'A flagship corporate headquarters featuring an engineered crystalline unitized curtain wall, seismic-isolated structural steel core, and an expansive column-free grand entrance atrium.',
      highlights: [
        'Grade-A LEED Platinum compliant energy footprint',
        'Unitized ceramic-fritted curtain glass reducing solar heat gain by 64%',
        'High-speed destination-dispatch elevators with regenerative braking',
        'Integrated rainwater harvesting and zero liquid discharge wastewater treatment',
      ],
    },
    {
      id: 'proj-3',
      title: 'The Ironworks Heritage Revival & Modern Glass Pavilion',
      category: 'Renovation',
      location: 'Old Port Historic Quarter',
      area: '38,500 sq.ft.',
      year: '2024',
      duration: '9 Months',
      architecturalStyle: 'Industrial Heritage & Modernist Glass Cantilever',
      image: IMAGES.serviceRenovation,
      description:
        'A surgical restoration and modern vertical expansion combining a century-old exposed kiln-brick warehouse with a geometric black-steel cantilevered glass cube.',
      highlights: [
        'Structural column jacketing and micropile underpinning',
        'Original brickwork preserved with hydrophobic silane breathable sealants',
        'Cantilevered structural steel frame added with zero seismic transfer loads',
        'Complete high-efficiency acoustic and VRF HVAC retrofit',
      ],
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
              <span>Selected Portfolio</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">Delivered Landmarks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092347] tracking-tight font-['Outfit']">
              Featured Case Studies
            </h2>
          </div>

          {/* Functional Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-white rounded-lg border border-slate-200 shadow-xs">
            {(['All', 'Residential', 'Commercial', 'Renovation'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all whitespace-nowrap shrink-0 ${
                  filter === cat
                    ? 'bg-[#092347] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 w-full overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (project.category === 'Residential') target.src = '/images/residential_villa_night_1791816705034.jpg';
                      else if (project.category === 'Commercial') target.src = '/images/service_commercial_1791731244556.jpg';
                      else if (project.category === 'Renovation') target.src = '/images/simple_house_renovation_1791819096728.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Clean unboxed category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded text-xs font-bold text-[#092347] uppercase tracking-wider font-['Outfit'] shadow-xs">
                    {project.category}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded transition-colors"
                    title="View project details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-['Outfit'] tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="block text-[11px] text-slate-400 font-semibold uppercase">Area</span>
                      <span className="font-bold text-slate-800 tabular-nums">{project.area}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 font-semibold uppercase">Timeline</span>
                      <span className="font-bold text-slate-800">{project.duration}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] text-slate-400 font-semibold uppercase">Year</span>
                      <span className="font-bold text-slate-800 tabular-nums">{project.year}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Structural Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shrink-0" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 bg-white">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-[#092347] hover:text-white text-[#092347] font-bold text-xs uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Examine Blueprint & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 text-sm font-bold p-1 rounded-md"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
              <span>{activeModalProject.category} Portfolio</span>
              <span>·</span>
              <span className="text-slate-500">{activeModalProject.location}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#092347] font-['Outfit'] mb-4">
              {activeModalProject.title}
            </h3>

            <div className="rounded-lg overflow-hidden h-72 mb-6">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (activeModalProject.category === 'Residential') target.src = '/images/residential_villa_night_1791816705034.jpg';
                  else if (activeModalProject.category === 'Commercial') target.src = '/images/service_commercial_1791731244556.jpg';
                  else if (activeModalProject.category === 'Renovation') target.src = '/images/simple_house_renovation_1791819096728.jpg';
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg mb-6 text-xs">
              <div>
                <span className="block text-slate-400 font-semibold uppercase text-[10px]">Total Footprint</span>
                <span className="font-bold text-slate-900 text-sm">{activeModalProject.area}</span>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase text-[10px]">Execution Time</span>
                <span className="font-bold text-slate-900 text-sm">{activeModalProject.duration}</span>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase text-[10px]">Completion</span>
                <span className="font-bold text-slate-900 text-sm">{activeModalProject.year}</span>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase text-[10px]">Style</span>
                <span className="font-bold text-slate-900 text-sm">{activeModalProject.architecturalStyle}</span>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#092347]">
                Comprehensive Engineering Deliverables:
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
              <a
                href="tel:9790082198"
                className="w-full sm:w-auto px-6 py-3 bg-[#092347] hover:bg-[#061830] text-white font-bold text-xs uppercase tracking-wider rounded-md text-center"
              >
                Speak with Project Lead: 9790082198
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-md"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
