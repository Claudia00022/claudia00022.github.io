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
        className="h-screen w-full relative "
        style={{
          backgroundColor: "#EEEFEE",
          borderLeft: "5px solid #5F605F",
          borderRight: "5px solid #5F605F",
          borderTop: "5px solid #5F605F",
        }}
      >
        <div className=" absolute  xs: w-full md:w-2/4 lg:w-1/4  bottom-10 left-0 ">
             <p
            className="text xs:text-base xl:text-2xl ps-10 "
            style={{ color: "#3F3B37", opacity: 1 }}
          >
            01/
          </p>
          <p className="  text ps-10">Klaudia Krzeminska</p>
          <p className="title  xs:text-5xl lg:text-8xl text-black ps-10 pe-10">
            Fronted Developer and Webdesigner
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
