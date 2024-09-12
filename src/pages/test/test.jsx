import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Mesh } from "three";
import {
  Stats,
  OrbitControls,
  ScrollControls,
  useScroll,
  Scroll,
  Html,
} from "@react-three/drei";
import gsap from "gsap";
import Media from "../../components/media";
import "./test.style.css";
import { LayerMaterial } from "lamina";

import CustomLayer from "../../components/rectangle/CustomLayer";
extend({ CustomLayer });

function Box() {
  const boxRef = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.001;
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    //Vertical animation
    tl.current.to(
      boxRef.current.position,
      {
        duration: 2,
        x: -4,
        y: -1,
      },
      0
    );
    //  tl.current.to(
    //     boxRef.current.scale,{
    //       x: 0.5,
    //       y: 0.5,
    //       z: 0.5,
    //       duration: 3,
    //       ease: 'power2.out',
    //     }
    //   );
  }, []);

  return (
    <mesh ref={boxRef} position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
      <ambientLight />
      <pointLight position={[2, 2, 2]} intensity={1.0} color="yellow" />
      <sphereGeometry args={[3.0, 64, 32]} />
      <LayerMaterial>
        <customLayer ref={boxRef} time={0.0} lacunarity={4.5} />
      </LayerMaterial>
    </mesh>
  );
}

function Test() {
  return (
    <div className="container_sphere">
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 5] }}>
        <ScrollControls distance={0.1} pages={1}>
          <Scroll>
            <Box></Box>
          </Scroll>
        </ScrollControls>

        <Html>
          <Media></Media>
        </Html>
      </Canvas>
    </div>
  );
}

export default Test;

// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, ScrollControls } from "@react-three/drei";
// import './test.style.css'

// const Box = () => {
//   const mesh = useRef();

//   // Initial position state for the box
//   const [position, setPosition] = useState([0, 2, 0]);

//   // Update position based on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY =  window.scrollY; // Get current scroll position
//       const scrollFactor = scrollY / window.innerHeight; // Normalize scroll position

//       // Calculate new position based on scroll
//       const newX = Math.min(4, -(scrollFactor * 8));  // X-axis movement (right)
//       const newY = Math.max(-4, -scrollFactor * 8); // Y-axis movement (down)

//       setPosition([newX, 2, 0]);
//       console.log(scrollFactor, scrollY) // Update position state
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup scroll event listener on unmount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Update the box position in each frame
//   useFrame(() => {
//     if (mesh.current) {
//         console.log(mesh.current)
//       mesh.current.position.set(...position);  // Apply updated position
//     }
//   });

//   return (
//     <mesh ref={mesh}>
//       <boxGeometry args={[0.5, 0.5, 0.5]} />  {/* Box geometry */}
//       <meshStandardMaterial color="orange" wireframe = {true} /> {/* Box color */}
//     </mesh>
//   );
// };

// const Test = () => {
//   return (
//     <div className='container_sphere'>

//       <Canvas camera={{ position: [0, 0, 5] }}>  {/* 3D Canvas */}
//       {/* <OrbitControls enableZoom = {false} /> */}
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />

//         <Box />  {/* Box Component */}

//       </Canvas>
//     </div>
//   );
// };

// export default Test;
