import React, { useState } from "react";
import PhotoOne from "../../assets/photos/marlyn.JPG";
import PhotoTwo from "../../assets/photos/girl.JPG";
import PhotoThree from "../../assets/photos/women.JPG";
import PhotoFour from "../../assets/photos/elephant.JPG";
import PhotoFive from "../../assets/photos/womenInColor.JPG";
import PhotoSix from "../../assets/photos/man.JPG";
import PhotoSeven from "../../assets/photos/three.jpg";

import PopUp from "../../components/popUp/PopUp";

import "./art.style.css";

const arts_data = [
  {
    id: 1,
    img_link: PhotoOne,
  },
  {
    id: 2,
    img_link: PhotoTwo,
  },
  {
    id: 3,
    img_link: PhotoThree,
  },
  {
    id: 4,
    img_link: PhotoFour,
  },
  {
    id: 5,
    img_link: PhotoFive,
  },
  {
    id: 6,
    img_link: PhotoSix,
  },
  {
    id: 7,
    img_link: PhotoSeven,
  },
];

const Art = (props) => {


  function handleClickEvent(event) {
    if (event.target.id === '1') {
      props.handleOpenPopUp();
    }
    console.log(event.target.id);
  }

  function handleImageClick(event) {
    handleClickEvent(event);
  }

  return (
    <>
      <div className="popUp_container" style={{ display: props.openPopUp }}>
        <img src={PhotoOne} className="object-contain"></img>

        <button onClick={props.handleClose}>close</button>
      </div>
      <div className="right_bottom_rectangle">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 ">
          {arts_data.map((art) => (
            <img
              id={art.id}
              src={art.img_link}
              onClick={handleClickEvent}
              className="object-contain"
            ></img>
          ))}
        </div>
      </div>
      <div className="bottom_mask"> </div>{" "}
    </>
  );
};

export default Art;
