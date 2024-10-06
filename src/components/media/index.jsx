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
  const [hovered, setHovered] = useState(false);

  function handleHover(){
    setHovered(true);
    console.log('im in')
  }

  function handleHoverOut(){
    setHovered(false);
    console.log('im out');
  }

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end',`30vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>
    <div className="h-screen relative mt-64 ">
    <div className="absolute top-10 right-0 w-screen ">
      <div className="flex items-center justify-end margin_top_media mb-4  ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
          }}
          className="me-2"
        ></div>
        <p className="text text-right font-bold me-96 ">Projects</p>
      </div>

      {projects_data.map((project) => (
        <div ref={container} 
        className="flex items-center justify-end border-t border-b m-10 ">
          <p className="text font-bold me-20">{project.content}</p>
          <motion.p style={{clipPath: clip}}><a href={project.link} className="title block text-right me-40  " >
           {project.title}
          </a></motion.p>
          <a href={project.link} className="title me-40 shadow" style={{color: '#1c1c1c'}} >{project.title}</a>

        </div>
      ))}

      </div>
      </div>
    </>
  );
}

export default Media;
