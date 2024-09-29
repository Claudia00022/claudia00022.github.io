import { useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ArtBox(props) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "./img/elephant.jpg");

  useFrame((_, delta) => {
    // ref.current.rotation.x += 1 * delta;
    // ref.current.rotation.y += 1.0 * delta
  });
  return (
    <mesh ref={ref} castShadow>
      <ambientLight />
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Shadows(props) {
    const { viewport } = useThree()
    return (
      <mesh receiveShadow scale={[viewport.width, viewport.height, 1]} {...props}>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.5} />
      </mesh>
    )
  }

export default function ArtComponent() {
  return (
    <>
      <div className="absolute h-screen w-screen  right-0 z-50">
   
        <Canvas shadows   frameloop="demand" camera={{ position: [1, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          castShadow
          shadow-mapSize={[2024, 2024]}
        />
        <pointLight position={[10, 0, 0]} />
          <ArtBox />
          <Shadows />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
}
