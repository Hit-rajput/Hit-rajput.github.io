import React from 'react';

interface IsoLogoProps {
    className?: string;
}

const IsoLogo: React.FC<IsoLogoProps> = ({ className = '' }) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full opacity-0 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-xl"
            >
                <g transform="translate(10, 10)">
                    {/* Left Pillar */}
                    <path d="M0 20 L20 30 L20 80 L0 70 Z" className="fill-accent-primary dark:fill-accent-secondary stroke-white/20 stroke-1" /> {/* Front */}
                    <path d="M0 20 L20 10 L40 20 L20 30 Z" className="fill-white dark:fill-accent-primary/80 stroke-white/20 stroke-1" /> {/* Top */}
                    <path d="M20 30 L40 20 L40 80 L20 80 Z" className="fill-text-main/20 dark:fill-accent-primary/40 stroke-white/20 stroke-1" /> {/* Side */}

                    {/* Right Pillar */}
                    <path d="M40 40 L60 50 L60 100 L40 90 Z" className="fill-accent-secondary dark:fill-accent-primary stroke-white/20 stroke-1" /> {/* Front */}
                    <path d="M40 40 L60 30 L80 40 L60 50 Z" className="fill-white dark:fill-accent-primary/80 stroke-white/20 stroke-1" /> {/* Top */}
                    <path d="M60 50 L80 40 L80 90 L60 100 Z" className="fill-text-main/20 dark:fill-accent-primary/40 stroke-white/20 stroke-1" /> {/* Side */}

                    {/* Crossbar */}
                    <path d="M20 50 L40 60 L40 50 L20 40 Z" className="fill-white dark:fill-accent-primary/80 stroke-white/20 stroke-1" /> {/* Top */}
                    <path d="M20 50 L20 60 L40 70 L40 60 Z" className="fill-accent-primary dark:fill-accent-secondary stroke-white/20 stroke-1" /> {/* Side */}
                </g>
            </svg>
        </div>
    );
};

export default IsoLogo;
