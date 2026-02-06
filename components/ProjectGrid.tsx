import React, { useMemo, useState } from 'react';
import { Project, Category } from '../types';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import { PROJECTS } from '../data';

interface ProjectGridProps {
  activeCategory: Category;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ activeCategory }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.filterCategory === activeCategory);
  }, [activeCategory]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Optional: smooth scroll to top of grid area
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-[1600px] px-4 md:px-8 pb-20 min-h-[500px]">
      
      {/* Detailed View */}
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onClose={handleClose} />
      ) : (
        /* Grid View */
        <>
          <div className="masonry-grid w-full animate-fade-in">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleProjectClick}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-20 text-text-muted">
              No projects found in this category.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectGrid;