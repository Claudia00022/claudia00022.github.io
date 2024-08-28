import React, { useState } from "react";


import "./art.style.css";
import arts_data from "../../artsData";

const Art = (props) => {
 

  const [elementId, setElementId] = useState(0);

  function element(event) {
    const id = event.target.id - 1;
    setElementId(id);
    console.log(id);
  }

  function handleClick(event) {
    element(event);
    props.handleOpenPopUp();
  }

  return (
    <>
     <div className="top_mask" style={{top:'0'}}> </div>{" "}
      <div style={{ display: props.openPopUp }}>
        <div className="container_fix"></div>
        <button onClick={props.handleClose} className="popUp_close_button">close</button>
        <div className="popUp_container">
          <img src={arts_data[elementId].img_link}></img>
        </div>
      </div>
 
      <div className="right_bottom_rectangle" style={{backgroundColor:' white', height:'96vw', marginTop:'5vh', width: '96vw', marginRight:'0.1rem',borderRadius: '50%', top:'5vh', left:'2vw'}} >
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 lg:gap-3 [&>img:not(:first-child)]:mt-3 ">
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
