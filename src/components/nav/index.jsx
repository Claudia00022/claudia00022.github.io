import {React, useState} from "react";
import { Link } from "react-router-dom";
import './nav.style.css'

const NavBar = (props) => {
  
const [toggledLinks, setToggledLinks] = useState("Home");
const [toggledAbout, setToggledAbout] = useState("About");
const [toggledContact, setToggledContact] = useState("Contact");
const [toggledArt, setToggledArt] = useState("Art")

function handleClick(){
  setToggledLinks(
   <div 

        style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
         className= 'me-2' >
        </div>
  );
  setToggledAbout("About");
  setToggledContact("Contact");
  setToggledArt("Art");
}

function handleAbout(){
  setToggledAbout(<div 

    style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledLinks("Home");
    setToggledContact("Contact");
    setToggledArt("Art");
}

function handleContact(){
  setToggledContact(<div 

    style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledAbout("About");
    setToggledLinks("Home");
    setToggledArt("Art")
}

function handleArt(){
  setToggledArt(<div 

    style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledAbout("About");
    setToggledContact("Contact");
    setToggledLinks("Home");

}


return (
  <div className="absolute z-20 w-1/6 mt-64 ms-32">
<ul>
<li onClick={handleClick}>
  <Link to={"/"} onClick={props.handleNameBack} className="flex flex-row items-center main-font-nav ">{toggledLinks}</Link>
</li>
<li onClick={handleAbout}>
  <Link to={"/about"} onClick={props.handleName} className="flex flex-row items-center main-font-nav ">{toggledAbout}</Link>
</li>
<li onClick={handleArt}>
  <Link to={"/art"} className="flex flex-row items-center main-font-nav ">{toggledArt}</Link>
</li>
<li onClick={handleContact}>
  <Link to={"/contact"} className="flex flex-row items-center main-font-nav ">{toggledContact}</Link>
</li>
</ul>
  </div>
);
}

export default NavBar;
