import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Scroll,
  Html,
  OrbitControls,
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

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
      },
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 70%",
        end: "center 70%",
        markers: true,
      },
    });

    tl.to(ref.current.position, {
      x: -5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <mesh ref={ref}>
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
        <Canvas orthographic camera={{position:[0, 0, 5], zoom:150}}    >
          <pointLight position={[0, 1, 0]} /> <Box> </Box>{" "}
          <OrbitControls enableZoom={false} />{" "}
        </Canvas>{" "}
      </div>{" "}
      <div className="h-screen"> hero </div>{" "}
      <div className="second-section h-screen ">
        media <Media> </Media>{" "}
      </div>{" "}
      <div className="third-section h-screen ">
        media <Media> </Media>{" "}
      </div>{" "}
    </>
  );
}

export default Test;
