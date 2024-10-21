import React, {useRef, useLayoutEffect} from "react";
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion";
// import "./skills.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




//Styles


const projects_data = [
  {
    id: 1,
    title: "Lorem",
    link: "https://www.vpmu-studio.co.uk/",
    content: "With a focus on 3D graphics, I enjoy experimenting with animations, models, and dynamic scenes that enhance user engagement. ",
    speed:0.5,
  },
  {
    id: 2,
    title: "VISUAL",
    link: "https://www.jl-gradzkie.pl/",
    content: "Focuses on how things look using tools like CSS, HTML, and JavaScript frameworks.",
    speed:0.5,
  },
{
  id: 3,
  title: "SMOOTH TRANSITION",
  link: "https://www.jl-gradzkie.pl/",
  content: "Making the website feel more fluid and engaging",
  speed:0.5,
},
];

function SkillsMask(props) {

    const sectionTwoRef = useRef(null);

    useLayoutEffect(() =>{
  
      const tl = gsap.timeline({scrollTrigger:{
        trigger: sectionTwoRef.current,
         pin: true,
         start:'top 20%',
          end: "+=1000",
          scrub: 1,
      }
    });
    return () => {
      tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
      tl.kill(); // Kill the GSAP timeline
    };
    }, []);


  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end',`30vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,0.5], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (

  
    <>
     
    <div className="h-screen relative shadow " style={{backgroundColor: ' #ec4e39'}}>
    <div className="absolute top-52 left-0 w-full" ref={sectionTwoRef}>
      <div className="flex items-center justify-start ms-52 mb-5 ">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "white",
          }}
          className="me-4"
        ></div>
        <p className="text text-right font-bold ">Lorem ipsum</p>
      </div>

      {projects_data.map((project) => (
        <div ref={container} key={project.id}
        className="flex items-center justify-start border-t" style={{borderColor: 'grey'}}>
          <p className="text font-bold ms-52 w-64">{project.content}</p>
          <div className="ms-40 relative ">
          <motion.p style={{clipPath: clip}}      onMouseEnter={props.handleHover}
            onMouseLeave={props.handleHoverBack}><a href={project.link} className="title " >
           {project.title}
          </a></motion.p>
          <div className= "absolute top-0 shadow">
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

export default SkillsMask;
