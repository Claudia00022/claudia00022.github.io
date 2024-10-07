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
      <div className="h-screen relative">
        <div style={{ display: props.openPopUp }}>
          <div className="container_fix"></div>
          <button onClick={props.handleClose} className="popUp_close_button">
            close
          </button>
          <div className="popUp_container">
            <img src={arts_data[elementId].img_link} alt="art_image"></img>
          </div>
        </div>

        <div
          className="right_bottom_rectangle"
          style={{
            backgroundColor: " transparent",
            height: "100vh",
            marginTop: "5vh",
            width: "70vw",
            marginRight: "0.1rem",
            paddingRight: "0",
          }}
        >
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 lg:gap-3 [&>img:not(:first-child)]:mt-3 ">
            {arts_data.map((art) => (
              <div className="img_mask mt-3">
                <p className="  text_position">{art.content}</p>
                <img
                  alt="art_image"
                  id={art.id}
                  src={art.img_link}
                  onClick={handleClick}
                  className="object-contain"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
