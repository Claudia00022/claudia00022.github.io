//Components
import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Rectangle from "./components/rectangle";
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
gsap.registerPlugin(ScrollTrigger);

function App() {
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

 
  
 
 

  return (
    <>
      <div className="App">
        <Loading show={display} />
        <Name name={name} />
        {/* <NavBar handleName={handleName} handleNameBack={handleNameBack} /> */}
        <div className="h-screen hero">
          <CanvasComponent />
        </div>{" "}
        <div className="first_section">
          <About />
        </div>
        <div className="third_section">
         <ArtTest />
         </div>
        <div className="second-section">
            <Media> </Media>{" "}
         </div>{" "}
         
         <div className="four_section ">
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
    </>
  );
}

export default App;
