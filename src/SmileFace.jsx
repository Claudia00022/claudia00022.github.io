"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, Environment } from "@react-three/drei";
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
      <div className="h-screen w-full relative " style={{backgroundColor: '#EEEFEE'}}>
      <div className=" absolute bottom-10 w-4/12 ms-5 ">
      {/* <p className="title border-b mb-3 " style={{color:'#F7F7AA', fontWeight:'bold', fontSize: '100px'}}>1.</p> */}
      <p className=" ms-3 text">Klaudia Krzeminska</p>
      <p className="title border-b" style={{color: '#3F3B37'}}><span >Free</span>lancer Fronted Webdeveloper and Webdesigner <span className="text">/01</span></p>
      </div>
      <div className="absolute bottom-10 w-4/12 text right-10 border-b">Lets have fun</div>
        <div className="absolute top-0 h-screen w-full opacity-80" >
          <Canvas>
          <Environment preset="forest" />
            <OrthographicCamera makeDefault zoom={80} position={[18, -1, 5]}/>
            <CamearaAnimation />
            {/* <CameraAngle /> */}
            {/* <ambientLight intensity={1.0} /> */}
            {/* <directionalLight intensity={5.5} position={[0, 8, 0]} /> */}
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
