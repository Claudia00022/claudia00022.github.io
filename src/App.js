
//Components
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Art from "./pages/art";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import NavBar from "./components/nav";
import Rectangle from "./components/rectangle";
import Name from "./components/name/name";




function App() {
  return (
    <div className="App">
      <Name />
  <NavBar /> 

   <Rectangle></Rectangle>
  
  
      <Routes>
        <Route index path="/" element = {<Home />}></Route>
        <Route path="/about"  element = {<About />}></Route>
        <Route path="/work"  element = {<Work />}></Route>
        <Route path="/art"  element = {<Art />}></Route>
        <Route path="/contact"  element = {<Contact />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
