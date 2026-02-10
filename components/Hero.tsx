import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-text-main drop-shadow-[0_0_15px_rgba(var(--accent-primary),0.1)] flex flex-col items-center justify-center gap-2">
        <span>Hitesh</span>
        <span className="text-2xl md:text-3xl font-light text-accent-primary tracking-normal uppercase mt-2">
          Machine Learning & Data Science Professional
        </span>
        <span className="text-xl md:text-2xl font-light text-text-muted tracking-normal">
          Software Engineering Background
        </span>
      </h1>

      <div className="flex items-center justify-center w-full max-w-[200px] mb-8 relative">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent w-full opacity-50"></div>
        <div className="absolute size-2 bg-accent-primary rounded-full shadow-[0_0_10px_rgba(var(--accent-primary),1)]"></div>
      </div>

      <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-3xl drop-shadow-sm mb-8">
        Data and machine learning professional with a strong software engineering background and a Master’s degree in Computational Science. Experienced in <span className="text-text-main font-medium">analytics</span>, <span className="text-text-main font-medium">dashboard development</span> using Power BI and Tableau, and applying data science and machine learning techniques to generate actionable insights. Actively advancing expertise in machine learning and optimization methods.
      </p>


    </div>
  );
};

export default Hero;