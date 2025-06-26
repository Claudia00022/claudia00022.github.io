import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { projects_data } from "../../../projects_data";

export default function Scene({activeProject, hoverColor}) {
  return (
    <div className=" fixed top-0 h-screen w-screen -z-10 xs:hidden lg:block" >
      <Canvas>
        <Model activeProject = {activeProject}
        hoverColor= {hoverColor}
          
        />
      </Canvas>
    </div>
  );
}
