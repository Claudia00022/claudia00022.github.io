import React from "react";
import {Wave} from 'react-animated-text';
import './contact.style.css';

const Contact = () =>{
    return(
        <div className='rectangle contact'>
         <button className=" contact_button"><a className='title'><Wave 
            text = 'email'
            effect = 'fadeOut'
            speed = {4}
            effectChange = {1.0}
         /></a>
         </button>
         <button className=" contact_button"><a className='title'>instagram</a></button>
         <button className=" contact_button"><a className='title'>linkedIn</a></button>
    </div>
    )
};

export default Contact;