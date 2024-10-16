import React, {useLayoutEffect, useRef} from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";
gsap.registerPlugin(ScrollTrigger);

export default function CanvasComponent(props) {
  const texture = useLoader(TextureLoader, "/img/earth.jpg.jpg");
  const ref = useRef(null);
  console.log(ref);
  const y = 'none';

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({scrollTrigger:{
  //     trigger: '.second-section ',
  //     markers: true,
  //     scrub:1,
  //     start: 'top bottom',
  //     end: 'bottom 100%',
  
  //   }});

  //   tl.to(ref.current,  {display:y})
  // })


 

  return (
    <>
    <div className='h-screen w-screen'>
      <div className="fixed top-0 h-full w-full hero_rec -z-10"  ref={ref} style={{display:'block'}}>
        <Canvas
          orthographic
          camera={{ position: [0, 0, 5], zoom: 150 }}
          scale={[1, 1, 1]}
     

        >
         <ambientLight intensity={0.1} />
          <directionalLight intensity={2.5} position={[5, 0, -0.2]}  />
          <motion.mesh
            position={[0, 0, 0]}
            scale={3.0}
            rotation-y={props.scrollYProgress}
      
          >
            <sphereGeometry args={[1, 64, 32]}      />{" "}
            <meshStandardMaterial  map={texture} />
          </motion.mesh>
        </Canvas>{" "}
      </div>{" "}
      </div>
    </>
  );
}
