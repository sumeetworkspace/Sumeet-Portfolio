import { gsap } from "gsap";
import React, { useEffect,useRef, useState } from "react";
import "./Header.css";
import image from './LOGO1.png'

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScroll = 0;
  
  useEffect(() => {
    const tl = gsap.timeline();

    // tl.from(".logo-letter", {
    //   y: 50,
    //   opacity: 0,
    //   duration: 0.6,
    //   ease: "back.out(1.7)",
    //   stagger: 0.1
    // })
    tl.from(".Logo img",{
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
    },
    // "-=0.5" 
    )
    .from(".nav-list h4", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.3")

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        headerRef.current.classList.add("hide");
        headerRef.current.classList.remove("show");
      } else {
        // Scrolling up
        headerRef.current.classList.remove("hide");
        headerRef.current.classList.add("show");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="head show" ref={headerRef}>
      {/* <h2>
        <span className="logo-letter">S</span>
        <span className="logo-letter">u</span>
        <span className="logo-letter">m</span>
        <span className="logo-letter">e</span>
        <span className="logo-letter">e</span>
        <span className="logo-letter">t</span>
      </h2> */}
      <div className="Logo">
      <img src={image} alt="not found" />
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <a href="#">
        <h4>Home</h4>
        </a>
        <a href="#Skill">
        <h4>Skill</h4>
        </a>
        <a href="#">
        <h4>Project</h4>
        </a>
        <a href="#">
        <h4>Contact</h4>
        </a>
        
      </div>
    </div>
  );
};

export default Header;