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
  },
  {
    id: 2,
    title: "VISUAL",
    link: "https://www.jl-gradzkie.pl/",
    content:
      "Focuses on how things look using tools like CSS, HTML, and JavaScript frameworks.",
    speed: 0.5,
  },
  {
    id: 3,
    title: "SMOOTH TRANSITION",
    link: "https://www.jl-gradzkie.pl/",
    content: "Making the website feel more fluid and engaging",
    speed: 0.5,
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
        className="h-screen relative shadow  "
        style={{ backgroundColor: "#E34300" }}
      >
        <div className="absolute top-52 left-0 w-full" ref={sectionTwoRef}>
          <div className="flex items-center justify-start ms-52 mb-5 ">
         
            <p className="text text-right font-bold ">What I Bring to the Table (Besides Snacks)</p>
          </div>

          {projects_data.map((project) => (
            <div
              ref={container}
              key={project.id}
              className="flex items-center justify-start border-t"
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
