"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import Model from "./SmileFaceModel";
import CamearaAnimation from "./CameraAnimation";

export default function SmileFace(props) {
  return (
    <>
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 h-full w-full ">
          <Canvas>
            <OrthographicCamera makeDefault zoom={60} position={[18, 0, 5]} />
            <CamearaAnimation />
            <ambientLight intensity={1.0} />
            <directionalLight intensity={2.5} position={[1, 5, 0]} />
            <Model />
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
