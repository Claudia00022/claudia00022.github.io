import React from "react";
import { Link } from "react-router-dom";


const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "WORK",
    to: "/work",
  },
  {
    label: "ART",
    to: "/art",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {
  return (
    <div>
      <ul>
       {data.map((item, key) => (
        <li key={key}><Link to={item.to}>{item.label}</Link></li>
       )) 
        
       }
      </ul>
    </div>
   


  );
};
export default NavBar;
