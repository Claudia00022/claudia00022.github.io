import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./about.style.css";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useInView,
} from "framer-motion";
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



  function AnimatedText() {
    const text = "klaudia";

    const defaultAnimations = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

  
    return (
      <>
      <>
      <div  style={{pointerEvents: 'none'}}> 
        <span className=" sr-only ">{text}</span>
        <div ref={ref}>
        <motion.span
          className="title"
          aria-hidden
          initial="hidden"
          animate= {isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1 }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.span>
          ))}
        </motion.span>
        </div>
        </div>
        </>
      </>
    );
  }

  return (
    <>
      <div className=" relative h-screen -z-10 border-t border-b border-gray-500 ">
      <div className="absolute top-10 left-52">
      <AnimatedText />
      </div>
        <div className=" absolute center w-6/12" ref={sectionRef}>
          {/* <motion.p className="text-left title " style={{ clipPath: clip }}>
            ABOUT ME
          </motion.p> */}
       
          <p className="text font-bold ">
            I am freelance frontend developer with a passion for creating
            dynamic and responsive web applications using the React framework.I
            have honed my skills in building user-friendly interfaces and
            implementing best practices in web development. My commitment to
            staying updated with the latest technologies ensures that I deliver
            modern and efficient solutions to my clients. With a passion for
            art, I thrive on collaborating with individuals and businesses that
            value aesthetics and recognize the power of simplicity.
          </p>
          {/* <motion.p className="text-left title" style={{ clipPath: clip }}>
            SKILLS
          </motion.p> */}
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
