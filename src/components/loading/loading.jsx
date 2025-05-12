import './loading.style.css'
import ProgressBar from '../progressBar/progressBar';


function Loading(props){
  return(
    <>
    <div
    style={{display: props.show}} 
    className='enter'>
    <p className='text-name'><span className='main-font-name font-medium'>Klaudia Forysiak </span>Portfolio</p> 
    <ProgressBar />
    </div>
   

    </>
  )
};

export default Loading;