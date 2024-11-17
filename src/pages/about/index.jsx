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
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top 20%",
        end: "+=1000",
        scrub: 1,
      },
    });
    return () => {
      tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
      tl.kill(); // Kill the GSAP timeline
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", `80vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <>
      <div className=" relative h-screen -z-10 border-t border-b border-gray-500">
      <div className="absolute top-52 left-0 w-full h-3/4" ref={sectionRef}>
        <div className=" w-3/6 absolute top-0 left-52">
          <AnimatedText />
        </div>
        <div className="absolute bottom-10 right-52  w-3/6">
          <div className="flex mt-10 justify-end items-end">
            <div className="w-3/12 h-3/4 text  ">
              <p>
                I am <span>FREELANCE </span> frontend developer with a passion
                for creating dynamic and responsive web applications using the
                React framework.I have honed my skills in building user-friendly
                interfaces and implementing best practices in web development.
                My commitment to staying updated with the latest technologies
                ensures that I deliver modern and efficient solutions to my
                clients. With a passion for art, I thrive on collaborating with
                individuals and businesses that value aesthetics and recognize
                the power of simplicity.
              </p>
              </div>

              <div className=" w-6/12 h-3/4 relative ">
                <img
                  src={Ja}
                  alt="myImage"
                  className="object-cover"
                  style={{
                    width: "700px",
                    height: "800px",
                  }}
                ></img>
                <Smile />
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}

export default About;
