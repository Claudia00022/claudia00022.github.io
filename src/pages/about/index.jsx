import React, { useLayoutEffect, useRef } from "react";
import "./about.style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() =>{

    const tl = gsap.timeline({scrollTrigger:{
      trigger: sectionRef.current,
       markers: true,
       pin: true,
       start:'top 20%',
        end: "+=800",
        scrub: 1,
    }
  });
  return () => {
    tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
    tl.kill(); // Kill the GSAP timeline
  };
  }, [])

  return (
    <>
      
      <div className=" relative h-screen "  >
      <div className="absolute top-10 left-52 w-6/12 " ref={sectionRef}>
       <h1 className="text-left title">ABOUT</h1>
        <p className="text font-bold">
          I am freelance frontend developer with a passion for creating dynamic
          and responsive web applications using the React framework.I have honed
          my skills in building user-friendly interfaces and implementing best
          practices in web development. My commitment to staying updated with
          the latest technologies ensures that I deliver modern and efficient
          solutions to my clients. With a passion for art, I thrive on
          collaborating with individuals and businesses that value aesthetics
          and recognize the power of simplicity.
        </p>
        <p className="title text-left">SKILLS</p>
        <p className="text">
          {" "}
          -Core Technologies: HTML5, CSS3, JavaScript (ES6+)
        </p>
        <p className="text">
          -React: React.js, Redux, Context API, React Router, React Hooks
        </p>
        <p className="text">
          -Styling: CSS Modules, Styled-components, Sass, Tailwind CSS
        </p>
        <p className="text">
          -TypeScript: Strong proficiency in TypeScript for robust and type-safe
          applications
        </p>
        <p className="text mb-52 ">-Version Control: Git, GitHub, GitLab</p>
        </div>
      </div>
     
    </>
  );
}

export default About;
