import { React, useRef, useEffect, useState, Suspense, useLoader, useLayoutEffect } from "react";


import Test from "../../pages/test/test";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import { Stats, OrbitControls, useScroll, ScrollControls, Scroll } from "@react-three/drei";
import gsap from "gsap";
import "./style.css";
import CustomLayer from "./CustomLayer";
extend({ CustomLayer });


function Foo() {
  const materialRef = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame((state) => {
    const { clock } = state;
    materialRef.current.time = clock.getElapsedTime();
  });

  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration());
    console.log(scroll.offset)
  })

  useLayoutEffect(()=>{
    tl.current = gsap.timeline();

    tl.current.to(
      materialRef.current.position,
      {
       duration:3,
      //  y:-BOX_HEIGHT * (NB_FLOORS -1),
       x:-100,
       y: -100
      },
      0
    )

  }, [])

  return (
    <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
      <sphereGeometry args={[3.0, 64, 32]} />
       <LayerMaterial>
        <customLayer ref={materialRef} time={0.0} lacunarity={4.5} />
      </LayerMaterial>
    </mesh>
  );
}

const Rectangle = () => {
  return (
    <>
   
       
          {/* <Canvas style={{ width: "100vw", height: "90vh", opacity: "0.5"  }}>
          <ScrollControls pages={3} damping={0.25}>
            <Foo />
       
            </ScrollControls>
        
          </Canvas> */}
          <Test></Test>
       
        <div className="mask_two">
          <div className="mask_bottom"></div>
        </div>
        <div className="frame">
          <div className="frame_line frame_line_top"></div>
          <div className="frame_line frame_line_right"></div>
          <div className="frame_line frame_line_left"></div>
        </div>
   
    </>
  );
};

export default Rectangle;
