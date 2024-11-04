'use client'
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";


export default function SmileFace(props) {
  const texture = useLoader(TextureLoader, "/img/earth.jpg.jpg");

  function Model(){
    const gltf = useLoader(GLTFLoader, './img/smileFace.glb');
    console.log(gltf)

    return(
      <primitive
      object={gltf.scene}
    //   children-0-material-color= '#fc1485'
    //   children-0-material-clearcoat={1.0}
    //   children-0-material-transmission={1.0}
    //   children-0-material-ior={1.74}
    //   children-0-material-thickness={3.12}
      />
    )

  }

  return (
    <>
      <div className="h-screen w-screen relative ">
   
        <div className="absolute top-0 h-full w-full ">
          <Canvas
        
        camera={{ position: [-8, 5, 8] }}
          >
            <ambientLight intensity={1.0} />
            <directionalLight intensity={2.5} position={[1, 5, 0]} />

            <Model />
            <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
