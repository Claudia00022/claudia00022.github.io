
import { Suspense, useEffect, useRef, useState } from "react";
// react three fiber
import { TextureLoader } from "three";
import { useThree, useLoader } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
//  Components
import illustration from "../../assets/photos/three.jpg";
import { Canvas } from "@react-three/fiber";

const Sprite = (props) => {
  const { position, w, h } = props;
  const texture = useLoader(TextureLoader, illustration);

  return (
    <group position={position}>
      <sprite scale={[w, h, 1]}>
        <spriteMaterial map={texture} />
      </sprite>
    </group>
  );
};

 function Scene({ w = 400.0, h = 400.0, gap = 10.0 }) {
  const { width } = useThree((state) => state.viewport);
  const illustrations = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
    //   damping={1}
      pages={(width / 3 - xW + illustrations.length * xW) / width}
    >
      <Scroll>
        <Suspense fallback={null}>
          <group>
            {illustrations.map((illu, idx) => (
              <Sprite
                key={idx}
                position={[idx * xW - width / 3, 0, 0]}
                w={w}
                h={h}
              />
            ))}
          </group>
        </Suspense>
      </Scroll>
    </ScrollControls>
  );
}

export default function ArtTest() {
    const [scrollTarget, setScrollTarget] = useState(0);
  
    return (
        <div className='relative'>
      <div className='absolute top-0 right-0 z-30 h-screen w-screen '>

        <Canvas orthographic camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene scrollTarget={scrollTarget} />
        </Canvas>
      </div>
      </div>
    );
  }
