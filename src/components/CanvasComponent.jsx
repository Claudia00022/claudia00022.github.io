import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayerMaterial } from "lamina";
import "../shaders/simulationMaterial";
import CustomLayer from "./rectangle/CustomLayer";
extend({
  CustomLayer,
});

gsap.registerPlugin(ScrollTrigger);

function Box() {
  const ref = useRef();
  const { camera } = useThree();
  console.log(ref);

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
      },
      scrollTrigger: {
        trigger: ".first_section",
        start: "top 60%",
        markers: true,
        toggleActions: "play reverse play reverse ",
      },
    });
    tl.timeScale(0.8);
    tl.to(ref.current.position, {
      x: -4.5,
      y: 0,
      z: 0,
    });

    tl.to(camera.scale, {
      x: 0.7,
      y: 0.7,
      z: 0.7,
    });
  }, [camera.scale]);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 64, 32]} />{" "}
      <LayerMaterial>
        <customLayer ref={ref} time={0.0} lacunarity={4.5} />{" "}
      </LayerMaterial>{" "}
    </mesh>
  );
}

export default function CanvasComponent() {
  return (
    <>
      <div className="fixed top-0 h-screen z-20 w-screen">
        <Canvas
          orthographic
          camera={{ position: [0, 0, 5], zoom: 150 }}
          scale={[1, 1, 1]}
        >
          <ambientLight />
          <Box> </Box>
        </Canvas>{" "}
      </div>{" "}
    </>
  );
}
