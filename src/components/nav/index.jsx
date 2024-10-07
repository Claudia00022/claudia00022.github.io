import {React, useState} from "react";
import { Link } from "react-router-dom";
import './nav.style.css'

const NavBar = (props) => {
  
const [toggledLinks, setToggledLinks] = useState("home");
const [toggledAbout, setToggledAbout] = useState("about");
const [toggledContact, setToggledContact] = useState("contact");
const [toggledArt, setToggledArt] = useState("projects")

function handleClick(){
  setToggledLinks(
   <div 

        style={{width: '5px', height: '5px', backgroundColor: '#c9c9c9', display: 'inline-block'}}
         className= 'me-2' >
        </div>
  );
  setToggledAbout("about");
  setToggledContact("contact");
  setToggledArt("art");
}

function handleAbout(){
  setToggledAbout(<div 

    style={{width: '5px', height: '5px', backgroundColor: '#c9c9c9', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledLinks("home");
    setToggledContact("contact");
    setToggledArt("art");
}

function handleContact(){
  setToggledContact(<div 

    style={{width: '5px', height: '5px', backgroundColor: '#c9c9c9', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledAbout("about");
    setToggledLinks("home");
    setToggledArt("art")
}

function handleArt(){
  setToggledArt(<div 

    style={{width: '5px', height: '5px', backgroundColor: '#c9c9c9', display: 'inline-block'}}
     className= 'me-2' >
    </div>);
    setToggledAbout("about");
    setToggledContact("contact");
    setToggledLinks("home");

}


return (
  <div className="fixed z-20  top-24 right-20 " >
<ul>
<li onClick={handleClick}>
  <Link to={"/"} onClick={props.handleNameBack} className="flex flex-row items-center title " style={{ marginBottom: '10px', fontWeight:'bold', fontSize: '13px' }}>{toggledLinks}</Link>
</li>
<li onClick={handleAbout}>
  <Link to={"/about"} onClick={props.handleName} className="flex flex-row items-center text " style={{ marginBottom: '10px', fontWeight:'bold', fontSize: '13px' }}>{toggledAbout}</Link>
</li>
<li onClick={handleArt}>
  <Link to={"/art"} className="flex flex-row items-center text " style={{ marginBottom: '10px', fontWeight:'bold', fontSize: '13px' }}>{toggledArt}</Link>
</li>
<li onClick={handleContact}>
  <Link to={"/contact"} className="flex flex-row items-center text" style={{ marginBottom: '10px', fontWeight:'bold', fontSize: '13px' }}>{toggledContact}</Link>
</li>
</ul>
  </div>
);
}

export default NavBar;
