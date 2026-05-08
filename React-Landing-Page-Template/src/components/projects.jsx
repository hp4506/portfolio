import React from "react";

export const Projects = (props) => {
  if (!props.data || !props.data.Project1) return null;

  const projectList = [
    { ...props.data.Project1, tags: ["Python", "Kali Linux", "Security"] },
    { ...props.data.Project2, tags: ["AI / ML", "Next.js", "Firebase"] },
    { ...props.data.Project3, tags: ["Full Stack", "Firebase", "API Integration"] }
  ];

  return (
    <section id="portfolio">
      <span className="section-label">Portfolio</span>
      <h2>Selected Works</h2>
      
      {projectList.map((project, index) => (
        <div className="work-item reveal" key={index}>
          <div className="work-image">
            <img src={project.image} alt={project.title} />
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
    </section>
  );
};
