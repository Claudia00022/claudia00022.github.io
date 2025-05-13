import React, { useRef, useLayoutEffect, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Scene from "./Scene";
import Arrow from "../../assets/photos/arrow.png";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects({ setActiveMenu, activeProject }) {
  // const container = useRef(null);
  // const contactSection = useRef(null);
  const [hover, setHover] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", `30vw end`],
  // });

  // const clipProgress = useTransform(scrollYProgress, [0, 1], [30, 0]);
  // const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: contactSection.current,
  //       pin: true,
  //       start: "top 5%",
  //       end: "+=1200",
  //       scrub: 1,
  //     },
  //   });
  //   return () => {
  //     tl.scrollTrigger?.kill();
  //     tl.kill();
  //   };
  // }, []);

  return (
    <>
      <div
        className="h-screen w-full  relative   z-10 overflow-hidden"
        style={{ backgroundColor: "#EEEFEE", borderLeft: '5px solid #5F605F', borderRight: '3px solid #5F605F' }}
      >
        <div className=" w-3/6  absolute top-0 ms-5 mt-16  -z-10">
          <p
            className="title mb-3 "
            style={{ color: '#4DB2C8', fontWeight: "bold"}}
          >
            04/
          </p>
          <p className="text" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>

        <Scene activeProject={activeProject} />

        <div
          onMouseLeave={() => {
            setActiveMenu(null);
            setHover(null);
          
          }}
          className="absolute center w-full  mt-36 "
          style={{ width: "calc(100vw - 60px)" }}
        >
          {projects_data.map((project, i) => (
            <motion.div
              onMouseOver={() => {
                setActiveMenu(i);
                setHover(i);
               
              }}
            
              // ref={container}
              key={project.id}
              className="flex items-center justify-between  h-36  "
              style={{
                borderBottom: hover === i ? "4px solid #5F605F" : "2px solid #5F605F",
                cursor: 'pointer'
              }}
            >
              {/* <div className="ms-5">
                <motion.a
                  href={project.link}
                  className="title "
                  style={{ color: hover === i ? "#FFFF99" : "#3f3b37" }}
                  animate={{ color: hover === i ? "#FFFF99" : "#3f3b37" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {project.title}
                </motion.a>
              </div> */}
              <div
                className="ms-5"
               
              >
                <motion.p className="flex space-x-1 title">
                  {project.title.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      animate={hover === i ? { x: 35 } : { y: 0 }} // Animate based on hover state
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: index * 0.05, // Stagger effect
                      }}
                      style={{ display: "inline-block", color: hover===i ? '#BB494C' : '#3F3B37' }} // #4DB2C8
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </div>

              <div className="flex items-center justify-end h-full w-96 xs:hidden md:block">
                <a
                  className="text text-right font-bold w-64  "
                  href={project.link}
                >
                  {hover === i ? (
                    <motion.img
                      className="w-10 h-10 absolute  right-5 "
                      src={Arrow}
                      alt="arrow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.img>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {project.content}
                    </motion.span>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
