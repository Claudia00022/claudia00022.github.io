"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";
import imgData from "./smileImgData";
import Model from "./SmileFaceModel";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function GLBModel({ position, url }) {
  const { scene, isLoaded } = useGLTF(url);

  if (!isLoaded) {
    return <mesh position={position}><textGeometry args={['Loading...', { size: 0.5 }]} /><meshBasicMaterial color="black" /></mesh>; // Show loading text
  }

  return <primitive object={scene} position={position}  />;
}




export default function SmileFace() {
  const glbUrl = imgData[0].img
  const [xPosition, setXPosition] = useState(0);
  const position = [8,0,0]

 function moveSmile(){
  setXPosition(prevX => prevX + 8);
  console.log('click')
 };

 function generatePosition(count){

    const objects = [];

    for (let i = 0; i < count; i++){
      const newPosition = [xPosition + i*8, 0,0];
      objects.push(newPosition);
    };
    return objects;
 }


 const objects = generatePosition(5);


  function CamearaAnimation() {
    const { camera } = useThree();

    useLayoutEffect(() => {
      gsap.to(camera.position, {
        x: 10,
        duration: 10,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, [camera]);
    return null;
  }

 return (
    <>
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 h-full w-full ">
          <Canvas onPointerEnter={moveSmile}>

            <OrthographicCamera makeDefault zoom={60} position={[0, 0, 5]} />
            <CamearaAnimation />
            <ambientLight intensity={1.0} />
            <directionalLight intensity={2.5} position={[1, 5, 0]} />
              {[...Array(2).keys()].map((x)=>
              [...Array(1).keys()].map((y)=>(
                <GLBModel key={`${x}-${y}`} position={[x * 2.5, y * 2.5, 0]} url={glbUrl}/>
           ))   ).flat()}
           
   
             

        
           
          
      
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
