import React, { useState, useRef } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const allImages = [project.image, ...project.gallery];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = allImages[currentIndex];
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbContainerRef.current) {
      const scrollAmount = thumbContainerRef.current.clientWidth * 0.8;
      thumbContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Inject Tableau script if needed
  React.useEffect(() => {
    if (project.embedCode) {
      const scriptId = 'tableau-viz-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [project.embedCode]);

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in-up">
      {/* Back / Close Action */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-text-muted hover:text-text-main transition-colors group"
          data-cursor="hover"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform pointer-events-none">arrow_back</span>
          <span className="text-sm font-bold tracking-widest">BACK TO PROJECTS</span>
        </button>
      </div>

      <div className="glass-panel p-6 md:p-10 rounded-2xl border border-glass-border shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10">

          {/* Left Column: Content & Details */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-2">{project.title}</h2>
            <p className="text-accent-primary font-mono text-sm tracking-wider mb-8">{project.category}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-text-main mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-secondary rounded-full"></span>
                  Overview
                </h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-main mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-glow rounded-full"></span>
                  The Challenge
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-bold text-text-muted mb-4 uppercase tracking-widest">Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 bg-glass-surface border border-glass-border px-3 py-2 rounded-lg hover:bg-glass-highlight transition-colors cursor-default">
                      <img src={tech.icon} alt={tech.name} className="w-5 h-5 opacity-80" />
                      <span className="text-sm font-medium text-text-main/90">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-text-main text-background px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-accent-primary hover:text-black transition-all hover:scale-105"
                    data-cursor="hover"
                  >
                    <span className="pointer-events-none">LAUNCH PROJECT</span>
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="flex items-center gap-2 bg-transparent border border-glass-border text-text-main px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-glass-highlight transition-all"
                    data-cursor="hover"
                  >
                    <span className="pointer-events-none">VIEW CODE</span>
                    <span className="material-symbols-outlined text-lg">code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Gallery */}
          <div className="flex-1 lg:max-w-[50%] order-1 lg:order-2">
            <div className="flex flex-col gap-4 sticky top-6">
              {/* Main Hero Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg group relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                {project.embedCode ? (
                  <div className="w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: project.embedCode }}></div>
                ) : (
                  <>
                    <img
                      src={currentImage}
                      alt={project.title}
                      className={`w-full h-auto object-cover max-h-[500px] ${project.customStyles || ''}`}
                    />
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all z-20 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          data-cursor="hover"
                        >
                          <span className="material-symbols-outlined pointer-events-none">chevron_left</span>
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all z-20 flex items-center justify-center opacity-0 group-hover:opacity-100"
                          data-cursor="hover"
                        >
                          <span className="material-symbols-outlined pointer-events-none">chevron_right</span>
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Thumbnails / Additional Images (Horizontal Scroll) */}
              {allImages.length > 1 && (
                <div className="relative group/thumbs mt-2">
                  <button
                    onClick={() => scrollThumbnails('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-1 rounded-r-md backdrop-blur-sm transition-all z-20 flex items-center justify-center opacity-0 group-hover/thumbs:opacity-100 h-[calc(100%-1rem)] border border-white/10 border-l-0"
                    data-cursor="hover"
                  >
                    <span className="material-symbols-outlined font-bold text-sm pointer-events-none">chevron_left</span>
                  </button>

                  <div ref={thumbContainerRef} className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x scroll-smooth">
                    {allImages.map((img, idx) => (
                      <div key={idx} onClick={() => setCurrentIndex(idx)} className={`min-w-[100px] md:min-w-[150px] w-[30%] aspect-video rounded-lg overflow-hidden border ${currentIndex === idx ? 'border-accent-primary shadow-[0_0_10px_rgba(var(--accent-primary),0.5)]' : 'border-white/10'} cursor-pointer hover:border-accent-primary transition-all snap-start flex-shrink-0`}>
                        <img src={img} alt={`Screenshot ${idx}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollThumbnails('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-1 rounded-l-md backdrop-blur-sm transition-all z-20 flex items-center justify-center opacity-0 group-hover/thumbs:opacity-100 h-[calc(100%-1rem)] border border-white/10 border-r-0"
                    data-cursor="hover"
                  >
                    <span className="material-symbols-outlined font-bold text-sm pointer-events-none">chevron_right</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;