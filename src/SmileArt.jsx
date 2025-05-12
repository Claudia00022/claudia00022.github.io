import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Environment, OrthographicCamera } from "@react-three/drei";
import imgData from "./smileImgData";
import { useRef } from "react";

function MySmile() {
  const gltf = useLoader(GLTFLoader, imgData[8].img);
  const refSmile = useRef(null);

  useFrame(()=>{
    refSmile.current.rotation.y += -0.01;
    // refSmile.current.rotation.x += -0.01;
    refSmile.current.rotation.z += 0.01;

  })
  return <primitive ref = {refSmile} object={gltf.scene}></primitive>;
}

export default function SmileTwo() {
  return (
    <div className="absolute  -bottom-0 -right-0 " style={{width:'600px', height:'600px'}}>
    <Canvas>
    <Environment preset="forest" />
    <OrthographicCamera/>
    {/* <ambientLight intensity={5.0} />
      <directionalLight intensity={2.5} position={[0, 8, 0]} /> */}
      <MySmile />
    </Canvas>
    </div>
  );
}
