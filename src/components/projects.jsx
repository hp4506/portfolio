import React, { useState } from "react";

export const Projects = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!props.data || !props.data.Project1) return null;

  const projectList = [
    { ...props.data.Project1, tags: props.data.Project1.tags || ["Python", "Kali Linux", "Security"] },
    { ...props.data.Project2, tags: props.data.Project2.tags || ["AI / ML", "Next.js", "Firebase"] },
    { ...props.data.Project3, tags: props.data.Project3.tags || ["Full Stack", "Firebase", "API Integration"] }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeProject = () => {
    setSelectedProject(null);
    setLightboxImg(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio">
      <span className="section-label">Portfolio</span>
      <h2>Featured Projects</h2>
      
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

      {/* Project Modal (Case Study) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>&times;</button>
            <h2>{selectedProject.title}</h2>
            
            <div className="modal-tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="modal-layout-grid">
              {/* Left Column: Details */}
              <div className="modal-info-col">
                <div>
                  <h3 className="modal-section-title">Overview</h3>
                  <p className="modal-overview-text">{selectedProject.overview}</p>
                </div>

                {selectedProject.capabilities && (
                  <div>
                    <h3 className="modal-section-title">Key Components & Capabilities</h3>
                    <div className="capabilities-grid">
                      {selectedProject.capabilities.map((cap, i) => (
                        <div className="capability-card" key={i}>
                          <h4>{cap.title}</h4>
                          <p>{cap.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Screenshot Gallery */}
              <div className="modal-gallery-col">
                <h3 className="modal-section-title">Project Gallery</h3>
                
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                  <div className="gallery-container">
                    {selectedProject.screenshots.map((shot, i) => (
                      <div className="gallery-item" key={i}>
                        <div 
                          className="gallery-thumbnail-container"
                          onClick={() => setLightboxImg(shot)}
                        >
                          <img 
                            className="gallery-thumbnail" 
                            src={shot.src} 
                            alt={shot.caption} 
                          />
                        </div>
                        <span className="gallery-caption">{shot.caption}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#666', fontStyle: 'italic' }}>Screenshots coming soon...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for full screenshot zoom */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
          <div className="lightbox-img-container" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={lightboxImg.src} alt={lightboxImg.caption} />
            <div className="lightbox-caption">{lightboxImg.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
};
