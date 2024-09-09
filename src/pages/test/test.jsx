// import React, { useLayoutEffect, useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Mesh } from 'three';
// import { Stats,OrbitControls, ScrollControls } from '@react-three/drei'
// import './test.style.css';


//  function Box(){
//     const boxRef = useRef();
//     const tl = useRef();

//     useLayoutEffect(() => {
//         tl.current = boxRef.timeLine();
//     })


//     return(
//      <mesh ref={boxRef}>
    
//             <ambientLight /> 
  
//   <pointLight position={[2,2,2]}  intensity={1.0} color='yellow'/>
//       <sphereGeometry args={[3.0, 64, 32]} />
//       <meshStandardMaterial color= "black"  />
//      </mesh>
//     )
//  }

// function Test(){
//     return(
//         <div className='container_sphere'>
//         <Canvas>
    
//         <OrbitControls enableZoom = {false}/>
     
//         <ScrollControls pages={3} damping={0.25}> 
//          <Box></Box>
//          </ScrollControls>
//       </Canvas>
//       </div>
//     )
// };

// export default Test;

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import './test.style.css'

const Box = () => {
  const mesh = useRef();
  
  // Initial position state for the box
  const [position, setPosition] = useState([0, 2, 0]);

  // Update position based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY =  window.scrollY; // Get current scroll position
      const scrollFactor = scrollY / window.innerHeight; // Normalize scroll position

      // Calculate new position based on scroll
      const newX = Math.min(4, -(scrollFactor * 8));  // X-axis movement (right)
      const newY = Math.max(-4, -scrollFactor * 8); // Y-axis movement (down)
      
      setPosition([newX, 2, 0]);
      console.log(scrollFactor, scrollY) // Update position state
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the box position in each frame
  useFrame(() => {
    if (mesh.current) {
        console.log(mesh.current)
      mesh.current.position.set(...position);  // Apply updated position
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />  {/* Box geometry */}
      <meshStandardMaterial color="orange" wireframe = {true} /> {/* Box color */}
    </mesh>
  );
};

const Test = () => {
  return (
    <div className='container_sphere'>
   
      <Canvas camera={{ position: [0, 0, 5] }}>  {/* 3D Canvas */}
      {/* <OrbitControls enableZoom = {false} /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      
        <Box />  {/* Box Component */}
     
      </Canvas>
    </div>
  );
};

export default Test;

