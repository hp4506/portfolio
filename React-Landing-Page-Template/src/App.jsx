import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
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
    
    // GSAP Animations
    gsap.from(".intro h1", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.from(".intro p", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out"
    });

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
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
  }, []);


  return (
    <div>
      <div className="scroll-progress"></div>
      <Navigation />
      <Header data={landingPageData.Header} />

      <About data={landingPageData.About} />
      <Features data={landingPageData.Project1} id="project1" />
      <Services data={landingPageData.Project2} id="project2" />
      <Gallery data={landingPageData.Project3} id="project3" />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

