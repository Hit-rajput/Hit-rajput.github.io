import React, { useRef } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate position relative to center (-0.5 to 0.5)
    const xPct = (x / width) - 0.5;
    const yPct = (y / height) - 0.5;

    // Parallax intensity (pixels to move)
    const moveX = xPct * 20;
    const moveY = yPct * 20;

    imageRef.current.style.transform = `scale(1.1) translate(${-moveX}px, ${-moveY}px)`;
    imageRef.current.style.transition = 'transform 0.1s ease-out';
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'scale(1) translate(0px, 0px)';
    imageRef.current.style.transition = 'transform 0.5s ease-out';
  };

  return (
    <div
      className="masonry-item group cursor-pointer break-inside-avoid perspective-1000"
      onClick={() => onClick(project)}
      data-cursor="block"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-panel p-3 md:p-4 rounded-xl transition-all duration-500 hover:bg-glass-highlight hover:border-glass-border hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:-translate-y-1 relative pointer-events-none"
      >
        <div className="overflow-hidden rounded-lg mb-4 relative pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full h-auto object-cover transition-transform duration-700 pointer-events-none ${project.customStyles || ''}`}
          />
        </div>

        <div className="flex flex-col items-center relative z-20 pointer-events-none">
          <h3 className="text-lg font-bold text-text-main group-hover:text-accent-primary transition-colors text-center tracking-tight">
            {project.title}
          </h3>
          <div className="h-[1px] w-12 bg-glass-border my-3 group-hover:w-24 group-hover:bg-accent-primary/50 transition-all duration-500"></div>
          <p className="text-[10px] md:text-xs text-text-muted font-semibold text-center uppercase tracking-[0.2em] group-hover:text-text-main/80 transition-colors">
            {project.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;