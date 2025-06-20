"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  Environment,
} from "@react-three/drei";
import Model from "./SmileFaceModel";
import CamearaAnimation from "./CameraAnimation";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function SmileFace(props) {
  function CameraAngle() {
    const degreesToRadians = (degrees) => degrees * (Math.PI / 360);
    const { camera } = useThree();
    camera.rotation.x = degreesToRadians(-45); // 45 degrees to radians
  }
  return (
    <>
      <div
        className="h-screen w-full relative bg-[#0D0D0D]  "
        style={{
          borderBottom: '2px solid #373737',
        }}
      >
        <div className=" absolute  w-full  bottom-10 left-0 xl:ps-40  ">
             <p
            className="text-base xl:text-xl text-[#ffeeca] opacity-50 font-[700] ps-5 "
          >
            01/
          </p>
          <p className=" text text-[#f5b061] ps-5">Klaudia Krzeminska</p>
          <p className="title  xs:text-6xl lg:text-8xl text-[#A89C89] p-5 ">
            Fronted<br></br> Developer<br></br> and Web<br></br>designer
          </p>{" "}
       
        </div>
     
        <div className="absolute top-0 h-screen w-full opacity-80">
          <Canvas>
            <Environment preset="forest" />
            <OrthographicCamera makeDefault zoom={80} position={[18, -1, 5]} />
            <CamearaAnimation />
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
