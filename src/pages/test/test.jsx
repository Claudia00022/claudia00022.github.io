import React from "react";
import Media from "../../components/media";
import CanvasComponent from "../../components/CanvasComponent";
import "./test.style.css";
import TestTwo from "../../TestTwo";


function Test() {
  return (
    <>
    {/* <TestTwo /> */}
      <CanvasComponent />
      <div className="h-screen">hero</div>
      <div className="second-section h-screen ">
      <div className=" poject_section">
      <Media> </Media>{" "}
      </div>
      </div>{" "}
    </>
  );
}

export default Test;
