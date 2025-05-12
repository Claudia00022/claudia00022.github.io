import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "./about.style.css";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useInView,
} from "framer-motion";
import AnimatedText from "../../components/AnimatedText";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ja from "../../assets/photos/ja.jpg";
import Smile from "../../Smile";

gsap.registerPlugin(ScrollTrigger);

function About(props) {

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: motto_container.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     });

  //     tl.to(text_container.current, { y: 575 }, 0);
  //   });

  //   return () => context.revert();
  // }, []);


  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", `80vw end`],
  // });

  // const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  // const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>

      <div
      ref={props.about_section}
        className=" relative h-screen -z-10 mt-20 "
        style={{ backgroundColor: "#F4F2ED" }}
      >
     
        <div className="absolute left-0 w-full h-screen ">
          <div className="absolute xs:w-full md:w-3/6 top-0 md:right-10 xs:mt-5 md:mt-10 xs:ps-5 bg-slate-50"> 
            <p
              className="title mb-3 "
              style={{ opacity: 0.5, fontWeight: "bold"}}
            >
              01/
            </p>
            <AnimatedText />
          </div>
          <div className="absolute xs: w-full md:w-5/6 md:left-5 xs: pe-5 xs: ps-5 xs:pt-5  border-b bottom-0 "> i did it 
            <div className=" md:flex  md:justify-start md:items-end">
              <div className=" xs: 4/5  md:w-6/12 md:h-3/4 relative overflow-hidden ">
                <img src={Ja} alt="myImage" className="object-cover"></img>
                <Smile smile_container = {props.smile_container} />
              </div>
              <div className="md:w-4/12 h-3/4 text">
                <p>
                  I am <span>FREELANCE </span> frontend developer with a passion
                  for creating dynamic and responsive web applications using the
                  React framework.I have honed my skills in building
                  user-friendly interfaces and implementing best practices in
                  web development. My commitment to staying updated with the
                  latest technologies ensures that I deliver modern and
                  efficient solutions to my clients. With a passion for art, I
                  thrive on collaborating with individuals and businesses that
                  value aesthetics and recognize the power of simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
