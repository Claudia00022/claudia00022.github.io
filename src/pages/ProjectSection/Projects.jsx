import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Scene from "./media/Scene";
import PixelBackground from "./pixelBackground";
import { MoveUpRight } from "lucide-react";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects({ setActiveMenu, activeProject }) {
  const [hover, setHover] = useState(null);
  // const MotionRightArrow = motion(ArrowRight);
  const sectionRef = useRef(null);

  return (
    <>
      <div
        className="min-h-screen w-full relative z-10 overflow-hidden flex flex-col justify-start  "
        style={{ borderBottom: "1px solid  #373737" }}
      >
        <PixelBackground />

        {/* title */}
        <div className="lg:w-3/6 mb-10 lg:pb-20 xs:ps-3 xl:ps-40 pe-4 xs:pt-10 lg:pt-20   ">
          <p className="text-base xl:text-xl text-[#19b9e6] opacity-50 font-[700] ">
            04/
          </p>
          <p className="title xs:text-5xl lg:text-7xl text-[#0D0D0D]">
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>
        {/* animation with images */}
        <Scene
          activeProject={activeProject}
        />

        <div
          onMouseLeave={() => {
            setActiveMenu(null);
            setHover(null);
          }}
        >
          {projects_data.map((project, i) => (
            <a href={project.link}
            key={i}
                target="_blank"
                  rel="noopener noreferrer">
            <motion.div
              onMouseOver={() => {
                setActiveMenu(i);
                setHover(i);
              }}
              ref={sectionRef}
              key={project.id}
              className=" flex xs:flex-col lg:flex-row justify-between xs:ms-3 xl:ms-40 xl:me-40 xs:me-3 items-center  "
              style={{
                borderBottom: i === 0 ? "1px solid #373737" : "none",
                cursor: "pointer",
              }}
            >
              {/* Project title{" "} */}
              <div className="xs:w-full lg:w-1/2 pt-3 pb-3 relative ">
                {" "}
               
                  <p className=" space-x-0.5 title xs:text-5xl lg:text-8xl pt-3 pb-3  lg:ms-20 text-[#0D0D0D]  ">
                    {project.title}
                  </p>
              
                <p
                  className={`xs: hidden lg:block absolute  -top-10 left-0 w-full h-full text text-[#A89C89] font-bold  text-9xl -z-10 transition-all duration-500 ease-out ${
                    hover === i ? "-translate-x-3" : "translate-x-0"
                  }`}
                >
                  {project.number}
                </p>
              </div>
              {/*Project content */}
              <div className=" xs:w-full lg:w-1/3   ">
                {" "}
                <div
                  className="text text-[#0D0D0D] font-bold flex justify-between items-center"
      
                >
                  <motion.p>{project.content}</motion.p>
                  <MoveUpRight
                    className="w-10 h-10 inline-block text-[#0D0D0D] "
                  />
                </div>
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
