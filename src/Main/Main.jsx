import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Main.css";

gsap.registerPlugin(ScrollTrigger);
const Main = () =>{
    useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".Hello", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    .from(".Self, .Name", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.5") 

    .from(".Profession", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3");

      gsap.to(".Main", {
      backgroundPosition: "center 300px",
      ease: "none",
      scrollTrigger: {
      trigger: ".Main",
      start: "top top",
      end: "bottom top",
      scrub: true,
   
      },
    });
      gsap.to(".Main2", {
      backgroundPosition: "center -200px",
      ease: "none",
      scrollTrigger: {
      trigger: ".Main",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      // markers:true
      },
    });
      gsap.from(".Quote-L1", {
      x:-400,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
      trigger: ".Main2",
      start: "top 90%",
      end: "top 30%",
      toggleActions: "play none none reverse",
      // markers: true,
      },
    });
      gsap.from(".Quote-L2", {
      x: 400,         
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
      trigger: ".Main2",
      start: "top 90%",
      end: "top 30%",
      toggleActions: "play none none reverse",
      // markers: true,
  },
    });
  }, []);

    return(
      <>
        <div className="Main">
        <div className="Main-Info">
            <div className="Hello">
            <h1>Hello</h1>
            <h1 className="Comma">,</h1>
            </div>
            <div className="Self">
            <h1>I</h1>
            <h1 className="Single-Quote">'</h1>
            <h1>M</h1> 
            </div>
            <div className="Name">
            <h1>SUMEET JADHAV</h1>
            <h1 className="Dot">.</h1>
            </div>
            <div className="Profession">
            <h3>Full Stack Developer</h3>
            </div>
        </div>
        </div>
        <div className="Main2">
          <div className="Quote">
            <h1 className="Quote-L1">“Keep calm and code on…</h1>
            <h1 className="Quote-L2">until the bug gives up!”</h1>
          </div>
        </div>
        <div className="Main3"></div>
      </>
       
    )
}
export default Main;