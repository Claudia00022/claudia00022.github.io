import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Stats,OrbitControls } from '@react-three/drei'
import './test.style.css';


 function Box(){
    const boxRef = useRef(Mesh)

    useFrame(()=>{
        // boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.003;
    });

    // useFrame((state) => {
    //     const { clock } = state;
    //     boxRef.current.time = clock.getElapsedTime();
    //   });

    return(
     <mesh ref={boxRef}>
      <sphereGeometry args={[3.0, 64, 32]} />
      <meshStandardMaterial color= "black" wireframe={true} />
     </mesh>
    )
 }

function Test(){
    return(
        <div className='container_sphere'>
        <Canvas>
        <ambientLight />
        <pointLight position={[2,2,2]} />
        <Box></Box>
        <OrbitControls 
              minAzimuthAngle={-Math.PI / 4}
  maxAzimuthAngle={Math.PI / 4}
  minPolarAngle={Math.PI / 6}
  maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      </div>
    )
};

export default Test;