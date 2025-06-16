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
        className="min-h-screen xs:min-h-[90vh] md:min-h-[80vh] xl:min-h-screen w-full relative z-10 overflow-y-auto pt-10 pb-10 flex flex-col justify-start xl:gap-12"
        style={{
          backgroundColor: "#EEEFEE",
          borderLeft: "5px solid #5F605F",
          borderRight: "5px solid #5F605F",
        }}
      >

        <div className="lg:w-3/6 mb-10 pb-5 bg-slate-50 ps-4 pe-4 ">
          <p
              className="text xs:text-base xl:text-2xl"
              style={{ color: "#3F3B37", opacity: 1 }}
          >
            04/
          </p>
          <p
            className="title text-black"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>

        {/* <Scene activeProject={activeProject} /> */}

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
              className="flex xs:flex-col-reverse lg:flex-row items-center justify-between  "
              style={{
                borderBottom:
                  hover === i ? "4px solid #5F605F" : "2px solid #5F605F",
                cursor: "pointer",
              }}
            >
              {" "}
              <div className="xs:w-full lg:w-1/2 xs:m-auto lg:ms-5  pt-3 pb-3">
                {" "}
                <a href={project.link}>
                  <motion.p className="flex space-x-1 title xs:justify-self-start">
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

              <div className=" xs:flex justify-between items-center lg:hidden w-full pt-2 pb-2  ">
              <div className="w-3/4">
                <p className="text text-start font-bold">{project.content}</p>
              </div>
               <div className="w-7">
               <img src={Arrow} alt="arrow"></img>
               </div>
              </div>

              {/* <div className="flex items-center xs:w-full lg:w-96 xs:m-auto xs:hidden lg:block">
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
              </div> */}
            </motion.div>
          ))}
        </div>
        </div>
    </>
  );
}

export default Projects;
