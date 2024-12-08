import { useLayoutEffect, useRef } from "react";
import contacts_data from "../../contactsData";
import "./contact.css";
import CanvasComponent from "../../components/CanvasComponent";
import MagneticEffect from "../../components/MagneticEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Contact() {

  
 
  return (
    <>
    
   
    
    <div className=" w-screen h-96 absolute bottom-0" style={{backgroundColor: 'white'}} >
   
  
      <div className="w-1/4 flex flex-col items-center absolute bottom-10 left-40">
        {contacts_data.map((con) => (
            <div className="flex w-full justify-start items-center  mb-10 pb-5 ">
        
          <p className="text ms-10">{con.title}</p>
          </div>
        ))}
      </div>
      </div>
   
    </>
  );
}
