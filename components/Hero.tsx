import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-text-main drop-shadow-[0_0_15px_rgba(var(--accent-primary),0.1)] flex flex-col items-center justify-center gap-2">
        <span>Hey, I’m Hitesh.</span>
        <span className="text-2xl md:text-3xl font-light text-accent-primary tracking-normal mt-2">
          Glad you’re here.
        </span>
      </h1>

      <div className="flex items-center justify-center w-full max-w-[200px] mb-8 relative">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent w-full opacity-50"></div>
        <div className="absolute size-2 bg-accent-primary rounded-full shadow-[0_0_10px_rgba(var(--accent-primary),1)]"></div>
      </div>

      <div className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-3xl drop-shadow-sm mb-8 space-y-4">
        <p>
          I enjoy building things with data — from research-driven machine learning projects to experimental visualizations that explore new ways of representing information.
        </p>
        <p>
          This space is a collection of my academic work, personal projects, and ongoing research.
        </p>
        <p>
          When I’m not working with data, you’ll probably find me hiking 🏔️ or swimming 🌊.
        </p>
      </div>


    </div>
  );
};

export default Hero;