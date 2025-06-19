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
        className="min-h-screen w-full relative -z-20 flex xs: flex-col pb-10 pt-10  "
        style={{
           borderBottom: '2px solid #373737',
        }}
      >
        <CanvasComponent scrollYP={props.scrollYP} />

        <div className="xs:w-full lg:w-3/6 xs:mt-5 lg:mt-10  ps-5 pb-5">
          <p className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ">
            03/
          </p>
          <p className="title xs:text-5xl lg:text-7xl text-[#A89C89]">
            What I Bring<br></br> to the Table<br></br> (Besides Snacks)
          </p>
        </div>

        <div className=" mt-10  " ref={sectionTwoRef}>
          {projects_data.map((project) => (
            <div
              ref={container}
              key={project.id}
              className="flex xs:flex-col-reverse lg:flex-row  items-center border-b ms-5 me-5 xs:mt-5 lg:mt-10   lg:justify-evenly "
              style={{ borderColor: "grey" }}
            >
              <div className="w-full lg:w-1/3 p-3    ">
                <p className="text text-[#A89C89] ">{project.content}</p>
              </div>

              <div className="relative top-0 w-full lg:w-1/3 ">
                <motion.p
                  className="title xs:text-5xl lg:text-7xl pt-3 pb-3 text-[#f5b061] "
                  style={{ clipPath: clip }}
                >
                  {project.title}
                </motion.p>
                <div className="absolute top-0 -z-10  ">
                  <p
                    className="title xs:text-5xl lg:text-7xl pt-3 pb-3 text-[#A89C89]"
                    style={{ opacity: 0.7 }}
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
