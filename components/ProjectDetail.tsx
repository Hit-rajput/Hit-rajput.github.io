import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in-up">
      {/* Back / Close Action */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-text-muted hover:text-text-main transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
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
                  >
                    <span>LAUNCH PROJECT</span>
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="flex items-center gap-2 bg-transparent border border-glass-border text-text-main px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-glass-highlight transition-all"
                  >
                    <span>VIEW CODE</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-auto object-cover max-h-[500px] ${project.customStyles || ''}`}
                />
              </div>

              {/* Thumbnails / Additional Images (Horizontal Scroll) */}
              {project.gallery.length > 0 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="min-w-[150px] w-[30%] aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-accent-primary transition-colors snap-start">
                      <img src={img} alt={`Screenshot ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
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