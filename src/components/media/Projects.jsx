import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Scene from "./Scene";
import Arrow from "../../assets/photos/arrow.png";
import { ArrowRight } from "lucide-react";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px to Tailwind 'lg'
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLargeScreen;
}

function Projects({ setActiveMenu, activeProject }) {
  const [hover, setHover] = useState(null);
  const isLargeScreen = useIsLargeScreen();
  const MotionRightArrow = motion(ArrowRight);

  return (
    <>
      <div
        className="min-h-screen w-full relative z-10 overflow-y-auto pt-10 pb-10 flex flex-col justify-start xl:gap-12 bg-[#0D0D0D]"
        style={{
          borderBottom: "2px solid #373737",
        }}
      >
        {/* title */}
        <div className="lg:w-3/6 mb-10 pb-5 xs:ps-3 xl:ps-48 pe-4 ">
          <p className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ">
            04/
          </p>
          <p className="title xs:text-5xl lg:text-7xl text-[#A89C89]">
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>
        {/* animation with images */}
        <Scene activeProject={activeProject} />

        <div
          onMouseLeave={() => {
            setActiveMenu(null);
            setHover(null);
          }}
        >
          {projects_data.map((project, i) => (
            <motion.div
              onMouseOver={() => {
                setActiveMenu(i);
                setHover(i);
              }}
              key={project.id}
              className="w-full flex xs:flex-col lg:flex-row justify-start xs:ps-3 xl:ps-48 items-center"
              style={{
                borderBottom:
                  hover === i ? "2px solid #373737" : "1px solid #373737",
                cursor: "pointer",
              }}
            >
              {/* Project title animation */}{" "}
              <div className="xs:w-full lg:w-1/3 pt-3 pb-3  ">
                {" "}
                <a href={project.link}>
                  <motion.p className=" space-x-0.5 title xs:text-5xl lg:text-7xl pt-3 pb-3 text-[#f5b061]">
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
                          color: hover === i ? "#A89C89" : "#f5b061",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </a>
              </div>
              {/* Large device project content */}
              <div className=" xs:w-full lg:w-1/3 xs:hidden lg:block  ">
                {" "}
                <a
                  className=" flex justify-around items-center  text text-[#A89C89]"
                  href={project.link}
                >
                  <motion.span
                    className={`transition-colors duration-300 ${
                      hover === i ? "text-[#f5b061]" : "text-[#A89C89]"
                    }`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                  >
                    {project.content}
                  </motion.span>

                  {hover === i && isLargeScreen && (
                    <MotionRightArrow
                      className="w-10 h-10 inline-block text-[#A89C89] "
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </a>
              </div>

               {/* Small device project content */}
               <div className=" xs:flex justify-between items-center lg:hidden w-full pt-2 pb-2  text-[#A89C89] pe-3  ">
                 <div className="w-3/4">
                   <p className="text text-start font-bold">{project.content}</p>
                 </div>
                  <MotionRightArrow
                      className="w-10 h-10 inline-block text-[#A89C89] "
                    />
               </div>
           
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;

  
