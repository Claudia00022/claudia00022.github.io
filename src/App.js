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
import CanvasComponentMask from "./components/maskComponents/CanvasComponentMask";
import AboutMask from "./components/maskComponents/AboutMask";
import Name from "./components/name/name";
import MediaIcons from "./components/mediaIcons";
import useMousePosition from "./components/useMOusePOsition";
import gsap from "gsap";
import { motion } from 'framer-motion';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import SmoothScroll from "./components/smoothScroll";

import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [display, setDispaly] = useState("block");
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("Klaudia Forysiak");
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 50;

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

  function handleHover(){
    setIsHovered(true);
  }

  function handleHoverBack(){
    setIsHovered(false);
  }

  return (
    <>
    

      <SmoothScroll>
      <div ref={scene}>
      {/* <motion.div className="contact_mask top-0 left-0"
           animate={{
          WebkitMaskPosition: `${x - (size/2) }px ${y - (size/2) }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >  
          <Name name={name} />
          <MediaIcons />
          <NavBar handleName={handleName} handleNameBack={handleNameBack} />
          
          <CanvasComponentMask />
       <AboutMask handleHover = {handleHover}  handleHoverBack = {handleHoverBack} />
          <div className="h-screen w-screen absolute top_app_skills "> <Skills /></div>
          <div className="h-screen w-screen absolute top_app_art "> <ArtTest /></div>
          <div className="h-screen w-screen absolutetop_app_media "><Media /></div>
          
          
       
   
      </motion.div> */}


   
    
           <div style={{display: 'block'}}>
          <Name name={name} />
          <MediaIcons />
          <NavBar handleName={handleName} handleNameBack={handleNameBack} />
          <CanvasComponent scrollYProgress={scrollYProgress} />
          <div className="relative" >
          <div >
          <About />
          </div>
          <motion.div className="absolute top-0 left-0 contact_mask "
             animate={{
          WebkitMaskPosition: `${x - (size/2) }px ${y - (size/2) }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
          >
           <AboutMask   handleHover = {handleHover}  handleHoverBack = {handleHoverBack}/>
          </motion.div>
          
          </div>
          <Skills />
          <ArtTest />
          <Media />
          </div>
        </div>
      </SmoothScroll>
    
    </>
  );
}

export default App;
