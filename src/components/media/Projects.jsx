import React, { useRef, useLayoutEffect, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Scene from "./Scene";
import { projects_data } from "../../projects_data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//Styles
// import "./media.style.css";

function Projects({ setActiveMenu, activeProject}) {
  // const [activeProject, setActiveProject] = useState('red');
  const container = useRef(null);
  const contactSection = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `30vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactSection.current,
        pin: true,
        start: "top 5%",
        end: "+=1200",
        scrub: 1,
      },
    });
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  // State to track the hovered ID
  // const [hoveredId, setHoveredId] = useState(null);

  // Handler for mouse enter
  // const handleMouseEnter = (id) => {
  //   setHoveredId(id);
  //   console.log(`Hovered over: ${id}`);
  // };

  // const [activeProject, setActiveProject] = useState(
  //   projects_data.reduce((acc, item) => {
  //     acc[item.id] = item.src; // Initialize each id with its initial color
  //     return acc;
  //   }, {})
  // );

  // const changeImg = (id) => {
  //   setActiveProject((prevImg) => ({
  //     ...prevImg,
  //     [id]: prevImg[id] === 'yellow' ? projects_data.find(item => item.id === id).color : 'yellow', // Toggle color
  //   }));
  // };

  return (
    <>
      <div
        className="h-screen w-full  relative   z-10 mt-20  "
        style={{ backgroundColor: "#EEEFEE" }}
        
      >
         <div className=" w-3/6  absolute top-0 ms-5 mt-16 bg-slate-50  -z-10">
          <p className="title mb-3 " style={{opacity:0.5, fontWeight:'bold', fontSize: '60px'}}>04/</p>
          <p className="title"  style={{fontSize: '4rem'}}>Stuff I Built<br></br> (That Didn’t <br></br>Fall Apart)</p>
        </div>
        <Scene activeProject = {activeProject} />
        <div className="absolute center w-full" style={{width: 'calc(100vw - 60px)'}}>
        
         
       

          {projects_data.map((project, i) => (
            <div
              ref={container}
              key={project.id}
              className="flex items-center justify-start border-b border-slate-500  "
            >
              <p className="text font-bold ms-52 w-64 ">{project.content}</p>

              <div
                className="ms-40 relative"
                onMouseLeave={() => {
                  setActiveMenu(null);
                }}
              >
                <motion.p
                  style={{ clipPath: clip }}
                  onMouseOver={() => {
                    setActiveMenu(i);
                  }}
                >
                  <a
                    href={project.link}
                    className="title "
                    style={{ color: "#FFFF99" }}
                  >
                    {project.title}
                  </a>
                </motion.p>

                <div className="absolute top-0 -z-20 m-0 p-0  ">
                  <a
                    href={project.link}
                    className="title "
                    style={{ color: "black", opacity:0.6 }}
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
