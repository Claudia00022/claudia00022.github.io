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
  className="relative min-h-screen -z-10 overflow-y-auto"
  style={{
    backgroundColor: "#F4F2ED",
    borderLeft: "5px solid #5F605F",
    borderRight: "5px solid #5F605F",
  }}
>
  <div className="w-full">
    <div className="flex flex-col-reverse lg:flex-row-reverse justify-around">
      <div className="w-full lg:w-5/6 p-10">
        <div className="flex flex-col-reverse lg:flex-row justify-around lg:justify-between lg:items-end mt-10 lg:mt-0 gap-4  ">
          {/* TEKST */}
          <div className="w-full lg:w-5/12 text-xs md:text-sm lg:text-lg text-black mt-3 lg:pe-10 lg:ps-10 overflow-y-auto max-h-[60vh] ">
            <p className="text opacity-100 tracking-tighter">
              ****I am <span className="italic">FREELANCE </span> frontend developer
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
            <Smile smile_container={props.smile_container} />
          </div>
        </div>
      </div>

      {/* SEKCJA 01 + TEKST ANIMOWANY */}
      <div className="w-full lg:w-3/6 mt-10 ps-10 md:pb-5 md:pt-5 bg-slate-50  self-start">
        <p
          className="text-base xl:text-2xl"
          style={{ opacity: 1, color: "#3F3B37" }}
        >
          02/
        </p>
        <AnimatedText />
      </div>
         <div className="absolute bottom-0 w-4/12 text left-10 border-b">
                Lets have fun
              </div>
    </div>
  </div>
</div>

    </>
  );
}

export default About;
