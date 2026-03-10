import React from 'react';
import IsoLogo from './IsoLogo';
import { useMagnetic } from '../hooks/useMagnetic';

const Header: React.FC = () => {
  const magneticRef = useMagnetic<HTMLDivElement>({ strength: 20 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-300 backdrop-blur-md bg-background/80 border-b border-glass-border">
      <div className="max-w-[1600px] mx-auto flex items-center justify-end">
        {/* Brand logo shortened to 'H' and placed on the right side */}
        <div ref={magneticRef} className="p-2 -m-2 cursor-pointer transition-transform duration-100 ease-out" data-cursor="block">
          <IsoLogo className="pointer-events-none" />
        </div>
      </div>
    </header>
  );
};

export default Header;