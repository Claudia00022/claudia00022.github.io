import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scene from "./media/Scene";
import PixelBackground from "./pixelBackground";
import { ArrowRight } from "lucide-react";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects({ setActiveMenu, activeProject }) {
  const [hover, setHover] = useState(null);
  const MotionRightArrow = motion(ArrowRight);
  const [sectionActive, setSectionActive] = useState(false);
    const sectionRef = useRef(null);

     const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start scroll at bottom of screen
  });

    // Parallax efekt: przesuwaj od 0px do 100px w dół
  const y = useTransform(scrollYProgress, [0, 1], [150,0]);

  return (
    <>
      {/* <div
        className="min-h-screen w-full relative z-10 overflow-y-auto xs:pt-5 lg:pt-10  flex flex-col justify-start xl:gap-12 bg-[#0D0D0D]"
        style={{ borderBottom: "1px solid  #373737" }}
      >
        title
        <div className="lg:w-3/6 mb-10 pb-5 xs:ps-3 xl:ps-40 pe-4 ">
          <p className="text-base xl:text-xl text-[#EB5939] opacity-50 font-[700] ">
            04/
          </p>
          <p className="title xs:text-5xl lg:text-7xl text-[#A89C89]">
            Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)
          </p>
        </div>
        animation with images
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
              className=" flex xs:flex-col lg:flex-row justify-between xs:ms-3 xl:ms-40 xl:me-40 xs:me-3 items-center"
              style={{
                borderBottom: i === 0 ? "1px solid #373737" : "none",
                cursor: "pointer",
              }}
            >
              Project title animation{" "}
              <div className="xs:w-full lg:w-1/2 pt-3 pb-3  ">
                {" "}
                <a href={project.link}>
                  <motion.p className=" space-x-0.5 title xs:text-5xl lg:text-8xl pt-3 pb-3">
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
                          color: hover === i ? "#EB5939" : "#A89C89",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </a>
              </div>
              Large device project content
              <div className=" xs:w-full lg:w-1/3 xs:hidden lg:block">
                {" "}
                <a
                  className="text text-[#A89C89] font-bold"
                  href={project.link}
                >
                  <motion.span
                    className={`transition-colors duration-500 ${
                      hover === i ? "text-[#EB5939]" : "text-[#A89C89]"
                    }`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 1 }}
                  >
                    {project.content}
                  </motion.span>
                </a>
              </div>
              Small device project content
              <div className=" xs:flex justify-between items-center lg:hidden w-full pt-2 pb-2  text-[#A89C89] pe-3  ">
                <div className="w-3/4">
                  <p className="text text-start font-bold">{project.content}</p>
                </div>
                <MotionRightArrow className="w-10 h-10 inline-block text-[#A89C89] " />
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="relative w-full min-h-screen overflow-hidden">
        {/* PixelBackground jako background */}
        <PixelBackground />

        {/* GŁÓWNY KONTENT */}
        <div ref={sectionRef} className=" flex flex-col w-full h-screen pt-10 px-6 xl:px-40 mb-10">
          {/* Nagłówek */}
          <div className="lg:w-full flex flex-row items-center justify-between ">
            <div className=" w-1/2 h-full ">
              <p className="text-base xl:text-xl text-[#0D0D0D] opacity-50 font-[700]">
                04/
              </p>
              <p className="title xs:text-5xl lg:text-7xl text-[#0D0D0D]">
                Stuff I Built
                <br /> (That Didn’t <br />
                Fall Apart)
              </p>
            </div>
            <div className="h-full">
              <p className="title text-[15rem] text-[#A89C89]">01</p>
            </div>
          </div>
   {/* DOLNA SEKCJA animowana */}
        <motion.div
          style={{ y }} // tutaj podłączasz animację
          className="flex flex-row items-center w-full h-1/2 gap-10 "
        >
          <div className="w-1/2 h-full">
            <div
              className="h-full w-full bg-cover bg-center relative rounded flex items-center"
              style={{ backgroundImage: "url('/img/vPmuWeb.jpg')" }}
            >
              <div className="absolute top-0 left-0 bg-[#0D0D0D] w-full h-full opacity-10"></div>
            </div>
          </div>

          <div className="w-1/2 text-end">
            <a className="space-x-0.5 title xs:text-5xl lg:text-8xl pt-3 pb-3 text-[#0D0D0D]">
              vpmu-studio
            </a>
            <p className="text font-bold text-[#0D0D0D]">
              Apr 2023 / Design & Dev
            </p>
          </div>
        </motion.div>
        </div>
      </div>

           <div className="relative w-full min-h-screen overflow-hidden">
        {/* PixelBackground jako background */}
        <PixelBackground />

        {/* GŁÓWNY KONTENT */}
        <div ref={sectionRef} className=" flex flex-col w-full h-screen pt-10 px-6 xl:px-40 mb-10">
          {/* Nagłówek */}
          <div className="lg:w-full flex flex-row items-center justify-between ">
            <div className=" w-1/2 h-full ">
              <p className="text-base xl:text-xl text-[#0D0D0D] opacity-50 font-[700]">
                04/
              </p>
              <p className="title xs:text-5xl lg:text-7xl text-[#0D0D0D]">
                Stuff I Built
                <br /> (That Didn’t <br />
                Fall Apart)
              </p>
            </div>
            <div className="h-full">
              <p className="title text-[15rem] text-[#A89C89]">01</p>
            </div>
          </div>
   {/* DOLNA SEKCJA animowana */}
        <motion.div
          style={{ y }} // tutaj podłączasz animację
          className="flex flex-row items-center w-full h-1/2 gap-10 "
        >
          <div className="w-1/2 h-full">
            <div
              className="h-full w-full bg-cover bg-center relative rounded flex items-center"
              style={{ backgroundImage: "url('/img/vPmuWeb.jpg')" }}
            >
              <div className="absolute top-0 left-0 bg-[#0D0D0D] w-full h-full opacity-10"></div>
            </div>
          </div>

          <div className="w-1/2 text-end">
            <a className="space-x-0.5 title xs:text-5xl lg:text-8xl pt-3 pb-3 text-[#0D0D0D]">
              vpmu-studio
            </a>
            <p className="text font-bold text-[#0D0D0D]">
              Apr 2023 / Design & Dev
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects;
