
"use client";
import React from "react";

//Components

import CanvasComponentMask from "./CanvasComponentMask";

import AboutMask from "./AboutMask";
import SkillsMask from "./SkillsMask";
import ArtMask from "./ArtMask";
import MediaMask from "./MediaMask";



function MaskComponent(props) {


  return (
    <>
    

          
          <CanvasComponentMask handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
          <AboutMask  handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack}/>
          <SkillsMask  handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
          <ArtMask handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
          <MediaMask handleHover = {props.handleHover} handleHoverBack = {props.handleHoverBack} />
       
      
    
    </>
  );
}

export default MaskComponent;
