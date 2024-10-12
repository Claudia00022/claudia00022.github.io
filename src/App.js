//Components
'use client'
import React, {useEffect, useState, useRef } from "react";
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

import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger);

function App( props) {
  const [display, setDispaly] = useState("block");
  const [name, setName] = useState("Klaudia Forysiak");





  function handleName() {
    setName("Hello");
  }
  function handleNameBack() {
    setName("Klaudia Forysiak");
  }

  const scene = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start']
})


      

 
  
 
 

  return (
    <>
    <SmoothScroll>
      <div className="relative"  ref={scene}>
        {/* <Loading show={display} /> */}
        <Name name={name} />
        <MediaIcons />
        <NavBar handleName={handleName} handleNameBack={handleNameBack} />
        <div className=" h-screen">
          <CanvasComponent  scrollYProgress = {scrollYProgress}/>
 
        </div>{" "}
        <div className="first_section section">
          <About />
        </div>
        <Skills />
        <div className="third_section section">
         <ArtTest />
         </div>
  
        <div className="second-section section">
            <Media> </Media>{" "}
         </div>{" "}
         
         {/* <div className=" h-screen sticky bottom-0 z-1000 section ">
          <Contact />
         </div> */}
      </div>
  
      </SmoothScroll>
    </>
  );
}

export default App;
