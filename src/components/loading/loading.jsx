import './loading.style.css'
import ProgressBar from '../progressBar/progressBar';


function Loading(props){
  return(
    <>
    <div
    style={{display: props.show}} 
    className='enter'>
    <p>Klaudia Forysiak Portfolio</p> 
    <ProgressBar />
    </div>
   

    </>
  )
};

export default Loading;