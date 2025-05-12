import { useFrame } from "@react-three/fiber";
import { useTransform, useMotionValue, animate } from "framer-motion";
import useMouse from "./useMouse";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";
import { fragment, vertex } from "./Shader";
import { meshBounds, useAspect, useTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { projects_data } from "../../projects_data";

export default function Model({ activeProject }) {
  const mouse = useMouse();
  const { viewport } = useThree();
  const mesh = useRef();
  const opacity = useMotionValue(0);
  const textures = [
    useTexture(projects_data[0].src),
    useTexture(projects_data[1].src),
  ];
  // const texture = useTexture('/img/elephant.JPG')
  const scale = useAspect(
    textures[0].image.width,
    textures[0].image.height,
    0.22
  );
  const smootheMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect( () => {
    if(activeProject != null){
        mesh.current.material.uniforms.uTexture.value = textures[activeProject]
        animate(opacity, 0.8, {duration: 0.2, onUpdate: latest => mesh.current.material.uniforms.uOpacity.value = latest})
    }
    else {
        animate(opacity, 0, {duration: 0.2, onUpdate: latest => mesh.current.material.uniforms.uOpacity.value = latest})
    }
}, [activeProject])

  const uniforms = useRef({
    uTexture: { value: textures[0] },
    uDelta: { value: { x: 0, y: 0 } },
    uAmplitude: { value: 0.0005 },
    // uAlpha: { value: 0},
    uOpacity : {value: 0.5},

  });

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smootheMouse.x.get();
    const smoothY = smootheMouse.y.get();
    smootheMouse.x.set(lerp(smootheMouse.x.get(), x.get(), 0.1));
    smootheMouse.y.set(lerp(smootheMouse.y.get(), y.get(), 0.1));
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: -1 * (y.get() - smoothY),
    };
  });

  const x = useTransform(
    smootheMouse.x,
    [0, window.innerWidth],
    [(-1 * viewport.width) / 2, viewport.width / 2]
  );
  const y = useTransform(
    smootheMouse.y,
    [0, window.innerHeight],
    [viewport.height / 2, (-1 * viewport.height) / 2]
  );
  return (
    <motion.mesh scale={scale} ref={mesh} position-x={x} position-y={y} >
      <planeGeometry args={[1, 1, 15, 15]}    opacity = {0}/>
      {/* <meshBasicMaterial color="black" wireframe={true} /> */}
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        transparent = {true}
        uniforms={uniforms.current}

     
      />
    </motion.mesh>
  );
}
