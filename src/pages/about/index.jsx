import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./about.style.css";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useInView,
} from "framer-motion";
import AnimatedText from "../../components/AnimatedText";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About(props) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top 20%",
        end: "+=1000",
        scrub: 1,
      },
    });
    return () => {
      tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
      tl.kill(); // Kill the GSAP timeline
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", `80vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;




  return (
    <>
      <div className=" relative h-screen -z-10 border-t border-b border-gray-500 ">
    
        <div className=" absolute center w-6/12" ref={sectionRef}>
         <div className="mb-2">
          <AnimatedText />
          </div>
       
          <p className="text font-bold ">
            I am <span className=" text-red-300">FREELANCE </span> frontend developer with a passion for creating
            dynamic and responsive web applications using the React framework.I
            have honed my skills in building user-friendly interfaces and
            implementing best practices in web development. My commitment to
            staying updated with the latest technologies ensures that I deliver
            modern and efficient solutions to my clients. With a passion for
            art, I thrive on collaborating with individuals and businesses that
            value aesthetics and recognize the power of simplicity.
          </p>
         
           <h1 className="text mt-10 text-red-300">SKILLS</h1>
           <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "#F3DFC1",
              }}
              className="mt-10"
            ></div>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "#F3DFC1",
              }}
              className="mt-5"
            ></div>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "#F3DFC1",
              }}
              className="mt-5"
            ></div>
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
            -TypeScript: Strong proficiency in TypeScript for robust and
            type-safe applications
          </p>
          <p className="text mb-52 ">-Version Control: Git, GitHub, GitLab</p>
        </div>
      </div>
    </>
  );
}

export default About;
