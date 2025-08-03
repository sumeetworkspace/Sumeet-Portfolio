import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import codingvideo from "./asset/coding1.mp4";
import codingBg from "./asset/codingbg.mp4";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
 useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 857px)", () => {
    // 💻 Desktop animations
    const tl = gsap.timeline();

    tl.from(".Main", {
      opacity: 0,
      x: 300,
      duration: 1,
    });

    tl.from(".Hello", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(".Self", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.5");

    tl.from(".Coding-Video", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=0.5");

    tl.from(".Name", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.5");

    tl.from(".Profession", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");

    gsap.to(".Main-bg", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".Main",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      }
    });

gsap.set(".Quote-L1", { x: -600, opacity: 0 });
gsap.set(".Quote-L2", { x: 600, opacity: 0 });

ScrollTrigger.create({
  trigger: ".Main1",
  start: "top 70%",
  end: "bottom 30%",
  // markers: true,
  onEnter: () => {
    gsap.to(".Quote-L1", { x: 0, opacity: 1, duration: 1.5 });
    gsap.to(".Quote-L2", { x: 0, opacity: 1, duration: 1.5 });
  },
  onLeave: () => {
    gsap.to(".Quote-L1", { x: -600, opacity: 0, duration: 1.5 });
    gsap.to(".Quote-L2", { x: 600, opacity: 0, duration: 1.5 });
  },
  onEnterBack: () => {
    gsap.to(".Quote-L1", { x: 0, opacity: 1, duration: 1.5 });
    gsap.to(".Quote-L2", { x: 0, opacity: 1, duration: 1.5 });
  },
  onLeaveBack: () => {
    gsap.to(".Quote-L1", { x: -600, opacity: 0, duration: 1.5 });
    gsap.to(".Quote-L2", { x: 600, opacity: 0, duration: 1.5 });
  }
});


    gsap.set(".About", { width: 700, height: 350, padding:17});
    gsap.set(".About p", { fontSize: 19 });
    gsap.set(".About .button-Resume", { width: 120, height: 25, fontSize: 12 });

     ScrollTrigger.create({
      trigger: ".Main1",
      start: "top+=200 70%",
      end: "bottom-=100 30%",
      onEnter: () => {
        gsap.to(".About", { width: 900, height: 600, padding:17, duration: 1, ease: "sine.inOut" });
        gsap.to(".About p", { fontSize: 25, duration: 1, ease: "sine.inOut" });
        gsap.to(".About .button-Resume", { width: 180, height: 30, fontSize: 18, duration: 1, ease: "sine.inOut" });
      },
      onLeaveBack: () => {
        gsap.to(".About", { width: 700, height: 350, padding:17, duration: 1, ease: "sine.inOut" });
        gsap.to(".About p", { fontSize: 19, duration: 1, ease: "sine.inOut" });
        gsap.to(".About .button-Resume", { width: 120, height: 25, fontSize: 12, duration: 1, ease: "sine.inOut" });
      }
    });

    // ScrollTrigger.create({
    //   trigger: ".Main1",
    //   start: "top+=200 50%",
    //   end: "bottom-=100 50%",
    //   onEnter: () => {
    //     gsap.to(".About", { width: 800, height: 500, padding:17, duration: 1 });
    //     gsap.to(".About p", { fontSize: 24, duration: 1 });
    //     gsap.to(".About .button-Resume", { width: 180, height: 30, fontSize: 18, duration: 1 });
    //   }
    // });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  });

  mm.add("(max-width: 400px)", () => {
    // 📱 Mobile styles only
   const tl = gsap.timeline();

    tl.from(".Main", {
      opacity: 0,
      x: 300,
      duration: 1.2,
    });

    tl.from(".Hello", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.from(".Self", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.5");

    tl.from(".Coding-Video", {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    }, "-=0.5");

    tl.from(".Name", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.5");

    tl.from(".Profession", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.5");

    gsap.to(".Main-bg", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".Main",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      }
    });

  gsap.set(".Quote-L1", { x: -800, opacity: 0 });
  gsap.set(".Quote-L2", { x: 800, opacity: 0 });

  ScrollTrigger.create({
    trigger: ".Main1",
    start: "top+=50 100%",
    end: "bottom 30%",
    markers: true,
    onEnter: () => {
      gsap.to(".Quote-L1", { x: 0, opacity: 1, duration: 5.5,ease: "power1.in" });
      gsap.to(".Quote-L2", { x: 0, opacity: 1, duration: 5.5,ease: "power1.in" });
    },
    onLeave: () => {
      gsap.to(".Quote-L1", { x: -600, opacity: 0, duration: 1.5 });
      gsap.to(".Quote-L2", { x: 600, opacity: 0, duration: 1.5 });
    },
    onEnterBack: () => {
      gsap.to(".Quote-L1", { x: 0, opacity: 1, duration: 1.5 });
      gsap.to(".Quote-L2", { x: 0, opacity: 1, duration: 1.5 });
    },
    onLeaveBack: () => {
      gsap.to(".Quote-L1", { x: -600, opacity: 0, duration: 1.5 });
      gsap.to(".Quote-L2", { x: 600, opacity: 0, duration: 1.5 });
    }
  });

  gsap.set(".About", { width: 280, height: 140, padding:8});
  gsap.set(".About p", { fontSize: 7 });
  gsap.set(".About .button-Resume", { width: 80, height: 15, fontSize: 6 });

     ScrollTrigger.create({
      trigger: ".Main1",
      start: "top+=100 70%",
      end: "bottom-=100 30%",
      // markers:true,
      onEnter: () => {
        gsap.to(".About", { width: 350, height: 300, padding:10, duration: 1,ease: "sine.inOut" });
        gsap.to(".About p", { fontSize: 13, duration: 1,ease: "sine.inOut" });
        gsap.to(".About .button-Resume", { width: 120, height: 30, fontSize: 10, duration: 1,ease: "sine.inOut" });
      },
      onLeaveBack: () => {
        gsap.to(".About", { width: 280, height: 140, padding:8, duration: 1, ease: "sine.inOut"  });
        gsap.to(".About p", { fontSize: 7, duration: 1, ease: "sine.inOut" });
        gsap.to(".About .button-Resume", { width: 80, height: 15, fontSize: 6, duration: 1, ease: "sine.inOut" });
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  return (
    <>
      <div className="Main" id="Home">
        <div className="Main-bg"></div>
        <div className="Main-Info">
          <div className="Hello">
            <h1>Hello</h1>
            <h1 className="Comma">,</h1>
          </div>
          <div className="Self">
            <h1>I</h1>
            <h1 className="Single-Quote">'</h1>
            <h1>M</h1>
            <div className="Coding-Video">
              <video autoPlay muted loop>
                <source src={codingvideo} type="video/mp4" />
              </video>
            </div>
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

      <div className="Main1">
        <div className="Main1-video-bg">
          <video autoPlay muted loop className="Main1-bg-video">
            <source src={codingBg} type="video/mp4" />
          </video>
        </div>

        <div className="Quote">
          <h1 className="Quote-L1">“Keep calm and code on…</h1>
          <h1 className="Quote-L2">until the bug gives up!”</h1>
        </div>

        <div className="About">
          <div className="About-Me">
          <p>
            I am an enthusiastic Full Stack Developer with skills in HTML, CSS,
            JavaScript, React, Bootstrap, and frameworks like GSAP for
            animations. I work with MySQL for database management and have a
            strong foundation in Java as a programming language, which enhances
            my problem-solving abilities. I am passionate about building modern,
            user-friendly web applications and continuously improving my skills
            to contribute to impactful projects and innovative solutions.
          </p>
          </div>
          <button type="button" className="button-Resume"> 
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
 


