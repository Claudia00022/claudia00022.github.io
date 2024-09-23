import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Scroll,
  Html,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Media from "../../components/media";
import "./test.style.css";
import { LayerMaterial } from "lamina";

import CustomLayer from "../../components/rectangle/CustomLayer";
extend({
  CustomLayer,
});

gsap.registerPlugin(ScrollTrigger);

function Box() {
  const ref = useRef();
  const {camera} = useThree();
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
        trigger: ".second-section",
        start: "top 70%",
        // end: "bottom 50%",
        markers: true,
          toggleActions: "play reverse play reverse"
        
      },
    });
    tl.timeScale(0.8);
    tl.to(ref.current.position, {
      x: -4,
      y:0,
      z:0,
    });
  

    tl.to(camera.scale, {
      x: 0.7,
      y:0.7,
      z:0.7,
    });

   

  }, []);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[3, 64, 32]} />{" "}
      <LayerMaterial>
        <customLayer ref={ref} time={0.0} lacunarity={4.5} />{" "}
      </LayerMaterial>{" "}
    </mesh>
  );
}

function Test() {
  return (
    <>
      <div className="container_sphere fixed top-0 h-screen">
        <Canvas orthographic camera={{position:[0, 0, 5], zoom:150}} scale={[1, 1, 1]}   > 
          <Box> </Box>{" "}
          <OrbitControls enableZoom={false} />{" "}
          <Environment preset="forest" />
        </Canvas>{" "}
      </div>{" "}
      <div className="h-screen"> hero </div>{" "}
      <div className="second-section h-screen ">
        media <Media> </Media>{" "}
      </div>{" "}
    </>
  );
}

export default Test;
