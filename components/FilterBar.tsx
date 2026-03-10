import React from 'react';
import { Category } from '../types';
import { useMagnetic } from '../hooks/useMagnetic';

// Wrapper component to use the hook per button
const MagneticButton: React.FC<{
  cat: { label: string; value: Category };
  isActive: boolean;
  onCategoryChange: (category: Category) => void;
}> = ({ cat, isActive, onCategoryChange }) => {
  const magneticRef = useMagnetic<HTMLButtonElement>({ strength: 10 });

  return (
    <button
      ref={magneticRef}
      key={cat.value}
      onClick={() => onCategoryChange(cat.value)}
      data-cursor="block"
      className={`
        px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300
        ${isActive
          ? 'bg-accent-primary/10 text-accent-primary shadow-[0_0_15px_rgba(var(--accent-primary),0.3)] border border-accent-primary/20'
          : 'text-text-muted hover:text-text-main hover:bg-glass-highlight border border-transparent'}
      `}
    >
      {cat.label}
    </button>
  );
};

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: { label: string; value: Category }[] = [
    { label: 'ALL CATEGORIES', value: 'ALL' },
    { label: 'MACHINE LEARNING & AI', value: 'MACHINE LEARNING' },
    { label: 'DATA VISUALIZATION', value: 'DATA VISUALIZATION' },
    { label: 'CLOUD & SOFTWARE ENGINEERING', value: 'CLOUD & ENGINEERING' },
  ];

  return (
    <div className="w-full sticky top-[72px] z-40 py-6 mb-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="glass-panel rounded-full px-2 py-2 flex flex-wrap justify-center gap-2 md:gap-4 mx-auto w-fit">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <MagneticButton
                key={cat.value}
                cat={cat}
                isActive={isActive}
                onCategoryChange={onCategoryChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;