//Components
import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from './components/loading/loading'
import Rectangle from "./components/rectangle";
import Contact from "./pages/contact";
import Art from "./pages/art";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import NavBar from "./components/nav";

import Name from "./components/name/name";
import { Loader } from "@react-three/drei";

function App() {
  const [display, setDispaly] = useState('block');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDispaly ('none');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="App">
      <Loading  show = {display}/>

        <Name />
        <NavBar />
        <Rectangle />

        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
