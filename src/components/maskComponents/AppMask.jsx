
"use client";
import React from "react";

//Components

import CanvasComponent from "../../components/CanvasComponent";

import AboutMask from "./AboutMask";
import SkillsMask from "./SkillsMask";
import ArtMask from "./ArtMask";
import Media from "../media";



function MaskComponent(props) {


  return (
    <>
    

           <div>
          <CanvasComponent />
          <AboutMask  handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack}/>
          <SkillsMask />
          <ArtMask />
          <Media />
          </div>
      
    
    </>
  );
}

export default MaskComponent;
