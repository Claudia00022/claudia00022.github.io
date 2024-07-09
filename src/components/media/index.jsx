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
     <h1 className="main-font mt-32 ms-40 text-5xl text-gray-950 font-light mb-3 ">Klaudia Forysiak</h1>
     <p className="main-font ms-40 font-light">Freelancer Designer & Fronten Developer</p>

    <h1 className="main-font mt-64 ms-40"><div  style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}} className= 'me-2'></div>Projects</h1>
    <a href="#" className="link-font ms-40">v-pm studio</a>
    <a href="#" className="link-font ms-40">j&l Gradzkie</a>

    <h1 className="main-font mt-64 ms-40"><div  style={{width: '5px', height: '5px', backgroundColor: 'black', display: 'inline-block'}} className= 'me-2'></div>Contact</h1>
    <a href="#" className="link-font ms-40">email</a>
    <a href="#" className="link-font ms-40">instagram</a>
    <a href="#" className="link-font ms-40">linkIn</a>
    </>
  );
}

  
  export default Media;