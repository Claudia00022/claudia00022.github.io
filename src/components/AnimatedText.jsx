import React, {useRef, useState} from "react";
import { motion, useInView } from "framer-motion";

const text = "Who’s";
const textTwo = 'Behind';
const textThree = 'the';
const textFour = 'curtains?'

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
        <span className=" sr-only " >{text}</span>
        <span className=" sr-only " >{textTwo}</span>
        <span className=" sr-only " >{textThree}</span>
        <span className=" sr-only " >{textFour}</span>
        <motion.div
        ref={ref}
          className="title"
          aria-hidden
          initial="hidden"
          animate= {isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1 }}
          // style={{fontSize: '4rem'}}
        >
          {text.split("").map((char, index) => (
            <motion.p key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.p>
          ))}<br></br>
          {textTwo.split("").map((char, index) => (
            <motion.p key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.p>
          ))}<br></br>
          {textThree.split("").map((char, index) => (
            <motion.p key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.p>
          ))}<br></br>
          {textFour.split("").map((char, index) => (
            <motion.p key={index} className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.p>
          ))}
        </motion.div>
        </div>
        </>
      
    );
  }
