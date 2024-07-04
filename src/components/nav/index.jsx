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
    <div className= 'absolute z-20 w-1/6 mt-20 ms-32'>
      <ul>
       {data.map((item, key) => (
        <li key={key}  ><Link to={item.to} className = 'flex flex-row items-center '><div style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}} className= 'me-1' ></div>{item.label}</Link></li>
       )) 
        
       }
      </ul>
    </div>
   


  );
};
export default NavBar;
