import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrthographicCamera } from "@react-three/drei";
import imgData from "../../smileImgData";
import { useRef, useEffect, useState } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function MySmile() {
  const { nodes } = useGLTF(imgData[8].img);
  const refSmile = useRef();
  const eyeRef = useRef();
  const eyeRefTwo = useRef();
  const smileRef = useRef();

  useFrame(() => {
    refSmile.current.rotation.y += -0.002;
    refSmile.current.rotation.z += 0.02;
    smileRef.current.rotation.y += 0.001;
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile devices
        setZoom(80);
      } else if (width < 1024) {
        // Tablets
        setZoom(80);
      } else {
        // Desktop
        setZoom(100);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center opacity-70 ">
      <Canvas>
        <Environment preset="forest" />
        <OrthographicCamera makeDefault zoom={zoom} position={[0, 0, 5]} />
        <MySmile />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
