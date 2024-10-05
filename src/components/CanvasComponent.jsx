import React, { useLayoutEffect, useRef, useEffect } from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayerMaterial } from "lamina";
import CustomLayer from "./rectangle/CustomLayer";
import { TextureLoader } from "three";
extend({
  CustomLayer,
});

gsap.registerPlugin(ScrollTrigger);




function Box() {
  const ref = useRef();
  console.log(ref);

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.15 * delta;
  });

  
  useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".first_section",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: true,
         
        },
      });

       tl.to(ref.current.position, {x:-4.5, y:0, z:0}, 0);
      //  tl.to(camera.scale, {y: 0.1, x:0.1, z: 0.1}, 0);
      tl.to(ref.current.scale, {scale: 4.5}, 0);
    

  }, []);

  const texture = useLoader(TextureLoader, '/img/earth.jpg.jpg');

return (
    <mesh ref={ref} position={[0, 0, 0]} scale={3.0}>
      <sphereGeometry args={[1, 64, 32]}  />{" "}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}




export default function CanvasComponent() {
  
  return (
    <>
      <div  className="fixed top-0 h-screen z-20 w-screen hero_rec">
        <Canvas
          orthographic
          camera={{ position: [0, 0, 5], zoom: 150 }}
          scale={[1, 1, 1]}
        >
         <directionalLight intensity={3.5} position={[1, 0, -.25]} />
          <Box> </Box>
        </Canvas>{" "}
      </div>{" "}
    </>
  );
}
