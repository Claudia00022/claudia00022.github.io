import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.style.css";

const NavBar = () => {

  return (
    <div className=" fixed z-20  top-10 right-10 xs:pe-5 lg:h-14  text-[#ffeeca] opacity-80  ">
      <ul className="flex  flex-col pt-5 text xs:text-base  tracking-wider ">
       
        {/* <li >
          <Link to={"/about"} >
           about
          </Link>
        </li>
        <li >
          <Link to={"/art"}> work</Link>
        </li>
        <li >
          <Link to={"/contact"}> contact</Link>
        </li> */}

          <li><a href="#about">about</a></li>
    <li><a href="#work">work</a></li>
    <li><a href="#contact">contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
