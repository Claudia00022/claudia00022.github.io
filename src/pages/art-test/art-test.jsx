import { useEffect, useRef, useState } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  createPortal,
} from "@react-three/fiber";
import {
  OrbitControls,
  useFBO,
  useGLTF,
  MeshTransmissionMaterial,
  Text,
  ScrollControls,
  Scroll,
  Preload,
  Html,
  Image,
  useScroll
} from "@react-three/drei";
import * as THREE from "three";
import { easing, geometry } from "maath";
import Lenis from "lenis";

import '../../artsData'




function Lens({ children, damping = 0.15, ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF("/img/lens-transformed.glb");
  const buffer = useFBO();
  const viewport = useThree((state) => state.viewport);
  const [scene] = useState(() => new THREE.Scene());

 
  useFrame((state, delta) => {
    // Tie lens to the pointer
    // getCurrentViewport gives us the width & height that would fill the screen in threejs units
    // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
    // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
    const viewport = state.viewport.getCurrentViewport(
      state.camera,
      [0, 0, 15]
    );
    easing.damp3(
      ref.current.position,
      [
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        15,
      ],
      damping,
      delta
    );


    // This is entirely optional but spares us one extra render of the scene
    // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
    // The following code will render that scene into a buffer, whose texture will then be fed into
    // a plane spanning the full screen and the lens transmission material
    state.gl.setRenderTarget(buffer);
    state.gl.setClearColor("#dedede");
    state.gl.render(scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh
        scale={0.25}
        ref={ref}
        rotation-x={Math.PI / 2}
        geometry={nodes.Cylinder.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.2} thickness={1.5} anisotropy={0.1} chromaticAberration={0.04}
          
        />
      </mesh>
    </>
  
  );

}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img/elephant.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/img/elephant.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/img/elephant.jpg" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/img/elephant.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/img/elephant.jpg" />
      <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="/img/elephant.jpg"/>
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.1, 1]} url="/img/elephant.jpg" />
    </group>
  )
}

function Typo() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const shared = { letterSpacing: -0.1, color: 'white' }
  return (
    <>
      <Text children="art" anchorX="left" position={[-width / 2.5, -height / 10, 12]} {...shared} />
      <Text children="is" anchorX="right" position={[width / 2.5, -height * 2, 12]} {...shared} />
      <Text children="my" anchorX="left" position={[-width / 2.5, -height * 3, 12]} {...shared} />
      <Text children="passion" position={[0, -height * 4.624, 12]} {...shared} />
    </>
  )
}

export default function ArtTest() {
 
  return (
    <>
      <div className=" relative h-screen ">
        <div className="absolute top-0 right-0 w-6/12 h-screen z-50">

          <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
         <ScrollControls   pages={3} distance={0.5}>
            <Lens> 
            
             <Scroll>
              <Images />
              <Typo />
              </Scroll>
              <Preload />
           
            </Lens>
             </ScrollControls>
            
          </Canvas>
        </div>
      </div>
    </>
  );
}
