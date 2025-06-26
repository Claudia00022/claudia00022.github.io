//Components
"use client";
import "./assets/fonts/fonts.css";
import React, { useState, useRef, useLayoutEffect } from "react";
import About from "./pages/AboutSection";
import NavBar from "./components/nav";
import Work from "./pages/ProjectSection/Work";
import Skills from "./pages/SkillsSection/Skills";
import ArtPage from "./test/ArtPage/ArtPage";
import CanvasComponent from "./components/CanvasComponent";
import ContactSection from "./pages/ContactSection/ContactSection";
import SmileFace from "./pages/MainSection/SmileFace";

import Test from "./test/Test";
import Vignette from "./assets/photos/vignette.png";

import Name from "./components/name/name";
import MediaIcons from "./components/mediaIcons";
import useMousePosition from "./components/useMOusePOsition";
import MaskComponent from "./components/maskComponents/AppMask";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import SmoothScroll from "./components/smoothScroll";
import "./test/contact/contact.style.css";

import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const scene = useRef(null);
  const contact_section = useRef();
  const text_opacity = useRef([]);
  const about_section = useRef();
  const smile_container = useRef();

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact_section.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Apply animation to all elements in the `text_opacity` array
    text_opacity.current.forEach((ref, index) => {
      tl.to(ref, { opacity: 1 }, 0); // Animate opacity for each element
    });
  }, []);

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: about_section.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  //   tl.to(smile_container.current, { y: -600 }, 0);
  //   return () => {
  //     tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
  //     tl.kill(); // Kill the GSAP timeline
  //   };
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: about_section.current,
          start: "top bottom", // start animacji, gdy top sekcji dotknie bottom viewportu
          end: "center center", // koniec animacji w centrum
          scrub: true,
        },
      });

      tl.fromTo(
        smile_container.current,
        { y: 400 }, // wyjściowa pozycja: z dołu
        { y: -50, ease: "none" } // docelowa pozycja: na twarzy
      );
    });

    return () => ctx.revert(); // czyszczenie GSAP
  }, []);

  return (
    <>
      <SmoothScroll>
        <div className='xs:block lg:hidden gradient-frame' >
       
       </div>
        <MediaIcons text_opacity={text_opacity} />
        <NavBar />
        <div id="home">
          <SmileFace />
        </div>

        <div id="about">
          {" "}
          <About
            about_section={about_section}
            smile_container={smile_container}
          />
        </div>

        <Skills scrollYP={scrollYProgress} />
        {/* <ArtPage /> */}
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <ContactSection contact_section={contact_section} />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
