"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";

export default function SmileFace(props) {
  function Model() {
    const gltf = useLoader(GLTFLoader, "./img/smileFace.glb");
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");
    const ref = useRef(null);

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += 0.05 * delta;
      // ref.current.rotation.y += 0.05 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[0, 0, -5]} rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }

  function ModelTwo() {
    const gltf = useLoader(GLTFLoader, "./img/smileFace2.glb");
    const ref = useRef(null);

    useFrame((_, delta) => {
      // ref.current.rotation.x  += 0.1 * delta;
      ref.current.rotation.y += 0.1 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[8, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }

  function ModelThree() {
    const gltf = useLoader(GLTFLoader, "./img/smileFace3.glb");
    const ref = useRef(null);
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += -0.09 * delta;
      ref.current.rotation.y += -0.09 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[-8, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }
  function ModelFour() {
    const gltf = useLoader(GLTFLoader, "./img/smile4.glb");
    const ref = useRef(null);
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += -0.09 * delta;
      ref.current.rotation.y += -0.09 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[-16, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }
  function ModelFive() {
    const gltf = useLoader(GLTFLoader, "./img/smile5.glb");
    const ref = useRef(null);
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += -0.09 * delta;
      ref.current.rotation.y += -0.09 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[16, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }
  function ModelSix() {
    const gltf = useLoader(GLTFLoader, "./img/smile6.glb");
    const ref = useRef(null);
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += -0.09 * delta;
      ref.current.rotation.y += -0.09 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[-24, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }
  function ModelSeven() {
    const gltf = useLoader(GLTFLoader, "./img/smile7.glb");
    const ref = useRef(null);
    // const texture = useLoader(TextureLoader, "/img/rgb.jpg");

    // gltf.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.map = texture; // Set the texture as the map
    //     child.material.needsUpdate = true; // Ensure the material updates
    //   }
    // });

    useFrame((_, delta) => {
      ref.current.rotation.x  += -0.09 * delta;
      ref.current.rotation.y += -0.09 * delta;
    });

    return (
      <mesh>
        <primitive ref={ref} object={gltf.scene} position={[24, 0, -5]}  rotation={[-Math.PI/4, 0,0]}/>
      </mesh>
    );
  }

  function CamearaAnimation() {
    const { camera } = useThree();

    useLayoutEffect(() => {
      gsap.to(camera.position, {
        x: 10,
        duration: 100,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, [camera]);
    return null;
  }

  return (
    <>
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 h-full w-full ">
          <Canvas>
            <OrthographicCamera makeDefault zoom={60} position={[0, 0, 5]} />
            <CamearaAnimation />
            <ambientLight intensity={1.0} />
            <directionalLight intensity={2.5} position={[1, 5, 0]} />
            <Model />
            <ModelTwo />
            <ModelThree />
            <ModelFour />
            <ModelFive />
            <ModelSix />
            <ModelSeven />
          </Canvas>{" "}
        </div>{" "}
      </div>
    </>
  );
}
