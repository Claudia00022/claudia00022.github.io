import React, { useState } from 'react';

import './PopUp.style.css'


function PopUp(){
    const[close, setClose] = useState(false);
    const [block, setBlock] = useState('block')

    function handleBlock(){
        setBlock('none')
    }
    
    function handlePopUp(){
      setClose(false);
      console.log('hi')
    }

  return(
    <div className='popUp_container' style={{display : 'none'}}>
        <button onClick={handleBlock}>close</button>
    </div>
  )
}

export default PopUp;