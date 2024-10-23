//Components
"use client";
import React, { useState, useRef } from "react";
import About from "./pages/about";
import NavBar from "./components/nav";
import Media from "./components/media";
import Skills from "./pages/skills/Skills";
import ArtTest from "./pages/art-test/art-test";
import CanvasComponent from "./components/CanvasComponent";
import Contact from "./pages/contactOriginal/Contact";
import Motto from "./pages/Motto/Motto";

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

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 60;

  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  function handleHover() {
    setIsHovered(true);
  }

  function handleHoverBack() {
    setIsHovered(false);
  }

  return (
    <>
      <SmoothScroll>
        <div className="relative overflow-hidden " ref={scene}>
          <motion.div
            className="absolute top-0 left-0 contact_mask z-50  "
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <MaskComponent
              handleHover={handleHover}
              handleHoverBack={handleHoverBack}
            />
          </motion.div>

          <div>
            <Name />
            <MediaIcons />
            <NavBar />
            <CanvasComponent scrollYProgress={scrollYProgress} />
            <About />
            <Skills />
            <ArtTest />
            <Media />
            <Motto />
            <Contact />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
