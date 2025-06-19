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
  className="relative min-h-screen -z-10 overflow-y-auto bg-[#0D0D0D] pb-10 pt-10 "
  style={{
    borderLeft: "5px solid #5F605F",
    borderRight: "5px solid #5F605F",
  }}
>
  <div className="w-full">
    <div className="flex flex-col-reverse lg:flex-row-reverse justify-around">
      <div className="w-full lg:w-5/6 p-5">
        <div className="flex flex-col-reverse lg:flex-row justify-around lg:justify-end lg:items-end mt-10 pt-5 lg:mt-0 gap-4   ">
          {/* TEKST */}
          <div className="w-full lg:w-5/12  overflow-y-auto max-h-[60vh] text text-[#A89C89] ">
            <p className="text ">
              ****I am <span className="text-[#f5b061]">FREELANCE </span> frontend developer
              with a passion for creating dynamic and responsive web applications
              using the React framework.
              <br />
              I have honed my skills in building user-friendly interfaces and
              implementing best practices in web development.
              <br />
              My commitment to staying updated with the latest technologies ensures
              that I deliver modern and efficient solutions to my clients. With a
              passion for art, I thrive on collaborating with individuals and
              businesses that value aesthetics and recognize the power of simplicity.
            </p>
          </div>

          {/* OBRAZEK */}
          <div className="relative w-full lg:w-1/2 lg:mt-5 overflow-hidden">
            <img
              src={Ja}
              alt="myImage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-[#0D0D0D] opacity-60 pointer-events-none z-10"></div>
            <Smile smile_container={props.smile_container} />
             
          </div>
        </div>
      </div>

      {/* SEKCJA 01 + TEKST ANIMOWANY */}
      <div className="w-full lg:w-3/6 mt-10 ps-5 md:pb-5 md:pt-5 self-start">
        <p
          className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] "

        >
          02/
        </p>
        <AnimatedText />
      </div>
         <div className="absolute xs:bottom-0 lg:bottom-20 w-4/12 text left-10 border-b text-[#f5b061] pb-3">
                Lets have fun
              </div>
    </div>
  </div>
</div>

    </>
  );
}

export default About;
