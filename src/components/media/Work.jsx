import { useState } from "react";
import Projects from "./Projects";
import Scene from "./Scene";

export default function Work(){
    const [activeProject, setActiveProject] = useState(null);
    return(
        <main>
        <div>
            <Projects setActiveMenu = {setActiveProject} activeProject={activeProject} />
            {/* <Scene activeProject={activeProject} /> */}
        </div>
    </main>
    )
 
}