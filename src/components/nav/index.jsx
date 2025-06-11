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
    <div className=" xs:absolute lg:fixed z-20  top-0 xs: left-0 xs:ps-5 lg:right-0 lg:w-full lg:h-14 ">
      <ul className="flex xs: flex-col lg:flex-row  justify-evenly mt-5 text xs:text-base lg:text-2xl uppercase font-bold ">
        <li onClick={handleClick}>
          <Link to={"/"} onClick={props.handleNameBack}>
            {toggledLinks}
          </Link>
        </li>
        <li onClick={handleAbout}>
          <Link to={"/about"} onClick={props.handleName}>
            {toggledAbout}
          </Link>
        </li>
        <li onClick={handleArt}>
          <Link to={"/art"}>{toggledArt}</Link>
        </li>
        <li onClick={handleContact}>
          <Link to={"/contact"}>{toggledContact}</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
