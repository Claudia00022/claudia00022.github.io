import { useFrame } from "@react-three/fiber";
import { useTransform, useMotionValue} from "framer-motion";
import useMouse from "./useMouse";
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";

export default function Model() {
    const mouse = useMouse();
    const{viewport} = useThree();
    const smootheMouse = {
        x:useMotionValue(0),
        y:useMotionValue(0)
    };

    const lerp = (x, y, a) => x*(1-a) + y*a;
    useFrame(()=>{
       const {x, y} = mouse;
       smootheMouse.x.set(lerp(smootheMouse.x.get(), x.get(), 0.1));
       smootheMouse.y.set(lerp(smootheMouse.y.get(), y.get(), 0.1));
    });


    const  x = useTransform(smootheMouse.x, [0, window.innerWidth], [-1*viewport.width / 2, viewport.width / 2]);
    const y  = useTransform(smootheMouse.y, [0, window.innerHeight], [viewport.height / 2, -1 * viewport.height / 2])
  return (
    <motion.mesh position-x = {x} position-y = {y}>
      <planeGeometry args={[2, 3, 15, 15]} />
      <meshBasicMaterial color="black" wireframe={true} />
    </motion.mesh>
  );
}
