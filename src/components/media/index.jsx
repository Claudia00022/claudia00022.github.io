import React, { useState, useRef } from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import { Canvas } from "@react-three/fiber";
import './media.style.css'

function Mesh(props) {
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
  
    const scrollAmount = props.percentage <= 0 ? 0.0001 : props.percentage;
    if (mesh.current) {
      // mesh.current.rotation.x = scrollAmount * 10;
      mesh.current.rotation.y = scrollAmount * 5;
    }
    return (
      <mesh
      {...props}
       ref={mesh}
        scale={active ? [2.5, 2.5, 2.5] : [2, 2, 2]}
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
        <tetrahedronGeometry attach="geometry" />
        <meshPhongMaterial
          attach="material"
          color={hovered ? "hotpink" : "#00b7ff"}
        />
      </mesh>
    );
  };

 function Box() {
    const [ref, percentage] = useScrollPercentage({
      /* Optional options */
      threshold: 0
    });
  
    return (
      <div ref={ref}>
        <Canvas
          pixelRatio={1}
          orthographic
          camera={{ zoom: 100, position: [0, 0, 0] }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Mesh position={[0, 0, 0]} percentage={percentage} />
        </Canvas>
  
        {/* <h2>{`Percentage scrolled: ${percentage * 10}%.`}</h2> */}
      </div>
    );
  };

  const boxCount = Array.apply(null, Array(10));

 function Media() {
  return (
    <>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    <p className="text-9xl">Test</p>
    {/* <div className="high"></div> */}
 
      {/* {boxCount.map((box, index) => (
        <Box key={index} />
      ))} */}
      
   </>
  );
}

  
  export default Media;