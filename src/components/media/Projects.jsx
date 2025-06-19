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
        className="min-h-screen xs:min-h-[90vh] md:min-h-[80vh] xl:min-h-screen w-full relative z-10 overflow-y-auto pt-10 pb-10 flex flex-col justify-start xl:gap-12 bg-[#0D0D0D]"
        style={{
          borderBottom: "2px solid #373737",
        }}
      >
        <div className="lg:w-3/6 mb-10 pb-5 ps-4 pe-4 ">
          <p className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ">
            04/
          </p>
          <p className="title xs:text-5xl lg:text-7xl text-[#A89C89]">
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>

        <Scene activeProject={activeProject} />

        <div
          onMouseLeave={() => {
            setActiveMenu(null);
            setHover(null);
          }}
          className="ps-4 pe-4"
        >
          {projects_data.map((project, i) => (
            <motion.div
              onMouseOver={() => {
                setActiveMenu(i);
                setHover(i);
              }}
              key={project.id}
              className="flex xs:flex-col lg:flex-row items-center   "
              style={{
                borderBottom:
                  hover === i ? "4px solid #5F605F" : "2px solid #5F605F",
                cursor: "pointer",
              }}
            >
              {/* Project title animation */}
              {" "}
              <div className="xs:w-full lg:w-1/3 xs:m-auto lg:ms-5  pt-3 pb-3 ">
                {" "}
                <a href={project.link}>
                  <motion.p className="flex space-x-0.5  xs:justify-self-start title xs:text-5xl lg:text-7xl pt-3 pb-3 text-[#f5b061]">
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
                          color: hover === i ? "#f5b061" : "#A89C89",
                        }} 
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </a>
              </div>

              {/* Small device project content */}
              <div className=" xs:flex justify-between items-center lg:hidden w-full pt-2 pb-2  ">
                <div className="w-3/4">
                  <p className="text text-start font-bold">{project.content}</p>
                </div>
                <div className="w-7">
                  <img src={Arrow} alt="arrow"></img>
                </div>
              </div>
              {/* Large device project content */}
              <div className="flex items-center xs:w-full lg:w-1/3 xs:m-auto xs:hidden lg:block justify-center  ">
                {" "}
                <a
                  className="text text-[#A89C89] text-right "
                  href={project.link}
                >
                  {hover === i ? (
                    <motion.img
                      className="w-10 h-10 absolute right-5 bg-blue-500 "
                      src={Arrow}
                      alt="arrow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.img>
                  ) : (
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }}
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
