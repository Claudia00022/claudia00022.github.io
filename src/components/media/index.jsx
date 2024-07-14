import React from "react";

//Styles
import "./media.style.css";

function Media() {
  return (
    <>
      <p className="main-font-media marg-media ms-40">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
            display: "inline-block",
          }}
          className="me-2"
        ></div>
        Projects
      </p>
      <a href="#" className="link-font ms-40">
        v-pm studio
      </a>
      <a href="#" className="link-font ms-40">
        j&l Gradzkie
      </a>

      <p className="main-font-media mt-36 ms-40">
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
            display: "inline-block",
          }}
          className="me-2"
        ></div>
        Contact
      </p>
      <a href="#" className="link-font ms-40">
        email
      </a>
      <a href="#" className="link-font ms-40">
        instagram
      </a>
      <a href="#" className="link-font ms-40 mb-96">
        linkIn
      </a>
    </>
  );
}

export default Media;
