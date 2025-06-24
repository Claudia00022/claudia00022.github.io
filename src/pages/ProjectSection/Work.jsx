import { useState } from "react";
import Projects from "./Projects";

export default function Work(){
    const [activeProject, setActiveProject] = useState(null);
    return(
        <main>
        <div>
            <Projects setActiveMenu = {setActiveProject} activeProject={activeProject} />
        </div>
    </main>
    )
 
}