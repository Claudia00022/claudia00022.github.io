"use client";

import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, Environment } from "@react-three/drei";
import Model from "./SmileFaceModel";
import CamearaAnimation from "./CameraAnimation";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Smile } from "lucide-react";

export default function SmileFace(props) {
  const year = new Date().getFullYear();
  return (
    <>
      <div
        className="h-screen w-full relative bg-[#0D0D0D]  "
        style={{
          borderBottom: "2px solid #373737",
        }}
      >
        <div className=" absolute w-full bottom-10 left-0 xs:ps-3 xl:ps-40  ">
          <p className="text-base xl:text-xl text-[#EB5939] opacity-50 font-[700]  ">
            01/
          </p>
          <p className=" text text-[#EB5939] font-bold">Klaudia Krzeminska</p>
          <p className="title  xs:text-6xl lg:text-8xl text-[#A89C89] pt-5 ">
            Fronted<br></br> Developer<br></br> and Web<br></br>designer
          </p>{" "}
        </div>
        <div className="absolute top-0 h-screen w-full opacity-80">
          <Canvas>
            <Environment preset="forest" />
            <OrthographicCamera makeDefault zoom={70} position={[18, -1, 5]} />
            <CamearaAnimation />

            <Model />

            <EffectComposer>
              <Noise premultiply blendFunction={BlendFunction.SCREEN} />
            </EffectComposer>
          </Canvas>{" "}
        </div>{" "}
        <div className="w-10 h-10 bg-[#ffeeca] fixed xs:top-3 xs:left-3 lg:top-10 lg:left-10 z-50 rounded-full flex items-center justify-center opacity-70 cursor-pointer mt-3 ">
          <a href="#home">
            {" "}
            <Smile className="w-8 h-8 text-[#19b9e6]  " />
          </a>
        </div>
        <div className="absolute bottom-0 right-5 text text-[#A89C89] font-bold">
          <p>
            <span className="pe-1">©</span>
            {year}
          </p>
        </div>
      </div>
    </>
  );
}
