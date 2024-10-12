import './name.style.css';


function Name(props){
    return(
        <>
<div className=" absolute z-20 left-20 top-24 w-name  ">
<h1 className="main-font-name text-white  mb-3 ">
{props.name}
</h1>
</div>
</>
    )
};


export default Name;

