import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'WORK', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'CONTACT', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-300 backdrop-blur-md bg-background/50 border-b border-white/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo / Brand (Optional, assuming left empty in previous design but adding placeholder if needed, otherwise keeping layout) */}
        <div className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">
          HYH
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div 
          className="md:hidden text-text-main cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined select-none">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 w-full glass-panel border-t-0 p-6 flex flex-col gap-6 items-center md:hidden animate-fade-in shadow-2xl">
           {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-semibold tracking-wide text-text-main hover:text-accent-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;