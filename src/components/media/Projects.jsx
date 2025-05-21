import React, { useState } from "react";
import { motion } from "framer-motion";
import Scene from "./Scene";
import Arrow from "../../assets/photos/arrow.png";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects({ setActiveMenu, activeProject }) {
  const [hover, setHover] = useState(null);

  return (
    <>
      <div
        className="h-screen w-full relative z-10 overflow-hidde"
        style={{
          backgroundColor: "#EEEFEE",
          borderLeft: "5px solid #5F605F",
          borderRight: "3px solid #5F605F",
        }}
      >
        <div className="w-3/6 absolute top-0 ms-5 mt-16 -z-10">
          <p
            className="title mb-3 "
            style={{ color: "#4DB2C8", fontWeight: "bold" }}
          >
            04/
          </p>
          <p
            className="text"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
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
              key={project.id}
              className="flex xs:flex-col lg:flex-row items-center justify-between h-36"
              style={{
                borderBottom:
                  hover === i ? "4px solid #5F605F" : "2px solid #5F605F",
                cursor: "pointer",
              }}
            >
              {" "}
              <div className="xs:w-full lg:w-1/2 xs:m-auto lg:ms-5">
                {" "}
                <a href={project.link}>
                  <motion.p className="flex space-x-1 title xs:justify-self-center">
                    {project.title.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        animate={hover === i ? { x: 35 } : { y: 0 }} // Animate based on hover state
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                          delay: index * 0.05, // Stagger effect
                        }}
                        style={{
                          display: "inline-block",
                          color: hover === i ? "#BB494C" : "#3F3B37",
                        }} // #4DB2C8
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </a>
              </div>
              <div className="flex items-center xs:w-full lg:w-96 xs:m-auto">
                {" "}
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
