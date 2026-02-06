import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-text-main">
      {/* Liquid Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob-delay"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-accent-glow/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob-slow"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex flex-col items-center w-full">
          <Hero />
          
          <FilterBar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <ProjectGrid activeCategory={activeCategory} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;