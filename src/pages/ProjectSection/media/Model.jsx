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

