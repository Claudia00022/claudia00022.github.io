import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.style.css";

const NavBar = () => {
  return (
   
    <div className=" fixed z-20 top-0 right-0 text-[#ffeeca]  xs:p-3 xl:p-10 ">

      <ul className="flex  flex-col text xs:text-base  tracking-wider items-end ">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
   
  );
};

export default NavBar;
