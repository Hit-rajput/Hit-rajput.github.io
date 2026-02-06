import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 flex-wrap">
        <span>Hitesh</span>
        <span className="text-accent-primary animate-pulse text-4xl md:text-7xl select-none" title="Hitesh's Turtle">
           𓆉
        </span>
      </h1>
      
      <div className="flex items-center justify-center w-full max-w-[200px] mb-10 relative">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent w-full opacity-50"></div>
        <div className="absolute size-2 bg-accent-primary rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </div>
      
      <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-sm">
        Hello! Glad to see you here. This is a collection of my personal projects
        made during free time, focusing on <span className="text-white font-medium">data storytelling</span> and <span className="text-white font-medium">visualization</span>.
      </p>
    </div>
  );
};

export default Hero;