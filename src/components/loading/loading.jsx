import './loading.style.css'

function Loading(props){
  return(
    <div
    style={{display: props.show}} 
    className='enter'>Loading...</div>
  )
};

export default Loading;