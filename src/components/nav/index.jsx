import {React, useState} from "react";
import { Link } from "react-router-dom";
import './nav.style.css'

const NavBar = () => {
  
const [toggledLinks, setToggledLinks] = useState("home");
const [toggledAbout, setToggledAbout] = useState("about");
const [toggledContact, setToggledContact] = useState("contact")

function handleClick(){
  setToggledLinks(
   <div 

        style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
         className= 'me-2' >
        </div>
  );
  setToggledAbout("about");
  setToggledContact("contact");
}

function handleAbout(){
  setToggledAbout(<div 

    style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledLinks("home");
    setToggledContact("contact");
}

function handleContact(){
  setToggledContact(<div 

    style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledAbout("about");
    setToggledLinks("home");
}


return (
  <div className="absolute z-20 w-1/6 mt-64 ms-32">
<ul>
<li onClick={handleClick}>
  <Link to={"/"} className="flex flex-row items-center main-font-nav  mt-2">{toggledLinks}</Link>
</li>
<li onClick={handleAbout}>
  <Link to={"/about"} className="flex flex-row items-center main-font-nav mt-4">{toggledAbout}</Link>
</li>
<li onClick={handleContact}>
  <Link to={"/contact"} className="flex flex-row items-center main-font-nav mt-4">{toggledContact}</Link>
</li>
</ul>
  </div>
);
}

export default NavBar;
