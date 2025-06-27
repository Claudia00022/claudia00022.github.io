// import { useFrame } from "@react-three/fiber";
// import { useTransform, useMotionValue, animate } from "framer-motion";
// import useMouse from "./useMouse";
// import { motion } from "framer-motion-3d";
// import { useThree } from "@react-three/fiber";
// import { fragment, vertex } from "./Shader";
// import { useAspect, useTexture } from "@react-three/drei";
// import { useRef, useEffect } from "react";
// import { projects_data } from "../../../projects_data";

// export default function Model({ activeProject }) {
//   const mouse = useMouse();
//   const { viewport } = useThree();
//   const mesh = useRef();
//   const opacity = useMotionValue(0);
//   const textures = [
//     useTexture(projects_data[0].src),
//     useTexture(projects_data[1].src),
//   ];
//   const scale = (
//     textures[0].image.width,
//     textures[0].image.height,
//     1.5
//   );
//   const smootheMouse = {
//     x: useMotionValue(0),
//     y: useMotionValue(0),
//   };

//   useEffect(() => {
//     if (activeProject != null) {
//       mesh.current.material.uniforms.uTexture.value = textures[activeProject];
//       animate(opacity, 0.6, {
//         duration: 0.2,
//         onUpdate: (latest) =>
//           (mesh.current.material.uniforms.uOpacity.value = latest),
//       });
//     } else {
//       animate(opacity, 0, {
//         duration: 0.2,
//         onUpdate: (latest) =>
//           (mesh.current.material.uniforms.uOpacity.value = latest),
//       });
//     }
//   }, [activeProject]);

//   const uniforms = useRef({
//     uTexture: { value: textures[0] },
//     uDelta: { value: { x: 0, y: 0 } },
//     uAmplitude: { value: 0.0005 },
//     uOpacity: { value: 0.5 },
//   });

//   const lerp = (x, y, a) => x * (1 - a) + y * a;
//   useFrame(() => {
//     const { x, y } = mouse;
//     const smoothX = smootheMouse.x.get();
//     const smoothY = smootheMouse.y.get();
//     smootheMouse.x.set(lerp(smootheMouse.x.get(), x.get(), 0.8));
//     smootheMouse.y.set(lerp(smootheMouse.y.get(), y.get(), 0.8));
//     mesh.current.material.uniforms.uDelta.value = {
//       x: x.get() - smoothX,
//       y: -1 * (y.get() - smoothY),
//     };
//   });

//   const x = useTransform(
//     smootheMouse.x,
//     [0, window.innerWidth],
//     [(-1 * viewport.width) / 2, viewport.width / 2]
//   );
//   const y = useTransform(
//     smootheMouse.y,
//     [0, window.innerHeight],
//     [viewport.height / 2, (-1 * viewport.height) / 2]
//   );
//   return (
//     <motion.mesh scale={scale} ref={mesh} position-x={x} position-y={y}>
//       <planeGeometry args={[1, 1, 12, 12]} opacity={0} />
//       <shaderMaterial
//         fragmentShader={fragment}
//         vertexShader={vertex}
//         transparent={true}
//         uniforms={uniforms.current}
//       />
//     </motion.mesh>
//   );
// }

import { useFrame, useThree } from "@react-three/fiber";
import { useTransform, useMotionValue, animate } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Html } from "@react-three/drei";
import { useRef, useEffect } from "react";
import useMouse from "./useMouse";

export default function Model({ activeProject }) {
  const mesh = useRef();
  const mouse = useMouse();
  const { viewport } = useThree();

  const smootheMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const opacity = useMotionValue(0); // kontrole widoczności

  // Obsługa opacity przy aktywacji/dezaktywacji
  useEffect(() => {
    animate(opacity, activeProject !== null ? 1 : 0, {
      duration: 0.3,
    });
  }, [activeProject]);

  // Smooth follow
  const lerp = (a, b, n) => a * (1 - n) + b * n;
  useFrame(() => {
    const x = mouse.x.get();
    const y = mouse.y.get();
    smootheMouse.x.set(lerp(smootheMouse.x.get(), x, 0.1));
    smootheMouse.y.set(lerp(smootheMouse.y.get(), y, 0.1));
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
    <motion.mesh ref={mesh} position-x={x} position-y={y}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial transparent opacity={0} />

       {activeProject !== null && (
    <Html center>
      <motion.div
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-28 h-28 rounded-full bg-[#19b9e6] flex items-center justify-center text-white text font-bold  pointer-events-none tracking-wider"
      >
       click
      </motion.div>
    </Html>
  )}
    </motion.mesh>
  );
}

