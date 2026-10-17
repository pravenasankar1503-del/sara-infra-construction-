export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation';
  location: string;
  area: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  architecturalStyle: string;
}

export interface ServiceDetail {
  id: 'residential' | 'commercial' | 'renovation';
  title: string;
  tagline: string;
  description: string;
  image: string;
  iconName: 'home' | 'building' | 'wrench';
  keyFeatures: string[];
  typicalTimeline: string;
  standards: string[];
  squareFootageRange: string;
}
