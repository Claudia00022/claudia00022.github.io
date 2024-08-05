import React from "react";
import PhotoOne from  '../../assets/photos/marlyn.JPG';
import PhotoTwo from '../../assets/photos/girl.JPG';
import PhotoThree from '../../assets/photos/women.JPG';
import PhotoFour from '../../assets/photos/elephant.JPG';
import PhotoFive from '../../assets/photos/womenInColor.JPG';
import PhotoSix from '../../assets/photos/man.JPG';



const Art = () =>{
    return(
         <div className="cont">
        <div className="rel " >
          <div  className="abs classname res " style={{height:'60vh', borderLeft: '1px solid #1B3F4C'}} >
          <div className="opac-top"></div>
          <div>
          <p className="text ms-5">Art #01</p> 
          {/* <hr className="mb-5" style={{borderColor: 'black'}}></hr> */}
          <img  src={PhotoOne}  className="object-contain ms-5" style={{ width: '500px'}}></img>
          </div>

          <div>
          <p className="text mt-3 ms-5">Art #02</p>
          <img  src={PhotoTwo}  className="object-contain ms-5" style={{ width: '500px'}}></img>
          </div>
          <div>
          <p className="text mt-3 ms-5">Art #03</p>
          <img  src={PhotoThree}  className="object-contain ms-5" style={{width:'500px'}}></img>
          </div>
          <div>
          <p className="text mt-3 ms-5">Art #04</p>
          <img  src={PhotoFour}  className="object-contain ms-5" style={{width:'500px'}}></img>
          </div>
          <div>
          <p className="text mt-3 ms-5">Art #05</p>
          <img  src={PhotoFive}  className="object-contain ms-5" style={{width:'500px'}}></img>
          </div>
          <div>
          <p className="text mt-3 ms-5">Art #06</p>
          <img  src={PhotoSix}  className="object-contain ms-5" style={{width:'500px'}}></img>
          </div>
            <div className="opac"></div>
          </div>
        </div>
      </div>
    

    )
};

export default Art;