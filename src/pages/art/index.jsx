import React from "react";
import PhotoOne from  '../../assets/photos/marlyn.JPG';
import PhotoTwo from '../../assets/photos/girl.JPG';
import PhotoThree from '../../assets/photos/women.JPG';
import PhotoFour from '../../assets/photos/elephant.JPG';
import PhotoFive from '../../assets/photos/womenInColor.JPG';
import PhotoSix from '../../assets/photos/man.JPG';

import './art.style.css';



const Art = () =>{
    return(
      <>
         <div className="right_bottom_rectangle">
         <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 ">

     
  
          <img  src={PhotoOne}  className="object-contain"  ></img>
  
       
      

          
          <img  src={PhotoTwo}  className="object-contain "></img>
     

     
   
          <img  src={PhotoThree}  className="object-contain "></img>
    

        
         
          <img  src={PhotoFour}  className="object-contain " ></img>
      

    
          <img  src={PhotoFive}  className="object-contain " ></img>
       

         
          <img  src={PhotoSix}  className="object-contain " ></img>
    
          </div>
          
          </div> 
         

       <div className="bottom_mask"></div>
       </>
    

    )
};

export default Art;