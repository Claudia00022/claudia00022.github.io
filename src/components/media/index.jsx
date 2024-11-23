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


function Media() {
  const [activeProject, setActiveProject] = useState(null);
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

  return (
    <>
    <div className="relative">
      <div
        className="h-screen relative shadow z-10 "
        style={{ backgroundColor: "#E34300" }}
      >
        <div className="absolute top-20 left-0 w-full  ">
          <div className=" ms-52  mb-52">
            <p className="text text-left font-bold ">Stuff I Built (That Didn’t Fall Apart)</p>
          </div>

          {projects_data.map((project,i) => (
            <div
            onMouseLeave={() => {setActiveProject(null)}}
              ref={container}
              key={project.id}
              className="flex items-center justify-start border-b border-slate-500  "
            >
              <p className="text font-bold ms-52 w-64 ">{project.content}</p>

              <div className="ms-40 relative"  >
                <motion.p style={{ clipPath: clip }} >
                  <a href={project.link} className="title " style={{color: '#FFFF99'}} >
                    {project.title}
                  </a>
                </motion.p>

                <div className="absolute top-0 shadow m-0 p-0 " >
                  <a
                    href={project.link}
                    className="title "
                    style={{ color: "#141414" }}
                    onMouseOver={() => {setActiveProject(i)}}
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
   
      </div>
      <Scene activeProject = {activeProject} />
      </div>
    </>
  );
}

export default Media;
