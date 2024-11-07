'use client'
import React, {useLayoutEffect, useRef} from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";


export default function SmileFace(props) {
  const texture = useLoader(TextureLoader, "/img/earth.jpg.jpg");

 

  function Model(){
    const gltf = useLoader(GLTFLoader, './img/smileFace.glb');
    const ref = useRef(null);
     

    useFrame(() => {

        // ref.current.rotation.x  += 0.001;
        ref.current.rotation.y  += 0.001;
    
    })

    return(
      <mesh>
      <primitive
      ref = {ref}
      object={gltf.scene}
      position = {[0,-5,-5]}
     
      />
      </mesh>
    )

  }

  function ModelTwo(){
    const gltf = useLoader(GLTFLoader, './img/smileFace2.glb');
    const ref = useRef(null);
     

    useFrame(() => {

        // ref.current.rotation.x  += 0.01;
        ref.current.rotation.y  += 0.001;
    
    })

    return(
      <mesh>
      <primitive
      ref = {ref}
      object={gltf.scene}
      position = {[10,-5,-5]}
     
      />
      </mesh>
    )

  }

  function ModelThree(){
    const gltf = useLoader(GLTFLoader, './img/smileFace3.glb');
    const ref = useRef(null);
     

    useFrame(() => {

        // ref.current.rotation.x  += 0.001;
        ref.current.rotation.y  += 0.001;
    
    })

    return(
      <mesh>
      <primitive
      ref = {ref}
      object={gltf.scene}
      position = {[-10,-5,-5]}
     
      />
      </mesh>
    )

  }

   function CamearaAnimation(){
    const {camera} = useThree();

    useLayoutEffect(() => {
      gsap.to(camera.position, {
        x: 10,
        duration:50,
        ease:'power2.inOut',
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
          <Canvas
        
        // camera={{ position: [8, 5, 10] }}
          >
          <CamearaAnimation />
            <ambientLight intensity={1.0} />
            <directionalLight intensity={2.5} position={[1, 5, 0]} />
            <Model  />
            <ModelTwo />
            <ModelThree />
          
            {/* <OrbitControls target={[0, 1, 0]}  /> */}
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
