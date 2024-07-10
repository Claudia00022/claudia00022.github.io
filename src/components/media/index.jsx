import React from "react";
import Typical from "react-typical";

//Styles
import "./media.style.css";


function Media() {
  return (
    <>
      <h1 className="main-font mt-32 ms-40 text-5xl text-gray-950 font-light mb-3 ">
        Klaudia Forysiak
      </h1>
      <p className="main-font ms-40 font-light">
        <Typical
          steps={[
            "I am a  Freelancer Designer & Fronten Developer",
            4000,
            "",
            1000,
            "You can learn more about me in the about section",
            4000,
            "",
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </p>

      <p className="main-font mt-64 ms-40">
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

      <p className="main-font mt-36 ms-40">
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
      <a href="#" className="link-font ms-40">
        linkIn
      </a>
    </>
  );
}

export default Media;
