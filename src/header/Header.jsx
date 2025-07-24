import { gsap } from "gsap";
import React, { useEffect } from "react";
import "./Header.css";
import image from '../LOGO.png'

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".logo-letter", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.1
    })
    .from(".Logo img",{
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=0.5" 
    )
    .from(".nav-list h4", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.3")
  }, []);

  return (
    <div className="head">
      <h2>
        <span className="logo-letter">S</span>
        <span className="logo-letter">u</span>
        <span className="logo-letter">m</span>
        <span className="logo-letter">e</span>
        <span className="logo-letter">e</span>
        <span className="logo-letter">t</span>
      </h2>
      <div className="Logo">
      <img src={image} alt="not found" />
      </div>
      <div className="nav-list">
        <h4>Home</h4>
        <h4>Skill</h4>
        <h4>Certificate</h4>
        <h4>Project</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Header;
