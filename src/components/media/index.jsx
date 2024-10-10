import React, {useRef, useState} from "react";
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion";



//Styles
import "./media.style.css";

const projects_data = [
  {
    id: 1,
    title: "vpmu-studio",
    link: "https://www.vpmu-studio.co.uk/",
    content: "Apr 2023/Design & Dev",
    speed:0.5,
  },
  {
    id: 2,
    title: "j&l Gradzkie",
    link: "https://www.jl-gradzkie.pl/",
    content: "Sep 2022/Design",
    speed:0.5,
  },
];

function Media() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end',`30vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (

  
    <>

<div className="h-screen relative shadow" style={{backgroundColor: '#0F0F0F'}}>
    <div className="absolute top-52 left-0 w-full ">
      <div className="flex items-center justify-start margin_top_media ms-52 ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
          }}
          className="me-2"
        ></div>
        <p className="text text-right font-bold ">Projects</p>
      </div>

      {projects_data.map((project) => (
        <div ref={container} 
        className="flex items-center justify-start border-t border-b mt-10 ">
          <p className="text font-bold ms-52 w-64">{project.content}</p>
          <div className="ms-40 relative ">
          <motion.p style={{clipPath: clip}}><a href={project.link} className="title " >
           {project.title}
          </a></motion.p>
          <div className= "absolute top-0 shadow">
          <a href={project.link} className="title" style={{color: 'white'}} >{project.title}</a>
          </div>
          </div>
         
          

        </div>
      ))}

      </div>
      </div>
     
    <div className="h-screen relative shadow" style={{backgroundColor: '#0F0F0F'}}>
    <div className="absolute top-52 left-0 w-full ">
      <div className="flex items-center justify-start margin_top_media ms-52 ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
          }}
          className="me-2"
        ></div>
        <p className="text text-right font-bold ">Projects</p>
      </div>

      {projects_data.map((project) => (
        <div ref={container} 
        className="flex items-center justify-start border-t border-b mt-10 ">
          <p className="text font-bold ms-52 w-64">{project.content}</p>
          <div className="ms-40 relative ">
          <motion.p style={{clipPath: clip}}><a href={project.link} className="title " >
           {project.title}
          </a></motion.p>
          <div className= "absolute top-0 shadow">
          <a href={project.link} className="title" style={{color: 'white'}} >{project.title}</a>
          </div>
          </div>
         
          

        </div>
      ))}

      </div>
      </div>
    </>
  );
}

export default Media;
