import React, { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayerMaterial } from "lamina";
import CustomLayer from "./rectangle/CustomLayer";
extend({
  CustomLayer,
});

gsap.registerPlugin(ScrollTrigger);






function Box() {
  const ref = useRef(null);
  const { camera } = useThree();
  console.log(ref);

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'first_section',
          start: "top 60%",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });

       tl.to(ref.current.position, {x: -4.5}, 0);
       tl.to(camera.scale, {x: 0.7,y: 0.7,z: 0.7}, 0)
    });

    return () => context.revert();
  }, [camera.scale]);


  // useLayoutEffect(() => {



  // gsap.to(ref.current.position, {
  //     scrollTrigger: {
  //       trigger: ".first_section",
  //       immediateRender: false,
  //       start: "top 60%",
  //       // markers: true,
   
  //     toggleActions: "play pause play reverse", //onEnter onLeave onEnterBack onLeaveBack
  //     },
  //     x: -4.5,
  //     y: 0,
  //     z: 0,
   
  //   });
  //   gsap.to(camera.scale, {
  //     scrollTrigger: {
  //       trigger: ".first_section",
  //       immediateRender: false,
  //       start: "top 60%",
  //       // markers: true,
    
  //       toggleActions: "play pause play reverse",
  //     },

  //     x: 0.7,
  //     y: 0.7,
  //     z: 0.7,
  //     duration: 0.5
  //   });
  //   gsap.to(ref.current.position, {
  //     scrollTrigger: {
  //       trigger: ".third_section",
  //       immediateRender: false,
  //       start: "top bottom",
  //       end: 'bottom top',
  //       // markers: true,
  //      toggleActions: "play none play reverse",
  //   },
  //   x: -10.0,
  //   y: 0,
  //   z: 0,
  // })
  // }, [camera.scale]);

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
      <div className="fixed top-0 h-screen z-20 w-screen hero_rec">
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
