import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-4 mt-auto border-t border-white/5 backdrop-blur-sm bg-background/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <a
            href="#"
            aria-label="Github"
            className="text-text-muted hover:text-white hover:scale-110 transition-all duration-300"
          >
            <span className="text-xs font-bold tracking-widest">GITHUB</span>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent-primary hover:scale-110 transition-all duration-300"
          >
            <span className="text-xs font-bold tracking-widest">LINKEDIN</span>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-text-muted hover:text-accent-primary hover:scale-110 transition-all duration-300"
          >
            <span className="text-xs font-bold tracking-widest">TWITTER</span>
          </a>
        </div>
        <div className="text-white/20 text-[10px] tracking-[0.2em]">
          © 2023 HITESH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;