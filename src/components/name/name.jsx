import Typical from "react-typical";
import './name.style.css';


function Name(props){
    return(
        <>
<div className=" absolute z-20 left-16 top-24 w-name bottom-20 ">
<h1 className="main-font-name text-gray-950  mb-3 ">
{props.name}
</h1>

<div className="text-name font-light w-name">
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
</div>
</div>
</>
    )
};


export default Name;

