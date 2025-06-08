//Components
"use client";
import "./assets/fonts/fonts.css";
import React, { useState, useRef, useLayoutEffect } from "react";
import About from "./pages/about";
import NavBar from "./components/nav";
import Work from "./components/media/Work";
import Skills from "./pages/skills/Skills";
import ArtPage from "./pages/ArtPage/ArtPage";
import CanvasComponent from "./components/CanvasComponent";
import Contact from "./pages/contactOriginal/Contact";
import Motto from "./pages/Motto/Motto";
import SmileFace from "./SmileFace";
import Test from "./test/Test";

import Name from "./components/name/name";
import MediaIcons from "./components/mediaIcons";
import useMousePosition from "./components/useMOusePOsition";
import MaskComponent from "./components/maskComponents/AppMask";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import SmoothScroll from "./components/smoothScroll";
import "./pages/contact/contact.style.css";

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

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about_section.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(smile_container.current, { y: -1075 }, 0);
    return () => {
      tl.scrollTrigger?.kill(); // Kill the ScrollTrigger
      tl.kill(); // Kill the GSAP timeline
    };
  }, []);

  return (
    <>
      <SmoothScroll>
        {/* <MediaIcons text_opacity = {text_opacity} />  */}
        {/* <NavBar /> */}
        <SmileFace />
        <About about_section={about_section}
          smile_container={smile_container}
        />
        {/* <Skills scrollYP={scrollYProgress} /> */}
        {/* <ArtPage /> */}
        {/* <Work /> */}
        <Motto contact_section = {contact_section} />
        {/* <Test /> */}
      </SmoothScroll>
    </>
  );
}

export default App;
