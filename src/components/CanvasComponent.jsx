'use client'
import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


export default function CanvasComponent(props) {
  const texture = useLoader(TextureLoader, "/img/earth.jpg.jpg");
  

  return (
    <>
      <div className="h-screen w-full relative ">
        <div className="absolute top-0 h-full w-full -z-10">
          <Canvas
            orthographic
            camera={{ position: [5, 0, 5], zoom: 150 }}
            // scale={[1, 1, 1]}
          >
            <ambientLight intensity={0.5} />
            <directionalLight intensity={2.5} position={[5, 0, -0.2]} />
            <motion.mesh
              position={[0, 0, 0]}
              scale={3.0}
              rotation-y={props.scrollYP}
            >
              <sphereGeometry args={[1, 64, 32]} />{" "}
              <meshStandardMaterial map={texture} />
            </motion.mesh>
            <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.SCREEN} />
        </EffectComposer>
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
