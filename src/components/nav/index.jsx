import {React, useState} from "react";
import { Link } from "react-router-dom";
import './nav.style.css'


const data = [
  { id:0,
    label: "HOME",
    to: "/",
  },
  { id:1,
    label: "ABOUT",
    to: "/about",
  },
  { id:2,
    label: "WORK",
    to: "/work",
  },
  { id:3,
    label: "ART",
    to: "/art",
  },
  { id:4,
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {
  
const [toogledLinks, setToogledLinks] = useState([]);

function handleClick(id){
if(toogledLinks.includes(id)){
  setToogledLinks(toogledLinks.filter(linkId => linkId !== id));
}else{
  setToogledLinks([...toogledLinks, id]);
}
}


  return (
    <div className= 'absolute z-20 w-1/6 mt-64 ms-32'>
      <ul>

       {data.map((link) => (
        <li key = {link.id} >
        {toogledLinks.includes(link.id) ? ( <div 
        onClick={() => handleClick(link.id)}
          style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}}
           className= 'me-2' >
          </div>) : ( <Link to={link.to}
         onClick={()=> handleClick(link.id)}
          className = 'flex flex-row items-center main-font mt-2'>
         
          {link.label}
          </Link> )}

         
          </li>
       )) 
        
       }
      </ul>
    </div>
   


  );
};
export default NavBar;
