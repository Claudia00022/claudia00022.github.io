import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import imgData from "./smileImgData";
import { useEffect, useRef, useState } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from 'three';

function MySmile() {
  const gltf = useLoader(GLTFLoader, imgData[7].img);
  const refSmile = useRef(null);

   useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.color = new THREE.Color('#f5b061'); // ⬅️ zmień na dowolny kolor

        child.material.needsUpdate = true;
        child.material.transparent = true;
child.material.opacity = 0.5; // ⬅️ dopasuj wartość od 0 do 1

      }
    });
  }, [gltf]);
 
  
 

  useFrame(() => {
    refSmile.current.rotation.z += -0.01;
  });

  return <primitive 
      ref={refSmile}
      object={gltf.scene}
      scale={0.4}           // ⬅️ zmień skalę jeśli model jest za duży / mały
      position={[0, 0, 0]}  // ⬅️ dopasuj w razie potrzeby do kamery
  ></primitive>;
}



export default function Smile(props) {


  
  return (
    <div
      ref={props.smile_container}
      className="absolute top-[38%] left-[45%] xs:w-[300px] xs:h-[300px] md:w-[350px] md:h-[350px]  lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none "

    >
      <Canvas  camera={{ position: [0, 0, 3], fov: 40 }}>
        <ambientLight intensity={3.0} />
        <MySmile />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
