import React from "react";

export const Header = (props) => {
  return (
    <header className="hero">
      <h1 className="reveal">
        {props.data ? props.data.title : "HANSAL PATEL"}
      </h1>
      <p className="reveal">
        {props.data ? props.data.paragraph : "Cybersecurity Professional & Computer Engineer based in Gandhinagar."}
      </p>
      <div style={{ marginTop: '40px' }} className="reveal">
        <a href="#portfolio" className="email-btn" style={{ fontSize: '1rem', textTransform: 'uppercase' }}>View My Works</a>
      </div>
    </header>
  );
};
