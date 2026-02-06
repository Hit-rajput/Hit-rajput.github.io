import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center gap-2">
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
        <div className="absolute size-2 bg-accent-primary rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </div>

      <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed max-w-3xl drop-shadow-sm mb-8">
        Data and machine learning professional with a strong software engineering background and a Master’s degree in Computational Science. Experienced in <span className="text-white font-medium">analytics</span>, <span className="text-white font-medium">dashboard development</span> using Power BI and Tableau, and applying data science and machine learning techniques to generate actionable insights. Actively advancing expertise in machine learning and optimization methods.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="https://www.linkedin.com/in/hitesh-rajput-4467b1b9/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn" className="h-8" />
        </a>
        <a href="mailto:hchauhan@laurentian.ca" className="hover:opacity-80 transition-opacity">
          <img src="https://img.shields.io/badge/Email-Contact_Me-red?style=for-the-badge&logo=gmail" alt="Email" className="h-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;