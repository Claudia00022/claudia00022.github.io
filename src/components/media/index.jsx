import React from "react";

//Styles
import "./media.style.css";

function Media() {
  return (
    <>
      <p className="text marg-media ms-40">
        <span
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
            display: "inline-block",
          }}
          className="me-2"
        ></span>
        Projects
      </p>
      <a href="#" className="title ms-40 block">
        v-pm studio
      </a>
      <a href="#" className="title ms-40 block">
        j&l Gradzkie
      </a>

      <p className="text mt-36 ms-40">
        <span
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
            display: "inline-block",
          }}
          className="me-2"
        ></span>
        Contact
      </p>
      <a href="#" className="title ms-40 block">
        email
      </a>
      <a href="#" className="title ms-40 block">
        instagram
      </a>
      <a href="#" className="title ms-40 block mb-96">
        linkIn
      </a>
    </>
  );
}

export default Media;
