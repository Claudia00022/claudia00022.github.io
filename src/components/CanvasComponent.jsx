"use client";
import { useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { OrthographicCamera } from "@react-three/drei";

function CameraUpdater({ zoom }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
  }, [zoom]);

  return null;
}

export default function CanvasComponent(props) {
  const texture = useLoader(TextureLoader, "/img/earth.jpg.jpg");
  const [zoom, setZoom] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setZoom(100);
      } else if (width < 1024) {
        setZoom(100);
      } else {
        setZoom(130);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-0 h-full w-full -z-10 bg-[#eeefee]   ">
      <Canvas orthographic camera={{ position: [5, 0, 5], zoom: zoom }}>
        <CameraUpdater zoom={zoom} />
        <ambientLight intensity={0.5} color="#F4F4F4" />
        <directionalLight
          intensity={1.5}
          position={[5, 0, -0.2]}
          color="#dddddd"
        />
        <motion.mesh
          position={[0, 0, 0]}
          scale={3.0}
          rotation-y={props.scrollYP}
        >
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial
            map={texture}
            color="#eeefee"
            metalness={0.2}
            roughness={0.8}
          />
        </motion.mesh>

        {/* <motion.mesh
          position={[0, 0, 0]}
          scale={3.001}
          rotation-y={props.scrollYP}
        >
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial
            color="#DADADA"
            transparent
            opacity={0.5}
            metalness={0.2}
            roughness={0.9}
          />
        </motion.mesh> */}
        <EffectComposer>
          {/* <Noise premultiply blendFunction={BlendFunction.SCREEN} /> */}
           <Noise premultiply blendFunction={BlendFunction.SCREEN} opacity={0.1} />
  <Vignette eskil={false} offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
