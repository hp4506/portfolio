import React from "react";

export const Contact = (props) => {
  const email = props.data?.email || "hansalp06@gmail.com";
  const subject = "Collaboration / Project Inquiry";
  const body = `Hi Hansal,

I visited your portfolio and would love to connect regarding a potential project or collaboration!

Here is a brief description of what I have in mind:
- Project Type: [e.g., Custom Website, Cybersecurity Audit, Security Consulting]
- Estimated Timeline: [e.g., 2 weeks, 1 month, Flexible]
- Additional Details: 

Looking forward to connecting!

Best regards,
[Your Name]`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="contact-hero">
      <span className="section-label">Connect</span>
      <h2 className="reveal" style={{ marginBottom: "15px" }}>Let's work together.</h2>
      <p className="reveal" style={{ color: "#888", fontSize: "1.1rem", marginBottom: "40px", fontWeight: "300" }}>
        Click below to instantly open a pre-filled email and start a conversation.
      </p>
      <div className="reveal">
        <a href={mailtoUrl} className="connect-btn">
          Let's Connect
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
      <div className="contact-details reveal" style={{ marginTop: "60px" }}>
        <p className="contact-phone" style={{ opacity: 0.6 }}>{props.data?.phone}</p>
        <p className="contact-address" style={{ opacity: 0.6 }}>{props.data?.address}</p>
      </div>
    </section>
  );
};

