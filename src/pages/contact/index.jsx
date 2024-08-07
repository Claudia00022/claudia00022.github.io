import React from "react";
import './contact.style.css';

const Contact = () =>{
    return(
        <div className='rectangle contact'>
      
        <div style={{backgroundColor: 'transparent', width: '200px', position: 'absolute',  bottom:'0', right: '0'}}>
         <button className=" contact_button"><a className='title title_contact' style={{color: 'white', fontSize:'1rem'}}>email</a>
         </button>
         <button className=" contact_button"><a className='title'  style={{color: 'white', fontSize:'1rem'}}>instagram</a></button>
         <button className=" contact_button"><a className='title'  style={{color: 'white', fontSize:'1rem'}}>linkedIn</a></button>
      
         </div>
    </div>
    )
};

export default Contact;