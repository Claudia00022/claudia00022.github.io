
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
    

          
          <CanvasComponent />
          <AboutMask  handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack}/>
          <SkillsMask  handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
          <ArtMask handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
          <Media />
       
      
    
    </>
  );
}

export default MaskComponent;
