import React, { useRef, useLayoutEffect } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import "./skills.css";
import CanvasComponent from "../../components/CanvasComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//Styles

const projects_data = [
  {
    id: 1,
    title: "INTERACTIVE",
    link: "https://www.vpmu-studio.co.uk/",
    content:
      "With a focus on 3D graphics, I enjoy experimenting with animations, models, and dynamic scenes that enhance user engagement. ",
    speed: 0.5,
    backgroundColor: '#F4F2ED'
  },
  {
    id: 2,
    title: "VISUAL",
    link: "https://www.jl-gradzkie.pl/",
    content:
      "Focuses on how things look using tools like CSS, HTML, and JavaScript frameworks.",
    speed: 0.5,
      backgroundColor: '#D8D8D8'
  },
  {
    id: 3,
    title: "SMOOTH TRANSITION",
    link: "https://www.jl-gradzkie.pl/",
    content: "Making the website feel more fluid and engaging",
    speed: 0.5,
      backgroundColor: '#FAEDBC'
  },
];

function Skills(props) {
  
  const sectionTwoRef = useRef(null);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `30vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>
      <div
        className="h-screen w-full relative -z-20 mt-20"
        style={{ backgroundColor: "#EEEFEE" , border : '5px sollid black' }}
      > 
      {/* <p className="title ms-5 mb-3 " style={{opacity: 0.5, fontWeight:'bold', fontSize: '60px'}}>2.</p> */}
      <div className=" w-3/6  absolute top-0 ms-5 mt-16 bg-slate-50  -z-10">
          <p className="title mb-3 " style={{opacity:0.5, fontWeight:'bold', fontSize: '60px'}}>03/</p>
          <p className="title"  style={{fontSize: '4rem'}}>What I Bring<br></br> to the Table<br></br> (Besides Snacks)</p>
        </div>
        <div className="absolute center mt-10" ref={sectionTwoRef} style={{width: 'calc(100vw - 60px)'}}>
          <div className="flex items-center justify-start ms-52 mb-5 ">
         
            {/* <p className="text text-right font-bold ">What I Bring to the Table (Besides Snacks)</p> */}
          </div>

          {projects_data.map((project) => (
            <div
              ref={container}
              key={project.id}
              className="flex items-center justify-start border-b"
              style={{ borderColor: "grey" }}
            >
              <p className="text font-bold ms-52 w-64">{project.content}</p>
              <div className="ms-40 relative ">
                <motion.p style={{ clipPath: clip }}>
                  <a href={project.link} className="title " style={{color: '#FFFF99'}}>
                    {project.title}
                  </a>
                </motion.p>
                <div className="absolute top-0 shadow">
                  <a
                    href={project.link}
                    className="title"
                    style={{ color: "black", opacity: 0.7 }}
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CanvasComponent scrollYP={props.scrollYP} />
      </div>
    </>
  );
}

export default Skills;
