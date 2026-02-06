export type Category = 'ALL' | 'MACHINE LEARNING' | 'DATA VISUALIZATION' | 'CLOUD & ENGINEERING';

export interface TechItem {
  name: string;
  icon: string; // URL to icon
}

export interface Project {
  id: string;
  title: string;
  category: string; // The specific string displayed on card (e.g., "D3.JS / VISUALIZATION")
  filterCategory: Category; // The high-level category for filtering
  image: string;
  description?: string; // Short description
  customStyles?: string; // For things like "invert" or "hue-rotate" seen in HTML

  // Expanded View Data
  overview: string;
  detailedDescription: string;
  gallery: string[]; // Array of image URLs
  techStack: TechItem[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}