import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

 export default function CamearaAnimation() {
    const { camera } = useThree();

    useLayoutEffect(() => {
      gsap.to(camera.position, {
        x: 10,
        duration: 50,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, [camera]);
    return null;
  }