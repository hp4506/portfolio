import React from "react";

export const Navigation = (props) => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="nav-email">example@mail.com</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#portfolio">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
