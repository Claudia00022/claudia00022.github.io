import Typical from "react-typical";
import './name.style.css';


function Name(){
    return(
        <>
<div className="absolute z-20 ms-32 mt-24 w-name  ">
<h1 className="main-font text-5xl text-gray-950 font-light mb-3 ">
Klaudia Forysiak
</h1>
<p className="main-font font-light w-name">
<Typical
  steps={[
    "I am a  Freelancer Designer & Fronten Developer",
    4000,
    "",
    1000,
    "You can learn more about me in the about section",
    4000,
    "",
    1000,
  ]}
  loop={Infinity}
  wrapper="p"
/>
</p>
</div>
</>
    )
};


export default Name;

