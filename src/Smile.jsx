import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import imgData from "./smileImgData";
import { useRef } from "react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function MySmile() {
  const gltf = useLoader(GLTFLoader, imgData[7].img);
  const refSmile = useRef(null);

  useFrame(()=>{
    refSmile.current.rotation.z += -0.01;
  })
  return <primitive ref = {refSmile} object={gltf.scene}></primitive>;
}

export default function Smile() {
  return (
    <div className="absolute -top-10 -left-24 " style={{width:'600px', height:'600px'}}>
    <Canvas>
    <ambientLight intensity={5.0} />
      {/* <directionalLight intensity={2.5} position={[0, 8, 0]} /> */}
      <MySmile />
      <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>s
    </Canvas>
    </div>
  );
}
