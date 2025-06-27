import imgData from "../../smileImgData";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";



export default function Model() {


  



  const modelRefs = useRef([]);
  const modelOne = useLoader(GLTFLoader, imgData[0].img);
  const modelTwo = useLoader(GLTFLoader, imgData[1].img);
  const modelThree = useLoader(GLTFLoader, imgData[2].img);
  const modelFour = useLoader(GLTFLoader, imgData[3].img);
  const modelFive = useLoader(GLTFLoader, imgData[4].img);
  const modelSix = useLoader(GLTFLoader, imgData[5].img);
  const modelSeven = useLoader(GLTFLoader, imgData[6].img);

  const models = [
    modelOne,
    modelTwo,
    modelThree,
    modelFour,
    modelFive,
    modelSix,
    modelSeven,
  ];

  const initialRotations = useRef(
    models.map(() => ({
      x: (-Math.random() * Math.PI) / 2, // Random initial rotation for x axis
      y: -Math.random() * Math.PI * 2, // Random initial rotation for y axis
      z: -Math.random() * Math.PI * 2, // Random initial rotation for y axis
    }))
  );

  useFrame(() => {
    // Iterate over each model's ref and apply random rotation
    modelRefs.current.forEach((modelRef, index) => {
      if (modelRef) {
        // Add small random rotation values to x, y, and z axes
        modelRef.rotation.x +=
          initialRotations.current[index].x * Math.random() * 0.0009;
        modelRef.rotation.y +=
          initialRotations.current[index].y * Math.random() * 0.0009;
        modelRef.rotation.z +=
          initialRotations.current[index].z * Math.random() * 0.001;
      }
    });
  });



  return models.map((model, index) => (
    <primitive
      ref={(el) => (modelRefs.current[index] = el)} // Assign each model's ref to the array
      object={model.scene}
      key={index}
      position={[index * 6.8, 0, 0]}
    ></primitive>
  ));
}
