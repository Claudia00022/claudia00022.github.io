import { useFrame } from "@react-three/fiber";
import { useTransform, useMotionValue} from "framer-motion";
import useMouse from "./useMouse";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { fragment, vertex } from "./Shader";
import { useAspect, useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function Model() {
    const mouse = useMouse();
    const{viewport} = useThree();
    const mesh = useRef();
    const texture = useTexture('/img/moonTwo.jpg');
    const scale = useAspect(
      texture.image.width,
      texture.image.height,
     0.220
    )
    const smootheMouse = {
        x:useMotionValue(0),
        y:useMotionValue(0)
    };

    const uniforms = useRef({
      uTexture: {value:texture},
      uDelta:{value: {x:0, y:0}},
      uAmplitude: { value: 0.0005 },
      uAlpha: { value: 0 }
    })

    const lerp = (x, y, a) => x*(1-a) + y*a;
    useFrame(()=>{
       const {x, y} = mouse;
       const smoothX = smootheMouse.x.get();
       const smoothY = smootheMouse.y.get();
       smootheMouse.x.set(lerp(smootheMouse.x.get(), x.get(), 0.1));
       smootheMouse.y.set(lerp(smootheMouse.y.get(), y.get(), 0.1));
       mesh.current.material.uniforms.uDelta.value = {
        x: x.get() - smoothX,
        y: -1 * (y.get() - smoothY)
       }
    });


    const  x = useTransform(smootheMouse.x, [0, window.innerWidth], [-1*viewport.width / 2, viewport.width / 2]);
    const y  = useTransform(smootheMouse.y, [0, window.innerHeight], [viewport.height / 2, -1 * viewport.height / 2])
  return (
    <motion.mesh scale={scale} ref = {mesh} position-x = {x} position-y = {y}>
      <planeGeometry args={[1, 1, 15, 15]} />
      {/* <meshBasicMaterial color="black" wireframe={true} />*/}
      <shaderMaterial 
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </motion.mesh>
  );
}
