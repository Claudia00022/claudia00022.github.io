import React, { useLayoutEffect, useRef, useState } from "react";
import useMousePosition from "../../components/useMOusePOsition";
import "./about.style.css";
import { useScroll, motion, useTransform, useMotionTemplate } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const sectionMask = useRef(null);

  const {x, y} = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
    const size =  '80px';
    console.log(x,y);

  useLayoutEffect(() =>{

    const tl = gsap.timeline({scrollTrigger:{
      trigger: sectionRef.current,
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

  useLayoutEffect(() =>{

    const tl = gsap.timeline({scrollTrigger:{
      trigger: sectionMask.current,
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


  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end',`80vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;




  return (
    <>
      
      <div className=" relative h-screen "  >
        <motion.div className="absolute top-10 left-52 w-6/12  mask" style={{cursor: 'default'}} ref={sectionMask} 
        
        animate={{
          WebkitMaskPosition: 'x - {size} y - {size}',
          WebkitMaskSize: {size},
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}>
       <motion.p  className="text-left title"  style={{clipPath:clip, color : 'white'}} >ABOUT</motion.p> 
        <p className="text font-bold" style={{color: 'red'}}>
        I am freelance frontend developer with a passion for creating dynamic
          and responsive web applications using the React framework.I have honed
          my skills in building user-friendly interfaces and implementing best
          practices in web development. My commitment to staying updated with
          the latest technologies ensures that I deliver modern and efficient
          solutions to my clients. With a passion for art, I thrive on
          collaborating with individuals and businesses that value aesthetics
          and recognize the power of simplicity.
        </p>
        <motion.p className="text-left title" style={{clipPath:clip, color: 'white'}}>SKILLS</motion.p> 
        <p className="text">
          {" "}
          -Core Technologies: HTML5, CSS3, JavaScript (ES6+)
        </p>
        <p className="text">
          -React: React.js, Redux, Context API, React Router, React Hooks
        </p>
        <p className="text">
          -Styling: CSS Modules, Styled-components, Sass, Tailwind CSS
        </p>
        <p className="text">
          -TypeScript: Strong proficiency in TypeScript for robust and type-safe
          applications
        </p>
        <p className="text mb-52 ">-Version Control: Git, GitHub, GitLab</p>
        </motion.div>


        <div className="absolute top-10 left-52 w-6/12 -z-10 bg-red-200" style={{cursor: 'default'}}   ref={sectionRef}  onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
       <motion.p className="text-left title" style={{clipPath:clip}}>ABOUT</motion.p> 
        <p className="text font-bold">
          I am freelance frontend developer with a passion for creating dynamic
          and responsive web applications using the React framework.I have honed
          my skills in building user-friendly interfaces and implementing best
          practices in web development. My commitment to staying updated with
          the latest technologies ensures that I deliver modern and efficient
          solutions to my clients. With a passion for art, I thrive on
          collaborating with individuals and businesses that value aesthetics
          and recognize the power of simplicity.
        </p>
        <motion.p className="text-left title" style={{clipPath:clip}}>SKILLS</motion.p> 
        <p className="text">
          {" "}
          -Core Technologies: HTML5, CSS3, JavaScript (ES6+)
        </p>
        <p className="text">
          -React: React.js, Redux, Context API, React Router, React Hooks
        </p>
        <p className="text">
          -Styling: CSS Modules, Styled-components, Sass, Tailwind CSS
        </p>
        <p className="text">
          -TypeScript: Strong proficiency in TypeScript for robust and type-safe
          applications
        </p>
        <p className="text mb-52 ">-Version Control: Git, GitHub, GitLab</p>
        </div>
      </div>
     
    </>
  );
}

export default About;
