import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: { label: string; value: Category }[] = [
    { label: 'ALL CATEGORIES', value: 'ALL' },
    { label: 'DATA VISUALIZATION', value: 'DATA VISUALIZATION' },
    { label: 'CREATIVE CODING', value: 'CREATIVE CODING' },
    { label: 'DATA SCIENCE', value: 'DATA SCIENCE' },
  ];

  return (
    <div className="w-full sticky top-[72px] z-40 py-6 mb-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="glass-panel rounded-full px-2 py-2 flex flex-wrap justify-center gap-2 md:gap-4 mx-auto w-fit">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`
                  px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300
                  ${isActive 
                    ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20' 
                    : 'text-text-muted hover:text-white hover:bg-white/5 border border-transparent'}
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;