import {React, useRef} from "react";
import * as THREE from 'three';

import { Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import { LayerMaterial, Depth, Fresnel } from "lamina";
import './style.css'
import CustomLayer from "./CustomLayer";
import { OrbitControls } from "@react-three/drei";
extend({ CustomLayer });



// const Planet = () => {
//   const materialRef = useRef();

//   useFrame((state) => {
//     const { clock } = state;
//     materialRef.current.time = clock.getElapsedTime();
//   });

//   return (
//     <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={2.0}>
//     <icosahedronGeometry wireframe = {true} args={[2,36]}  />
//     {/* <LayerMaterial>
//       <customLayer ref={materialRef} time={0.5} lacunarity={4.5} />
//       <Depth colorA="green" colorB="yellow" alpha={0.1} mode="add" />
//       <Fresnel color="#FEB3D9" mode="add" />
//     </LayerMaterial>  */}
//   </mesh>
//   );
// };

// const Rectangle = () => {
//   return (
//     <div className="rec">
//     <div className="anim">
   
//    <Canvas camera={{ position: [0.0, 0.0, 6.0] }}>
//       {/* <ambientLight intensity={0.03} /> */}
//       <directionalLight position={[0.3, 0.15, 0.0]} intensity={2} />
//       <Planet />
//     </Canvas>
//     </div>
 
//     </div>
//   );
// };

// export default Rectangle;

function Foo() {
 const materialRef = useRef();

 useFrame(({ clock }) => {
  materialRef.current.rotation.x = clock.getElapsedTime();
  materialRef.current.rotation.y = clock.getElapsedTime()
})

  return(
      <mesh ref={materialRef} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={2.0}>
    <sphereGeometry args={[1, 32, 16]} />
//     <LayerMaterial wireframe = {true}  >
//       <customLayer  time={0.5} lacunarity={4.5}  />
{/* //       <Depth colorA="black" colorB="white" alpha={0.1} mode="add" /> */}
{/* //       <Fresnel color="#FEB3D9" mode="add" /> */}
//     </LayerMaterial> 
//   </mesh>

  )
}


const Rectangle = () => {
  return (
    <>
  
   <div className="rec">
   <div className="anim">
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
<Foo />
</Canvas>

</div>
</div>

</>
  );
};

export default Rectangle;


