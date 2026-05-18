import React from "react";

export const Contact = (props) => {
  return (
    <section id="contact" className="contact-hero">
      <span className="section-label">Connect</span>
      <h2 className="reveal">Let's work together.</h2>
      <div className="reveal">
        <a href={`mailto:${props.data?.email || 'hansal@example.com'}`} className="email-btn">
          {props.data?.email || "Get in Touch"}
        </a>
      </div>
      <div className="contact-details reveal">
        <p className="contact-phone">{props.data?.phone}</p>
        <p className="contact-address">{props.data?.address}</p>
      </div>
    </section>
  );
};
