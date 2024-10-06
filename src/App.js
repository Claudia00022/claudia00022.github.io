//Components
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Home from "./pages/home";
import About from "./pages/about";
import NavBar from "./components/nav";
import Media from "./components/media";
import Art from "./pages/art";
import ArtTest from "./pages/art-test/art-test";
import Contact from "./pages/contact";
import CanvasComponent from "./components/CanvasComponent";
import Name from "./components/name/name";
import arts_data from "./artsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import SmoothScroll from "./components/smoothScroll";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger);

function App( props) {
  const [display, setDispaly] = useState("block");
  const [name, setName] = useState("Klaudia Forysiak");
  const [openPopUp, setOpenPopUp] = useState("none");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDispaly("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function handleName() {
    setName("Hello");
    console.log("hello");
  }
  function handleNameBack() {
    setName("Klaudia Forysiak");
  }

  function handleOpenPopUp() {
    setOpenPopUp("block");
  }

  function handleClose() {
    setOpenPopUp("none");
  }

  function handleClickEvent(event) {
    const art = arts_data[event.target.id - 1].id;
    arts_data.filter((a) => {
      if (art === a.id) {
        handleOpenPopUp();
        console.log(a.id);
      }
    });

    console.log(art);
  }

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time){
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, []);
  const scene = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start']
})
 
  
 
 

  return (
    <>
    <SmoothScroll>
      <div className="App"  ref={scene}>
        {/* <Loading show={display} /> */}
        <Name name={name} />
        {/* <NavBar handleName={handleName} handleNameBack={handleNameBack} /> */}
        <div className="h-screen hero">
          <CanvasComponent  scrollYProgress = {scrollYProgress}/>
        </div>{" "}
        <div className="first_section section">
          <About />
        </div>
        <div className="third_section section">
         <ArtTest />
         </div>
        <div className="second-section section">
            <Media> </Media>{" "}
         </div>{" "}
         
         <div className="four_section section ">
          <Contact />
         </div>
        {/* <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/art"
            element={
              <Art
                handleOpenPopUp={handleOpenPopUp}
                handleClose={handleClose}
                openPopUp={openPopUp}
                handleClickEvent={handleClickEvent}
              />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes> */}
      </div>
      </SmoothScroll>
    </>
  );
}

export default App;
