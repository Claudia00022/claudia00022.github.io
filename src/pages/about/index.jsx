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
        className=" relative xs:h-[150vh] md:h-full -z-10  "
        style={{
          backgroundColor: "#F4F2ED",
          borderLeft: "5px solid #5F605F",
          borderRight: "3px solid #5F605F",
        }}
      >
        <div className="absolute   left-0 w-full bg-blue-200   ">
          <div className=" xs:h-[150vh] flex xs:flex-col-reverse md:flex-row-reverse justify-around">
            <div className="xs:w-full md:w-5/6 md:left-5 p-5   ">
              <div className=" h-full flex xs:flex-col-reverse md:flex-row  md:justify-end md:items-end bg-red-200 xs:mt-10 md:mt-0 ">
                <div className=" lg:w-1/4 text xs:text-xs mt-3 pb-5 text-black   bg-green-200   ">
                  <p>
                    I am <span className="italic">FREELANCE </span> frontend
                    developer with a passion for creating dynamic and responsive
                    web applications using the React framework.
                    <br></br>I have honed my skills in building user-friendly
                    interfaces and implementing best practices in web
                    development.
                    <br></br> My commitment to staying updated with the latest
                    technologies ensures that I deliver modern and efficient
                    solutions to my clients.With a passion for art, I thrive on
                    collaborating with individuals and businesses that value
                    aesthetics and recognize the power of simplicity.
                  </p>
                </div>

                <div className=" relative xs:w-full md:w-1/2 lg:mt-5 overflow-hidden">
                  <img src={Ja} alt="myImage" className="w-full h-auto object-cover"></img>
                  <Smile smile_container={props.smile_container} />
                </div>
              </div>
            </div>

            <div className="xs:w-full md:w-3/6 md:mt-10 xs:ps-5 md:pb-5 md:pt-5   bg-slate-50 self-start">
              <p
                className="text xs:text-base xl:text-2xl"
                style={{ opacity: 1, color: "#3F3B37" }}
              >
                01/
              </p>
              <AnimatedText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
