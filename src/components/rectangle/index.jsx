import { React, useRef, useEffect, useState, Suspense, useLoader } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { LayerMaterial } from "lamina";
import * as THREE from "three";
import "./style.css";
import CustomLayer from "./CustomLayer";
extend({ CustomLayer });


function Foo() {
  
  
  const materialRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    materialRef.current.time = clock.getElapsedTime();
  });

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
 
      <div className="page">
          <div className="background">
            <Canvas style={{width : '100vw', height:'200vh'}}>
              <Foo />
            </Canvas>
          </div>
          <div className="mask_two"> 
           <div className="mask_bottom"></div>
           </div>
          <div className="frame">
          <div className="frame_line frame_line_bottom"></div>
          <div className="frame_line frame_line_top"></div>
          <div className="frame_line frame_line_right"></div>
          <div className="frame_line frame_line_left"></div>
          </div>
          
        </div>
    </>
  );
};

export default Rectangle;
