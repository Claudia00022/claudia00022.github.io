import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { ScrollControls, useScroll, Scroll, Html } from "@react-three/drei";
import gsap from "gsap";
import Media from "../../components/media";
import "./test.style.css";
import { LayerMaterial } from "lamina";

import CustomLayer from "../../components/rectangle/CustomLayer";
extend({ CustomLayer });

let nav = document.querySelector('.container_sphere')
console.log(nav)

function Box() {
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position, {x: nav.innerWidth , duration:2});
    tl.current.to(ref.current.material.opacity, {opacity: 0, duration:1});
    console.log(ref.current.material.opacity)
  },[]);

  return (
    <mesh ref={ref} >
      <sphereGeometry args={[3, 64, 32]}  />
      <LayerMaterial>
        <customLayer ref={ref} time={0.0} lacunarity={4.5} />
      </LayerMaterial>
    </mesh>
  );
}

function Test() {
  return (
    <div className="container_sphere">
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 5] }}>
        <ScrollControls distance={0.1} pages={1}>
          <Scroll>
            <Box></Box>
          </Scroll>
        </ScrollControls>

        <Html>
          <Media></Media>
        </Html>
      </Canvas>
    </div>
  );
}

export default Test;


