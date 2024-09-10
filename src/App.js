//Components
import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Rectangle from "./components/rectangle";
import Contact from "./pages/contact";
import Art from "./pages/art";
import Home from "./pages/home";
import About from "./pages/about";
import NavBar from "./components/nav";
import Test from "./pages/test/test";

import Name from "./components/name/name";
import arts_data from "./artsData";

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
        <NavBar handleName={handleName} handleNameBack={handleNameBack} />
        {/* <Rectangle /> */}

        <Routes>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
