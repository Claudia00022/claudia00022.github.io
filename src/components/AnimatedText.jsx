import React, {useRef, useState} from "react";
import { motion, useInView } from "framer-motion";

const text = "about";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AnimatedText() {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });
    const [hover, setHover] = useState(false);
    const titleColor = hover ? 'red' : 'black'

  
    return (
      <>
  
      <div  style={{pointerEvents: 'none'}}> 
        <span className=" sr-only ">{text}</span>
        <motion.div
        ref={ref}
          className="title"
        //   style={{color: titleColor}}
          aria-hidden
          initial="hidden"
          animate= {isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1 }}
        //   onMouseEnter={() => setHover(true)}
        //   onMouseLeave={()=>setHover(false)}
        >
          {text.split("").map((char, index) => (
            <motion.p key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.p>
          ))}
        </motion.div>
        </div>
        </>
      
    );
  }
