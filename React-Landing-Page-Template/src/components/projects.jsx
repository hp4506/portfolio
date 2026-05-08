import React from "react";

export const Projects = (props) => {
  return (
    <div id="portfolio" className="section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Selected Works</h2>
          <p>A showcase of my recent cybersecurity toolkits and AI-driven platforms.</p>
        </div>
        <div className="bento-container">
          {/* Project 1: Cybersecurity Toolkit (Large) */}
          <div className="bento-item large reveal">
            <span className="tag">Python</span>
            <span className="tag">Kali Linux</span>
            <span className="tag">Security</span>
            <h3>{props.data?.Project1.title}</h3>
            <p>{props.data?.Project1.description}</p>
            <img src={props.data?.Project1.image} alt={props.data?.Project1.title} className="project-card-image" />
            <ul style={{ padding: 0, marginTop: '20px' }}>
              {props.data?.Project1.features.map((f, i) => (
                <li key={i} style={{ listStyle: 'none', marginBottom: '10px', fontSize: '14px', color: '#888' }}>
                  <i className={f.icon} style={{ color: '#00f2ff', marginRight: '10px' }}></i> {f.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Project 2: AI Interview (Wide) */}
          <div className="bento-item wide reveal">
            <span className="tag">AI / ML</span>
            <span className="tag">Next.js</span>
            <span className="tag">Gemini API</span>
            <h3>{props.data?.Project2.title}</h3>
            <p>{props.data?.Project2.description}</p>
            <img src={props.data?.Project2.image} alt={props.data?.Project2.title} className="project-card-image" style={{ height: '180px' }} />
          </div>

          {/* Project 3: AI Travel (Tall/Normal) */}
          <div className="bento-item reveal">
            <span className="tag">Full Stack</span>
            <span className="tag">Firebase</span>
            <h3>{props.data?.Project3.title}</h3>
            <p>{props.data?.Project3.description.substring(0, 120)}...</p>
            <img src={props.data?.Project3.image} alt={props.data?.Project3.title} className="project-card-image" style={{ height: '140px' }} />
          </div>

          {/* Special Bento Item: Tech Stack */}
          <div className="bento-item reveal" style={{ background: 'linear-gradient(135deg, #050505, #111)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <h4 style={{ color: '#fff', margin: '0 0 10px 0' }}>Tech Stack</h4>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={{ fontSize: '12px', color: '#00f2ff' }}>React</span>
                <span style={{ fontSize: '12px', color: '#00f2ff' }}>Node.js</span>
                <span style={{ fontSize: '12px', color: '#00f2ff' }}>Firebase</span>
                <span style={{ fontSize: '12px', color: '#00f2ff' }}>GSAP</span>
                <span style={{ fontSize: '12px', color: '#00f2ff' }}>Kali</span>
             </div>
             <i className="fa fa-code" style={{ fontSize: '4rem', opacity: 0.05, position: 'absolute', bottom: -10, right: -10 }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
