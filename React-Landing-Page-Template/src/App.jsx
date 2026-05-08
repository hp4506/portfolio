import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    
    // Cursor Glow Effect
    const cursor = document.querySelector(".cursor-glow");
    const handleMouseMove = (e) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // GSAP Animations
    const ctx = gsap.context(() => {
      gsap.from(".intro h1", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out"
      });

      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out"
        });
      });


      gsap.to(".scroll-progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert(); // Cleanup GSAP
    };
  }, []);

  return (
    <div>
      <div className="cursor-glow"></div>
      <div className="scroll-progress"></div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      {landingPageData.Project1 && <Projects data={landingPageData} />}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
