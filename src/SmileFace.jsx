"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Model from "./SmileFaceModel";
import CamearaAnimation from "./CameraAnimation";

export default function SmileFace(props) {

  function CameraAngle(){
    const degreesToRadians = (degrees) => degrees * (Math.PI / 360);
    const {camera} = useThree();
      camera.rotation.x = degreesToRadians(-45);// 45 degrees to radians
    
  }
  return (
    <>
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 h-full w-full ">
          <Canvas>
            <OrthographicCamera makeDefault zoom={80} position={[18, 0, 5]}/>
            <CamearaAnimation />
            <CameraAngle />
            {/* <ambientLight intensity={1.0} /> */}
            <directionalLight intensity={2.5} position={[1, 5, 0]} />
            <Model />
            
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
