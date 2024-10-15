//Components
"use client";
import React, { useEffect, useState, useRef } from "react";
import About from "./pages/about";
import NavBar from "./components/nav";
import Media from "./components/media";
import Skills from "./pages/skills/Skills";
import ArtTest from "./pages/art-test/art-test";
import Contact from "./pages/contact";
import CanvasComponent from "./components/CanvasComponent";
import Name from "./components/name/name";
import MediaIcons from "./components/mediaIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import SmoothScroll from "./components/smoothScroll";

import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [display, setDispaly] = useState("block");
  const [name, setName] = useState("Klaudia Forysiak");

  function handleName() {
    setName("Hello");
  }
  function handleNameBack() {
    setName("Klaudia Forysiak");
  }

  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <SmoothScroll>
        <div ref={scene}>
          <Name name={name} />
          <MediaIcons />
          <NavBar handleName={handleName} handleNameBack={handleNameBack} />
          <CanvasComponent scrollYProgress={scrollYProgress} />
          <About />
          <Skills />
          <ArtTest />
          <Media />
          <Contact />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
