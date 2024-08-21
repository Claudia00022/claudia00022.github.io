import React from "react";

//Styles
import "./media.style.css";

function Media() {
  return (
    <>
      <p className="text marg-media ms-40 text-right">
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
      <a href="#" className="title ms-40 block text-right">
        v-pm studio
      </a>
      <a href="#" className="title ms-40 block text-right">
        j&l Gradzkie
      </a>

      <p className="text mt-36 ms-40 text-right">
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
      <a href="#" className="title ms-40 block text-right">
        email
      </a>
      <a href="#" className="title ms-40 block text-right">
        instagram
      </a>
      <a href="#" className="title ms-40 block mb-96 text-right">
        linkIn
      </a>
    </>
  );
}

export default Media;
