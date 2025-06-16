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
    backgroundColor: "#F4F2ED",
  },
  {
    id: 2,
    title: "VISUAL",
    link: "https://www.jl-gradzkie.pl/",
    content:
      "Focuses on how things look using tools like CSS, HTML, and JavaScript frameworks.",
    speed: 0.5,
    backgroundColor: "#D8D8D8",
  },
  {
    id: 3,
    title: "SMOOTH TRANSITION",
    link: "https://www.jl-gradzkie.pl/",
    content: "Making the website feel more fluid and engaging",
    speed: 0.5,
    backgroundColor: "#FAEDBC",
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
        className="min-h-screen w-full relative -z-20   flex xs: flex-col  "
        style={{
           backgroundColor: "#EEEFEE" ,
          borderLeft: "5px solid #5F605F",
          borderRight: "5px solid #5F605F",
        }}
      >
        <CanvasComponent scrollYP={props.scrollYP} />

        <div className=" xs: w-full lg:w-3/6   mt-10 bg-slate-50/50 ps-5 pb-5  ">
          <p
            className="text-base xl:text-2xl "
            style={{ opacity: 0.5, fontWeight: "bold" }}
          >
            03/
          </p>
          <p className="title">
            What I Bring<br></br> to the Table<br></br> (Besides Snacks)
          </p>
        </div>

        <div className=" mt-10  " ref={sectionTwoRef}>
          <div className="flex items-center justify-start ms-52 mb-5 "></div>

          {projects_data.map((project) => (
            <div
              ref={container}
              key={project.id}
              className="flex xs:flex-col-reverse lg:flex-row items-center border-b ms-5 me-5 mt-10"
              style={{ borderColor: "grey" }}
            >
              <div className="w-full pb-3 ">
                <p className="text  ">{project.content}</p>
              </div>

              <div className="relative top-0  w-full ">
                <motion.p
                  className="text xs:text-5xl pt-3 pb-3 font-bold"
                  style={{ clipPath: clip, color: "#FFFF99" }}
                >
                  {project.title}
                </motion.p>
                <div className="absolute top-0 -z-10  ">
                  <p
                    className=" text xs:text-5xl pt-3 font-bold"
                    style={{ color: "black", opacity: 0.7 }}
                  >
                    {" "}
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
       
      </div>
    </>
  );
}

export default Skills;
