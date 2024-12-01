import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.style.css";

const NavBar = (props) => {
  const [toggledLinks, setToggledLinks] = useState("01/home");
  const [toggledAbout, setToggledAbout] = useState("02/about");
  const [toggledContact, setToggledContact] = useState("03/contact");
  const [toggledArt, setToggledArt] = useState("04/projects");

  function handleClick() {
    setToggledLinks(
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          display: "inline-block",
        }}
        className="me-2"
      ></div>
    );
    setToggledAbout("about");
    setToggledContact("contact");
    setToggledArt("art");
  }

  function handleAbout() {
    setToggledAbout(
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          display: "inline-block",
        }}
        className="me-2"
      ></div>
    );
    setToggledLinks("home");
    setToggledContact("contact");
    setToggledArt("art");
  }

  function handleContact() {
    setToggledContact(
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          display: "inline-block",
        }}
        className="me-2"
      ></div>
    );
    setToggledAbout("about");
    setToggledLinks("home");
    setToggledArt("art");
  }

  function handleArt() {
    setToggledArt(
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          display: "inline-block",
        }}
        className="me-2"
      ></div>
    );
    setToggledAbout("about");
    setToggledContact("contact");
    setToggledLinks("home");
  }

  return (
    <div className="fixed z-20  top-0 right-0 w-full h-14 ">
      <ul className="flex justify-evenly mt-5">
        <li onClick={handleClick}>
          <Link
          className="text"
            to={"/"}
            onClick={props.handleNameBack}
            style={{ fontSize: "26px", textTransform: "uppercase" }}
          >
            {toggledLinks}
          </Link>
        </li>
        <li onClick={handleAbout}>
          <Link
            className="text"
            to={"/about"}
            onClick={props.handleName}
            style={{ fontSize: "26px", textTransform: "uppercase" }}
          >
            {toggledAbout}
          </Link>
        </li>
        <li onClick={handleArt}>
          <Link
            className="text"
            to={"/art"}
            style={{ fontSize: "26px", textTransform: "uppercase" }}
          >
            {toggledArt}
          </Link>
        </li>
        <li onClick={handleContact}>
          <Link
            className="text"
            to={"/contact"}
            style={{ fontSize: "26px", textTransform: "uppercase" }}
          >
            {toggledContact}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
