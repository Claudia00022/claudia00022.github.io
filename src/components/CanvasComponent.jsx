'use client'
import { useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { EffectComposer, Noise } from "@react-three/postprocessing";
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
  const [zoom, setZoom] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setZoom(80);
      } else if (width < 1024) {
        setZoom(100);
      } else {
        setZoom(150);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-0 h-full w-full -z-10">
      <Canvas orthographic camera={{ position: [5, 0, 5], zoom: zoom }}>
        <CameraUpdater zoom={zoom} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={2.5} position={[5, 0, -0.2]} />
        <motion.mesh position={[0, 0, 0]} scale={3.0} rotation-y={props.scrollYP}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial map={texture} />
        </motion.mesh>
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}