import React, { useState } from "react";


import PopUp from "../../components/popUp/PopUp";

import "./art.style.css";
import arts_data from "../../artsData";


const Art = (props) => {


// function handleClickEvent(event) { 
//     const a = arts_data[event.target.id - 1].id;
//     const newArray = arts_data.map((art) => {
//       if (a === art.id) {
//       props.handleOpenPopUp();
//       }});
//       console.log(newArray)
// }


const [elementId, setElementId] = useState(0);

function element(event){
  const id = event.target.id - 1;
   setElementId(id);
   console.log(id);
};



function handleClick(event){
  element(event);
  props.handleOpenPopUp();
}

  return (
    <>
      <div className="popUp_container" style={{ display: props.openPopUp }}>
        <img src={arts_data[elementId].img_link} className="object-contain"></img>

        <button onClick={props.handleClose}>close</button>
      </div>
      <div className="right_bottom_rectangle">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 ">
          {arts_data.map((art) => (
            <img
              id={art.id}
              src={art.img_link}
              onClick={handleClick}
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
