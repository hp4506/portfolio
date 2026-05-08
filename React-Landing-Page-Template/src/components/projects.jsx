import React from "react";

export const Projects = (props) => {
  if (!props.data || !props.data.Project1) {
    return null;
  }

  return (
    <div id="portfolio" className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Selected Works</h2>
          <p>A showcase of my recent cybersecurity toolkits and AI-driven platforms.</p>
        </div>
        <div className="bento-container">
          {/* Project 1: Cybersecurity Toolkit (Large - Span 8) */}
          <div className="bento-item large reveal">
            <div className="tag-container">
              <span className="tag">Python</span>
              <span className="tag">Kali Linux</span>
              <span className="tag">Security</span>
            </div>
            <h3>{props.data.Project1.title}</h3>
            <p>{props.data.Project1.description}</p>
            <img src={props.data.Project1.image} alt={props.data.Project1.title} className="project-card-image" />
          </div>

          {/* Project 2: AI Interview (Normal - Span 4) */}
          <div className="bento-item normal reveal">
            <div className="tag-container">
              <span className="tag">AI / ML</span>
              <span className="tag">Gemini API</span>
            </div>
            <h3>{props.data.Project2?.title}</h3>
            <p>{props.data.Project2?.description}</p>
            <img src={props.data.Project2?.image} alt={props.data.Project2?.title} className="project-card-image" style={{ height: '200px' }} />
          </div>

          {/* Project 3: AI Travel (Wide - Span 8) */}
          <div className="bento-item wide reveal">
            <div className="tag-container">
              <span className="tag">Full Stack</span>
              <span className="tag">Firebase</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h3>{props.data.Project3?.title}</h3>
                <p>{props.data.Project3?.description}</p>
              </div>
              <img src={props.data.Project3?.image} alt={props.data.Project3?.title} className="project-card-image" style={{ width: '300px', height: '180px', marginTop: 0 }} />
            </div>
          </div>

          {/* Tech Stack (Small - Span 4) */}
          <div className="bento-item small reveal" style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)' }}>
             <h3>Core Stack</h3>
             <div className="tag-container">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Firebase</span>
                <span className="tag">GSAP</span>
                <span className="tag">Kali</span>
             </div>
             <i className="fa fa-code" style={{ fontSize: '5rem', opacity: 0.03, position: 'absolute', bottom: -10, right: -10 }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
