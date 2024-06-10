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
    <div class= ' w-1/6 mt-20 ms-32'>
      <ul>
       {data.map((item, key) => (
        <li key={key}  ><Link to={item.to} class = 'flex flex-row items-center '><div style={{width: '8px', height: '8px', backgroundColor: 'black', display: 'inline-block'}} class= 'me-1' ></div>{item.label}</Link></li>
       )) 
        
       }
      </ul>
    </div>
   


  );
};
export default NavBar;
