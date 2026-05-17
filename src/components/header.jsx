import React from "react";

export const Header = (props) => {
  return (
    <header className="hero">
      <div className="hero-left reveal">
        <h2 className="hero-subtitle">Hello! I'm</h2>
        <h1 className="hero-title-white">
          HANSAL<br />PATEL
        </h1>
      </div>

      <div className="hero-image-container reveal">
        {/* Replace this with one of the provided character images named hero-image.png in the public/img folder */}
        <img src="img/hero-image.png" alt="Hero Character" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
      </div>

      <div className="hero-right reveal">
        <h2 className="hero-subtitle">A Creative</h2>
        <h1 className="hero-title-dark">DESIGNER</h1>
        <h1 className="hero-title-white">DEVELOPER</h1>
      </div>
    </header>
  );
};
