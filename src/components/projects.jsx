import React, { useState } from "react";

export const Projects = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!props.data || !props.data.Project1) return null;

  const projectList = [
    { ...props.data.Project1, tags: ["Python", "Kali Linux", "Security"] },
    { ...props.data.Project2, tags: ["AI / ML", "Next.js", "Firebase"] },
    { ...props.data.Project3, tags: ["Full Stack", "Firebase", "API Integration"] }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio">
      <span className="section-label">Portfolio</span>
      <h2>Selected Works</h2>
      
      {projectList.map((project, index) => (
        <div 
          className="work-item reveal clickable-project" 
          key={index}
          onClick={() => openProject(project)}
          style={{ cursor: 'pointer' }}
        >
          <div className="work-image">
            <img src={project.image} alt={project.title} />
            <div className="work-overlay">
              <span>View Case Study</span>
            </div>
          </div>
          <div className="work-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="work-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Project Modal (Screenshot Gallery) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Screenshots coming soon...</p>
            <div className="screenshot-grid">
               <div className="screenshot-placeholder">Screenshot 1</div>
               <div className="screenshot-placeholder">Screenshot 2</div>
               <div className="screenshot-placeholder">Screenshot 3</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
