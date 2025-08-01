import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skill1.css";

gsap.registerPlugin(ScrollTrigger);

const Skill1 = () => {
  useEffect(() => {
    const text = document.querySelector(".scroll-text");
    const distance = text.scrollWidth - window.innerWidth;

    gsap.to(".scroll-text", {
      x: -distance,
      scrollTrigger: {
        trigger: ".Main2",
        start: "top top",
        end: () => "+=" + distance,
        scrub: 1,
        pin: true,
        // anticipatePin: 1,
        // markers: true
      },
    });
  }, []);

  return (
    <div className="Main2" id="Skill">
      <h1 className="scroll-text">EXPERTISES</h1>
    </div>
  );
};

export default Skill1;
