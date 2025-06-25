'use client'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../components/useMOusePOsition';
import useScrollPosition from '../../components/useScrollPosition';
import './contact.style.css';

export default function Contact() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const{z,w} = useScrollPosition();
  const size = isHovered ? 400 : 50;
  console.log(z,w)
  console.log(x,y)


  return (
    <div className='contact_main'>
      <motion.div 
        className='contact_mask'
      
        animate={{
          WebkitMaskPosition: `${x - (size/2) }px ${y - (size/2) }px`,
              //  WebkitMaskPosition: `${z+x}px ${y+w}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >   
       
          <p className='contact_text'>
            A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
         
      </motion.div>

      <div className='contact_body'>
        <p className='contact_text' >I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>

    </div>
  )
}