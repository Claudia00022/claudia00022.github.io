import imgData from "./smileImgData";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export default function Model(props) {
  const gltf = useLoader(GLTFLoader, imgData[0].img);
  const ref = useRef(null);

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.05 * delta;
    ref.current.rotation.y += 0.05 * delta;
  });

  return (
    <primitive
      key={props.key}
      position={props.position}
      ref={ref}
      object={gltf.scene}
    ></primitive>

    // <mesh ref={ref} {...props}>
    //     <boxGeometry />
    //     <meshPhysicalMaterial
    //         roughness={0}
    //     metalness={0}
    //     thickness={3.12}
    //     ior={1.74}
    //     transmission={1.0}
    //     />
    // </mesh>
  );
}
