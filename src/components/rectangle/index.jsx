import React from "react";
import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import circleImg from '../../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';
extend({OrbitControls})


// function CameraControls(){
//     const {
//       camera,
//       gl: {domElement}
//     } = useThree();
  
//     const controlsRef = useRef();
//     useFrame(() => controlsRef.current.update())
  
//     return (
//       <orbitControls
//         ref={controlsRef}
//         args={[camera, domElement]}
//         autoRotate
//         autoRotateSpeed={0.2}
//       />
//     );
//   }
  
//   function Points() {
//     const imgTex = useLoader(THREE.TextureLoader, circleImg);
//     const bufferRef = useRef();
  
//     let t = 0;
//     let f = 0.001;
//     let a = 6;
//     const graph = useCallback((x, z) => {
//       return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
//     }, [t, f, a])
  
//     const count = 10
//     const sep = 3
//     let positions = useMemo(() => {
//       let positions = []
  
//       for (let xi = 0; xi < count; xi++) {
//         for (let zi = 0; zi < count; zi++) {
//           let x = sep * (xi - count / 2);
//           let z = sep * (zi - count / 2);
//           let y = graph(x, z);
//           positions.push(x, y, z);
//         }
//       }
  
//       return new Float32Array(positions);
//     }, [count, sep, graph])
  
//     useFrame(() => {
//       t += 15

      
    
      
//       const positions = bufferRef.current.array;
  
//       let i = 0;
//       for (let xi = 0; xi < count; xi++) {
//         for (let zi = 0; zi < count; zi++) {
//           let x = sep * (xi - count / 2);
//           let z = sep * (zi - count / 2);
  
//           positions[i + 1] = graph(x, z);
//           i += 3;
//         }
//       }
  
//       bufferRef.current.needsUpdate = true;
//     })
  
//     return (
//       <points>
//         <bufferGeometry attach="geometry">
//           <bufferAttribute
//             ref={bufferRef}
//             attach= 'attributes-position'
//             array={positions}
//             count={positions.length / 3}
//             itemSize={3}
//           />
//         </bufferGeometry>
  
//         <pointsMaterial
//           attach="material"
//           map={imgTex}
//           color = 'black'
//           size={50}
//           sizeAttenuation
//           transparent={false}
//           alphaTest={0.1}
//           opacity={1.0}
//         />
//       </points>
//     );
//   }

 

  
//   function AnimationCanvas() { const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth,  window.innerHeight)
// // document.querySelector('#canvas-container').appendChild(renderer.domElement)
//  const geometry = new THREE.TorusGeometry(10,3,16,100)
//  const material = new THREE.MeshStandardMaterial({wireframe: true})
// const torus = new THREE.Mesh(geometry, material)


// scene.add(torus)

// function animate() {
//   requestAnimationFrame(animate)
//   renderer.render(scene, camera)
// }
// animate()

//     return (
//       <Canvas>
//       <pointLight position={[10, 10, 10]} />
//       <mesh>
//          <torusGeometry  />
//          <meshStandardMaterial  color = "hotpink" wireframe = {true}/>
      
    
//         </mesh>
//       </Canvas>
//     );
//   }

// const Rectangle = ()=>{
//     return(
//         <div className="rec">
//         <div className="anim">
       
//       <Suspense fallback={<div>Loading...</div>}>
//         <AnimationCanvas />
//       </Suspense>
//       </div>
//     </div>
   

//     )
// };

// export default Rectangle;



// import * as THREE from "three";
// import React, { useRef, Suspense } from "react";
// import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
// // import { extend } from '@react-three/fiber';
// // import { PlaneBufferGeometry } from 'three';
// import { shaderMaterial } from "@react-three/drei";
// import glsl from "babel-plugin-glsl/macro";
// import "./style.css";
// import noiseImg from '../../assets/noise.jpg'
// import { render } from "@testing-library/react";

// // extend({ PlaneBufferGeometry });

// const WaveShaderMaterial = shaderMaterial(
//   // Uniform
//   {
//     uTime: 0,
//     uColor: new THREE.Color(0.0, 0.0, 0.0),
//     uTexture: new THREE.Texture(),
//   },
//   // Vertex Shader
//   glsl`
//     precision mediump float;

//     varying vec2 vUv;
//     varying float vWave;

//     uniform float uTime;

//     #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);


//     void main() {
//       vUv = uv;

//       vec3 pos = position;
//       float noiseFreq = 3.0;
//       float noiseAmp = 0.4;
//       vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
//       pos.z += snoise3(noisePos) * noiseAmp;
//       vWave = pos.z;

//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
//     }
//   `,
//   // Fragment Shader
//   glsl`
//     precision mediump float;

//     uniform vec3 uColor;
//     uniform float uTime;
//     uniform sampler2D uTexture;

//     varying vec2 vUv;
//     varying float vWave;

//     void main() {
//       float wave = vWave * 0.2;
//       vec3 texture = texture2D(uTexture, vUv + wave).rgb;
//       gl_FragColor = vec4(texture, 1.0); 
//     }
//   `
// );

// extend({ WaveShaderMaterial });

// const Wave = () => {
//   const ref = useRef();
//   useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

//   const [image] = useLoader(THREE.TextureLoader, [noiseImg] );

//   return (
//     <mesh>
//       <planeGeometry args={[0.6, 0.5, 16, 16]} />
//       <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
//     </mesh>
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas camera={{ fov: 5, position: [0, 0, 5] }}>
//       <Suspense fallback={null}>
//         <Wave />
//       </Suspense>
//     </Canvas>
//   );
// };

// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGL3DRenderTarget({
// //   canvas : document.querySelector('#bg'),
// // })

// // renderer.setPixelRatio(window.devicePixelRatio);
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // camera.position.setZ(30);
// // render.renderer(scene, camera);

// const Rectangle = () => {
//   return (
//     <>
//     <div className="rec">
//     <div className="anim">
//       <Scene />
//       </div>
//       </div>
//     </>
//   );
// };

// export default Rectangle;




function Box() {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.001;
    boxRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={boxRef}>
      <sphereGeometry args={[2.5, 32, 16]} />
      <meshStandardMaterial color="orange" wireframe = {true} />
    </mesh>
  );
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  );
}

function Rectangle() {
  return (
    <div className="rec">
    <div className="anim">
      <ThreeScene />
      </div>
    </div>
  );
}

export default Rectangle;