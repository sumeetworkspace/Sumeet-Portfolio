import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Skill2.css';
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JAVASCRIPT", level: 87 },
  { name: "REACT", level: 86 },
  { name: "BOOTSTRAP", level: 75 },
  { name: "GSAP", level: 85 },
  { name: "MYSQL", level: 90 },
  { name: "JAVA", level: 70 }
];

const Skill2 = () => {
  useEffect(() => {
      gsap.from(".Container", {
      
      opacity: 0,
      scale: 0,
      // y: 200,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".Container",
        start: "top+=-400 80%",
        toggleActions: "play none none reverse",
        // markers:true
      }
    });
    // Animate each bar when scrolling into view
    gsap.utils.toArray(".fill").forEach((bar, i) => {
      const width = bar.getAttribute("data-width");
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: width + "%",
          duration: 1.5,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: ".Container  ",
            start: "top+=-400 80%",
            toggleActions: "play none none reverse",
            // markers:true

          }
        }
      );
    });
  }, []);

  return (
    <div className="Main3">
      <div className="Container">
        <h1>PROFESSIONAL SKILLS</h1>
        <h2>MY KNOWLEDGE LEVEL IN SOFTWARE</h2>

        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill.name}</p>
            <div className="bar">
              {/* store level in data-width so GSAP can read it */}
              <div className="fill" data-width={skill.level}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill2;
