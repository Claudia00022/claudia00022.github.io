import { Canvas, useLoader } from "@react-three/fiber";
import imgData from "../../smileImgData";
import { useRef } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

function MySmile() {
  const texture = useLoader(THREE.TextureLoader, imgData[9].img);
  const refSmile = useRef(null);
  return (
    <mesh ref={refSmile} position={[0, -0.25, 0]} scale={1}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function Smile(props) {
  return (
    <div
      ref={props.smile_container}
      className="absolute xs:top-[35%] lg:top-[32%] left-[50%] xs:w-[300px] xs:h-[300px] md:w-[350px] md:h-[350px]  lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none  "
    >
      <Canvas camera={{ position: [5, 0, 5], fov: 5 }}>
        <ambientLight intensity={3.0} />
        <MySmile />
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
