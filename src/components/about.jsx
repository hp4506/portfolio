import React from "react";

export const About = (props) => {
  if (!props.data) return null;

  return (
    <section id="about">
      <span className="section-label">About Me</span>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>{props.data.paragraph}</p>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            Pursuing B.Tech in Computer Engineering at A.D. Patel Institute Of Technology. 
            Passionate about Cybersecurity and Full Stack Development.
          </p>
        </div>
        <div className="skills-list reveal">
          <div className="skill-category">
            <h4>Security Tools</h4>
            <ul>
              {props.data.Why.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h4>Core Expertise</h4>
            <ul>
              {props.data.Why2.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
