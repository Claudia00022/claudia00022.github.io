import React, {useRef, useLayoutEffect} from "react";
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



//Styles
// import "./media.style.css";

const projects_data_mask = [
  {
    id: 1,
    title: "HELLO",
    link: "https://www.vpmu-studio.co.uk/",
    content: "HAVE A FUN TOGETHER",
    speed:0.5,
  },
  {
    id: 2,
    title: "HELLO",
    link: "https://www.jl-gradzkie.pl/",
    content: "Sep 2022/Design",
    speed:0.5,
  },
];

function MediaMask(props) {
  const container = useRef(null);
  const contactSection = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end',`30vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;


     
  useLayoutEffect(() =>{
  
      const tl = gsap.timeline({scrollTrigger:{
        trigger: contactSection.current,
         pin: true,
         start:'top 5%',
          end: "+=1200",
          scrub: 1,
      }
    });
    return () => {
      tl.scrollTrigger?.kill(); 
      tl.kill(); 
    };
    }, [])

  return (

  
    <>
     
    <div className="h-screen relative shadow" style={{backgroundColor: '#ec4e39'}}>
    <div className="absolute top-52 left-0 w-full ">
      <div className="flex items-center justify-start ms-52 mb-5 ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "white",
          }}
          className="me-4"
        ></div>
        <p className="text text-right font-bold ">Projects</p>
      </div>

      {projects_data_mask.map((project) => (
        <div ref={container} 
        className="flex items-center justify-start border-t  " key={project.id}>
          <p className="text font-bold ms-52 w-64"  onMouseEnter={props.handleHover}
            onMouseLeave={props.handleHoverBack}>{project.content}</p>

          <div className="ms-40 relative ">

          <div>
          <motion.p style={{clipPath: clip}}><a href={project.link} className="title "  onMouseEnter={props.handleHover}
            onMouseLeave={props.handleHoverBack} >
           {project.title}
          </a></motion.p>
          </div>

          <div className= "absolute top-0 shadow ">
          <a href={project.link} className="title" style={{color: '#141414'}} >{project.title}</a>
          </div>

          
          
          </div>
         
          

        </div>
      ))}

      </div>
      </div>
    </>
  );
}

export default MediaMask;
