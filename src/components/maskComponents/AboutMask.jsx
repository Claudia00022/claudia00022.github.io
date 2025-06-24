import React, { useLayoutEffect, useRef } from "react";
// import "../../pages/AboutSection/about.style.css";
import AnimatedText from "../AnimatedText";
import {
  useScroll,
  motion,
  useInView,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutMask(props) {
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
      <div className="relative h-screen -z-10 ">
        <div className=" absolute center  w-6/12 " ref={sectionRef}>
          <div
           onMouseEnter={props.handleHover}
           onMouseLeave={props.handleHoverBack}
        
          >
            <h1 className="title text-slate-950 mb-2">ABOUT</h1>
          </div>

          <p
            className="text font-bold"
            style={{ color: "black" }}
            onMouseEnter={props.handleHover}
            onMouseLeave={props.handleHoverBack}
          >
            I am <span className="text-red-300">FREELANCE</span> frontend developer with a passion for creating
            dynamic and responsive web applications using the React framework.I
            have honed my skills in building user-friendly interfaces and
            implementing best practices in web development. My commitment to
            staying updated with the latest technologies ensures that I deliver
            modern and efficient solutions to my clients. With a passion for
            art, I thrive on collaborating with individuals and businesses that
            value aesthetics and recognize the power of simplicity why klaudia
          </p>

          <h1 className="text mt-10">SKILLS</h1>
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

          <p className="text" style={{ color: "red" }}>
            {" "}
            -Core Technologies: HTML5, CSS3, JavaScript (ES6+)
          </p>
          <p className="text" style={{ color: "red" }}>
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

export default AboutMask;
