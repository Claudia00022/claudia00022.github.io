import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import {
  OrbitControls,
  useGLTF,
  Environment,
  OrthographicCamera,
} from "@react-three/drei";
import imgData from "./smileImgData";
import { useRef, useEffect } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { geometry } from "maath";
import gsap from "gsap";

function MySmile() {
  // const gltf = useLoader(GLTFLoader,);
  const { nodes } = useGLTF(imgData[8].img);
  const refSmile = useRef();
  const eyeRef = useRef();
  const eyeRefTwo = useRef();
  const smileRef = useRef();

  useFrame(() => {
    refSmile.current.rotation.y += -0.002;
    // refSmile.current.rotation.x += 0.002;
    refSmile.current.rotation.z += 0.02;
    smileRef.current.rotation.y += 0.001;
    // smileRef.current.rotation.x += 0.002;
    // smileRef.current.rotation.z += 0.02;
    eyeRef.current.rotation.y += -0.002;
    eyeRefTwo.current.rotation.y += 0.002;
  });

  return (
    <group>
      <mesh
        ref={refSmile}
        geometry={nodes.torus.geometry}
        material={nodes.torus.material}
      ></mesh>
      <mesh
        ref={eyeRef}
        geometry={nodes.eyeTwo.geometry}
        material={nodes.eyeTwo.material}
      ></mesh>
      <mesh
        ref={eyeRefTwo}
        geometry={nodes.eyeOne.geometry}
        material={nodes.eyeOne.material}
      ></mesh>
      <mesh
        ref={smileRef}
        geometry={nodes.Smile.geometry}
        material={nodes.Smile.material}
      ></mesh>
    </group>
  );
}

useGLTF.preload(imgData[8].img);

export default function SmileMotto() {
  return (
    <div
      className=" w-full h-full absolute top-0 left-0 opacity-80  " 
    >
      <Canvas>
        <Environment preset="forest" />
        <OrthographicCamera makeDefault zoom={80} position={[1, 0, 5]} />
        {/* <ambientLight intensity={6.0} /> */}
        <MySmile />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
        {/* <OrbitControls autoRotate /> */}
      </Canvas>
    </div>
  );
}
