"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Model from "./SmileFaceModel";
import CamearaAnimation from "./CameraAnimation";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function SmileFace(props) {

  function CameraAngle(){
    const degreesToRadians = (degrees) => degrees * (Math.PI / 360);
    const {camera} = useThree();
      camera.rotation.x = degreesToRadians(-45);// 45 degrees to radians
    
  }
  return (
    <>
      <div className="h-screen w-screen relative " style={{backgroundColor: '#E34300'}}>
      <div className=" absolute center z-10 ">
      <p className=" ms-5 text">Klaudia Krzeminska</p>
      <p className="title" style={{color: '#FFFF99'}}><span >Free</span>lancer Fronted Webdeveloper</p>
      </div>
        <div className="absolute top-0 h-full w-full opacity-80">
          <Canvas>
            <OrthographicCamera makeDefault zoom={80} position={[18, -1, 5]}/>
            <CamearaAnimation />
            {/* <CameraAngle /> */}
            <ambientLight intensity={1.0} />
            <directionalLight intensity={5.5} position={[0, 8, 0]} />
            <Model />
            <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
            
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
