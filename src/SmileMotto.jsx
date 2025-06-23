import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import {
  OrbitControls,
  useGLTF,
  Environment,
  OrthographicCamera,
} from "@react-three/drei";
import imgData from "./smileImgData";
import { useRef, useEffect, useState } from "react";
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
  const [zoom, setZoom] = useState(80); // default zoom
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile devices
        setZoom(40);
        setCameraPosition([0, 3, 5]);
      } else if (width < 1024) {
        // Tablets
        setZoom(60);
        setCameraPosition([0, 2, 5]);
      } else {
        // Desktop
        setZoom(80);
        setCameraPosition([0, 0, 5]);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-70 ">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Environment preset="forest" />
        <OrthographicCamera makeDefault zoom={zoom} position={cameraPosition} />
        <MySmile />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
