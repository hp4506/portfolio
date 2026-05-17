import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

// Components
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";

gsap.registerPlugin(ScrollTrigger);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    
    // Smooth GSAP reveals
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Navigation />
      
      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://github.com/hp4506" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
        <a href="https://linkedin.com/in/hp4506" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
        <a href="#" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
      </div>

      {/* Resume Button */}
      <a href="#" className="resume-btn" target="_blank" rel="noreferrer">
        RESUME <i className="fa fa-file-text-o"></i>
      </a>

      <main id="page-top">
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Projects data={landingPageData} />
        <Contact data={landingPageData.Contact} />
      </main>
      <footer>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>&copy; 2026 Hansal Patel. Built with React & GSAP.</p>
          <div className="social-links" style={{ display: 'flex', gap: '30px' }}>
             <a href="https://linkedin.com/in/hp4506" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>LinkedIn</a>
             <a href="https://github.com/hp4506" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
